

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
        console.log(n)
    }
}

