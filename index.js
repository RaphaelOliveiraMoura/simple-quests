const askNameAndReturnASalutation = require('./quests/asknamequest');
const askNumbersAndVerifyIfIsATriangle = require('./quests/trianglequest');
const askWeightAndLenghtOfSeesaw = require('./quests/gangorraquest');
const askStudentsGradesAndReturnTheMostFrequent = require('./quests/studentsquest');

(async ()=>{
    // await askNameAndReturnASalutation();
    // await askNumbersAndVerifyIfIsATriangle();
    // await askWeightAndLenghtOfSeesaw();
    await askStudentsGradesAndReturnTheMostFrequent();
    process.exit();
})()