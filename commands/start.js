const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let cReason = args.slice(0).join(" ");
    let mChannel = message.guild.channels.find(`name`, "andy-bot-testing");
   mChannel.send("test")
};


module.exports.help = {
    name: "start",
    description: "Gives you the ability to apply for a role!"
}