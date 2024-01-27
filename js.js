function encriptar() {
    let texto_enviado = document.getElementById("texto").value;
    let titulo = document.getElementById("titulo");
    let parrafo = document.getElementById("parrafo");

    let texto_encriptado = texto_enviado
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");

    if (texto_enviado.length != 0) {
        titulo.textContent = texto_encriptado;
        parrafo.textContent = "Texto encriptado";
    } else {
        Swal.fire({
            title: 'Ingrese el texto',
            icon: 'error',
            padding: '2rem',
            allowOutsideClick: false,
            confirmButtonColor: '#0A3871',
        });
    }
}

function desencriptar() {
    let titulo = document.getElementById("titulo");
    let parrafo = document.getElementById("parrafo");
    let texto_enviado = document.getElementById("texto").value;
    let texto_dencriptado = texto_enviado
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");
    if (texto_enviado.length != 0) {
        titulo.textContent = texto_dencriptado;
        parrafo.textContent = "Texto desencriptado";
    }


}

function copiar() {
    let elementoTextarea = document.getElementById('titulo');
    elementoTextarea.select();
    document.execCommand('copy');
    Swal.fire({
        title: 'Texto copiado con exito',
        icon: 'info',
        padding: '2rem',
        allowOutsideClick: false,
        confirmButtonColor: '#0A3871',
    });

    elementoTextarea.setSelectionRange(0, 0);
}

