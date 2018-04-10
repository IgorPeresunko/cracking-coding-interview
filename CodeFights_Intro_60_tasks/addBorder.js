/*
Given a rectangular matrix of characters, add a border of asterisks(*) to it.

Example

For

picture = ["abc",
           "ded"]
the output should be

addBorder(picture) = ["*****",
                      "*abc*",
                      "*ded*",
					  "*****"]
*/

function addBorder(picture) {
    const stars = '*'.repeat(picture[0].length + 2)
    return [stars, ...picture.map(str => `*${str}*`), stars]
}
