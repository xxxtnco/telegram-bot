import { replyToMessage } from '../../utils/index.js';

export const gg_boy = (ctx) => ctx.reply('童话里做英雄');

export const be_yourself = (ctx) =>
  replyToMessage(ctx, ctx.message.message_id? false:ctx.message.message_id, `反弹buibuibui~`);
