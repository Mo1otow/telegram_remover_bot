import {Telegraf} from 'telegraf';
import 'dotenv/config'
import remove from "./src/remove.js";

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.use(remove)

bot.launch();

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
