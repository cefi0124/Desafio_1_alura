// var texto1 = document.getElementById('texto1');
var texto2 = document.getElementById('texto2');
// var cubo2 = document.getElementById('cubo2');
// var cuboOculto = document.getElementById('cuboOculto');
var textoCifrado;
var textoEncriptado;
var gi;

function encriptar(){
    let texto = document.getElementById('texto1').value;
    let textoCifrado =   texto.replace(/e/gi,'enter');
    textoCifrado =   textoCifrado.replace(/i/gi,'imes');
    textoCifrado =   textoCifrado.replace(/a/gi,'ai');
    textoCifrado =   textoCifrado.replace(/o/gi,'ober');
    textoCifrado =   textoCifrado.replace(/u/gi,'ufat');
    texto2.textContent = textoCifrado;
  estiloCubo2();
  
 }
function desencriptar(){
    let texto = document.getElementById('texto1').value;
    let textoEncriptado =   texto.replace(/enter/gi,'e')
    textoEncriptado =   textoEncriptado.replace(/imes/gi,'i')
    textoEncriptado =   textoEncriptado.replace(/ai/gi,'a')
    textoEncriptado =   textoEncriptado.replace(/ober/gi,'o')
    textoEncriptado =   textoEncriptado.replace(/ufat/gi,'u');
    texto2.textContent = textoEncriptado;
  estiloCubo2();
 
}
function copiar(){
  navigator.clipboard.writeText(texto2.textContent);  
}
function estiloCubo2(){
  cubo2.style.display='none';
  cuboOculto.style.display='flex';
  texto2.style.fontStyle='normal';
  texto2.style.fontWeight='400';
  texto2.style.fontSize='24px';
  texto2.style.lineHeight='150%';
  texto2.style.color='#495057';
  texto2.style.background='white';
 }