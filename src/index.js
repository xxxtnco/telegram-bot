 import './monitor/index.js'; 
 import { development, production } from './core/index.js';
 import bot from './bot.js';
 const ENVIRONMENT = process.env.NODE_ENV || ''; 
//dev mode
ENVIRONMENT !== 'production' && development(bot);







// import bot from './bot.js';
// import { message } from 'telegraf/filters';
// bot.start(async (ctx) => {
//     const welcome = `🔗 Selamat Datang 🔗\n\n`+ 
//                     `🏟 Informasi PPIC\n\n`+
//                     `📌 Untuk Mendapatkan informasi silahkan melakukan Verifikasi\n\n`+
//                     `📲 Gunakanlah Media Sosial dengan Bijak \n\n`+
//                     `🔑 your ID : ${ctx.chat.id}`;
 
//     await ctx.telegram.sendMessage(ctx.chat.id, welcome, {
//         reply_markup: {
//             inline_keyboard: [
//                 [
//                     { text: "点击看见新的message", callback_data: 'verify_data' } 
//                 ] 
//             ] 
//         }
//     }) 
    
// });


// bot.command('quit', async (ctx) => {
//     // Explicit usage
//     await ctx.telegram.leaveChat(ctx.message.chat.id)
  
//     // Using context shortcut
//     await ctx.leaveChat()
//   })
  
//   bot.on(message('text'), async (ctx) => {
//     // Explicit usage
//     await ctx.telegram.sendMessage(ctx.message.chat.id, `当然🤖`)
  
//     // Using context shortcut
//     // await ctx.reply(`Hello ${ctx.state.role}`)
//   })
  
//   bot.on('callback_query', async (ctx) => {
//     // Explicit usage
//     await ctx.telegram.answerCbQuery(ctx.callbackQuery.id)
  
//     // Using context shortcut
//     await ctx.answerCbQuery()
//   })
  
//   bot.on('inline_query', async (ctx) => {
//     const result = []
//     // Explicit usage
//     await ctx.telegram.answerInlineQuery(ctx.inlineQuery.id, result)
  
//     // Using context shortcut
//     await ctx.answerInlineQuery(result)
//   })
  


// bot.action('verify_data', async (ctx) => {
//     const clientInfo = await fetchClientInfo(ctx.from.id);
    
//     if (clientInfo) {
//         const { phoneNumber, chatId, name } = clientInfo;

//         const message = `📱 Nomor Handphone: ${phoneNumber}\n\n` +
//                         `👤 Nama Klien: ${name}\n\n` +
//                         `💬 Chat ID: ${chatId}\n\n` +
//                         `➾ Your ID: ${ctx.from.id}`;
//         await sendNoficication(chatId, message, { parse_mode: "HTML" });
//     }
// });

// async function sendNoficication(chatId, message, options) {
//     try {
//         await bot.telegram.sendMessage(chatId, message, options);
//     } catch (error) {
//         console.error('Gagal mengirim notifikasi:',  error);   
//     }
// }


// async function fetchClientInfo(userId) {
//     const clientInfo = {
//         phoneNumber: '+6282289687844',
//         chatId: userId,
//         name: "Nanda Tritona"
//     }

//     return clientInfo;
// }
// bot.command('oldschool', (ctx) => ctx.reply('Hello'))
// bot.launch();

// // Enable graceful stop
// process.once('SIGINT', () => bot.stop('SIGINT'));
// process.once('SIGTERM', () => bot.stop('SIGTERM'));