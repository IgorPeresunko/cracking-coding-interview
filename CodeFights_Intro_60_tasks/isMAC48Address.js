/*
For inputString = "00-1B-63-84-45-E6", the output should be
isMAC48Address(inputString) = true;
For inputString = "Z1-1B-63-84-45-E6", the output should be
isMAC48Address(inputString) = false;
For inputString = "not a MAC-48 address", the output should be
isMAC48Address(inputString) = false.
*/

isMAC48Address = inputString =>
    inputString.split('-').every(str => /^[0-9A-F][0-9A-F]$/i.test(str))