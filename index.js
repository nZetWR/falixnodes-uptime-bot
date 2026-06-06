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

    function doRandomAction() {
        if (bot && bot.entity) {
            const actionType = Math.random();
            if (actionType < 0.5) {
                bot.swingArm('right');
            } else {
                bot.setControlState('sneak', true);
                setTimeout(() => {
                    if (bot && bot.entity) bot.setControlState('sneak', false);
                }, 300);
            }
        }
        const randomTime = Math.floor(Math.random() * (25000 - 8000 + 1)) + 8000;
        setTimeout(doRandomAction, randomTime);
    }

    bot.on('spawn', () => {
        console.log('OK');
        setTimeout(doRandomAction, 5000);
    });

    bot.on('kick', (reason) => console.log(reason));
    bot.on('error', (err) => console.log(err.message));
    
    bot.on('end', () => {
        setTimeout(createBot, 45000);
    });
}

createBot();
