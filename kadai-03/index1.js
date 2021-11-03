const n = parseInt(process.argv[2])

let isPrime = true
for (let i = 2; i <=n - 1; i = i + 1) {
     if(n % i === 0) {
        // console.log('素数でない')
         isPrime = false
         break
     }
}
if (isPrime) {
    console.log(n)
}