const Discord = require("discord.js");
const db = require("quick.db");

module.exports.run = async (client, message, args, tools) => {
    
     //Définitions
     const mention = message.mentions.members.first();
    const gifs = [
        "https://media.tenor.com/images/36179549fa295d988fc1020a7902c41c/tenor.gif",
        "https://media1.tenor.com/images/74f415e0baaea783a655d5f46f7a3ece/tenor.gif?itemid=12160982",
        "https://media.giphy.com/media/43bOrDOasXG6Y/giphy.gif",
        "https://media.giphy.com/media/3oz8xAfLanUntsuALu/giphy.gif",
        "https://media.giphy.com/media/JqEB4KkitGwhPRtC7G/giphy.gif"
    ]
    let gifresult = (gifs[Math.floor(Math.random() * gifs.length)])
    
    //Vérifications
    if(!db.get(`${message.guild.id}_module_fun`)) return
    if(!args[0]) return message.channel.send(":x: Vous n'avez pas mentionné la personne !")
    
    //Embeds
    const reponse = new Discord.MessageEmbed()
        .setAuthor(message.author.username + " tape " + mention.user.username + " !")
        .setImage(gifresult)
        .setColor("#E77F00")
        .setFooter("Erix - Taper")
        .setTimestamp()
    message.lineReplyNoMention(reponse)
    client.channels.cache.get('834457753388318760').send("<@" + message.author.id + "> a exécuté la commande **Taper** sur le serveur **" + message.guild.name + "** !")
    }
    
module.exports.help = {
    name: "taper"
  }