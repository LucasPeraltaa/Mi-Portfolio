let menuVisible = false;

//ocultar y mostar menu

function mostraryOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList="responsive";
        menuVisible=true;
    }
}

// esta funcion es para elegir una opcion y que el menui se cierre

function opcion(){
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

// animaciones para las skills, lo hacemos dinamico con js (usamos ONSCROLL que sirve para detectar cuando se scrollea)

function efectoSkills(){
    var skills = document.getElementById("skills");
    var distanciaSkills = window.innerHeight - skills.getBoundingClientRect().top;

    if(distanciaSkills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript")
        habilidades[1].classList.add("html")
        habilidades[2].classList.add("css")
        habilidades[3].classList.add("react")
        habilidades[4].classList.add("mysql")
        habilidades[5].classList.add("csharp")
        habilidades[6].classList.add("photoshop")

        habilidades[7].classList.add("dedicacion")
        habilidades[8].classList.add("responsable")
        habilidades[9].classList.add("creativo")
        habilidades[10].classList.add("trabajo")
        habilidades[11].classList.add("tiempo")
        habilidades[12].classList.add("colaboracion")
        habilidades[13].classList.add("comunicacion")
    }
}

window.onscroll = function(){
    efectoSkills();
}