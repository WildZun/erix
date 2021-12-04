const Discord = require("discord.js");
const db = require("quick.db");

module.exports.run = async (client, message, args, tools) => {
    
     //Définitions
    const mention = message.mentions.members.first();
    const gifs = [
    "https://media.giphy.com/media/dBxgOdvxDzvlXN9EgK/giphy.gif",
    "https://media.giphy.com/media/MBgTXzedlklmS4Clkd/giphy.gif",
    "https://media1.tenor.com/images/452bf03f209ca23c668826ffa07ea6a7/tenor.gif",
    "https://media.tenor.com/images/73d07d3abc9160422faa2ad8c000ec19/tenor.gif"
    ]
    let gifresult = (gifs[Math.floor(Math.random() * gifs.length)])
    
    //Vérifications
    if(!db.get(`${message.guild.id}_module_fun`)) return
    if(!args[0]) return message.lineReplyNoMention(":x: Vous n'avez pas mentionné la personne !")
    
    //Embeds
    const reponse = new Discord.MessageEmbed()
        .setAuthor(message.author.username + " fait un câlin à " + mention.user.username + " !")
        .setImage(gifresult)
        .setColor("#E77F00")
        .setFooter("Erix - Calin")
        .setTimestamp()
        message.lineReplyNoMention(reponse)
     client.channels.cache.get('834457753388318760').send("<@" + message.author.id + "> a exécuté la commande **Calin** sur le serveur **" + message.guild.name + "** !")

    }
    
module.exports.help = {
    name: "calin"
  }