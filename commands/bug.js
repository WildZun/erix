const Discord = require("discord.js");
const db = require("quick.db");

const wildzun = "383668570170720256"

module.exports.run = async (client, message, args, tools) => {
    //DEFINITIONS
    const reason = args.slice(0).join(' ');

    //VERIF
    if(!args[0]) return message.lineReplyNoMention(":x: Vous devez donner le bug !")

    //EMBEDS
    const effectued = new Discord.MessageEmbed()
        .setAuthor("✅ Signalement réussi !")
        .addField("Merci pour votre report !", `Votre bug: ${reason}`)
        .setColor("#088A08")
        .setFooter("Erix - Bug")
        .setTimestamp()
    const sendreport = new Discord.MessageEmbed()
        .setAuthor("ℹ️ Bug")
        .addField("Auteur du bug: ", message.author.tag)
        .addField("Le bug:", reason)
        .setColor("#E77F00")
        .setFooter("Erix - Bug")
        .setTimestamp()

    //MESSAGES CONFIRMATION
    client.users.cache.get(wildzun).send(sendreport)
    message.lineReplyNoMention(effectued)
    client.channels.cache.get('834457753388318760').send("<@" + message.author.id + "> a exécuté la commande **Bug** sur le serveur **" + message.guild.name + "** !")

}

module.exports.help = {
    name: "bug"
  }