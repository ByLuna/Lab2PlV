document.addEventListener("DOMContentLoaded", function () {
    
    // Evento 1: Click - Cambia el contenido de "Algo sobre mí"
    document.getElementById("sobremi").addEventListener("click", function() {
        this.textContent = "Soy una persona tranquila y me apasiona la tecnología.";
        this.style.backgroundColor = "#545657";
    });

    // Evento 2: Mouseover - Muestra un mensaje en "Comida favorita"
    document.getElementById("comida").addEventListener("mouseover", function() {
        this.textContent = "Me encantan los tacos 🌮";
        this.style.backgroundColor = "#000000";
    });

    // Evento 3: Mouseout - Restaura el texto en "Comida favorita"
    document.getElementById("comida").addEventListener("mouseout", function() {
        this.textContent = "Comida favorita";
        this.style.backgroundColor = "#545657";
    });

    // Evento 4: Doble clic - Muestra o quita la imagen en "Película favorita"
    document.getElementById("PeliculaFav").addEventListener("dblclick", function() {
        let img = this.querySelector("img");
            let newImg = document.createElement("img");
            newImg.src = "https://w7.pngwing.com/pngs/57/533/png-transparent-dragons-riders-of-berk-school-of-dragons-astrid-how-to-train-your-dragon-dragon-game-dragon-fictional-character-thumbnail.png"; // URL de la imagen
            newImg.alt = "Película";
            newImg.style.width = "100px";
            newImg.style.marginTop = "10px";
            this.appendChild(newImg);
        
    });

    document.getElementById("Colorfav").onclick = function() {
        this.style.backgroundColor = this.style.backgroundColor === "red" ? "black" : "red";
    };
    

    // Evento 6: Click - Muestra un mensaje emergente en "Artista favorito"
    document.getElementById("Artistafav").addEventListener("click", function() {
        let artistas = ["The Goo Goo Dolls", "Three Days Grace", "Mr. Kitty", "Phil Collins", "Lady Gaga", "Leon Larregui"];
        let artistaAleatorio = artistas[Math.floor(Math.random() * artistas.length)];
        alert(`Mi artista favorito es ${artistaAleatorio} 🎶`);
    });

    // Evento 7: Doble clic - Cambia el nombre del país favorito en "País que me gustaría visitar"
    document.getElementById("pais").addEventListener("dblclick", function() {
        let paises = ["Japón", "Italia", "Canadá", "Suiza", "Australia", "Grecia"];
        let paisAleatorio = paises[Math.floor(Math.random() * paises.length)];
        this.textContent = `Me gustaría visitar: ${paisAleatorio}`;
    });

});
