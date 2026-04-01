const data = {
    "bts": {
        "name": "BTS",
        "phrase": "More than a band, a family. Stay Gold.",
        "img": "https://images.unsplash.com/photo-1619379901322-861614e7a03f?q=80&w=1000",
        "spotify": "https://open.spotify.com/embed/track/2b8fOow8UzyDYPEeO1V7FR" 
    },
    "ariana": {
        "name": "Ariana Grande",
        "phrase": "Everything you are is enough. ☁️",
        "img": "https://images.unsplash.com/photo-1621274220348-213900346d0a?q=80&w=1000",
        "spotify": "https://open.spotify.com/embed/track/1BxfuPKGuaTgP7aM0Bbdwr"
    },
    "taylor": {
        "name": "Taylor Swift",
        "phrase": "Everything you lose is a step forward.",
        "img": "https://images.unsplash.com/photo-1620925203700-6f026190989c?q=80&w=1000",
        "spotify": "https://open.spotify.com/embed/track/1BxfuPKGuaTgP7aM0Bbdwr" 
    },
    "duki": {
        "name": "Duki",
        "phrase": "Modo Diablo. Si te sentís solo, escuchá esto.",
        "img": "https://images.unsplash.com/photo-1611605698335-8b1c460d3c01?q=80&w=1000",
        "spotify": "https://open.spotify.com/embed/track/1BxfuPKGuaTgP7aM0Bbdwr"
    },
    "airbag": {
        "name": "Airbag",
        "phrase": "Por mil noches, por mil sueños.",
        "img": "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=1000",
        "spotify": "https://open.spotify.com/embed/track/1BxfuPKGuaTgP7aM0Bbdwr"
    }
};

// Lógica de ruteo
const params = new URLSearchParams(window.location.search);
const artistKey = params.get('artist');

if (artistKey && data[artistKey]) {
    const artist = data[artistKey];
    document.getElementById('artist-name').innerText = artist.name;
    document.getElementById('artist-phrase').innerText = artist.phrase;
    document.getElementById('artist-img').src = artist.img;
    document.getElementById('player').innerHTML = `<iframe src="${artist.spotify}" width="100%" height="80" frameBorder="0" allow="encrypted-media"></iframe>`;
    document.getElementById('app').style.display = 'block';
    document.title = `QRecuerdo - ${artist.name}`;
} else {
    document.getElementById('error').style.display = 'block';
}