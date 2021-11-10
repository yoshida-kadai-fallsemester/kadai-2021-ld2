const product = (a, b) => {
    return a * b
}
const sum = (n) => {
    let result = 0
    for (let i = 1; i < n + 1; i = i + 1) {
        result = result + i
    }
    return result 
}
console.log(product(107, 109))
console.log(sum(500))