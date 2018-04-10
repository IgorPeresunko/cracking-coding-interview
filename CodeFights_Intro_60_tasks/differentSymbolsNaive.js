/*
Given a string, find the number of different characters in it.

Example

For s = &quot;cabca&quot;, the output should be
differentSymbolsNaive(s) = 3.

There are 3 different characters a, b and c.
*/
function differentSymbolsNaive(s) {
    return new Set([...s]).size
}
