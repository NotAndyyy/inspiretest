const Discord = require("discord.js");

module.exports.run = async (bot, message, args) =>
{
    let emojiR = ('1⃣');
    let authorID = message.author.id;
    let mChannel = message.guild.channels.find('name', `ticket-${message.author.username.toLowerCase()}`);
    let embed = new Discord.RichEmbed()
    .setTitle(`Thank you for creating a ticket here at Inspire`)
    .setDescription(`Hey ${message.author}. To begin the process of finding a freelancer, please choose which option you want to carry on with. If you already know what you want, please use the  *-start* command and you will be put in an automatic commission system. If you wish to speak with a sales representative/management team, please use the command *-salerep*. You may cancel the automatic commission system by sending *cancel* at any point of time.`)
    .setColor('#00ff00')
    .setFooter('Bot created by NotAndy#0350', "https://cdn.discordapp.com/avatars/244230034359844866/4587357e2e01a9a1d2486a2d11f4e20d.png")
    .setTimestamp();
    let eMessage = new Discord.RichEmbed()
    .setTitle(`ERROR`)
    .setDescription("You already have a ticket created. Please contact Management if you require any help.") 
    .setColor("#ff0000")
    .setFooter('Bot created by NotAndy#0350', "https://cdn.discordapp.com/avatars/244230034359844866/4587357e2e01a9a1d2486a2d11f4e20d.png")
if (!mChannel) {
    if(!args[0]){
        tMessage = (`Invalid`)
    } else 
    if(args[0])
    {
    tMessage = args.slice(1).join(" ");
    };
    var tagM = message.member.guild.roles.find(role => role.name === "Owner").toString()
    message.guild.createChannel(`ticket-${message.author.username}`, "text", [{
        id: message.guild.id,
        deny: ['VIEW_CHANNEL', 'SEND_MESSAGES'],
      },
      {
          id: message.author.id,
          allow: ['VIEW_CHANNEL', 'SEND_MESSAGES']
      }]).then(c => {
        c.setParent('505520034224013323');
        c.send(embed); 
        c.send(tagM).then(msg => msg.delete(500));
        c.setTopic(`Ticket created by ${message.author} with ID: ${message.author.id}. Reason: ` + tMessage);
      
    let sMessage = new Discord.RichEmbed()
    .setTitle(`SUCCESSFUL`)
    .setDescription(`Successfully created ${c}`)
    .setColor(`#00ff00`)
    .setFooter(`Command executed by ${message.author.username}`, `${message.author.displayAvatarURL}`)
    .setTimestamp();
    message.channel.send(sMessage);
      
    
let firstQuestion = new Discord.RichEmbed()
.setTitle(`What type of product would you like?`)
.setDescription(`Please enter what you are interested in purchasing? e.g. Logo, Discord Bot`)
.setColor(`#00ff00`)
.setFooter(`Command executed by ${message.author.username}`, `${message.author.displayAvatarURL}`)
.setTimestamp();

        

//Leave
})};
}



module.exports.help = {
    name: "new",
    description: "Gives you the ability to apply for a role!"
}