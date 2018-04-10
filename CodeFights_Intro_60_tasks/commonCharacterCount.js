/*
Given two strings, find the number of common characters between them.

Example

For s1 = "aabcc" and s2 = "adcaa", the output should be
commonCharacterCount(s1, s2) = 3.

Strings have 3 common characters - 2 "a"s and 1 "c".
*/

function commonCharacterCount(s1, s2, common = 0) {
    if (s1.length <= 0 || s2.length <= 0) {
        return common
    }
    
    if (s2.indexOf(s1[0]) >= 0) {
        return commonCharacterCount(s1.replace(s1[0], ''), s2.replace(s1[0], ''), common + 1)
    }
    
    return commonCharacterCount(s1.replace(s1[0], ''), s2, common)
}