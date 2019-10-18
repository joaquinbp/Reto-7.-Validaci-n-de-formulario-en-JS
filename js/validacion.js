function validar() {
    var nombre, apellidos, email, telefono, direccion, hora, tarjeta, nomTarjeta, expresion;
    nombre = document.getElementById("name").value;
    apellidos = document.getElementById("surname").value;
    email = document.getElementById("mail").value;
    telefono = document.getElementById("tlf").value;
    direccion = document.getElementById("address").value;
    hora = document.getElementById("hour").value;
    tarjeta = document.getElementById("numtarjeta").value;
    nomTarjeta = document.getElementById("nametarjeta").value;

    expresionTelefono = /^[\d]{3}[-]*([\d]{2}[-]*){2}[\d]{2}$/;
    expresionEmail = /\w+@\w+\.+[a-z]/;
    expresionNombre = /[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]{2,48}/;
    expresionTarjeta = /^(?:4\d([\- ])?\d{6}\1\d{5}|(?:4\d{3}|5[1-5]\d{2}|6011)([\- ])?\d{4}\2\d{4}\2\d{4})$/;

    if (nombre === "" || apellidos === "" || email === "" || telefono === "" || direccion === "" || hora === "" || tarjeta === "" || nomTarjeta === "") {
        alert("Todos los campos son obligatorios");
        return false;
    }
    else if (nombre.length > 20 || nomTarjeta.length > 20) {
        alert("El nombre es demasiado largo");
        return false;
    } else if (apellidos.length > 40) {
        alert("El apellido es demasiado largo");
        return false;
    } else if (!expresionNombre.test(nombre) || !expresionNombre.test(nomTarjeta)) {
        alert("El nombre no es válido");
        return false;
    } else if (!expresionNombre.test(apellidos)) {
        alert("El apellido no es válido");
        return false;
    } else if (email.length > 80) {
        alert("El correo es demasiado largo");
        return false;
    } else if (!expresionEmail.test(email)) {
        alert("El correo no es válido");
        return false;
    } else if (telefono.length > 9) {
        alert("El telefono es demasiado largo");
        return false;
    } else if (!expresionTelefono.test(telefono)) {
        alert("El telefono no es válido");
        return false;
    } else if (!expresionTarjeta.test(tarjeta)) {
        alert("El número de tarjeta no es válido");
        return false;
    }
    alert("Pedido realizado correctamente.");
}

