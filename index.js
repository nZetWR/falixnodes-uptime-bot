const mineflayer = require('mineflayer');

function createBot() {
    const bot = mineflayer.createBot({
        host: 'breakpointsmp.falix.gg',
        port: 58392,
        username: 'FlixUpTimeBot',
        version: '1.21.1',
        checkTimeoutInterval: 120000,
        hideErrors: true
    });

    bot.on('spawn', () => {
        console.log('OK');
        setInterval(() => {
            if (bot && bot.entity) {
                bot.setControlState('jump', true);
                setTimeout(() => {
                    if (bot && bot.entity) bot.setControlState('jump', false);
                }, 400);
            }
        }, 20000);
    });

    bot.on('kick', (reason) => console.log(reason));
    bot.on('error', (err) => console.log(err.message));
    
    bot.on('end', () => {
        setTimeout(createBot, 180000);
    });
}

createBot();
