const Discord = require("discord.js");
const db = require("quick.db")


const wildzun = [
    "383668570170720256"
]

module.exports.run = async (client, message, args, tools) => {
    const banbot = db.get(`${message.author.id}_banbot`)
    const admins = db.get(`${message.author.id}_admin`)
    const mod = db.get(`${message.author.id}_mod`)
    const money = db.get(`${message.author.id}_money`)
    const mention = message.mentions.members.first();

    //EMBEDS
    //Embed nomoney
    const nomoney = new Discord.MessageEmbed()
        .setAuthor("💰 Monnaie")
        .addField("Vous avez:", "``0`` EriCoins")
        .setColor("#E77F00")
        .setFooter("Erix - Money")
        .setTimestamp()
    //Embed Money
    const moneye = new Discord.MessageEmbed()
        .setAuthor("💰 Monnaie")
        .addField("Vous avez:", "``" + money + "`` EriCoins")
        .setColor("#E77F00")
        .setFooter("Erix - Money")
        .setTimestamp()
    //Embed ajout de la monnaie
    const addmoney = new Discord.MessageEmbed()
        .setAuthor("✅ Ajout de la monnaie effectuée !")
        .addField("Tu as donné de la monnaie à:", "<@" + mention + ">")
        .addField("D'un montant de:", "`" + args[2] + "`")
        .setColor("#088A08")
        .setFooter("Erix - Money")
        .setTimestamp()
    //Embed retrait de la monnaie
    const delmoney = new Discord.MessageEmbed()
        .setAuthor("✅ Retrait de la monnaie effectuée !")
        .addField("Tu as retiré de la monnaie à:", "<@" + mention + ">")
        .addField("D'un montant de:", "`" + args[2] + "`")
        .setColor("#088A08")
        .setFooter("Erix - Money")
        .setTimestamp()


    //Si aucun argument
    if(!args[0]){
        if(!db.get(`${message.author.id}_money`)) return message.lineReplyNoMention(nomoney)
        if(db.get(`${message.author.id}_money`)) return message.lineReplyNoMention(moneye)
        client.channels.cache.get('834457753388318760').send("<@" + message.author.id + "> a exécuté la commande **Money** sur le serveur **" + message.guild.name + "** !")
    }
    //Give command
    if(args[0] === "give"){
        if(admins){
        if(!args[1]) return message.lineReplyNoMention(":x: Vous devez mentionner une personne !")
        if(!args[2]) return message.lineReplyNoMention(":x: Vous devez mentionner le montant à give !")
        
        db.add(`${mention.user.id}_money`, args[2])
        message.lineReplyNoMention(addmoney)
        client.channels.cache.get('834457753388318760').send("<@" + message.author.id + "> a exécuté la commande **Money Give** sur le serveur **" + message.guild.name + "** !")
        }
    else message.lineReplyNoMention(":x: Il vous manque la permission Administrateur du BOT ! (`ADMIN_BOT`)")
    }
    //Remove command
    if(args[0] === "remove"){
        if(admins){
        if(!args[1]) return message.lineReplyNoMention(":x: Vous devez mentionner une personne !")
        if(!args[2]) return message.lineReplyNoMention(":x: Vous devez mentionner le montant à retirer !")  
        const moneycompare = db.get(`${mention.user.id}_money`)
        if(moneycompare < args[2]) return message.lineReplyNoMention(":x: Cette personne n'a pas assez d'argent !")

        db.subtract(`${mention.user.id}_money`, args[2])
        message.lineReplyNoMention(delmoney)
        client.channels.cache.get('834457753388318760').send("<@" + message.author.id + "> a exécuté la commande **Money Remove** sur le serveur **" + message.guild.name + "** !")
        }
    else message.lineReplyNoMention(":x: Il vous manque la permission Administrateur du BOT ! (`ADMIN_BOT`)")  
    }
}

module.exports.help = {
    name: "money"
  }