window.onload = function() {

    var enlaces = document.getElementsByTagName("a");
    console.log("La cantidad de enlaces es = " + enlaces.length);

    var mensaje = "El penultimo enlace apunta a: " + enlaces[enlaces.length-2].href;
    console.log(mensaje);

    var cont = 0;
    for(var i=0; i<enlaces.length; i++) {

      if(enlaces[i].href == "http://prueba" || enlaces[i].href == "http://prueba/"){
        cont++;
      }
    }
    console.log(cont + " enlaces apuntan a http://prueba");

    var parrafos = document.getElementsByTagName("p");
    enlaces = parrafos[2].getElementsByTagName("a");
    console.log("la cantidad de enlaces del tercer párrafo es = " + enlaces.length);

  }
