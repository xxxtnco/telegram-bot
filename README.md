# Boot-Telegram

使用 Nodejs 开发的 Telegram 机器人

## 开始

安装环境 

+ pnpm v8.6.11及以上版本
+ node 16.14.2及以上版本

## 本地调试

```bash
git clone https://github.com/xxxtnco/telegram-bot.git
cd Boot-Telegram
pnpm install 
pnpm dev
```

### 环境变量

文件`.env`

| Name        | Description        | Example                                         |
| ----------- | ------------------ | ----------------------------------------------- |
| `TELEGRAM_BOT_TOKEN` | Telegram Bot Token | `0123456789:ZBX2mpx9Wjg4iqAs6izMKDXVgVV92dOA0a` |
| `HTTPS_PROXY_HOST` | Telegram Bot vpn本地服务器域名 | `127.0.0.1` |
| `HTTPS_PROXY_PORT` | Telegram Bot vpn本地服务器端口 | `9999` |
| `NODE_ENV` | Telegram Bot 开发/正式 环境 当前开发环境 | `development` |

## 示例机器人

-------------

### 未来计划

- [ ] 支持多链交易如 : 以太坊，BTC，BSC，Polygon，Solana
- [ ] 完成交易买卖，跟单交易，狙击，打新，获取最新消息

## 参考资料

- [Telegram Bot Api](https://core.telegram.org/api)
- [telegraf: Telegram Bot Framework for Node.js](https://github.com/telegraf/telegraf)

