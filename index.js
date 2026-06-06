index.js
const mineflayer = require('mineflayer');

function createBot() {
    const bot = mineflayer.createBot({
        host: 'breakpointsmp.falix.gg',
        port: 58392,
        username: 'FlixUpTimeBot',
        version: '1.21.1'
    });

    bot.on('kick', (reason) => console.log(`Кикнули: ${reason}`));
    bot.on('error', (err) => console.log(`Ошибка: ${err}`));
    
    bot.on('end', () => {
        console.log('Бот отключился. Перезапуск через 10 секунд...');
        setTimeout(createBot, 10000);
    });
}

createBot();
