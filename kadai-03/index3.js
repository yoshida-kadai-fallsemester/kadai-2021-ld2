
let count_3n1 = 0 
let count_3n2 = 0

for (let n = 2; n <= 10000; n = n + 1) {

    let isPrime = true
    for (let i = 2; i <= n - 1; i = i + 1) {
        if(n % i === 0) {
            // console.log('素数でない')
            isPrime = false
            break
        }
    }

    if (isPrime) {
        if(n % 3 === 1) {
            count_3n1 = count_3n1 + 1
        } else if (n % 3 === 2){
            count_3n2 = count_3n2 + 1
        }
    }
}

console.log('3で割ったら1余る素数の数:' + count_3n1)
console.log('3で割ったら2余る素数の数:' + count_3n2)