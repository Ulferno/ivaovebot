const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
	if(msg.content === '!ping') {
		msg.reply('PONG!');
	}
});


client.login('NjQ2ODY1ODU1NDYzODE3MjM3.XdXZDQ.ZJtMpWcp9C7kg2CuIMZSOC9t3Mo');