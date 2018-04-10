/*
Define a word as a sequence of consecutive English letters. Find the longest word from the given string.

Example

For text = "Ready, steady, go!", the output should be
longestWord(text) = "steady".
*/

const longestWord = text =>
    text.match(/[a-zA-Z]+/g).sort((a, b) => b.length > a.length)[0]