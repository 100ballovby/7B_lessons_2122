// Найти все делители числа n, кроме 1 и самого числа

let n = 116;

for (let div = 1; div < n; div++) {
    if ((div !== 1 && div !== n) && n % div === 0) {
        console.log(div);
    }
}


