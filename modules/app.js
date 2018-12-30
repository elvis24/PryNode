const os = require('os');
const fs = require('fs');

let cpu = os.cpus();
let sistema = os.platform();
let usuario = os.hostname();

/*fs.appendFile('papucho.txt','suscribete al canal', function(eror){
    if(eror){
        console.log('Error al crear archivo');
    }
});*/

setTimeout(() =>{
    console.log("Terminar")
} , 2000);

