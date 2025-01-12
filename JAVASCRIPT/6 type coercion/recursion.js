// iterative factorial
function getfactorialIterative(num){
    let i = 1;
    let result = 1;
    while( i <= num){
        result *= i;
        i++;
    }
    return result;
}
 console.log(getfactorialIterative(4)); 

 function getFactorial(num){
    if(num === 1 || num === 0) return 1;

    return num * getFactorial(num-1);
 } 
 console.log(getFactorial(9));