const readline = require('../utils/readline');

module.exports = async () => {
    console.log('Qual seu nome');
    const userName = await readline();
    console.log(`Bom dia ${userName}`);
}