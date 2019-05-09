const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'yo') {
    msg.channel.send('yo');
  }
});

client.login('NTc1NTQ0MTgxNjAzMzAzNDI3.XNJwbw.rTOZF3KJx2eo5JDmhH6Sy1KOn1M');