"use strict";

/* Tarea
 * Objetivos: adquirir herramientas y poner
 * en práctica lo visto en clase
 */

 //Enunciado

//1)
//Leer el título del "header" del post e imprimirlo en consola.
  let titulo = document.querySelector(".post-header");
  console.log(titulo.textContent);

//2)
//Cambiar título utilizando javascript por otro cualquiera.
let texto = document.querySelector(".post-header");
texto.textContent="¡toca un boton!";
texto.style.color="red";