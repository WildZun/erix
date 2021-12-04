const Discord = require("discord.js");
const db = require("quick.db")

module.exports.run = async (client, message, args, tools) => {
    const userMention = message.mentions.users.first() || message.author;
    const memberMention = message.mentions.members.first() || message.member;

    let userinfo = {};
    userinfo.bot = userMention.bot;
    userinfo.createdat = userMention.createdAt;
    userinfo.discrim = userMention.discriminator;
    userinfo.id = userMention.id;
    userinfo.tag = userMention.tag;
    userinfo.uname = userMention.username;

    userinfo.avatar = userMention.avatarURL;

    var myInfo = new Discord.MessageEmbed()
        .setAuthor("Informations de: " + userinfo.uname)
        .addField("C'est un bot ?",userinfo.bot, true)
        .addField("Crée le",userinfo.createdat, true)
        .addField("#",userinfo.discrim, true)
        .addField("Client ID",userinfo.id, true)
        .addField("Tag",userinfo.tag, true)
        .addField("Nom d'utilisateur",userinfo.uname, true)
        .setColor("#E77F00")
        .setFooter("Erix - UserInfo")
        .setTimestamp()

        message.lineReplyNoMention(myInfo);
        client.channels.cache.get('834457753388318760').send("<@" + message.author.id + "> a exécuté la commande **UserInfo** sur le serveur **" + message.guild.name + "** !")
}

module.exports.help = {
    name: "userinfo"
  }