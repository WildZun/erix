let db = require("quick.db")
const fs =  require("fs")


exports.run = async (bot) => {
    bot.user.setPresence({ activity: { name: `vos serveurs ! e.help - ${bot.guilds.cache.size} serveurs !`, type: 3} })
    console.log("✅ Je suis prêt !")
    }
