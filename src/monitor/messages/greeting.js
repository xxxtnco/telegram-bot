import createDebug from 'debug';
import { replyToMessage } from '../../utils/index.js';

const debug = createDebug('bot:greeting_text');

export const greeting = () => async (ctx) => {
  debug('Triggered "greeting" text command');

  const messageId = ctx.message?.message_id;
  const userName = `${ctx.message?.from.first_name} ${ctx.message?.from.last_name}`;

  if (messageId) {
    await replyToMessage(ctx, messageId, `👏欢迎加入, ${userName}!`);
  }
};
