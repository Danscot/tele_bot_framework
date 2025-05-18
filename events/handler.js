
import { handleStart } from '../commands/start.js';


export function commandHandlers(bot) {

  bot.onText("/start", (msg) => handleStart(bot, msg));
  
}
