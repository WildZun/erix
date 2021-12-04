const Discord = require("discord.js");
const db = require("quick.db");

module.exports.run = async (client, message, args, tools) => {
    var ms = client.ws.ping
    const ping = new Discord.MessageEmbed()
        .setAuthor("🏓 Ping")
        .addField("Mon ping est actuellement de", "``" + ms + "`` ms !")
        .setColor("#E77F00")
        .setFooter("Erix - Ping")
        .setTimestamp()
    message.lineReplyNoMention(ping)
    client.channels.cache.get('834457753388318760').send("<@" + message.author.id + "> a exécuté la commande **Ping** sur le serveur **" + message.guild.name + "** !")
}

module.exports.help = {
    name: "ping"
  }