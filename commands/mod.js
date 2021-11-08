const Discord = require("discord.js");
const db = require("quick.db")

module.exports.run = async (client, message, args, tools) => {
    //DEFINITIONS
    const mention = message.mentions.members.first();
    const mod = db.get(`${message.author.id}_mod`)
    const admin = db.get(`${message.author.id}_admin`)

    //EMBEDS
    const memberadd = new Discord.MessageEmbed()
    .setAuthor("✅ Membre ajouté !")
    .addField("Vous avez ajouté:", args[1])
    .setColor("#088A08")
    .setFooter("Erix - Modération")
    .setTimestamp()
    const memberrm = new Discord.MessageEmbed()
    .setAuthor("✅ Membre supprimé !")
    .addField("Vous avez retiré:", args[1])
    .setColor("#088A08")
    .setFooter("Erix - Modération")
    .setTimestamp()


    if(!args[0]){
        if(!mod) return message.lineReplyNoMention(":x: Tu n'est pas modérateur !")
        message.lineReplyNoMention(":white_check_mark: Tu es modérateur !")
    }
    if(args[0] === "add"){

        if(!admin) return message.lineReplyNoMention(":x: Il vous manque la permission Administrateur du BOT ! (`ADMIN_BOT`)")

        if(!args[1]) return message.lineReplyNoMention(":x: Vous devez mentionner la personne à promouvoir modérateur !")

        if(db.get(`${mention.user.id}_mod`)) return message.lineReplyNoMention(":x: Utilisateur déjà dans la liste des modérateurs !")

        db.set(`${mention.user.id}_mod`, true)
        message.lineReplyNoMention(memberadd)
        client.channels.cache.get('834457753388318760').send("<@" + message.author.id + "> a exécuté la commande **Mod Add** sur le serveur **" + message.guild.name + "** !")
    }

    if(args[0] === "remove"){
        if(!admin) return message.lineReplyNoMention(":x: Il vous manque la permission Administrateur du BOT ! (`ADMIN_BOT`)")

        if(!args[1]) return message.lineReplyNoMention(":x: Vous devez mentionner la personne à supprimer de la liste des modérateurs ! !")

        if(!db.get(`${mention.user.id}_mod`)) return message.lineReplyNoMention(":x: Utilisateur inconnu de la liste des modérateurs !")

        db.delete(`${mention.user.id}_mod`, true)
        message.lineReplyNoMention(memberrm)
        client.channels.cache.get('834457753388318760').send("<@" + message.author.id + "> a exécuté la commande **Mod Remove** sur le serveur **" + message.guild.name + "** !") 
    }
}

module.exports.help = {
    name: "mod"
  }