const path = require('path')



//console.log(path.join('/public', 'dist', '/style', 'main.css')) //el modulo JOIN de PATH hara una ruta valida para el sistema operativo que estemos no importa si es linux o windows
const filePath = path.join('/public', 'dist', '/style', 'main.css')
console.log(path.basename(filePath))
console.log(filePath)
console.log(path.dirname(filePath))
console.log(path.parse(filePath))