document.addEventListener('DOMContentLoaded', () => {
    const heroImage = document.getElementById('heroImage');
    const heroSubtitle = document.getElementById('heroSubtitle');
    const heroTitle = document.getElementById('heroTitle');
    const heroDescription = document.getElementById('heroDescription');
    const heroQuote = document.getElementById('heroQuote');
    const heroParticles = document.getElementById('heroParticles');
    
    const bioTitle = document.getElementById('bioTitle');
    const bioText = document.getElementById('bioText');
    const galleryGrid = document.getElementById('galleryGrid');
    const factsContainer = document.getElementById('factsContainer');
    
    const closingTitle = document.getElementById('closingTitle');
    const closingMessage = document.getElementById('closingMessage');
    
    const audioElement = document.getElementById('audioElement');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const volumeSlider = document.getElementById('volumeSlider');
    const trackTitle = document.getElementById('trackTitle');
    const trackArtist = document.getElementById('trackArtist');
    const vinylDisc = document.getElementById('vinylDisc');
    
    const triggerEasterEgg = document.getElementById('triggerEasterEgg');
    const easterEggModal = document.getElementById('easterEggModal');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const modalBodyText = document.getElementById('modalBodyText');
    
    const scrollProgress = document.getElementById('scrollProgress');

    function initArtistFromURL() {
        const urlParams = new URLSearchParams(window.location.search);
        const artistKey = urlParams.get('artist') || 'bts';

        if (artistsData[artistKey]) {
            loadArtistExperience(artistKey);
        } else {
            loadArtistExperience('bts');
        }
    }

    // Función auxiliar para mezclar y obtener elementos aleatorios de un array
    function getRandomItems(arr, count) {
        const shuffled = [...arr].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    }

    function loadArtistExperience(key) {
        const artist = artistsData[key];
        if (!artist) return;

        // Aplicar paleta de colores dinámica
        const root = document.documentElement;
        root.style.setProperty('--color-primary', artist.theme.colors.primary);
        root.style.setProperty('--color-secondary', artist.theme.colors.secondary);
        root.style.setProperty('--color-accent', artist.theme.colors.accent);
        root.style.setProperty('--color-bg', artist.theme.colors.background);
        root.style.setProperty('--color-surface', artist.theme.colors.surface);
        root.style.setProperty('--color-text', artist.theme.colors.text);
        root.style.setProperty('--color-muted', artist.theme.colors.muted);
        root.style.setProperty('--gradient-main', artist.theme.gradient);

        document.title = `QRecuerdo - ${artist.name}`;

        // Hero
        heroImage.src = artist.hero.image;
        heroImage.alt = artist.hero.alt;
        heroSubtitle.textContent = artist.subtitle;
        heroTitle.textContent = artist.hero.title;
        heroDescription.textContent = artist.hero.description;
        heroQuote.textContent = artist.hero.quote;

        generateFloatingParticles(artist.floatingConfig.type);

        // Biografía
        bioTitle.textContent = `Acerca de ${artist.name}`;
        bioText.textContent = artist.biography;

        // Galería aleatoria (toma hasta 3 elementos random del banco general)
        galleryGrid.innerHTML = '';
        const randomGallery = getRandomItems(artist.allGallery, 3);
        randomGallery.forEach(item => {
            const galleryCard = document.createElement('div');
            galleryCard.className = 'gallery-item';
            galleryCard.innerHTML = `
                <div class="gallery-img-wrapper">
                    <img src="${item.image}" alt="${item.title}" loading="lazy">
                </div>
                <div class="gallery-caption">
                    <h4>${item.title}</h4>
                    <p>${item.description}</p>
                </div>
            `;
            galleryGrid.appendChild(galleryCard);
        });

        observeGalleryItems();

        // Curiosidades aleatorias (toma hasta 3 elementos random del banco general)
        factsContainer.innerHTML = '';
        const randomFacts = getRandomItems(artist.allFacts, 3);
        randomFacts.forEach(fact => {
            const factCard = document.createElement('div');
            factCard.className = 'fact-card';
            factCard.innerHTML = `
                <div class="fact-number">${fact.number}</div>
                <p>${fact.text}</p>
            `;
            factsContainer.appendChild(factCard);
        });

        // Cierre
        closingTitle.textContent = artist.closing.title;
        closingMessage.textContent = artist.closing.message;

        setupAudioPlayer(artist);
        setupEasterEgg(artist);
    }

    function generateFloatingParticles(symbol) {
        heroParticles.innerHTML = '';
        const count = 12;
        for (let i = 0; i < count; i++) {
            const span = document.createElement('span');
            span.className = 'floating-particle';
            span.textContent = symbol;
            span.style.left = `${Math.random() * 90 + 5}%`;
            span.style.top = `${Math.random() * 80 + 10}%`;
            span.style.fontSize = `${Math.random() * 1.2 + 0.8}rem`;
            span.style.animationDuration = `${Math.random() * 4 + 4}s`;
            span.style.animationDelay = `${Math.random() * 2}s`;
            heroParticles.appendChild(span);
        }
    }

    function observeGalleryItems() {
        const items = document.querySelectorAll('.gallery-item');
        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    obs.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });

        items.forEach(item => observer.observe(item));
    }

    let isPlaying = false;
    function setupAudioPlayer(artist) {
        audioElement.src = artist.music.audioUrl;
        audioElement.loop = artist.music.loop;
        audioElement.volume = volumeSlider.value;
        trackTitle.textContent = artist.music.title;
        trackArtist.textContent = artist.name;

        audioElement.pause();
        isPlaying = false;
        playPauseBtn.textContent = '▶';
        vinylDisc.classList.remove('playing');
    }

    playPauseBtn.addEventListener('click', () => {
        if (isPlaying) {
            audioElement.pause();
            playPauseBtn.textContent = '▶';
            vinylDisc.classList.remove('playing');
            isPlaying = false;
        } else {
            audioElement.play().then(() => {
                playPauseBtn.textContent = '❚❚';
                vinylDisc.classList.add('playing');
                isPlaying = true;
            }).catch(err => {
                console.warn("Reproducción automática bloqueada:", err);
            });
        }
    });

    volumeSlider.addEventListener('input', (e) => {
        audioElement.volume = e.target.value;
    });

    function setupEasterEgg(artist) {
        const newBtn = triggerEasterEgg.cloneNode(true);
        triggerEasterEgg.parentNode.replaceChild(newBtn, triggerEasterEgg);

        newBtn.addEventListener('click', () => {
            const messages = artist.floatingConfig.messages;
            const randomMsg = messages[Math.floor(Math.random() * messages.length)];
            modalBodyText.innerHTML = `<p>${randomMsg}</p>`;
            easterEggModal.classList.add('active');
            easterEggModal.setAttribute('aria-hidden', 'false');
        });
    }

    closeModalBtn.addEventListener('click', closeModal);
    easterEggModal.addEventListener('click', (e) => {
        if (e.target === easterEggModal) closeModal();
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });

    function closeModal() {
        easterEggModal.classList.remove('active');
        easterEggModal.setAttribute('aria-hidden', 'true');
    }

    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        scrollProgress.style.width = `${scrollPercent}%`;
    });

    initArtistFromURL();
});