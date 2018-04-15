/*
Check if the given string is a correct time representation of the 24-hour clock.

Example

    For time = "13:58", the output should be
    validTime(time) = true;
    For time = "25:51", the output should be
    validTime(time) = false;
    For time = "02:76", the output should be
    validTime(time) = false.
*/
const validTime = time =>
    RegExp(/^[0-2][0-3]:[0-5][0-9]$/).test(time)