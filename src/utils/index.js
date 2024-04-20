
export const replyToMessage = (
  ctx,
  messageId,
  string
) =>
  ctx.reply(string, {
    reply_to_message_id: messageId,
  });
