let txtDias = document.getElementById("txtDias");
let txtHoras = document.getElementById("txtHoras");
let txtMinutos = document.getElementById("txtMinutos");
let txtSegundos = document.getElementById("txtSegundos");

//funcion de control
function countdown(){
    let ahora = new Date();
    let final = new Date(2022, 7, 29);
    //la convertimos a timestap para hacer calculos con eso
    let actual = ahora.getTime();
    let evento = final.getTime();
    //diferencia entre fechas en milisegundos
    let diferencia = evento - actual;

    //obtenemos la diferencia expresada en segundos, minutos, horas y dias
    let segundos = Math.trunc(diferencia / 1000);
    let minutos = Math.trunc(segundos / 60);
    let horas = Math.trunc(minutos/60);
    if(horas < 10){
        horas = "0" + horas;
    }
    let dias = Math.trunc(horas / 24);

    //obtenemos los sobrantes 
    horas = horas % 24;
    minutos = minutos % 60;
    segundos = segundos % 60;


    //imprimimos segundos, minutos, horas y dias
    txtDias.innerText = dias;
    txtHoras.innerText = horas;
    txtMinutos.innerText = minutos;
    txtSegundos.innerText = segundos;

    
}

countdown();
setInterval(countdown, 1000);