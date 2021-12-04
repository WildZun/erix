const Discord = require("discord.js");
const db = require("quick.db");

const wildzun = "383668570170720256"

module.exports.run = async (client, message, args, tools) => {
    const supportembed = new Discord.MessageEmbed()
    .setAuthor("ℹ️ Support")
    .addField("Contacter le support sur le serveur Discord d'Erix !", "Cliquez [ICI](https://discord.gg/Ps2J6a4e3d)")
    .setColor("#E77F00")
    .setFooter("Erix - Support")
    .setTimestamp()
    
    message.lineReplyNoMention(supportembed)
    client.channels.cache.get('834457753388318760').send("<@" + message.author.id + "> a exécuté la commande **Support** sur le serveur **" + message.guild.name + "** !")
}

module.exports.help = {
    name: "support"
  }