const Discord = require("discord.js");
var db = require("quick.db");

module.exports.run = async (client, message, args, tools, db) => {
    const modlist = db.get(`${message.author.id}_mod`)
    const modadd = new Discord.MessageEmbed()
        .setAuthor("✅ Utilisateur ajouté")
        .addField("Vous avez ajouté", mention.user.tag)
        .setFooter("Erix V2 - Modération")
        .setColor("#019F1B")
        .setTimestamp()
    const modyes = new Discord.MessageEmbed()
        .setAuthor("ℹ️ Status Modérateur")
        .addField("Status:", "✅ Tu es modérateur !")
        .setFooter("Erix V2 - Modération")
        .setColor("#019F1B")
        .setTimestamp()
    const modno = new Discord.MessageEmbed()
        .setAuthor("ℹ️ Status Modérateur")
        .addField("Status:", "❌ Tu n'es modérateur !")
        .setFooter("Erix V2 - Modération")
        .setColor("#B20101")
        .setTimestamp()
    
    if(!args[0]){
        if(!modlist) return message.channel.send(modno)
        message.channel.send(modyes)
    }
}

module.exports.help = {
    name: "mod"
  }