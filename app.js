let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

//Funcion que aplica las animaciones de las habilidades y actualiza los colores automáticamente
function efectoHabilidades() {
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;

    // Si la sección skills está visible
    if (distancia_skills >= 300) {
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("photoshop");
        habilidades[3].classList.add("wordpress");
        habilidades[4].classList.add("drupal");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("proyect");
    } else {
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.remove("javascript");
        habilidades[1].classList.remove("htmlcss");
        habilidades[2].classList.remove("photoshop");
        habilidades[3].classList.remove("wordpress");
        habilidades[4].classList.remove("drupal");
        habilidades[5].classList.remove("comunicacion");
        habilidades[6].classList.remove("trabajo");
        habilidades[7].classList.remove("creatividad");
        habilidades[8].classList.remove("dedicacion");
        habilidades[9].classList.remove("proyect");
    }
    actualizarHabilidades();
}

// Agregar evento de scroll
window.addEventListener('scroll', efectoHabilidades);

//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
}

function toggleContent(element) {
    const item = element.parentElement;
    const content = item.querySelector('.content');
    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
        item.classList.add("open");
    } else {
        content.style.display = "none";
        item.classList.remove("open");
    }
}

//CV download
document.getElementById("descargar-cv").addEventListener("click", function () {
    const link = document.createElement("a");
    link.href = "archivo/CV_Jesus_Santiago_Serrano_Ruiz_2025.pdf"; // Ruta con espacios codificados
    link.download = "CV_Jesus_Santiago_Serrano_Ruiz_2025.pdf"; // Nombre del archivo al descargar
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

//Enviar Un Correo
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const formData = new FormData(this);

    fetch("enviar.php", {
        method: "POST",
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById("respuesta").innerText = data; 
    })
    .catch(error => console.error("Error:", error));
});

// Función para actualizar los colores de habilidades según el porcentaje
function actualizarHabilidades() {
    let habilidades = document.querySelectorAll(".progreso");
    
    habilidades.forEach(habilidad => {
        let porcentaje = parseInt(habilidad.textContent);
        let barraSpan = habilidad.closest(".barra-skill").querySelector("span");
        
        if (porcentaje < 40) {
            habilidad.style.backgroundColor = "red";
            barraSpan.style.backgroundColor = "red";
        } else if (porcentaje <= 70) {
            habilidad.style.backgroundColor = "orange";
            barraSpan.style.backgroundColor = "orange";
        } else {
            habilidad.style.backgroundColor = "green";
            barraSpan.style.backgroundColor = "green";
        }
    });
}

// Ejecutar la función al cargar la página
window.onload = actualizarHabilidades;
