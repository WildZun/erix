const Discord = require("discord.js");
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
  //DEFINITIONS
  
  let tte = args.join(" ")
  const replys = [
    "Je ne sais pas",
    "Peut-être",
    "Sans doute",
    "Oui",
    "Non",
    "Probablement",
    "Probablement pas",
    "Je ne sais pas"
  ]
  let reponse = (replys[Math.floor(Math.random() * replys.length)])

  //EMBEDS
  var ballembed = new Discord.MessageEmbed()
  .setTitle("🎱 8Ball")
  .addField(`:inbox_tray: Question: `, `${tte} \n`, false)
  .addField(`:outbox_tray: Réponse:`, `${reponse}`, false)
  .setFooter("Erix - 8ball")
  .setTimestamp()
  .setColor("#E77F00")
  
  //VERIFICATIONS
  if(!db.get(`${message.guild.id}_module_fun`)) return
  if (!tte){
    return message.lineReplyNoMention(":x: Vous n'avez pas mis de question !")};  
    
  //CODE
  message.lineReplyNoMention(ballembed)
  client.channels.cache.get('834457753388318760').send("<@" + message.author.id + "> a exécuté la commande **8ball** sur le serveur **" + message.guild.name + "** !")
}

module.exports.help = {
  name: "8ball"
}