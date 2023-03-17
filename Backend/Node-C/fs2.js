const fs = require('fs')

fs.readFile('./data/first.txt', 'utf-8', (error, data) => {
    if (error) {
        console.log(error)
    }
    // console.log(data.toString()) utf8 arriba sino toString().
    console.log(data)
})
fs.readFile('./data/second.txt', 'utf-8', (error, data) => {
    if (error) {
        console.log(error)
    }
    // console.log(data.toString()) utf8 arriba sino toString().
    console.log(data)
})