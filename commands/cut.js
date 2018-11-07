const Discord = require("discord.js");

module.exports.run = async (bot, message, args) =>
{
    let cutC = args[0]
if(!args[0]){
message.channel.send("Please enter a valid amount of money without the `$` sign.");
}else{
let embed = new Discord.RichEmbed()
.setTitle ("Inspire Commission Cuts")
.addField ("Freelancer", "$" + args[0] * 0.9)
.addField ("Sales Representative", "$" + args[0] * 0.05)
.addField ("Management", "$" + args[0] * 0.05)
.setColor("#ff0000")
.setFooter('Bot created by NotAndy#0350', "https://cdn.discordapp.com/avatars/244230034359844866/4587357e2e01a9a1d2486a2d11f4e20d.png")
message.channel.send(embed);

}
}
module.exports.help = {
    name: "cut",
    description: "Shows the cuts of the commission."
}