function greeting(){
    
    console.log('md wasim hasan by the in the romm');
}



// greeting();
// return value between 1-4
function getRandomOption(){
    let randomOption = Math.floor(Math.random() * 4+1);
    console.log(randomOption);
    return randomOption;
}

function getsum(num1,num2){
    let sum = num1+num2;
    return sum;
}
console.log(getsum(2,3));