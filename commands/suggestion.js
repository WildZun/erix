const Discord = require("discord.js");
const db = require("quick.db");

const wildzun = "383668570170720256"

module.exports.run = async (client, message, args, tools) => {
    //DEFINITIONS
    const reason = args.slice(0).join(' ');

    //VERIF
    if(!args[0]) return message.lineReplyNoMention(":x: Vous devez donner la suggestion !")

    //EMBEDS
    const effectued = new Discord.MessageEmbed()
        .setAuthor("✅ Signalement réussi !")
        .addField("Merci pour votre suggestion !", `Votre suggestion: ${reason}`)
        .setColor("#088A08")
        .setFooter("Erix - Signalement")
        .setTimestamp()
    const sendreport = new Discord.MessageEmbed()
        .setAuthor("ℹ️ Suggestion")
        .addField("Auteur du report: ", message.author.tag)
        .addField("La suggestion:", reason)
        .setColor("#E77F00")
        .setFooter("Erix - Signalement")
        .setTimestamp()

    //MESSAGES CONFIRMATION
    client.users.cache.get(wildzun).send(sendreport)
    message.lineReplyNoMention(effectued)
    client.channels.cache.get('834457753388318760').send("<@" + message.author.id + "> a exécuté la commande **Suggestion** sur le serveur **" + message.guild.name + "** !")
}

module.exports.help = {
    name: "suggest"
  }