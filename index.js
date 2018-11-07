const fs = require('fs');
const Discord = require('discord.js');
const bot = new Discord.Client();
const { prefix, TOKEN } = require('./config.json');
const { RichEmbed } = require('discord.js');
bot.commands = new Discord.Collection();
const readline = require('readline');

fs.readdir("./commands", (err, files) => {
    if (err) console.error(err);
    let jsFiles = files.filter(f => {return f.split(".").pop() === "js";});
    if (jsFiles.length <= 0) {
      return;
     }
    jsFiles.forEach((f) => {
      let props = require(`./commands/${f}`);
      bot.commands.set(props.help.name, props);
    });
  });
  
  bot.on("message", async (message) => {
     if(!message.content.startsWith(prefix)) return;
    if (message.author.bot) return;
    if (message.channel.type === "dm") return;
    let args = message.content.split(" ").slice(1);
    let command = message.content.split(" ")[0].toLowerCase();
    let cmd = bot.commands.get(command.slice(prefix.length));
    if (cmd) {
      cmd.run(bot, message, args);
    }
  });



bot.on('ready', () => {
    console.log("Bot Has Been Successfully Enabled")
    bot.user.setActivity("NotAndy#0350's Project", {type: "PLAYING"});
});

bot.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find(channel => channel.name === "inspire-welcome");
    let memberavatar = member.user.avatarURL
        if (!channel) return;
        let embed = new Discord.RichEmbed()
        .addField(`Welcome To ${member.guild.name}`,`Enjoy your stay ${member}`)
        .addField('Member Count', `You are member number ${member.guild.memberCount}`)
        .setColor('#00ff00')
        .setThumbnail(memberavatar)
        .setFooter('Bot created by NotAndy#0350', "https://cdn.discordapp.com/avatars/244230034359844866/4587357e2e01a9a1d2486a2d11f4e20d.png")
        .setTimestamp()

        channel.sendEmbed(embed);
});


bot.on('guildMemberAdd', member => {
    var role = member.guild.roles.find(role => role.name === "Member")
    member.addRole (role);
})

bot.on('guildMemberRemove', member => {
    let channel = member.guild.channels.find(channel => channel.name === "inspire-welcome");
    let memberavatar = member.user.avatarURL
        if (!channel) return;
        let embed = new Discord.RichEmbed()
        .addField(`User has left ${member.guild.name}`,`RIP ${member}`)
        .addField('Member Count', `There are now ${member.guild.memberCount} members`)
        .setColor('#ff0000')
        .setFooter('Bot created by NotAndy#0350', "https://cdn.discordapp.com/avatars/244230034359844866/4587357e2e01a9a1d2486a2d11f4e20d.png")
        .setTimestamp()

        channel.sendEmbed(embed);
});

bot.on('message', function(message){
    if(message.channel.type === 'dm'){
        console.log("[" + message.author.username + "]: " + message.content) //Message from : Message
        
        const rl = readline.createInterface({
          input: process.stdin,
          output: process.stdout
        });
  
        rl.question('REPLY TO ' + message.author.username + ': ', (answer) => {
        message.author.send(`${answer}`);
        rl.close();
     });
     }
});


bot.login(TOKEN)