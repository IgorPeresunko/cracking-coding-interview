/*
Given a string, return its encoding defined as follows:

First, the string is divided into the least possible number of disjoint substrings consisting of identical characters
for example, "aabbbc" is divided into ["aa", "bbb", "c"]
Next, each substring with length greater than one is replaced with a concatenation of its length and the repeating character
for example, substring "bbb" is replaced by "3b"
Finally, all the new strings are concatenated together in the same order and a new string is returned.
Example

For s = "aabbbc", the output should be
lineEncoding(s) = "2a3bc".
*/

lineEncoding = s =>
    [...s.split('').slice(1), ''].reduce(([str, inRow], char, i) =>
        s[i] === char
            ? [str, inRow + 1]
            : [`${str}${inRow === 1 ? '' : inRow}${s[i]}`, 1]
        , ['', 1])[0]