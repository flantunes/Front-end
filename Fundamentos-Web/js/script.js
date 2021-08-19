/*case sensitive =>reconhece letras MAIUSCULAS e minuculas e 
diferencia elas!

document selector
por tag: document.getElementsByClassName("h3")
por classe: document.getElementsByClassName(".nomedaclasse")
por nome: document.getElementsByName("email")
por id: document.getElementById("#idDoelemento")
por seletor: document.querySelector("id/classe/nome")*/

// Variaveis:
//   var nome = 'thiago' //jeito mais antigo
//   let nome = 'thiago' //jeito mais atual - variavel que vai sofrer mudanças
//   const nome = 'thiago' //jeito mais atual - variavel 'fixa'

let nome = window.document.getElementById("nome");
let email = document.querySelector("#email");
let assunto = document.querySelector("#assunto");
let nomeOk = false;
let emailOk = false;
let assuntoOk = false;
let mapa = document.querySelector("#mapa");

nome.style.width = "100%";
email.style.width = "100%";

function validaNome() {
  let txt = document.querySelector("#txtNome");
  if (nome.value.length < 4) {
    txt.innerHTML = "Nome invalido";
    txt.style.color = "red";
  } else {
    txt.innerHTML = "Nome Válido";
    txt.style.color = "purple";
    nomeOk = true;
  }
}
function validaEmail() {
  let txt = document.querySelector("#txtEmail");
  if (email.value.length < 5) {
    txt.innerHTML = "E-mail invalido";
    txt.style.color = "red";
  } else {
    txt.innerHTML = "E-mail Válido";
    txt.style.color = "purple";
    emailOk = true;
  }
}

function validaAssunto() {
  let txt = document.querySelector("#txtAssunto");
  if (assunto.value.length >= 100) {
    txtAssunto.innerHTML = "Texto é muito grande, digite no maximo 100 caracteres";
    txtAssunto.style.color = "red";
    txtAssunto.style.display = "block";
  } else {
    txtAssunto.innerHTML = "Texto Válido";
    txtAssunto.style.display = "none";
    assuntoOk = true;
  }
}

function enviar() {
  if (nomeOk == true && emailOk == true && assuntoOk == true) {
    alert("Formulario enviado com sucesso");
  } else {
    alert("Preencha o formulario corretamente antes de enviar");
  }
}

function mapaZoom() {
  mapa.style.width = "800px";
  mapa.style.height = "600px";
}

function mapaNormal() {
  mapa.style.width = "400px";
  mapa.style.height = "250px";
}
