const Discord = require("discord.js");
const db = require("quick.db")

module.exports.run = async (client, message, args, tools) => {
  //EMBEDS
  const clearem = new Discord.MessageEmbed()
    .setAuthor("✅ Messages supprimés !")
    .addField("Vous avez supprimé:", "``" + args[0] +  "`` messages !")
    .setColor("#088A08")
    .setFooter("Erix - Clear")
    .setTimestamp()
    //Message à supprimer
    message.delete();

    //Si la personne n'a pas la permission
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.lineReplyNoMention(":x: Il vous manque la permission `MANAGE_MESSAGES` !");
    
    //Si aucun argument
    if (!args[0]) return message.lineReplyNoMention(":x: Vous devez donner le nombre de messages à supprimer !");
    
    const deleteNum = parseInt(args[0])
    //Si l'argument n'est pas un nombre
    if (isNaN(deleteNum)) return message.lineReplyNoMention(":x: L'argument n'est pas un nombre !")
    //Message de confirmation

    if(args[0] > 100) return message.lineReplyNoMention(":x: Vous devez donner un nombre en dessous de 100 !")
    message.channel.bulkDelete(deleteNum).then(() => {  
      message.lineReplyNoMention(clearem)
      client.channels.cache.get('834457753388318760').send("<@" + message.author.id + "> a exécuté la commande **Clear** sur le serveur **" + message.guild.name + "** !")

    })

}

module.exports.help = {
    name: "clear"
  }