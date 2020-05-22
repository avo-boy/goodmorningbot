const Discord = require('discord.js');
const client = new Discord.Client();
var greetings = ['Good morning','How did you sleep','Early bird catches the worm','"Good morning"',"Fixed your sleeping habit I see","Hey! Oh it's just you","Gaming time","Brush your teeth dammit"];

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (!msg.author.bot) {
    if (msg.channel.name === 'goodmornin-chat') {
      var msgContent = msg.content.toLowerCase();
      if (msgContent == "good morning" || msgContent == "goodmornin" || msgContent == "goodmorning" || msgContent == "morning" || msgContent == "mornin" || msgContent == "gmornin" || msgContent == "gm") {
        const channel = client.channels.cache.get("711852497408360578");
        var r = Math.floor(Math.random() * greetings.length);
        channel.send(`${greetings[r]}, ${msg.author}`);
      }
    }
  }
});

client.login(process.env.BOT_TOKEN)
