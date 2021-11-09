const Discord = require("discord.js");


module.exports.run = async (client, message, args, tools) => {
    //Définir le ping
    var ms = client.ws.ping

    //Embed
    const embed = new Discord.MessageEmbed()
        .setAuthor("🏓 Pong !")
        .addField("Mon ping est de", "``" + ms + "`` ms !")
        .setFooter("Erix V2 - Ping")
        .setColor("#08088")

    //Envoyer le message
    message.lineReplyNoMention(embed)
}

module.exports.help = {
    name: "ping"
  }