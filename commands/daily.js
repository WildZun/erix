const Discord = require("discord.js");
const db = require("quick.db")

module.exports.run = async (client, message, args, tools) => {
    //DEFS
    let timeout = 86400000
    const amount = [
        155,
        25,
        50,
        5,
        15
    ]
    let finalamount = (amount[Math.floor(Math.random() * amount.length)])
    let daily = await db.fetch(`${message.author.id}_daily`);

    //EMBEDS
    let embed = new Discord.MessageEmbed()
       .setAuthor("Récompense récupérée !")
       .addField("Vous avez obtenu", finalamount + " EriCoins !")
       .setTimestamp()
       .setColor("#E77F00")
       .setFooter("Erx - Daily")

    //Vérif si déjà daily dans les 24h
    if (daily !== null && timeout - (Date.now() - daily) > 0) {
        message.lineReplyNoMention(":x: Vous avez déjà récupéré votre récompense du jour ! Revenez demain !")
    
    } else {
    //Si il n'a pas fait le daily des 24h
    message.channel.send(embed)
    db.add(`${message.author.id}_money`, finalamount)
    db.set(`${message.author.id}_daily`, Date.now())
    client.channels.cache.get('834457753388318760').send("<@" + message.author.id + "> a exécuté la commande **Daily** sur le serveur **" + message.guild.name + "** !")
    }}

module.exports.help = {
    name: "daily"
  }