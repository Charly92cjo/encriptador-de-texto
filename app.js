function validar() {
  var texto = document.getElementById("textarea").value;
  var validacion = /^[a-zñ\s]+$/;
  if (validacion.test(texto)) {
    return true;
  } else {
    return false;
  }
}

function encriptar() {
  if (validar() === true) {
    var texto = document.getElementById("textarea").value;
    if (texto == "") {
      document.getElementById("no-mensaje").style.display = "block";
      document.getElementById("salida-texto").style.display = "none";
      document.getElementById("boton-copiar").style.display = "none";
    } else {
      texto = texto.replace(/e/g, "enter");
      texto = texto.replace(/i/g, "imes");
      texto = texto.replace(/a/g, "ai");
      texto = texto.replace(/o/g, "ober");
      texto = texto.replace(/u/g, "ufat");
      document.getElementById("label-texto").innerHTML = "Texto encriptado:";
      document.getElementById("salida-texto").value = texto;
      document.getElementById("no-mensaje").style.display = "none";
      document.getElementById("salida-texto").style.display = "inline";
      document.getElementById("boton-copiar").style.display = "inline";
      document.getElementById("label-texto").style.display = "inline";
    }
  } else {
    alert(
      "El texto no es válido. Solo se permiten letras minúsculas y espacios."
    );
  }
}

function desencriptar() {
  if (validar() === true) {
    var texto = document.getElementById("textarea").value;
    if (texto == "") {
      document.getElementById("no-mensaje").style.display = "block";
      document.getElementById("salida-texto").style.display = "none";
      document.getElementById("boton-copiar").style.display = "none";
    } else {
      texto = texto.replace(/enter/g, "e");
      texto = texto.replace(/imes/g, "i");
      texto = texto.replace(/ai/g, "a");
      texto = texto.replace(/ober/g, "o");
      texto = texto.replace(/ufat/g, "u");
      document.getElementById("label-texto").innerHTML = "Texto desencriptado:";
      document.getElementById("salida-texto").value = texto;
      document.getElementById("no-mensaje").style.display = "none";
      document.getElementById("salida-texto").style.display = "inline";
      document.getElementById("boton-copiar").style.display = "inline";
      document.getElementById("label-texto").style.display = "inline";
    }
  } else {
    alert(
      "El texto no es válido. Solo se permiten letras minúsculas y espacios."
    );
  }
}

function copiar() {
  let texto = document.getElementById("salida-texto");
  texto.select();
  document.execCommand("copy");
  alert("El texto ha sido copiado al portapapeles.");
}
var spanAnoActual = document.getElementById("ano-actual");
var anoActual = new Date().getFullYear();
spanAnoActual.innerText = anoActual;

console.log(
  "%c¡Bienvenido a mi página! 😊 ¿Eres un explorador curioso? Soy Charly Otero. Gracias por visitar, ¡espero que te guste!",
  "color:#0f0;background:#000;padding:50px;border:3px solid #00f;font-family:Lobster;font-size:15px"
);
