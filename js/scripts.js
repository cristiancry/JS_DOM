

//
//seleccionar elementos de HTML desde javascript
//

//querySelector
const heading=document.querySelector('.header__texto h2');//retorna 0 o 1 elementos
console.log(heading.textContent);
//querySelectorAll
const enlaces=document.querySelectorAll('.navegacion a');
enlaces[0].textContent='Nuevo Texto Para Enlace'
console.log(enlaces[0].textContent);
enlaces[0].href='https:\\www.google.com';
enlaces[0].classList.add('clase_nueva');
enlaces[0].classList.remove('navegacion__enlace');
//getElementById
const heading2=document.getElementById('heading');
console.log(heading2);




//
//crear elemtnos de html en javascript
//
/*
//generar nuevo enalce
const nuevoEnlace=document.createElement('a');
//agregar el href
nuevoEnlace.href='nuevo_enlace.html';
//agregar el texto
nuevoEnlace.textContent='Tienda Vistual';
//agregar la clase
nuevoEnlace.classList.add('navegacion_enlace');
//agregarlo al documento
const navegacion=document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace);
console.log(nuevoEnlace);
*/

//
//Eventos
//

/*
console.log(1);
window.onload=function(){
    console.log(3);
}
window.addEventListener('load',function(){//load espera a que el javascript y archivos esten listos
    console.log(2);
})

document.addEventListener('DOMContentLoaded', function(){//solo espera a que cargue el html
    console.log(4);
})
console.log(5);

window.onscroll= function(){
    console.log('scrolling');
}
*/

//
//Seleccionar elemtnos y asociarles un evento
//



/*const btnEnviar=document.querySelector('.boton--primario');
btnEnviar.addEventListener('click',function (e){
    console.log (e);
 e.preventDefault();
    console.log('enviando formulario......');
});*/



//
//Eventos de los uinputs y textarea
//


const datos={
    nombre:'',
    email:'',
    mensaje:'',
}

const nombre=document.querySelector('#nombre');
const email=document.querySelector('#email');
const mensaje=document.querySelector('#mensaje');
nombre.addEventListener('input',function(e){
    //console.log('escribiendo....');
    //console.log(e.target.value);
    datos[e.target.id]=e.target.value;
    console.log(datos);
} );
email.addEventListener('input',function(e){
    //console.log('escribiendo....');
    //console.log(e.target.value);
    datos[e.target.id]=e.target.value;
    console.log(datos);
} );
mensaje.addEventListener('input',function(e){
    //console.log('escribiendo....');
    //console.log(e.target.value);
    datos[e.target.id]=e.target.value;
    console.log(datos);
} );

//
//evento submit
//

const formulario=document.querySelector('.formulario');
formulario.addEventListener('submit', function(evento){
evento.preventDefault();

//
//validar formulario
//

const {nombre,email,mensaje}=datos;
if (nombre==''||email==''||mensaje==''){
    mostrarAlerta('todos los campos son obligatorios','error');
    return;
}
else

mostrarAlerta('mensaje enviado correctamente');

})
/*function mostrarError(mensaje)
{
   const error= document.createElement('P');
   error.textContent=mensaje;
   error.classList.add('error');
   formulario.appendChild(error);
   console.log(error);
}
function mostrarMensaje(mensaje)
{
    const alerta=document.createElement('P');
    alerta.textContent=mensaje;
    alerta.classList.add('correcto');
    formulario.appendChild(alerta);
    
}*/
function mostrarAlerta(mensaje,error=null)
{
const alerta=document.createElement('p');
alerta.textContent=mensaje;
if(error)
{
    alerta.classList.add('error');
}
else
{
    alerta.classList.add('correcto');
}
formulario.appendChild(alerta);
setTimeout(()=>{
    alerta.remove();                  
},5000)
}

