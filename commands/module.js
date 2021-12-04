const Discord = require("discord.js");
const db = require("quick.db")

module.exports.run = async (client, message, args, tools) => {
    const fun = db.get(`${message.guild.id}_module_fun`)
    const tickets = db.get(`${message.guild.id}_module_tickets`)

    //EMBEDS
    const listmodulesfuntickets = new Discord.MessageEmbed()
        .setAuthor("Liste des modules")
        .setDescription("`e.module activate <nom du module>` pour activer un module et `e.module desactivate <nom du module>` pour désactiver un module.")
        .addField("🎟️ Tickets", "`new`, `close`\r Nom de module: `tickets`", true)
        .addField("😋 Fun", "`8ball`, `taper`, `calin`\r Nom du module: `fun`", true)
        .addField("✅ Modules activés:", "`fun`, `tickets`")
        .setColor("#E77F00")
        .setFooter("Erix - Module")
        .setTimestamp()
    const listmodulesfun = new Discord.MessageEmbed()
        .setAuthor("Liste des modules")
        .setDescription("`e.module activate <nom du module>` pour activer un module et `e.module desactivate <nom du module>` pour désactiver un module.")
        .addField("🎟️ Tickets", "`new`, `close`\r Nom de module: `tickets`", true)
        .addField("😋 Fun", "`8ball`, `taper`, `calin`\r Nom du module: `fun`", true)
        .addField("✅ Modules activés:", "`fun`")
        .setColor("#E77F00")
        .setFooter("Erix - Module")
        .setTimestamp()
    const listmodulestickets = new Discord.MessageEmbed()
        .setAuthor("Liste des modules")
        .setDescription("`e.module activate <nom du module>` pour activer un module et `e.module desactivate <nom du module>` pour désactiver un module.")
        .addField("🎟️ Tickets", "`new`, `close`\r Nom de module: `tickets`", true)
        .addField("😋 Fun", "`8ball`, `taper`, `calin`\r Nom du module: `fun`", true)
        .addField("✅ Modules activés:", "`tickets`")
        .setColor("#E77F00")
        .setFooter("Erix - Module")
        .setTimestamp()
    const listmodulesno = new Discord.MessageEmbed()
        .setAuthor("Liste des modules")
        .setDescription("`e.module activate <nom du module>` pour activer un module et `e.module desactivate <nom du module>` pour désactiver un module.")
        .addField("🎟️ Tickets", "`new`, `close`\r Nom de module: `tickets`", true)
        .addField("😋 Fun", "`8ball`, `taper`, `calin`\r Nom du module: `fun`", true)
        .addField("✅ Modules activés:", "Aucun")
        .setColor("#E77F00")
        .setFooter("Erix - Module")
        .setTimestamp()


    //CODE
    if(!args[0]){
        if(fun && tickets) return message.lineReplyNoMention(listmodulesfuntickets)
        else if(fun) return message.lineReplyNoMention(listmodulesfun)
        else if(tickets) return message.lineReplyNoMention(listmodulestickets)
        else if(!tickets && !fun) return message.lineReplyNoMention(listmodulesno)
        client.channels.cache.get('834457753388318760').send("<@" + message.author.id + "> a exécuté la commande **Help Modules** sur le serveur **" + message.guild.name + "** !")
    }
    //Activer des modules
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.lineReplyNoMention(":x: Il vous manque la permission `ADMINISTRATOR` !")
    if(args[0] === "activate"){
        if(!args[1]) return message.lineReplyNoMention(":x: Vous devez préciser quel module vous voulez activer !")
        if(args[1] === "fun"){
            if(db.get(`${message.guild.id}_module_fun`)) return message.lineReplyNoMention(":x: Ce module est déjà activé !")
            db.set(`${message.guild.id}_module_fun`, true)
            message.lineReplyNoMention(":white_check_mark: Module activé !")
            client.channels.cache.get('834457753388318760').send("<@" + message.author.id + "> a exécuté la commande **Module Activate Fun** sur le serveur **" + message.guild.name + "** !")
        }
        if(args[1] === "tickets"){
            if(db.get(`${message.guild.id}_module_tickets`)) return message.lineReplyNoMention(":x: Ce module est déjà activé !")
            db.set(`${message.guild.id}_module_tickets`, true)
            message.lineReplyNoMention(":white_check_mark: Module activé !")
            client.channels.cache.get('834457753388318760').send("<@" + message.author.id + "> a exécuté la commande **Module Activate Tickets** sur le serveur **" + message.guild.name + "** !")
        }
    }
    //Désactiver des modules
    if(args[0] === "desactivate"){
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.lineReplyNoMention(":x: Il vous manque la permission `ADMINISTRATOR` !")
        if(!args[1]) return message.lineReplyNoMention(":x: Vous devez préciser quel module vous voulez désactiver !")
        if(args[1] === "fun"){
            if(!db.get(`${message.guild.id}_module_fun`)) return message.lineReplyNoMention(":x: Ce module n'est pas activé !")
            db.delete(`${message.guild.id}_module_fun`)
            message.lineReplyNoMention(":white_check_mark: Module désactivé !")
            client.channels.cache.get('834457753388318760').send("<@" + message.author.id + "> a exécuté la commande **Module Desactivate Fun** sur le serveur **" + message.guild.name + "** !")
        }
        if(args[1] === "tickets"){
            if(!db.get(`${message.guild.id}_module_tickets`)) return message.lineReplyNoMention(":x: Ce module n'est pas activé !")
            db.delete(`${message.guild.id}_module_tickets`)
            message.lineReplyNoMention(":white_check_mark: Module désactivé !")
            client.channels.cache.get('834457753388318760').send("<@" + message.author.id + "> a exécuté la commande **Module Desactivate Tickets** sur le serveur **" + message.guild.name + "** !")
        }
    }
}

module.exports.help = {
    name: "module"
  }