const Discord = require("discord.js");
const db = require("quick.db");

const wildzun = "383668570170720256"

module.exports.run = async (client, message, args, tools) => {
    //DEFINITIONS
    const mention = message.mentions.members.first();
    const reason = args.slice(1).join(' ');

    //VERIF
    if(!args[0]) return message.lineReplyNoMention(":x: Vous devez mentionner la personne à signaler !")
    if(!reason) return message.lineReplyNoMention(":x: Vous devez donner la raison !")

    //EMBEDS
    const effectued = new Discord.MessageEmbed()
        .setAuthor("✅ Signalement réussi !")
        .addField("Vous avez signalé: " +  mention.user.tag, "Pour la raison: " + reason)
        .setColor("#088A08")
        .setFooter("Erix - Report")
        .setTimestamp()
    const sendreport = new Discord.MessageEmbed()
        .setAuthor("ℹ️ Report")
        .addField("Auteur du report: ", message.author.tag)
        .addField("Personne reporté: " + mention.user.tag, "Pour la raison: " + reason)
        .setColor("#E77F00")
        .setFooter("Erix - Report")
        .setTimestamp()


    //MESSAGES CONFIRMATION
    client.users.cache.get(wildzun).send(sendreport)
    message.lineReplyNoMention(effectued)
    client.channels.cache.get('834457753388318760').send("<@" + message.author.id + "> a exécuté la commande **Report** sur le serveur **" + message.guild.name + "** !")
}

module.exports.help = {
    name: "report"
  }