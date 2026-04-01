const data = {
    "bts": {
        "name": "BTS",
        "phrase": "Mas que una banda, una familia. Arirang",
        "img": "https://fotos.perfil.com/2026/03/13/trim/950/534/bts-2202350.jpg",
        "youtube": "https://www.youtube.com/embed/SpkOesMnW9U",
        "color": "#d62525" // rojo claro
    },
    "ariana": {
        "name": "Ariana Grande",
        "phrase": "Ain`t got no tears left to cry. ☁️",
        "img": "https://m.media-amazon.com/images/M/MV5BM2JhZWJmMDEtNTU5MS00YmQ3LTk1NjMtOGFlMjM2MjZlNjg5XkEyXkFqcGc@._V1_.jpg",
        "youtube": "https://www.youtube.com/embed/ffxKSjUwKdU",
        "color": "#ffc4d9" // Rosa pastel
    },
    "taylor": {
        "name": "Taylor Swift",
        "phrase": "Saved my heart from the fate of Ophelia.",
        "img": "https://media.vogue.mx/photos/64e15be96e16315ea8208e2c/master/pass/taylor-swift-cantante.jpg",
        "youtube": "https://www.youtube.com/embed/ko70cExuzZM",
        "color": "#e2c2c6" // Rojo/Bordó muy clarito
    },
    "duki": {
        "name": "Duki",
        "phrase": "Modo Diablo. Si te sentís solo, escuchá esto.",
        "img": "https://www.billboard.com/wp-content/uploads/2024/11/Duki-cr-Guido-Adler-press-2024-billboard-1548.jpg?w=942&h=628&crop=1",
        "youtube": "https://www.youtube.com/embed/6biv8AQcjNU",
        "color": "#530000" // Rojo oscuro
    },
    "airbag": {
        "name": "Airbag",
        "phrase": "El futuro prende mi ansiedad.",
        "img": "https://mrindie.com/wp-content/uploads/2022/10/Airbag.jpg",
        "youtube": "https://www.youtube.com/embed/x813FfwbL4Q",
        "color": "#070a25" // Azul oscuro
    },
    "harry": {
        "name": "Harry Styles",
        "phrase": "My friends are in love with American girls.",
        "img": "https://www.rollingstone.com/wp-content/uploads/2019/08/20190723_Rolling_Stone_Harry_Styles_Rocks_0119_03_ext_RGB-LEAD-NEW.jpg",
        "youtube": "https://www.youtube.com/embed/o6jQo3-iCao",
        "color": "#ffb6c1" // Rosa Watermelon Sugar
    },
    "sabrina": {
        "name": "Sabrina Carpenter",
        "phrase": "Now he`s thinkin` `bout me every night, oh",
        "img": "https://hips.hearstapps.com/hmg-prod/images/sabrina-carpenter-makeup-routine-products-66741aa06a6f4.jpg?crop=0.6697674418604651xw:1xh;center,top&resize=1200:*",
        "youtube": "https://www.youtube.com/embed/eVli-tstM5E",
        "color": "#ffdfba" // Naranja/Durazno pastel
    },
    "cerati": {
        "name": "Gustavo Cerati",
        "phrase": "Poder decir adiós, es crecer.",
        "img": "https://lh3.googleusercontent.com/9ezj35tcKQflXRaNwymPeg4SMqXr918O20J_Cr-lEblgz4TO-bYg4Dz6pbKaYqEzmRTT7i2H3BZycMo=w2880-h1200-p-l90-rj",
        "youtube": "https://www.youtube.com/embed/GUf81ofAZV0",
        "color": "#b0c4de" // Gris azulado pastel
    }
};

// Lógica de ruteo
const params = new URLSearchParams(window.location.search);
const artistKey = params.get('artist');

if (artistKey && data[artistKey]) {
    const artist = data[artistKey];
    
    // Inyectar textos e imágenes
    document.getElementById('artist-name').innerText = artist.name;
    document.getElementById('artist-phrase').innerText = artist.phrase;
    document.getElementById('artist-img').src = artist.img;
    
    // Inyectar el reproductor de YouTube
    document.getElementById('player').innerHTML = `<iframe width="100%" height="200" src="${artist.youtube}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
    
    // MAGIA DE COLORES: Cambiamos la variable CSS --primary y --bg dinámicamente
    document.documentElement.style.setProperty('--primary', artist.color);
    document.documentElement.style.setProperty('--bg', artist.color + '33'); // Le suma '33' para hacerlo semi-transparente como fondo
    
    // Mostrar la página
    document.getElementById('app').style.display = 'block';
    document.title = `QRecuerdo - ${artist.name}`;
} else {
    document.getElementById('error').style.display = 'block';
}