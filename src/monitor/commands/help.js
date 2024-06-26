import createDebug from 'debug';
// import { author, name, version } from '../../../package.json';

const debug = createDebug('bot:about_command');

const help = () => async (ctx) => {
  const message = `
*🤖ChatGPT使用指南*\n
格式：/ai 你的问题
注意：部分请求时间较长，请耐心等待，不要重复发送指令！！
(2023/2/21更新：机器人接口不稳定，相关功能已失效)
  `;
  debug(`Triggered "about" command with message \n${message}`);
  await ctx.replyWithMarkdownV2(message, { parse_mode: 'Markdown' });
};

export { help };
