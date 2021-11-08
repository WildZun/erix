const Discord = require("discord.js")
require('discord-reply');
const bot = new Discord.Client()
const fs =  require("fs")
const db = require("quick.db")
bot.commands = new Discord.Collection();


fs.readdir("./commands/", (err, files) => {

    if(err) console.log(err);
    let jsfile = files.filter(f => f.split(".").pop() === "js");
    if(jsfile.length <= 0){
      console.log("Commandes introuvables.");
      return; 
    }

console.log("Chargement de ErixV1.")
console.log("THE bot économie !")
  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`• ${f} chargé !`);
    bot.commands.set(props.help.name, props);
  });
  console.log("✅ " + jsfile.length + " commandes chargées")
});

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    let eventFunction = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    bot.on(eventName, (...args) => eventFunction.run(bot, ...args));
  });
});

bot.login("ODM0MDc0NDczNjkwNTYyNTcw.YH7mYg.SieBTsCuYTn-v2Jj1faqvELIqc4")