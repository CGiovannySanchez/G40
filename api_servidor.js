//Importar la libreria 
const servidorWeb = require("express");
const puerto = 3001;

// Crear la aplicacion web
const app = servidorWeb();

// Configuracion Web
app.use( servidorWeb.urlencoded({extended: true}) );
app.use( servidorWeb.json() );
app.use( servidorWeb.raw() ); 

app.get('/', (req, res) => {
    res.send("Bienvenido a mi API");
});

app.get('/listadoPersonas', (req, res) =>{

    //Conecta a base
    let listadoPersonas = [];

    let persona1 = {
        "nombre" : "Giovanny",
        "apellido" : "Sanchez",
        "Edad" : 38,
        "TieneHijos" : true
    }
    
    let persona2 = {
        "nombre" : "Santiago",
        "apellido" : "Limas",
        "Edad" : 20,
        "TieneHijos" : false
    }

    listadoPersonas.push(persona1);
    listadoPersonas.push(persona2);

    res.send(listadoPersonas);

});

app.post('/registro', (req, res) => {
    /*
    const nombre = req.body.nombre;
    const detalle  = req.body.detalle;
    
    res.send(nombre + ", " + detalle);
    */
   const contenido = req.body;

   res.send(contenido);
});

app.listen(puerto, () => {
    console.log("El servidor se inicio en el puerto " + puerto);
});