const Discord = require("discord.js");
const db = require("quick.db")

module.exports.run = async (client, message, args, tools) => {
    //Définitions
    const premiumuser = db.get(`${message.author.id}_premium`)
    const deleteNum = parseInt(args[0])

    //Conditions & erreurs
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.lineReplyNoMention(":x: Tu n'as pas la/les permissions requises ! (`MANAGE_MESSAGES`)")
    
    if(!args[0]) return message.lineReplyNoMention(":x: Il faut me donner le nombre de messages à supprimer !")
    if(isNaN(deleteNum)) return message.lineReplyNoMention(":x: Il faut me donner un nombre entre 0 et 50 ! (Jusque 100 pour les utilisateurs premium)")
    
    //Si membre non premium
    if(premiumuser){
        if(deleteNum > 100) return message.lineReplyNoMention(":x: Tu ne peux pas supprimer plus de 50 messages ! C'est réservé aux utilisateurs premium !")
            message.channel.bulkDelete(deleteNum)
            message.channel.send(deleteNum + " messages supprimés !")
    }

    //Si membre premium
    if(deleteNum > 50) return message.lineReplyNoMention(":x: Tu ne peux pas supprimer plus de 50 messages !")
        message.channel.bulkDelete(deleteNum)
        message.channel.send(deleteNum + " messages supprimés !")
}


module.exports.help = {
    name: "clear"
  }