const { Bot } = require("grammy");
require('dotenv').config()


const tgBot = process.env.TGBOT_TOKEN;

// Create a bot object
const bot = new Bot(tgBot); // <-- place your bot token in this string

// Register listeners to handle messages
bot.on("message:text", (ctx) => ctx.reply("Echo: " + ctx.message.text));

// Start the bot (using long polling)
bot.start();