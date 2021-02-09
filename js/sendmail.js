

var nombre = document.getElementById("nombre");
var email = document.getElementById("email");
var motivo = document.getElementById("motivo");
var comentario = document.getElementById("comentario");

$('#contactForm').submit(function (event) {
    event.preventDefault();
    grecaptcha.reset();
    grecaptcha.execute();
});

function formSubmit(response) {
    console.log(response);
    // submit the form which now includes a g-recaptcha-response input
    this.enviarDatos();
}

function enviarDatos() {
    if (this.ValidaDatos()) {
        $.ajax({
            url: 'http://sendermail.purtermica.com.ar/send-email',            
            //url: 'http://localhost:3000/send-email',
            type: 'POST',
            data: JSON.stringify({
                nombre: nombre.value,
                email: email.value,
                motivo: motivo.value,
                comentario: comentario.value
            }),
            contentType: 'application/json; charset=utf-8',
            dataType: "json",
            success: function (respuesta) {
                //console.log(respuesta);
                nombre.value = "";
                email.value = "";
                motivo.value = "CONSULTA";
                comentario.value = "";
                grecaptcha.reset();
                alert("GRACIAS POR CONTACTARNOS..");
            },
            error: function (error) {
                console.log("No es posible completar la operación", error);
            }
        });
    }
}

function ValidaDatos() {
    return this.nombre.value !== "" && this.validarMail(this.email.value) && this.motivo.value !== ""
        && this.comentario.value !== "";
}

function validarMail(valorMail) {
    if (valorMail !== "") {
        emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
        //Se muestra un texto a modo de ejemplo, luego va a ser un icono
        if (emailRegex.test(valorMail)) {
            return true
        }
    }
    return false;
}


