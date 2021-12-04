//PACKAGES
const Discord = require("discord.js");
const db = require("quick.db")

const wildzun = [
    "383668570170720256"
]

module.exports.run = async (client, message, args, tools) => {
    //DEFINITIONS
    const mention = message.mentions.members.first();

    //EMBEDS
    const memberadd = new Discord.MessageEmbed()
        .setAuthor("✅ Membre ajouté !")
        .addField("Vous avez ajouté", args[1])
        .setColor("#088A08")
        .setFooter("Erix - Admin")
        .setTimestamp()
    const memberrm = new Discord.MessageEmbed()
        .setAuthor("✅ Membre supprimé !")
        .addField("Vous avez retiré:", args[1])
        .setColor("#088A08")
        .setFooter("Erix - Admin")
        .setTimestamp()


    //Si aucun argument
    if(!args[0]){
        if(!db.get(`${message.author.id}_admin`)){
            message.lineReplyNoMention(":x: Tu n'es administrateur")
        } else {
            message.lineReplyNoMention(":white_check_mark: Tu es administrateur !")
        }}

    //Sinon si il met add
    if(args[0] === "add"){
        //Si ce n'est pas WildZun qui exe la commande
        if(!wildzun.includes(message.author.id)) return message.channel.send(":x: Seul WildZun peut exécuter cette commande !")
        //Si aucune mention
        if(!args[1]) return message.channel.send(":x: Tu dois mentionner une personne pour pouvoir l'ajouter en tant qu'administrateur du BOT !")
            //Si la personne est déjà dans la liste d'admons
            if(db.get(`${mention.user.id}_admin`)) return message.channel.send(":x: Déjà mis dans la liste des admins !")
                //Add la personne + message de confirmation
        db.set(`${mention.user.id}_admin`, true)
        message.lineReplyNoMention(memberadd)
        client.channels.cache.get('834457753388318760').send("<@" + message.author.id + "> a exécuté la commande **Admin add** sur le serveur **" + message.guild.name + "** !")

        }

    //Si il met delete
    if(args[0] === "remove"){
        //Si ce n'est pas Wildzun qui exe la commande
        if(!wildzun.includes(message.author.id)) return message.channel.send(":x: Seul WildZun peut exécuter cette commande !")
            //Si il n'y a pas d'argument
            if(!args[1]) return message.channel.send(":x: Tu dois mentionner une personne pour pouvoir le supprimer de la liste d'administrateurs !")
            //Si la personne n'existe pas dans la liste
        if(!db.get(`${mention.user.id}_admin`)) return message.channel.send(":x: Utilisateur inconnu de la liste des admins !")
            //Delete la personne + message de confirmation   
        db.delete(`${mention.user.id}_admin`)
        message.lineReplyNoMention(memberrm)
            client.channels.cache.get('834457753388318760').send("<@" + message.author.id + "> a exécuté la commande **Admin remove** sur le serveur **" + message.guild.name + "** !")
    }
}

module.exports.help = {
    name: "admin"
  }