const readline = require('../utils/readline');

module.exports = async () => {
    console.log('Digite valores de Pesos presentes nas extremidades da gangorra (P1 e P2) e comprimento (C1, C2) da gangorra.');
    console.log('(P1 C1 P2 C2) Ex: 35 2 40 2');
    
    const numberWithSpaces = await readline();
    const [weight1, lenght1, weigth2, lenght2] = numberWithSpaces.split(' ');
    
    const size1 = weight1 * lenght1;
    const size2 = weigth2 * lenght2;
    const isBalanced =  size1 === size2 ? 0 : size1 > size2 ? -1 : 1;

    isBalanced ===  0  ?  console.log('The seesaw is balaced') :
    isBalanced === -1  ?  console.log('The seesaw is turn to the left side') :
                          console.log('The seesaw is turn to the right side');
}