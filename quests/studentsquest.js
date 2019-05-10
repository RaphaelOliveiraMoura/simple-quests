const readline = require('../utils/readline');

function fecthAndGetDataInformationAboutGrades(grades){
    return grades.map((item, index)=>{

        const arrayItemAmmount = grades.filter((i)=>{
            return item === i
        })
        const itemAmmount = arrayItemAmmount.length;

        return {
            'index': index,
            'value': item,
            'ammount': itemAmmount
        }
    })
}

function sanitizeArrayOfgradleInformation(gradesInformation){
    const sanitizedInformations = gradesInformation.filter(function(item, index, self) {
        console.log(`Comparing ${self.indexOf(item)} with ${item.value}`); 
        return self.indexOf(item) == index;
    })
    return sanitizedInformations;
}

function getTheValueMostFrequentInInformationGrade(gradesInformation){
    let mostFrequentGradle = gradesInformation[0];
    gradesInformation.forEach((item)=>{
        if(item.ammount > mostFrequentGradle.ammount)
            mostFrequentGradle = item;
    })
    return mostFrequentGradle;
}

module.exports = async () => {
    console.log('Write the number of students in the class');
    const numberOfStudents = await readline();
    console.log('Now, put the list of students grades');
    const studentsGradesWithSpace = await readline();
    const studentsGrades = studentsGradesWithSpace.split(' ');
    
    const gradesInformation = fecthAndGetDataInformationAboutGrades(studentsGrades);
    const sanitizedGradesInformation = sanitizeArrayOfgradleInformation(gradesInformation);
    console.log(sanitizedGradesInformation);
    const mostFrequentGradle = getTheValueMostFrequentInInformationGrade(sanitizedGradesInformation);

    console.log(`The value most frequent in grades is ${mostFrequentGradle.value} with ${mostFrequentGradle.ammount} occurried`);
}