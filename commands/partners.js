const Discord = require("discord.js");
const db = require("quick.db")

module.exports.run = async (client, message, args, tools) => {
    const partners = new Discord.MessageEmbed()
        .setAuthor("Partenaires")
        .addField("Feelings'You", "Leur serveur Discord: [Clique ICI](https://discord.gg/Mubw8kUqje)", true)
        .addField("Le monde rose", "Leur serveur Discord: [Clique ICI](https://discord.gg/TXxurgcHBK)", true)
        .addField("I pro Bot", "Leur serveur Discord: [Clique ICI](https://discord.gg/VkzURrFy6c)", true)
        .setColor("#E77F00")
        .setFooter("Erix - Partenaires")
        .setTimestamp()
    message.lineReplyNoMention(partners)
    client.channels.cache.get('834457753388318760').send("<@" + message.author.id + "> a exécuté la commande **Partners** sur le serveur **" + message.guild.name + "** !")
}

module.exports.help = {
    name: "partners"
  }