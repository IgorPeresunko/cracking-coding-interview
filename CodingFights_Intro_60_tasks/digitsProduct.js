/*
Given an integer product, find the smallest positive (i.e. greater than 0) integer the product of whose digits is equal to product. If there is no such integer, return -1 instead.

Example

    For product = 12, the output should be
    digitsProduct(product) = 26;
    For product = 19, the output should be
    digitsProduct(product) = -1.

*/

function digitsProduct(product) {
    let min = -1
    new Array(10000).fill(0).every((_, i) => {
        const pr = i.toString().split('').map(Number).reduce((a, b) => a * b, 1)
        if (pr === product && i !== 0) {
            min = i
            return false
        }
        return true
    })
    
    return min
}
