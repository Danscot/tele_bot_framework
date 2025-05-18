
import TelegramBot from 'node-telegram-bot-api';

import { TELEGRAM_BOT_TOKEN } from '../config.js';

import { messageHandlers } from '../events/handler.js';

export let bot;

export function startBot() {

  bot = new TelegramBot(TELEGRAM_BOT_TOKEN, { polling: true });

  messageHandlers(bot);
  
  console.log('🤖 Telegram bot is running...');
}
