const Discord = require("discord.js");
const db = require("quick.db")

module.exports.run = async (client, message, args, tools) => {
    const invite = new Discord.MessageEmbed()
        .setAuthor("Invite-moi !")
        .addField("Invite-moi", "En [Cliquant ICI](https://discord.com/oauth2/authorize?client_id=834074473690562570&scope=bot&permissions=8)")
        .setColor("#E77F00")
        .setFooter("Erix - Invite")
        .setTimestamp()
        message.lineReplyNoMention(invite)
    client.channels.cache.get('834457753388318760').send("<@" + message.author.id + "> a exécuté la commande **Invite** sur le serveur **" + message.guild.name + "** !")
}

module.exports.help = {
    name: "invite"
  }