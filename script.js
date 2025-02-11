document.addEventListener("DOMContentLoaded", function () {
    
    // Evento 1: Click - Cambia el contenido de "Algo sobre mí"
    document.getElementById("sobremi").addEventListener("click", function() {
        this.textContent = "Soy una persona tranquila y me apasiona la tecnología.";
        this.style.backgroundColor = "#d6cbcb";
    });

    // Evento 2: Mouseover - Muestra un mensaje en "Comida favorita"
    document.getElementById("comida").addEventListener("mouseover", function() {
        this.textContent = "Me encantan los tacos 🌮";
        this.style.backgroundColor = "#545657";
    });

    // Evento 3: Mouseout - Restaura el texto en "Comida favorita"
    document.getElementById("comida").addEventListener("mouseout", function() {
        this.textContent = "Comida favorita";
        this.style.backgroundColor = "Green";
    });

    // Evento 4: Doble clic - Muestra o quita la imagen en "Película favorita"
    document.getElementById("PeliculaFav").addEventListener("dblclick", function() {
        let img = this.querySelector("img");
        
        if (img) {
            img.remove(); // Si la imagen ya está, la elimina
        } else {
            let newImg = document.createElement("img");
            newImg.src = "https://via.placeholder.com/150"; // URL de la imagen
            newImg.alt = "Película";
            newImg.style.width = "100px";
            newImg.style.marginTop = "10px";
            this.appendChild(newImg);
        }
    });

    // Evento 5: Keydown - Cambia el color de fondo en "Color favorito"
    document.addEventListener("keydown", function(event) {
        let colorFav = document.getElementById("Colorfav");
        if (colorFav) {
            let color = event.key.toLowerCase();
            let coloresValidos = ["red", "blue", "green", "yellow", "purple", "orange", "pink", "black", "white"];

            if (coloresValidos.includes(color)) {
                colorFav.style.backgroundColor = color;
                colorFav.textContent = `El fondo ahora es ${color}`;
            } else {
                colorFav.textContent = `Presionaste: ${event.key}`;
            }
        }
    });

    // Evento 6: Click - Muestra un mensaje emergente en "Artista favorito"
    document.getElementById("Artistafav").addEventListener("click", function() {
        let artistas = ["Ed Sheeran", "Adele", "Bruno Mars", "Shakira", "Coldplay", "Taylor Swift"];
        let artistaAleatorio = artistas[Math.floor(Math.random() * artistas.length)];
        alert(`Mi artista favorito es ${artistaAleatorio} 🎶`);
    });

    // Evento 7: Doble clic - Cambia el nombre del país favorito en "País que me gustaría visitar"
    document.getElementById("pais").addEventListener("dblclick", function() {
        let paises = ["Japón", "Italia", "Canadá", "Francia", "España", "Brasil", "Australia", "Grecia"];
        let paisAleatorio = paises[Math.floor(Math.random() * paises.length)];
        this.textContent = `Me gustaría visitar: ${paisAleatorio}`;
    });

});
