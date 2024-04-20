import createDebug from 'debug';
const debug = createDebug('bot:start_command');
const start = () => async (ctx) => {
    const welcome = `Welcome to dev bot\n\n🎉欢迎来到kebb dev bot*\n/list 查看所有指令\n/help 帮助`;
    const start_bg = 'https://s2.loli.net/2024/04/19/DW6vO3wek21gJ9t.jpg'||'https://ipfs.io/ipfs/QmUDTs1yCKM3XFHTEPABJb9b23VN77mbmoszRgbsQFQyYM/947.png'
    // console.log(typeof Image(), "new Image()")  
    // let img = new Image()
    // img.onload = function() { 
    //     //在图片加载完成后设置它的宽度和高度 
    //     img.width = 300; //设置宽度为 300 像素 
    //     img.height = 200; //设置高度为 200 像素 
    // }
    // img.src ='https://ipfs.io/ipfs/QmUDTs1yCKM3XFHTEPABJb9b23VN77mbmoszRgbsQFQyYM/947.png'
    await ctx.telegram.sendPhoto(ctx.chat.id,start_bg,{ 
        caption:welcome,
        reply_markup: {
            inline_keyboard: [
                [
                    { text: "—— Main Menu ——" ,callback_data: 'id'} ,
                   
                ],
                [
                    { text: "📌绑定钱包", callback_data: 'verify_data' } ,
                    { text: "💳生成钱包", callback_data: 'verify_data' } ,
                ],
                [ 
                  { text: "💰买/卖", callback_data: 'verify_data' } ,
                  { text: "💳钱包", callback_data: 'verify_data' } ,
              ] ,
              [
                  { text: "⚙️设置", callback_data: 'verify_data' } ,
                  { text: "📖帮助", callback_data: 'verify_data' } , 
              ] ,
              [
                  { text: "🎯狙击", callback_data: 'verify_data' } ,
                  { text: "🔗X", callback_data: 'verify_data' } ,
              ] ,
            ] 
        }
    })
   

  // const message = `*🎉欢迎使用唧唧bot小助手🎉*\n\n/list 查看所有指令\n/about 关于唧唧bot\n\ntip: 一些词汇可能触发唧唧bot，快来探索吧~`;
  // debug(`Triggered "start" command with message \n${message}`);
  // await ctx.replyWithMarkdownV2(message, { parse_mode: 'Markdown' });
  //   🔫 🎫 📻 📞 📷 🔖💰 🎯 🚀 💳 🔑 📲 🏟 🔗
};

export { start };
