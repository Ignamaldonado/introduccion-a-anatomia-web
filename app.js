//iniciar npm e instalar express 
//ACORDARSE QUE HAY QUE PONER EL app.js EN LA MAIN DEL package.json
//Acordarse que hay que bajar los modulos con npm install si haces un clone
const  express = require('express'); //modulo express
const path = require('path'); //modulo path para usar a la hora de rutear los documentos html

const app = express(); //la variable contiene la funcion express

var saludito = "te saludamo"; 

var producto = {  
        tipoProducto: null,
        precio : null,
        cantidad : null,};

app.listen(3000, () => console.log("ta funcando bro")); //con listen empieza a correr el servidor y se estructura como (puerto, alternativamente una funcion que tire en consola que esta funcionando)


app.get ("/", (req, res) => {res.sendFile(path.resolve(__dirname, "./home/index.html"))}) //un get que usa un sendfile utilizando path y el metodo resolve para definir donde se encuentra el documento HTML para usarlo en la ruta raiz... donde __dirname es la carpeta donde esta app.js y desde ahi buscas el archivo siempre acordandote de usar "./RUTA"

app.get('/home', (req, res) => {res.send("ESTA ES LA HOME")}); //un get que manda un send a la ruta

app.get ("/perfil", (req, res) => {res.send (saludito)}); //un get que manda un send a la ruta y usa la variable que defini arriba

app.get("/producto/agregar", (req, res) => {res.send(producto)}); //un get que manda un send a la ruta y usa el objeto definido arriba


