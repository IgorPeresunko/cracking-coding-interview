/*
You have a string s that consists of English letters, punctuation marks, whitespace characters, and brackets. It is guaranteed that the parentheses in s form a regular bracket sequence.

Your task is to reverse the strings contained in each pair of matching parentheses, starting from the innermost pair. The results string should not contain any parentheses.

Example

For string s = "a(bc)de", the output should be
reverseParentheses(s) = "acbde".
*/

function reverseParentheses(s) {    
    if (s.indexOf('(') >= 0) {        
        const str = s.match(/\(([^()]+)\)/i)
        const reversed = str[1].split('').reverse().join('')
        const newStr = s.slice(0, str.index) + reversed + s.slice(str.index + reversed.length + 2)
        
        return reverseParentheses(newStr)
    }
    
    return s
}