const Discord = require("discord.js");

module.exports.run = async (client, message, args, tools, db) => {
    message.channel.send("Bonsoir !")
}

module.exports.help = {
    name: "test"
  }