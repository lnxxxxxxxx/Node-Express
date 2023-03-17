const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/'){
        res.write('welcome to ')
        return res.end()
    }
    if (req.url === '/about') {
        //task 
        for (let i = 0; i < 100000; i++){
            console.log(Math.random() * i)
        }
        return res.end("about page")
    }
    res.end('not found')
    
})

server.listen(3000)
console.log('Sever on port 3000')