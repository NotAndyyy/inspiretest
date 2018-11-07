const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    var role = message.member.guild.roles.find(role => role.name === "Freelancer");
    var rolea = message.member.guild.roles.find(role => role.name === "Active");
if(!message.member.roles.has(role.id), message.member.roles.has(rolea.id)){
    return
} else {
    message.member.addRole(rolea);
    message.channel.send(`${message.author} has been marked as active`);
}
};

module.exports.help = {
    name: "active",
    description: "Gives you the ability to apply for a role!"
}