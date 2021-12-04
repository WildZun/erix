const Discord = require("discord.js");
const db = require("quick.db")

module.exports.run = async (client, message, args, tools) => {
    const nomention = new Discord.MessageEmbed()
        .setAuthor("Avatar de " + message.author.username)
        .setImage(message.author.avatarURL())
        .setFooter("Erix V2 - Avatar")
        .setColor("#08088")
        .setTimestamp()
    const mention = message.mentions.members.first();
    if(!args[0]) return message.channel.send(nomention)
}

module.exports.help = {
    name: "avatar"
  }