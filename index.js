const mineflayer = require('mineflayer');

function createBot() {
    const bot = mineflayer.createBot({
        host: 'breakpointsmp.falix.gg',
        port: 58392,
        username: 'FlixUpTimeBot',
        version: '1.21.1',
        checkTimeoutInterval: 60000,
        hideErrors: true
    });

    bot.on('spawn', () => {
        console.log('Бот успешно зашел!');
        // Прыгаем реже (раз в 15 секунд), чтобы сервер не считал это спамом пакетов
        setInterval(() => {
            if (bot && bot.entity) {
                bot.setControlState('jump', true);
                setTimeout(() => {
                    if (bot && bot.entity) bot.setControlState('jump', false);
                }, 400);
            }
        }, 15000);
    });

    bot.on('kick', (reason) => console.log(`Кикнули: ${reason}`));
    bot.on('error', (err) => console.log(`Ошибка: ${err.message}`));
    
    bot.on('end', () => {
        // Ждем целых 30 секунд перед перезаходом, чтобы сервер успел "забыть" старое соединение
        setTimeout(createBot, 30000);
    });
}

createBot();
