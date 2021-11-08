let db = require("quick.db")


exports.run = async (bot, message, args) => {
  const banall = db.get(`${message.author.id}_banbot`)
let prefix = "e."

  if (message.content.startsWith(prefix)) {
    if(banall) return message.channel.send(":x: Tu es banni du bot !")
  if(message.author.bot) return;
    
  //Définition des arguments
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1)

  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if (!commandfile) return;
  commandfile.run(bot, message, args);
}
}