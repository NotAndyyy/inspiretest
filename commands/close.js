const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let cReason = args.slice(0).join(" ");
    let mChannel = message.guild.channels.find(`name`, "inspire-logs");
    let role = message.member.guild.roles.find(role => role.name === "Owner");
    if (message.channel.parent && message.channel.parent.name === "tickets" || message.channel.parent.name === "ticket in progress"){
        if(!message.member.roles.has(role.id)){
            message.channel.send("You must have the `Owner` rank to close this ticket. Please contact Management if you need any help.")}
        await message.channel.send("To close this ticket, please type `yes` within 5 seconds.");
    
        const msgs = await message.channel.awaitMessages(msg => {
            if(msg.content.toLowerCase() == `yes`){
                message.channel.delete()
                    let reasonEmbed = new Discord.RichEmbed()
                    .setTitle("**Ticket has been closed**")
                    .addField("Ticket Name", message.channel.name)
                    .addField("Ticket Deleted By", message.author.username)
                    .addField("Ticket Deleted By ID", message.author.id)
                    .addField("Reason for deletion", cReason || "No reason supplied")
                    .setColor("#008080")
                    .setFooter('Bot created by NotAndy#0350', "https://cdn.discordapp.com/avatars/244230034359844866/4587357e2e01a9a1d2486a2d11f4e20d.png")
                    .setTimestamp();
                mChannel.send(reasonEmbed);
            };
        }, {time: 5000}); 
    }else
    message.channel.send("Invalid Channel")
};


module.exports.help = {
    name: "close",
    description: "Gives you the ability to apply for a role!"
}