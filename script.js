// 3) Validar que los campos no esten vacios
// 4) Validar que el mail tenga un @ y un . (y que primero este el arroba)
// 5) Validar que telefono sea 100% numerico
// 6) Validar que mensaje tenga menos de 280 caracteres 
/* <section>
<form action="" method="post" class="formulario" id="form"></form>
<input type="text" id="user-name">
<label for="user-name">ingrese su usuario</label>
<input type="email" id="user-email">
<label for="user-email">ingrese su email</label>
<input type="number" id="user-number">
<label for="user-number">ingrese su numero</label>
<textarea name="user-msg" id=",esg" cols="30" rows="10" placeholder="escriba"></textarea>
<input type="submit" value="enviar" class="enviar"> */

document.getElementById("form").addEventListener('submit',validarFormulario)

function validarFormulario (evento){
    evento.preventDefault();
    let nombre = document.getElementById("user-name").value;
    let mail = document.getElementById("user-email").value;
    let telefono = document.getElementById("user-number").value;
    let mensaje = document.getElementById("mensage").value;

// valido que complete todo 
    if (nombre = "" || mail == "" || telefono == "" || mensaje == "") {
        alert("Porfavor, complete todo el formulario")
        return
    }
  // valido el mail
  let posicionArroba = mail.indexOf("@");
  let posicionPunto = mail.lastIndexOf(".");
  //validar que esten en el string
  if (posicionArroba != -1 && posicionPunto != -1) {
    alert("ingresa email valido");
    return;
    
  } else if (posicionArroba > posicionPunto) {
    alert("ingresa email valido");
    return
    
  }
  
  //valido el telefono
  if(!(isNaN(telefono))){
    if(!(telefono.length>=8 && telefono.length<=13)){
        alert("ingrese telefono valido")
        return
    }
  }
  //valdio el mensaje
  if(!(mensaje.length>=0 && mensaje.length<=260)){
    alert("Su mensaje debe ser menor a 260 caracteres")
    return
}
}
