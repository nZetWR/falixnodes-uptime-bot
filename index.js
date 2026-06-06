const mineflayer = require('mineflayer');

function createBot() {
    const bot = mineflayer.createBot({
        host: 'breakpointsmp.falix.gg',
        port: 58392,
        username: 'FlixUpTimeBot',
        version: '1.21.1',
        hideErrors: true,
        respawn: true
    });

    bot.on('login', () => {
        bot.setControlState('sneak', true);
    });

    bot.on('spawn', () => {
        bot.setControlState('sneak', false);
        setInterval(() => {
            bot.setControlState('jump', true);
            setTimeout(() => bot.setControlState('jump', false), 400);
        }, 4000);
    });

    bot.on('kick', (reason) => console.log(`Кикнули: ${reason}`));
    bot.on('error', (err) => console.log(`Ошибка: ${err.message}`));
    
    bot.on('end', () => {
        setTimeout(createBot, 5000);
    });
}

createBot();
