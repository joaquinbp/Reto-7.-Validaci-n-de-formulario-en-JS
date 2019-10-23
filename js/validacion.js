
var validate=false;

function $(selector){
    return document.querySelector(selector);
}


/*Function that validates the complete form */
function validar() {

   if(valida_Nombre() && valida_Apellidos() &&  valida_Email() && valida_Telefono() && valida_Direccion() && valida_Hora() && valida_Tarjeta() && valida_NomTarjeta()){
        alert("Pedido realizado correctamente");
        return true;
   } else{
       alert("Hemos encontrado fallos en su pedido");
       return false;
   }
}


/*Function that validates the name of the user */
function valida_Nombre(){
    var nombre = document.getElementById("name").value;
    var expresionNombre = /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/;
    if (nombre === ""){
    $("#name").classList.add("error");
    $("#errorNom").innerHTML="Campo obligatorio";
     validate=false;
    } else if (nombre.length > 20) {
        $("#name").classList.add("error");
    $("#errorNom").innerHTML="El nombre es demasiado largo";
     validate=false;
    }  else if (!expresionNombre.test(nombre)){
        $("#name").classList.add("error");
        $("#errorNom").innerHTML="El nombre no es válido";
        validate=false;
    } else{
        $("#errorNom").innerHTML="";
        $("#name").classList.remove("error");
        validate=true;
    }

    return validate;

 }

 /*Function that validates the surname of the user */
 function valida_Apellidos(){
    var apellidos = document.getElementById("surname").value;
    var expresionNombre = /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/;
    if (apellidos === ""){
        $("#surname").classList.add("error");
     $("#errorApe").innerHTML="Campo obligatorio";
        validate=false;
    } else if (apellidos.length > 40) {
        $("#surname").classList.add("error");
     $("#errorApe").innerHTML="El apellido es demasiado largo";
      validate=false;
     }  else if (!expresionNombre.test(apellidos)){
        $("#surname").classList.add("error");
         $("#errorApe").innerHTML="El apellido no es válido";
      validate=false;
     } else{
         $("#errorApe").innerHTML="";
         $("#surname").classList.remove("error");
         validate=true;
     }

     return validate;
 
  }
/*Function that validates the email is correct */
  function valida_Email(){
    var email = document.getElementById("mail").value;
    var expresionEmail = /\w+@\w+\.+[a-z]/;

    if (email === ""){
        $("#mail").classList.add("error");
        $("#errorMail").innerHTML="Campo obligatorio";
        validate=false;
    } else if (email.length > 80) {
        $("#mail").classList.add("error");
        $("#errorMail").innerHTML="El email es demasiado largo";
        validate=false;
    } else if (!expresionEmail.test(email)) {
        $("#mail").classList.add("error");
         $("#errorMail").innerHTML="El email no es válido";
        validate=false;
    }  else{
        $("#errorMail").innerHTML="";
        $("#mail").classList.remove("error");
        validate=true;
    }
    return validate;
  }

/*Function that validates the telephone number is correct */
function valida_Telefono(){
    var telefono = document.getElementById("tlf").value;
    var expresionTelefono = /^[\d]{3}[-]*([\d]{2}[-]*){2}[\d]{2}$/;

    if (telefono === ""){
        $("#tlf").classList.add("error");
        $("#errorTlf").innerHTML="Campo obligatorio";
        validate=false;
    } else if (telefono.length > 12) {
        $("#tlf").classList.add("error");
        $("#errorTlf").innerHTML="El telefono es demasiado largo";
        validate=false;
    } else if (!expresionTelefono.test(telefono)) {
        $("#tlf").classList.add("error");
        $("#errorTlf").innerHTML="El telefono no es válido";
        validate=false;
    } else{
        $("#errorTlf").innerHTML="";
        $("#tlf").classList.remove("error");
        validate=true;
    }
    return validate;
}
/*Function that validates the address is correct */
function valida_Direccion(){
    var direccion = document.getElementById("address").value;

    if (direccion === ""){
        $("#address").classList.add("error");
        $("#errorDir").innerHTML="Campo obligatorio";
        validate=false;
    } else{
        $("#address").classList.remove("error");
        $("#errorDir").innerHTML="";
        validate=true;
    }
    return validate;
}

/*Function that validates the hour is correct */
function valida_Hora(){
    var hora = document.getElementById("hour").value;

    if (hora === ""){
        $("#hour").classList.add("error");
        $("#errorHora").innerHTML="Campo obligatorio";
        validate=false;
    } else{
        $("#hour").classList.remove("error");
        $("#errorHora").innerHTML="";
        validate=true;
    }
    return validate;
}
/*Function that validates the credit card number is correct */
function valida_Tarjeta(){
    var tarjeta = document.getElementById("numtarjeta").value;
    var  expresionTarjeta = /^(?:4\d([\- ])?\d{6}\1\d{5}|(?:4\d{3}|5[1-5]\d{2}|6011)([\- ])?\d{4}\2\d{4}\2\d{4})$/;

    if (tarjeta === ""){
        $("#numtarjeta").classList.add("error");
        $("#errorTarj").innerHTML="Campo obligatorio";
        validate=false;
    } else if (!expresionTarjeta.test(tarjeta)) {
        $("#numtarjeta").classList.add("error");
        $("#errorTarj").innerHTML="El número de tarjeta no es válido";
        validate=false;
    } else {
        $("#numtarjeta").classList.remove("error");
        $("#errorTarj").innerHTML="";
        validate=true;
    }
    return validate;
}
/*Function that validates the name of the credit card is correct */
function valida_NomTarjeta(){
    var nomTarjeta = document.getElementById("nametarjeta").value;
    var expresionNombre = /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/;
    if (nomTarjeta === ""){
    $("#nametarjeta").classList.add("error");
    $("#errorNomTarj").innerHTML="Campo obligatorio";
     validate=false;
    } else if (nomTarjeta.length > 20) {
        $("#nametarjeta").classList.add("error");
    $("#errorNomTarj").innerHTML="El nombre es demasiado largo";
     validate=false;
    }  else if (!expresionNombre.test(nomTarjeta)){
        $("#nametarjeta").classList.add("error");
        $("#errorNomTarj").innerHTML="El nombre no es válido";
     validate=false;
    } else{
        $("#nametarjeta").classList.remove("error");
        $("#errorNomTarj").innerHTML="";
        validate=true;
    }
    return validate;
}

function borrar() {
    $("#errorNom").innerHTML="";
    $("#name").classList.remove("error");
    $("#errorApe").innerHTML="";
    $("#surname").classList.remove("error");
    $("#errorMail").innerHTML="";
    $("#mail").classList.remove("error");
    $("#errorTlf").innerHTML="";
    $("#tlf").classList.remove("error");
    $("#address").classList.remove("error");
    $("#errorDir").innerHTML="";
    $("#hour").classList.remove("error");
    $("#errorHora").innerHTML="";
    $("#numtarjeta").classList.remove("error");
    $("#errorTarj").innerHTML="";
    $("#nametarjeta").classList.remove("error");
    $("#errorNomTarj").innerHTML="";
}