const http = require('http')

const server = http.createServer((request, response) => {

    console.log(request.url)
    

    if (request.url === '/'){
        response.write('Welcome to de server')
        return response.end()
    }

    if (request.url === '/about'){
        response.write('acerca de')
        return response.end()
    }
    

    response.write(`
    <h1>not found<h1>
    <p>esta pagina no se encontro<p>
    <a href="/">Volver a la pagina principal</a>`)
    response.end()
})

server.listen(3000)

console.log('servidor escuchando puerto 3000')