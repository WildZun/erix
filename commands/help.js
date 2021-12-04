const Discord = require("discord.js");
const db = require("quick.db")

module.exports.run = async (client, message, args, tools) => {
    const banbot = db.get(`${message.author.id}_banbot`)
    const admin = db.get(`${message.author.id}_admin`)
    const mod = db.get(`${message.author.id}_mod`)
    const fun = db.get(`${message.guild.id}_module_fun`)
    const tickets = db.get(`${message.guild.id}_module_tickets`)


    //EMBEDS
    const ehelpadmin = new Discord.MessageEmbed()
        .setAuthor("❓ Aide")
        .setDescription("N'oublie pas, mon préfix est `e.` ! Toutes mes commandes sont ici. Amuse-toi bien !")
        .addField(":money_with_wings: Economie", "`money`, `pay`, `daily`", true)
        .addField(":heavy_plus_sign: Utile", "`clear`, `serverinfo`, `userinfo`, `report`, `suggestion`, `bug`, `invite`,`partners`, `support`" , true)
        .addField(":rotating_light: Admin:", "`admin`, `mod`, `banall`, `deltimedaily`", true)
        .addField(":beginner: Modules", "`module`", true)
        .setTimestamp()
        .setColor("#E77F00")
        .setFooter("Erix - Help")
    const ehelp = new Discord.MessageEmbed()
        .setAuthor("❓ Aide")
        .setDescription("N'oublie pas, mon préfix est `e.` ! Toutes mes commandes sont ici. Amuse-toi bien !")
        .addField(":money_with_wings: Economie", "`money`, `pay`, `daily`", true)
        .addField(":heavy_plus_sign: Utile", "`clear`, `serverinfo`, `userinfo`, `report`, `suggestion`, `bug`, `invite`,`partners`, `support`" , true)        .setTimestamp()
        .addField(":beginner: Modules", "`module`", true)
        .setTimestamp()
        .setColor("#E77F00")
        .setFooter("Erx - Help")
    const ehelpmod = new Discord.MessageEmbed()
        .setAuthor("❓ Aide")
        .setDescription("N'oublie pas, mon préfix est `e.` ! Toutes mes commandes sont ici. Amuse-toi bien !")
        .addField(":money_with_wings: Economie", "`money`, `pay`, `daily`", true)
        .addField(":heavy_plus_sign: Utile", "`clear`, `serverinfo`, `userinfo`, `report`, `suggestion`, `bug`, `invite`,`partners`, `support`" , true)
        .addField(":warning: Modération", "*Aucune commande pour le moment !*", true)
        .addField(":beginner: Modules", "`module`", true)
        .setTimestamp()
        .setColor("#E77F00")
        .setFooter("Erix - Help")
    const ehelpmodadmin = new Discord.MessageEmbed()
        .setAuthor("❓ Aide")
        .setDescription("N'oublie pas, mon préfix est `e.` ! Toutes mes commandes sont ici. Amuse-toi bien !")
        .addField(":money_with_wings: Economie", "`money`, `pay`, `daily`", true)
        .addField(":heavy_plus_sign: Utile", "`clear`, `serverinfo`, `userinfo`, `report`, `suggestion`, `bug`, `invite`, `partners`, `support`" , true)
        .addField(":warning: Modération", "*Aucune commande pour le moment !*", true)
        .addField(":rotating_light: Admin", "`admin`, `mod`, `banall`, `deltimedaily`", true)
        .addField(":beginner: Modules", "`module`", true)
        .setTimestamp()
        .setColor("#E77F00")
        .setFooter("Erix - Help")
   
    //MESSAGE D'AIDE
    if(!args[0]){
    if(mod && admin){
    message.lineReplyNoMention(ehelpmodadmin);
    client.channels.cache.get('834457753388318760').send("<@" + message.author.id + "> a exécuté la commande **Help Mod** sur le serveur **" + message.guild.name + "** !")
    }

    else if(admin){
    message.lineReplyNoMention(ehelpadmin);
    client.channels.cache.get('834457753388318760').send("<@" + message.author.id + "> a exécuté la commande **Help Admin** sur le serveur **" + message.guild.name + "** !")
    }

    else if(mod){ 
    message.lineReplyNoMention(ehelpmod);
    client.channels.cache.get('834457753388318760').send("<@" + message.author.id + "> a exécuté la commande **Help Mod** sur le serveur **" + message.guild.name + "** !")
    } else {
    message.lineReplyNoMention(ehelp);
    client.channels.cache.get('834457753388318760').send("<@" + message.author.id + "> a exécuté la commande **Help** sur le serveur **" + message.guild.name + "** !")
    }    
};
}

module.exports.help = {
    name: "help"
  }