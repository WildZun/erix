const Discord = require("discord.js");

module.exports.run = async (client, message, args, tools, db) => {

//Liste réponses à donner
let tte = args.join(" ")
const reponses = [
    "Oui",
    "Sûrement",
    "Sans doute",
    "Probablement",
    "Je ne sais pas",
    "Probablement pas",
    "Sans doute pas",
    "Non"
]

//Sélection de la réponse finale
let reponsefinal = (reponses[Math.floor(Math.random() * reponses.length)])

//Message final
const embedreponse = new Discord.MessageEmbed()
    .setAuthor("🎱 8ball")
    .addField("Question:", tte)
    .addField("Réponse:", reponsefinal)
    .setColor("#08088")
    .setFooter("Erix V2 - 8ball")
    .setTimestamp()

message.lineReplyNoMention(embedreponse)
}

module.exports.help = {
    name: "8ball"
  }