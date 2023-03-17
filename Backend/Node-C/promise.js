const {readFile} = require('fs/promises')

async function read() {
    try {
    //throw new Error('Esto es un error')
    const result = await readFile('./data/first.txt', 'utf-8')
    const result2 = await readFile('./data/second.txt', 'utf-8')
    const result3 = await readFile('./data/third.txt', 'utf-8')
    console.log(result)
    console.log(result2)
    console.log(result3)
    } catch (error) {
        console.log(error);
    }
}

read()