const Discord = require("discord.js");


module.exports.run = async (client, message, args, tools) => {
    //Définition de userMention et de memberMention
    const userMention = message.mentions.users.first() || message.author;
    const memberMention = message.mentions.members.first() || message.member;

    //Définir tous les paramètres pour l'embed
    let userinfo = {};
    userinfo.bot = userMention.bot;
    userinfo.createdat = userMention.createdAt;
    userinfo.discrim = userMention.discriminator;
    userinfo.id = userMention.id;
    userinfo.tag = userMention.tag;
    userinfo.uname = userMention.username;

    userinfo.avatar = userMention.avatarURL;

    //Embed
    const embed = new Discord.MessageEmbed()
        .setAuthor("ℹ️ Informations de l'utilisateur")
        .setThumbnail(userinfo.avatar)
        .addField("Tag:", userinfo.tag, true)
        .addField("Pseudo:", userinfo.uname, true)
        .addField("L'utilisateur est un bot ?", userinfo.bot, true)
        .addField("Compte crée le:", userinfo.createdat, true)
        .addField("Id:", userinfo.id, true)
        .setColor("#08088")
        .setFooter("Erix V2 - UserInfo")
    
    //Message avec l'embed à send
    message.lineReplyNoMention(embed)
}

module.exports.help = {
    name: "userinfo"
  }