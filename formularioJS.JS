$(document).ready(function(){


    console.log('Entrox2');
    var rut = $('#rut').val();
    var nombre = $('#NOMBRE').val();
    var apellidoPaterno = $('#APPATERNO').val();
    var apellidoMaterno = $('#APMATERNO').val();
    var edad = $('#EDAD').val();
    var correo = $('#CORREO').val();
    var celular = $('#CELULAR').val();
    var profesion = $('#PROFESION').val();
    
    $('botonEnviar').click(function(event){



        $('#generoSelect').change(function() {
            var valorSeleccionado = $(this).val();
            console.log("Valor seleccionado:", valorSeleccionado);
        });

        if (rut === '' || nombre === '' || apellidoPaterno === '' || apellidoMaterno === '' || edad === '' || correo === '') {
            console.log('entro');
            alert('Tiene que completar todos los campos');
            event.preventDefault();
            return;
        }

        if (rut.length < 7) {
            alert('El rut debe tener almenos 7 digitos');
            event.preventDefault();
            return;
        }

        if (nombre.length < 5 || nombre.length > 30){
            alert('El nombre debe tener entre 5 y 30 caracteres');
            event.preventDefault();
            return;
        }

        if (apellidoPaterno.length < 5 || apellidoPaterno.length > 30){
            alert('El apellido paterno debe tener entre 5 y 30 caracteres');
            event.preventDefault();
            return;
        }

        if (apellidoMaterno < 5 || apellidoMaterno > 30){
            alert('El apellido materno debe tener entre 5 y 30 caracteres');
            event.preventDefault();
            return;
        }

        if (edad < 12 || edad > 35){
            alert('La edad debe ser entre 12 y 35 años');
            event.preventDefault();
            return;
        }

        if (celular.length < 9 || celular.length > 12){
            alert('El celular debe tener un largo entre 9 y 12 digitos')
            event.preventDefault();
            return;
        }

        
    })

    $('#botonCarta').on('click', function() {

        let textoActual = $('#CARTA').val();

        textoActual += `
        Estimado/a reclutador/a:
        
        Mi nombre es ${nombre} ${apellidoPaterno} ${apellidoMaterno}, tengo ${edad} años y soy ${profesion}. Puede contactarme a través de mi correo electrónico ${correo} o mi celular ${celular}. Adjunto encontrará mi RUT: ${rut}.
        
        Quedo atento/a a cualquier información adicional que necesite.
        
        Saludos cordiales,
        ${nombre} ${apellidoPaterno}
        `;

        $('#CARTA').val(textoActual);
    });

});
