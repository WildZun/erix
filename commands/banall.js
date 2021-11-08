const Discord = require("discord.js");
const db = require("quick.db")

module.exports.run = async (client, message, args, tools) => {
    const mod = db.get(`${message.author.id}_mod`)
    const admin = db.get(`${message.author.id}_admin`)
    const mention = message.mentions.members.first();

    //EMBEDS
    //Embed add
    const banadd = new Discord.MessageEmbed()
        .setAuthor("✅ Ban effectué !")
        .addField("Tu as banni:", `<@${mention}>`)
        .addField("Il ne pourra plus exécuter mes commandes !", "Il a été ajouté et maintenant il ne peut plus m'utiliser !")
        .setColor("#088A08")
        .setFooter("Erix - BanAll")
        .setTimestamp()
    //Embed remove
    const banremove = new Discord.MessageEmbed()
        .setAuthor("✅ Deban effectué !")
        .addField("Tu as debanni:", `<@${mention}>`)
        .addField("Il ne pourra exécuter mes commandes !", "Il a été supprimé et maintenant il ne peut m'utiliser !")
        .setColor("#088A08")
        .setFooter("Erix - BanAll")
        .setTimestamp()


    if(admin || mod){
        if(!args[0]) return message.lineReplyNoMention(":x: Vous devez préciser si vous voulez ban ou unban !")
        if(args[0] === "add"){ 
        if(!args[1]) return message.lineReplyNoMention(":x: Vous devez me donner la personne à bannir !")
        if(isNaN(mention)) return message.lineReplyNoMention(":x: Utilisateur introuvable !")
        db.set(`${mention.user.id}_banbot`, true)
        message.lineReplyNoMention(banadd)
        client.channels.cache.get('834457753388318760').send("<@" + message.author.id + "> a exécuté la commande **BanAll add** sur le serveur **" + message.guild.name + "** !")
        }
        if(args[0] === "remove"){
            if(!args[1]) return message.lineReplyNoMention(":x: Vous devez me donner la personne à bannir !")
            if(isNaN(mention)) return message.lineReplyNoMention(":x: Utilisateur introuvable !")
            db.delete(`${mention.user.id}_banbot`)
            message.lineReplyNoMention(banremove)
            client.channels.cache.get('834457753388318760').send("<@" + message.author.id + "> a exécuté la commande **BanAll remove** sur le serveur **" + message.guild.name + "** !")
        }
    }
    else message.channel.send(":x: Il vous manque la permission Modérateur du BOT ! (`BOT_MOD`)")
}

module.exports.help = {
    name: "banall"
  }