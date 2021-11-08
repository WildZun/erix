const Discord = require("discord.js");
const db = require("quick.db")

module.exports.run = async (bot, message, args, tools) => {
    const serverinfo = new Discord.MessageEmbed()
    .setTitle("ℹ️ Infos du serveur")
    .setThumbnail(message.guild.iconURL())
    .addField("Propriétaire du serveur:", `${message.guild.owner}`, true)
    .addField("Nombre de membres:", ` ${message.guild.memberCount}`, true)
    .addField("Nombre d'émojis:", `${message.guild.emojis.cache.size}`, true)
    .addField("Nombre de rôles:", `${message.guild.roles.cache.size}`, true)
    .addField('Localisation:', message.guild.region, true)
    .setColor("#E77F00")
    .setFooter("Erix - ServerInfo")
    .setTimestamp()

message.lineReplyNoMention(serverinfo)
client.channels.cache.get('834457753388318760').send("<@" + message.author.id + "> a exécuté la commande **ServerInfo** sur le serveur **" + message.guild.name + "** !")
    }

module.exports.help = {
    name: "serverinfo"
  }