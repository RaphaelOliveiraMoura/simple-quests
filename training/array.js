// testsWithASimpleArrayOfNumbers();
testsWithAAnimalObjectArray();

function testsWithASimpleArrayOfNumbers(){
    const numbers = [1, 2, 5, 6, 8, 1, 6, 7];
    console.log(numbers);
     
    // That function get first occcurrence that a number appear in array
    const firstOccurrenceInArray = numbers.indexOf(6);
    console.log(`the number 6 appear first in the index ${firstOccurrenceInArray}`);
     
    // This function will be remove the number in the index (first param) in array
    numbers.splice(firstOccurrenceInArray, 1);
    console.log(numbers);  
    console.log(`the number with index ${firstOccurrenceInArray} was removed from array`);
}

function testsWithAAnimalObjectArray(){
    const animals = [
        {name: 'Giraffa', age: 12},
        {name: 'Cat', age: 4},
        {name: 'Mouse', age: 5},
        {name: 'Dog', age: 6},
        {name: 'Mouse', age: 1},
        {name: 'Bird', age: 2},
        {name: 'Cat', age: 6},
        {name: 'Horse', age: 10}
    ];

    console.log(animals);

    const namesOfAnimals = animals.map((animal)=>animal.name);
    const agesOfAnimals = animals.map((animal)=>animal.age);
    const animalsOldestThan6Years = animals.filter((animal)=>animal.age > 6);
    const arrayWithouRepeat = animals.filter((animal, index, self)=>{
        const animalsWithTheSameNameAndBiggestIndex = self.filter(
            (selfAnimal, selfIndex) => animal.name == selfAnimal.name && selfIndex >= index
        )
        return animalsWithTheSameNameAndBiggestIndex.length === 1;
    })

    console.log('Array without repeat \n', arrayWithouRepeat);
}