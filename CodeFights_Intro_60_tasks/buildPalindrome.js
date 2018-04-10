/*
Given a string, find the shortest possible string which can be achieved by adding characters to the end of initial string to make it a palindrome.

Example

For st = "abcdc", the output should be
buildPalindrome(st) = "abcdcba".
*/

function buildPalindrome(st) {
    const pal = st.split('').reverse().join('')
    
    if (pal === st)
        return st
    
    for (var i = st.length; i --> 0; )
        if (st.slice(-i) === pal.slice(0,i))
            return st + pal.slice(i)
}