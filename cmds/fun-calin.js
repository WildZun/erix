const Discord = require("discord.js");
const got = require('got');

module.exports.run = async (client, message, args, tools, db) => {
    //Images à donner
    const images = [
        "https://media3.giphy.com/media/iBezUAUnAuiu4/giphy.gif?cid=ecf05e47cdizetkyb794ycgttmy67fa2xytdhczvgfexmgqv&rid=giphy.gif&ct=g",
        "https://media4.giphy.com/media/lrKCPuwsNdu0Miisf9/giphy.gif?cid=ecf05e47cdizetkyb794ycgttmy67fa2xytdhczvgfexmgqv&rid=giphy.gif&ct=g",
        "https://media2.giphy.com/media/gkLAKbxHhTwKpQFpTO/giphy.gif?cid=790b7611de79448b148e3bbbc93a83fef35839fa136c77b6&rid=giphy.gif&ct=g",
        "https://media1.giphy.com/media/PgiNMw6Ez5U7n0lNp0/giphy.gif?cid=790b7611874fa13bec08f315e88ec23ff0325bfa0cbc1e70&rid=giphy.gif&ct=g",
        "https://media1.giphy.com/media/si91fjIGGSO2lySPSb/giphy.gif?cid=ecf05e47y43dzz5yhqox92ca4p6cpa4xl3jtmzojtws4zj7b&rid=giphy.gif&ct=g",
        "https://media1.giphy.com/media/3Uolh5lwq6c0nzzEwc/giphy.gif?cid=790b7611c2e7d48f9d3a2ad183ec720eac0390262db7d556&rid=giphy.gif&ct=g"
    ]

    //Séléctionne l'image finale
    let reponsefinal = (images[Math.floor(Math.random() * images.length)])


    const mention = message.mentions.members.first();
    //Conditions
    if(!args[0]) return message.lineReplyNoMention(":x: Il faut mentionner quelqu'un !")
    if(isNaN(mention)) return message.lineReplyNoMention(":x: L'argument n'est pas une mention !")

    //Message final
    const embed = new Discord.MessageEmbed()
        .setAuthor("❤️ Calin")
        .addField(message.author.username + " fait un câlin à " + mention.user.username + " !", "C'est mignion 🥰")
        .setImage(reponsefinal)
        .setColor("#08088")
        .setFooter("Erix V2 - Calin")

    message.lineReplyNoMention(embed)
}

module.exports.help = {
    name: "calin"
  }