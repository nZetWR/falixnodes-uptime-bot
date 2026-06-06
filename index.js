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

    const seconds = [3, 5.3, 8.9, 11, 3.8, 7, 2];

    function doRandomAction() {
        if (bot && bot.entity) {
            if (Math.random() < 0.5) {
                bot.swingArm('right');
            } else {
                bot.setControlState('sneak', true);
                setTimeout(() => {
                    if (bot && bot.entity) bot.setControlState('sneak', false);
                }, 300);
            }
        }
        const nextSeconds = seconds[Math.floor(Math.random() * seconds.length)];
        setTimeout(doRandomAction, nextSeconds * 1000);
    }

    bot.on('spawn', () => {
        console.log('OK');
        setTimeout(doRandomAction, 3000);
    });

    bot.on('kick', (reason) => console.log(reason));
    bot.on('error', (err) => console.log(err.message));
    
    bot.on('end', () => {
        setTimeout(createBot, 45000);
    });
}

createBot();
