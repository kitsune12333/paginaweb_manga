$(document).ready(function(){
    $("#formulario").submit(function(){
        var correo = $("#inputDireccion").val();
        var descri = $("#inputDireccion2").val();
        var ciudad = $("#inputCity").val();
        var region = $("#inputState").val();
        
        if(correo == ""){
            event.preventDefault();
            alert("Falta el correo")
        }else{
            if(descri == ""){
                event.preventDefault();
                alert("Falta la descripcion")
            }else{
                if(ciudad == ""){
                    event.preventDefault();
                    alert("Falta la ciudad")
                }else{
                    if(region == "Seleccionar..."){
                        event.preventDefault();
                        alert("porfavor escoja region")
                    }else{
                        alert("formulario enviado exitosamente")
                    }
                }
            }
        }
    });

});