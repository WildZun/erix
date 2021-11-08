const Discord = require("discord.js");
const got = require('got');

module.exports.run = async (client, message, args, tools, db) => {
    const embed = new Discord.MessageEmbed()

    //Demande meme
    got('https://www.reddit.com/r/memesfr/random/.json')
    .then(response => {
        const [list] = JSON.parse(response.body);
        const [post] = list.data.children;

        const permalink = post.data.permalink;
        const memeUrl = `https://reddit.com${permalink}`;
        const memeImage = post.data.url;
        const memeTitle = post.data.title;
        const memeUpvotes = post.data.ups;
        const memeNumComments = post.data.num_comments;
    
    //Création embed
    embed.setAuthor("🐸 Meme")
    embed.setImage(memeImage)
    embed.setColor("#08088")
    embed.setFooter("Erix V2 - Meme")

    //Send message
    message.lineReplyNoMention(embed)
    })

}

module.exports.help = {
    name: "meme"
  }