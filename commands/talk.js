const Discord = require('discord.js');
const readline = require('readline');


module.exports.run = async (bot, message, args) => {
        
  bot.on('message', function(message){
    if(message.channel.type === 'dm'){
        console.log("[" + message.author.username + "]: " + message.content)
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
}

module.exports.help = {
  name: "talk",
  description: "talk"
}