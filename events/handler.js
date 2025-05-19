
import { handleStart } from '../commands/start.js';


export function messageHandlers(bot) {

  bot.onText("/start", (msg) => handleStart(bot, msg));
  
}
