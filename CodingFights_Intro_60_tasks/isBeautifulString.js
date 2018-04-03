/*
A string is said to be beautiful if b occurs in it no more times than a; c occurs in it no more times than b; etc.

Given a string, check whether it is beautiful.

Example

For inputString = "bbbaacdafe", the output should be
isBeautifulString(inputString) = true;
For inputString = "aabbb", the output should be
isBeautifulString(inputString) = false;
For inputString = "bbc", the output should be
isBeautifulString(inputString) = false.
*/

function isBeautifulString(inputString) {
    const countCharsInArr = (arr, search) =>
        arr.reduce((sum, char) => char === search ? sum + 1 : sum, 0)
    
    let isBeautiful = true
    const uniq = inputString.split('').map(char => char.charCodeAt(0) - 'a'.charCodeAt(0))
    
    new Array(26).fill(0)
        .map((_, i) => countCharsInArr(uniq, i))
        .forEach((char, i, arr) => {
            if (char > arr[i-1])                
                isBeautiful = false
        }) 
    

    return isBeautiful
}
