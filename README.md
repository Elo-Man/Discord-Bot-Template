# Discord-Bot-Template
This template aims to help anyone with enough common-sense and no coding background to create their own discord bot and code it to make it alive!
Excluding the `README.md` file, there are 2 files: 
- `index.js`; This does not need any editing for the bot to become online
- `config.json`; The config file will need input (which are your bot's token and prefix)

## How to get your bot on Discord
The first step is to install node.js and discord.js. 
### Installing Node.js
To use discord.js, you'll need to install Node.js. 
Node.js Installation: https://nodejs.org/en/

This guide will help if needed: https://discordjs.guide/preparations/#installing-node-js

#### Using the command prompt

With the command prompt open, run the `node -v` command to make sure you've successfully installed Node.js.

If you see an output like `v12.18.3`, great! If not, go back and try installing again.

### Installing discord.js
Once you got Node up-to-date you can install v12 by running `npm install discord.js`

Once you install discord.js you will see warnings, however this is perfectly normal and means that it worked.

You can check your discord.js version with `npm list discord.js`. If your version is `v11.x` and not `v12.x`, run `npm uninstall discord.js` and re-install discord.js.

Refer to the npm documentation: https://docs.npmjs.com/cli/v7/configuring-npm/package-json

### Setting up a bot on discord
The next step is to get your bot on discord.

Use this guide to setting up a bot application: https://discordjs.guide/preparations/setting-up-a-bot-application.html#creating-your-bot
### Adding your bot to servers
Use this guide to invite your bot using it's link to your servers: https://discordjs.guide/preparations/adding-your-bot-to-servers.html#bot-invite-links
## What to use to code?
You will need to install a code editor (Visual Studio Code, Atom, Sublime Text, or any other editor of your choice) and create a new file.
Visual Studio Code is highly recommended if you are newer.

## How to get your bot online
Great! You finally have gotten your bot on discord, invited it to your server, installed the 2 files and viewing them in a code editor.
The next step is to debug and run the index.js file so your bot becomes alive.

To do this go to your code editor console log and run the command `node index.js`.

If successful you should see a message `BotName#XXXX has started, with X users, in X channels of X guilds`

If unsuccessful you should see an error message. The "Could not find module" error looks like: `Could not find module '/Users/YourUsername/...'`

If you see this error message run the command `cd` and make sure index.js is in the Username folder.

Or look at which folder index.js is located and run the command `cd foldername`

If you have more problems follow this guide: https://discordjs.guide/creating-your-bot/#creating-the-bot-file
## Your Bot Should Now Be Online
But guides will always help with anymore problems. Faq and Links:
 - Faq: https://gist.github.com/SinisterRectus/2d84025f51bc0be37d2f0d0c559c2e35
 - Documentation: https://discordapp.com/developers/docs
 - Discord API Issue Tracker: https://github.com/discordapp/discord-api-docs
 - Discord.js Guide: https://discordjs.guide/
