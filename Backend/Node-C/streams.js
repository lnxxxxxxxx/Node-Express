// const {writeFile} = require('fs/promises')

// const createBigFile = async () => {
//     writeFile('./data/bigfile.txt', 'helloworld'.repeat(10))
// }
// createBigFile()

const {createReadStream} = require('fs')

const stream = createReadStream('./data/bigfile.txt', {
    encoding: 'utf-8',
    

})

stream.on('data', (chunk) => {
    console.log(chunk)
})

stream.on('end', () => {
    console.log('ya termine de leer el archivo')
})

stream.on('error', (error) => {
    console.log(error)
})
