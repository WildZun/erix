const Discord = require("discord.js");
const db = require("quick.db")

module.exports.run = async (client, message, args, tools) => {
    const banbot = db.get(`${message.author.id}_banbot`)
    //DEFINITIONS
    const mention = message.mentions.members.first()
    const money = db.get(`${message.author.id}_money`)
    const reason = args.slice(2).join(' ');

    //EMBEDS
    //Embed paiement effectué
    const payeffectued = new Discord.MessageEmbed()
        .setAuthor("✅ Paiement effectué !")
        .setColor("#088A08")
        .addField("Vous avez fait un paiement à", "<@" + mention + ">", true)
        .addField("D'un montant de:", "``" + parseInt(args[1]) + "`` EriCoins", true)
        .setFooter("Erix - Money")
        .setTimestamp()
    
    //CODE
    //Erreurs
    const Num = parseInt(args[1])
    if(!args[0]) return message.lineReplyNoMention(":x: Vous devez mentionner une personne !")
    if(mention.user.id === message.author.id) return message.lineReplyNoMention(":x: Vous ne pouvez pas payer à vous-même !")
    else {
    if(!args[1]) return message.lineReplyNoMention(":x: Vous devez donner le montant à payer !")
    if(args[1] === "0") return message.lineReplyNoMention(":x: Vous ne pouvez pas payer 0 ou moins de 0 EriCoins !")
    if(money < args[1]) return message.lineReplyNoMention(":x: Vous n'avez pas assez d'argent !")

    //Valide (Paiement)
    db.subtract(`${message.author.id}_money`, parseInt(args[1]))
    db.add(`${mention.user.id}_money`, parseInt(args[1]))
    
    //Si pas de message
    if(!reason){
    message.lineReplyNoMention(payeffectued)
    message.author.send(":white_check_mark: Paiement effectué à " + mention.user.tag + " !")
    mention.user.send(":information_source: Vous avez reçu un paiement de " + message.author.tag + " d'un montant de " + parseInt(args[1]) + " EriCoins !")
    message.lineReplyNoMention(":information_source: Si votre destinataire n'a pas activé les MP, il ne recevra pas la notification de paiement !")
    client.channels.cache.get('834457753388318760').send("💰 **PAIEMENT**: **<@" + message.author.id + ">** a payé **" + mention.user.tag + "** avec un montant de **" + parseInt(args[1]) + "EC** !")

}

    //Si message

    const payeffectuedwithmessage = new Discord.MessageEmbed()
    .setAuthor("✅ Paiement effectué !")
    .setColor("#088A08")
    .addField("Vous avez fait un paiement à", "<@" + mention + ">", true)
    .addField("D'un montant de:", "``" + parseInt(args[1]) + "`` EriCoins", true)
    .addField("Avec le message", reason, true)
    .setFooter("Erix - Money")
    .setTimestamp()

    message.lineReplyNoMention(payeffectuedwithmessage)
    message.author.send(":white_check_mark: Paiement effectué à " + mention.user.tag + " !")
    mention.user.send(":information_source: Vous avez reçu un paiement de " + message.author.tag + " d'un montant de " + parseInt(args[1]) + " EriCoins ! Avec le message: " + reason)
    message.lineReplyNoMention(":information_source: Si votre destinataire n'a pas activé les MP, il ne recevra pas la notification de paiement !")
    client.channels.cache.get('834457753388318760').send("💰 **PAIEMENT**: **" + message.author.tag + "** a payé **" + mention.user.tag + "** avec un montant de **" + parseInt(args[1]) + "EC** avec le message " + reason)

}}

module.exports.help = {
    name: "pay"
  }