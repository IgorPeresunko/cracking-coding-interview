/*
Given a string, output its longest prefix which contains only digits.

Example

For inputString="123aa1", the output should be
longestDigitsPrefix(inputString) = "123".
*/

function longestDigitsPrefix(s) {
    return s.split(/[a-z,\s]/)[0]
}