const Discord = require('discord.js')
const client = require('client.js')

client.on('ready', () => {
  console.log('I am ready!');
 });
 
client.on('message', message => {
  if (message.content = 'ping') {
    message.reply('pong');
  }
});

// END CLIENT

client.login(process.env.BOT_TOKEN);
