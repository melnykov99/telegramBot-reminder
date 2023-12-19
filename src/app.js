const {Bot} = require("grammy");
require('dotenv').config()


const tgBot = process.env.TGBOT_TOKEN;

const bot = new Bot(tgBot);

bot.on("message", async (ctx) => {
  if (!ctx.message.text) {
    await ctx.reply("Ошибка! Я понимаю только текстовые сообщения.")
    return
  }
  await ctx.reply("Ech!o: " + ctx.message.text)
});

bot.start();