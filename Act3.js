function isOdd(num) {
    let oddNumbers = [];
    for (let i = 2; i <= num; i++) {
        if (i%2!=0) {
            oddNumbers.push(i);
        }
    }
    return oddNumbers;
}

function serieS(end) {
    let res=0,numbers=[];
    numbers=isOdd(end);
    for (let i = 0; i < numbers.length; i++) {
        if (i==0) {
            res = 4 - (4/numbers[i]);
        }else if (numbers.length%2==0&&i==numbers.length-1) {
            res += (4/numbers[i])
        }else {
            res += ((4/numbers[i])-(4/numbers[++i]));
        }
    }
    return res;
}
console.log(`El resultado de la Serie S es: ${serieS(11)}`);

function factorial(n) { if (n==0) {return 1} return n * factorial(n - 1) }

function serieE(end) {
    let res=0;
    for (let i = 0; i <= end; i++) {
        if (i==0) {
            res+=1;
            //console.log(`index: ${i} | res: ${res}`);
        }else{
            res+=1/factorial(i);
            //console.log(`index: ${i} | fac: ${factorial(i)} | res: ${res}`);
        }
    }
    return res;
}
console.log(`El resultado de la Serie E es: ${serieE(5)}`)