const mineflayer = require('mineflayer');

function createBot() {
    const bot = mineflayer.createBot({
        host: 'breakpointsmp.falix.gg',
        port: 58392,
        username: 'FlixUpTimeBot',
        version: '1.21.1'
    });

    bot.on('spawn', () => {
        setInterval(() => {
            bot.setControlState('jump', true);
            setTimeout(() => bot.setControlState('jump', false), 500);
        }, 5000);
    });

    bot.on('kick', (reason) => console.log(`Кикнули: ${reason}`));
    bot.on('error', (err) => console.log(`Ошибка: ${err}`));
    
    bot.on('end', () => {
        setTimeout(createBot, 10000);
    });
}

createBot();
