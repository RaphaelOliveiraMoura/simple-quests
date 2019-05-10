const askNameAndReturnASalutation = require('./quests/asknamequest');
const askNumbersAndVerifyIfIsATriangle = require('./quests/trianglequest');
const askWeightAndLenghtOfSeesaw = require('./quests/gangorraquest');

(async ()=>{
    // await askNameAndReturnASalutation();
    // await askNumbersAndVerifyIfIsATriangle();
    await askWeightAndLenghtOfSeesaw();
    process.exit();
})()
