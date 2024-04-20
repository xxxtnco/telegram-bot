// const { Telegraf } = require('telegraf');
// const {HttpsProxyAgent} = require('https-proxy-agent')
// require('dotenv').config();
// const agent = new HttpsProxyAgent({
// 	host: process.env.HTTPS_PROXY_HOST,
// 	port: process.env.HTTPS_PROXY_PORT,
// });
// const token = process.env.TELEGRAM_BOT_TOKEN;
// const bot = new Telegraf(token, { polling: true,telegram:{agent} });

// module.exports = bot 
import { Telegraf } from 'telegraf';
import { HttpsProxyAgent } from 'https-proxy-agent';
import dotenv from 'dotenv';

dotenv.config();

const agent = new HttpsProxyAgent({
  host: process.env.HTTPS_PROXY_HOST,
  port: process.env.HTTPS_PROXY_PORT,
});

const token = process.env.TELEGRAM_BOT_TOKEN;
const bot = new Telegraf(token, { polling: true, telegram: { agent } });

export default bot;