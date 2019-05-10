const readline = require('../utils/readline');

module.exports = async () => {
    console.log('Put 4 number to verify if is possible make a triangle');
    console.log('Example : 2 4 6 11');

    const numbersWithSpace = await readline();
    const numbers = numbersWithSpace.split(' ');

    let isAValidTriangle = true;
    
    numbers.forEach((item)=>{
        if ( isNaN(item) || item < 1 || item > 100 ) 
            isAValidTriangle = false;
    })

    console.log(isAValidTriangle ?  'That numbers can build a triangle' :
                                    'Is not possible build a triangle with that numbers')
}

