const Discord = require("discord.js");
const db = require("quick.db");

module.exports.run = async (client, message, args, tools) => {
    if(!db.get(`${message.guild.id}_module_tickets`)) return

    if(!message.channel.name.includes('ticket-')) return message.lineReplyNoMention(":x: Cette commande est exécutable uniquement dans un ticket !")
    
    const member = message.guild.members.cache.get(message.channel.name.split('ticket-').join(''));
    if(message.member.hasPermission('ADMINISTRATOR') || message.channel.name === `ticket-${message.author.id}`) {
        message.lineReplyNoMention(":warning: Tu es sûr de vouloir fermer ton ticket ? Cette action sera irréversible ! Fais `e.confirm` pour confirmer !")
    
    message.channel.awaitMessages(m => m.author.id == message.author.id,
        {max: 1, time: 30000}).then(collected => {
                if (collected.first().content.toLowerCase() == 'e.confirm') {
                        message.reply(':white_check_mark: Ton ticket est fermé !');
                        db.set(`${message.guild.id}_${message.author.id}_ticket`, false)
                        message.channel.delete();
                }})}
}

module.exports.help = {
    name: "close"
  }