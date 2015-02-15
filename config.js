module.exports = {
    tankSize: 5,
    port: 3009,
    tick: 100,
    fire: 1000,
    respawn: 10, // Количество тиков от смерти до появления в новом месте
    immortal: 25, // Максимальное время бессмертия после респавна

    aiTimeout: 10, // Максимально допустимое время на 1 тик для бота
    maxPlayers: 10, // Максимальное число игроков на арене
    saveBestPlayersNum: 0 // Число лучших игроков которые не вылетают при рестарте арены
};