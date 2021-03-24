/* 	This is the start of the vital file: index.js
	All code here is written in javascript
	We will use the huge library of discord.js to access discord's language
	To install discord.js or anything.js via node.js terminal:
	1. Make sure you have installed the npm command in your terminal
	2. Then simply run this command: npm i packagename.js
	Where packagename is the name of the package, for example discord
	Useful packages include moment.js, ms, common-tags, etc
*/
const Discord = require('discord.js');
// Let's start up the code!! First define the client:
const client = new Discord.Client();
// First, this must be at the top level of your code, **NOT** in any event!
// This can create cooldowns for commands! (Set<any>)
const talkedRecently = new Set();
// This is how we can store blocked users (Array)
const blockedUsers = [];
// Let's get the bot online once it's ready!
client.once('ready', () => {
	console.log(`${client.user.tag} has started, with ${client.users.cache.size} users, in ${client.channels.cache.size} channels of ${client.guilds.cache.size} guilds.`); 
	// Example of changing the bot's activity status
	// Here you can set a status. Here the bot iw playing a game called "with code".
	client.user.setActivity("with Code", { type: "PLAYING" });
});
// We set our prefix and token via the config file, which we keep safe
const { prefix, token, } = require('./config.json');
// Let's login to the bot via the data we put in the config.json file.
client.login(token);

// Async/Await commands
client.on("message", async msg => {
  // If an author's id is in the blockedUsers array, no commands will respond and there username will be sent to the console log
  if (blockedUsers.includes(msg.author.id)) return console.log(`${msg.author.username} just tried to use my commands but was stopped because they were blacklisted`)
  // Let's make the commands handled too!
  // This will make sure the bot won't respond to messages that don't have the prefix and messages that come from the bot
  if (!msg.content.startsWith(prefix) || msg.author.bot) return;
  // args will be used a lot in commands, they allow us to create commands with arguments
  const args = msg.content.slice(prefix.length).trim().split(/ +/);
  /* command will be used to create commands like this:
      if (command == "ping") {
        message.channel.send("Pong!");
      }
      It's a much better way to handle commands than this:
      if (message.content.startsWith(`${prefix}ping`)) {
        message.channel.send("Pong!");
      }
  */
  const command = args.shift().toLowerCase();
  
  // Now all commands go after this...
  // I'll help begin with a proper ping command
  if (command == "ping") {
    // Calculates ping between sending a message and editing it, giving a nice round-trip latency.
		// The second ping is an average latency between the bot and the websocket server (one-way, not round-trip)
		const m = await msg.channel.send("Calculating Ping...");
		m.edit(`Pong! Latency is ${m.createdTimestamp - msg.createdTimestamp}ms.\nAPI Latency is ${Math.round(client.ws.ping)}ms`);
    /* When someone types !ping, or whatever your prefix is, the expected output would be:
        Calculating Ping...
      It will edit this message and send this:
        Pong! Latency is ___ms.
        API Latency is ___ms
    */
  }
  // Now commands go after this...
});

// Non-Async/Await commands
client.on("message", msg => {
  if (!msg.content.startsWith(prefix) || msg.author.bot) return;
	const args = msg.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();
	if (blockedUsers.includes(msg.author.id)) return console.log(`${msg.author.username} just tried to use my commands but was stopped because they were blacklisted`)
  
  // Now commands go after this...
});
