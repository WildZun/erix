const Discord = require("discord.js");
const db = require("quick.db");

module.exports.run = async (client, message, args, tools) => {
const newticket = new Discord.MessageEmbed()
    .setAuthor("🎟️ Nouveau ticket")
    .addField(`Salut !`, "Explique ta question/problème et un staff te répondra sous peu. Si tu veux fermer ton ticket, fais la commande `e.close` !")
    .setTimestamp()
    .setColor("#E77F00")
    .setFooter("Erix - Tickets")

    if(!db.get(`${message.guild.id}_module_tickets`)) return
    if(db.get(`${message.guild.id}_${message.author.id}_ticket`, true)) {
        return message.lineReplyNoMention(':x: Tu as déjà un ticket !');
    }

    db.set(`${message.guild.id}_${message.author.id}_ticket`, true)
    message.guild.channels.create(`ticket-${message.author.username}`, {
        permissionOverwrites: [
            {
                id: message.author.id,
                allow: ['SEND_MESSAGES', 'VIEW_CHANNEL'],
            },
            {
                id: message.guild.roles.everyone,
                deny: ['VIEW_CHANNEL'],
            },
        ],
        type: 'text',
    }).then(async channel => {
        message.lineReplyNoMention(`:white_check_mark: Ton ticket est crée ! Check ça dans ${channel} !`);
        channel.send(`${message.author}`)
        channel.send(newticket);
    });
},

module.exports.help = {
    name: "new"
  }