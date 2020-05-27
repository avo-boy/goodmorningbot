require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();
var greetings = ['Good morning', 'How did you sleep', 'Early bird catches the worm', '"_Good morning_"', "Fixed your sleeping habit I see", "Hey! Oh it's just you", "Gaming time", "Brush your teeth dammit","I feel like you might have not gone to bed yet"];
var sadSpoon = ['Sorry if I hurt your feelings', 'Hey! Well done for being up', 'Sssh! The baby might still be sleeping, oh wait. You are the baby', 'uwu sowwi 4 hurtin ur feelings uwu'];

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (!msg.author.bot) {
    if (msg.channel.name === 'goodmornin-chat') {
      var msgContent = msg.content.toLowerCase();
      if (msgContent == "good morning" || msgContent == "goodmornin" || msgContent == "goodmorning" || msgContent == "morning" || msgContent == "mornin" || msgContent == "gmornin" || msgContent == "gm") {
        const channel = msg.channel;
        var r = Math.floor(Math.random() * greetings.length);

        if (msg.author.id == "221604543828459520") {
          var r2 = Math.random();
          if (r2 < 0.8) {
            var r3 = Math.floor(Math.random() * sadSpoon.length);
            channel.send(`${sadSpoon[r3]}, ${msg.author}`);
          } else {
            channel.send(`${greetings[r]}, ${msg.author}`);
          }
        } else {
          channel.send(`${greetings[r]}, ${msg.author}`);
        }
      } else if (msgContent == "ty" && msg.author.id == "221604543828459520"){
        const channel = msg.channel;
        channel.send(`Fuck you, ${msg.author}`);
      }
    }
  }
});

client.login(process.env.TOKEN);
