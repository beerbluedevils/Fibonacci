//Fibonacci
let fbNum = [];
fbNum[0] = 0;
fbNum[1] = 1;
let sum = 0;
function fiboNum(num){
    for(let i = 2; i <= num; i++){
        fbNum[i] = fbNum[i - 1] + fbNum[i - 2];
    }
    fbNum.forEach( (n) =>{sum += n})
    return sum;
}

console.log(fiboNum(10));