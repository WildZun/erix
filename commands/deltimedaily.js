const Discord = require("discord.js");
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
    const mention = message.mentions.members.first()

    const admin = db.get(`${message.author.id}_admin`)

    if(!admin) return message.lineReplyNoMention(":x: Il vous manque la permission administrateur du BOT ! (`BOT_ADMIN`)")
    if(!args[0]) return message.lineReplyNoMention(":x: Il faut me dire pour quelle personne vous voulez reset le temps !")
    if(!db.get(`${mention.user.id}_daily`)) return message.lineReplyNoMentiond(":x: La personne peut déjà daily !")

    db.delete(`${mention.user.id}_daily`)
    message.lineReplyNoMention(":white_check_mark: Temps supprimé !")
    client.channels.cache.get('834457753388318760').send("<@" + message.author.id + "> a exécuté la commande **DelTimeDaily** sur le serveur **" + message.guild.name + "** !")
}

module.exports.help = {
    name: "deltimedaily"
  }