import createDebug from 'debug';
// import { author, name, version } from '../../../package.json';

const debug = createDebug('bot:about_command');

const about = () => async (ctx) => {
  const message = `
*🤖唧唧bot小助手 ${1||version}*\n
by [${1||author}](https://github.com/yesmore)
  `;
  debug(`Triggered "about" command with message \n${message}`);
  await ctx.replyWithMarkdownV2(message, { parse_mode: 'Markdown' });
};

export { about };
