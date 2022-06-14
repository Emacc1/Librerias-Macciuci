const propiedades = [];

class propiedad {
    constructor(tipo, zona, direccion, habitaciones, precio) {
        this.tipo  = tipo;
        this.zona  = zona;
        this.direccion  = direccion;
        this.habitaciones  = parseFloat(habitaciones);
        this.precio  = parseFloat(precio);
        this.vendido = false;
    }
}
//PROPIEDADES
propiedades.push(new propiedad (`departamento`, `Belgrano`, `La Pampa 2026`,`19`,`65000`));
propiedades.push(new propiedad (`PH`, `Belgrano`, `La Pampa 2900`,`2`,`45000`));
propiedades.push(new propiedad (`departamento`, `Palermo`, `Scalabrini Ortiz 1800`,`4`,`85000`));
propiedades.push(new propiedad (`casa`, `Retiro`, `Paraguay 435`,`3`,`55000`));


//LISTAS DE PROPIEDADES
const listaBelgrano = propiedades.filter((propiedad)=>propiedad.zona==`Belgrano`);
const listaPalermo = propiedades.filter((propiedad)=>propiedad.zona== `Palermo`);
const listaRetiro = propiedades.filter((propiedad)=>propiedad.zona== `Retiro`);

let listaBString = listaBelgrano.toString();
let listaPString = listaPalermo.toString();
let listaRString = listaRetiro.toString();


// INPUT

let button6 = document.createElement(`button`);
document.getElementById(`inputBox`).appendChild(button6);
button6.innerHTML = `confirmar`;

let input = document.getElementById(`inputLS`).value;

button6.onclick=()=> localStorage.setItem(`user`, input);


// && alert(`bienvenido `localStorage.getItem(`user`)) ;

//ZONA
let cajaMensaje = document.createElement(`h3`);
let button0 = document.createElement(`button`);
let button1 = document.createElement(`button`);
let button2 = document.createElement(`button`);
// let button3 = document.createElement(`button`);

document.getElementById(`zona`).appendChild(cajaMensaje);
document.getElementById(`zona`).appendChild(button0);
document.getElementById(`zona`).appendChild(button1);
document.getElementById(`zona`).appendChild(button2);

cajaMensaje.innerHTML = `PRECIO PROMEDIO POR ZONA`;
button0.innerHTML = `BELGRANO`;
button1.innerHTML = `PALERMO`;
button2.innerHTML = `RETIRO`;


//PRECIO
let cajaMensaje1 = document.createElement(`h3`);
let button3 = document.createElement(`button`);
let button4 = document.createElement(`button`);
let button5 = document.createElement(`button`);

document.getElementById(`busqueda`).appendChild(cajaMensaje1);
document.getElementById(`busqueda`).appendChild(button3);
document.getElementById(`busqueda`).appendChild(button4);
document.getElementById(`busqueda`).appendChild(button5);

cajaMensaje1.innerHTML = `BUSCAR PROPIEDADES`;
button3.innerHTML = `BELGRANO`;
button4.innerHTML = `PALERMO`;
button5.innerHTML = `RETIRO`;
// document.getElementById(`body`).appendChild(button3);




// button.addEventListener(`onclick`, validarFormulario);
button0.onclick=()=> swal.fire(
        `El precio en promedio en Belgrano es: ` +totalBel,
        `encuentre su proxima bivienda aqui`, 
        `success`);
    
button1.onclick=()=> swal.fire(
    `El precio en promedio en Palermo es: ` +totalPal,
    `encuentre su proxima bivienda aqui`, 
    `success`);
button2.onclick=()=> swal.fire(
    `El precio en promedio en Retiro es: ` +totalRet,
    `encuentre su proxima bivienda aqui`, 
    `success`);
button3.onclick=()=> swal.fire(
    `Propiedades en Belgrano ` +listaBString,
    `encuentre su proxima bivienda aqui`, 
    `success`);
button4.onclick=()=> swal.fire(
    `Propiedades en Palermo ` +listaPString,
    `encuentre su proxima bivienda aqui`, 
    `success`);
button5.onclick=()=> swal.fire(
    `Propiedades en Retiro ` +listaRString,
    `encuentre su proxima bivienda aqui`, 
    `success`);;


 
let totalTotal = 0;
let totalBel = 0 ;
let totalRet = 0 ;
let totalPal = 0 ;

// for (propiedad of listaBelgrano){
    //     console.log(listaBelgrano);
    // }
    
for (propiedad of listaBelgrano){
    totalBel = totalBel + propiedad.precio;   
}

let totalPromBel = totalBel / listaBelgrano.length;
console.log(totalPromBel);

for (propiedad of listaRetiro){
    console.log(propiedad.precio);
    totalRet = totalRet + propiedad.precio;   
}

let totalPromRet = totalRet / listaRetiro.length;
console.log(totalPromRet);

for (propiedad of listaPalermo){
    console.log(propiedad.precio);
    totalPal = totalPal + propiedad.precio;   
}

let totalPromPal = totalPal / listaPalermo.length;
console.log(totalPromPal);

// for (let index = 0; index < 10; index++) {
    //     const element = listaBelgrano[index];
    //     console.log(element)
    // }
    
