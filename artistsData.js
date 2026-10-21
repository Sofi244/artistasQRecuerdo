const artistsData = {
    "bts": {
        id: "bts",
        name: "BTS",
        subtitle: "Un universo de recuerdos eternos",
        biography: "BTS (Bangtan Sonyeondan) es mucho más que un fenómeno musical global; es una hermandad de siete artistas que han redefinido la música contemporánea, conectando los corazones de millones de ARMYs en todo el mundo a través de letras sinceras sobre salud mental, juventud y amor propio.",
        theme: {
            colors: {
                primary: "#9333ea",
                secondary: "#c084fc",
                accent: "#f3e8ff",
                background: "#0f071a",
                surface: "rgba(35, 19, 59, 0.75)",
                text: "#ffffff",
                muted: "#d8b4fe"
            },
            gradient: "linear-gradient(135deg, #9333ea 0%, #db2777 100%)"
        },
        hero: {
            image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80",
            alt: "BTS en concierto",
            title: "Más que una banda, una familia",
            description: "Un recorrido emocional por las melodías y los momentos que marcaron una era inolvidable.",
            quote: "«Even if this road is rough and we walk it, let's go together.»"
        },
        allGallery: [
            { image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80", title: "Magia en el escenario", description: "La energía inigualable de cada presentación en vivo." },
            { image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80", title: "Conexión eterna con ARMY", description: "Cada océano de luces púrpuras representa un lazo único." },
            { image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80", title: "Armonía y pasión", description: "Canciones que sanan el alma y acompañan en cada etapa." }
        ],
        allFacts: [
            { number: "01", text: "El debut oficial ocurrió el 13 de junio de 2013 con el sencillo 'No More Dream'." },
            { number: "02", text: "El color púrpura y la frase 'I Purple You' simbolizan confianza y amor duradero." },
            { number: "03", text: "Han batido récords históricos en las listas globales de Billboard y estadios." }
        ],
        music: {
            title: "BTS - Arirang (Fan Edit)",
            audioUrl: "https://actions.google.com/sounds/v1/ambiences/coffee_shop.ogg",
            loop: true
        },
        floatingConfig: {
            type: "💜",
            messages: [
                "«Borahae! Gracias por caminar junto a nosotros.»",
                "«Tu luz brilla con más fuerza en los días oscuros.»",
                "«Juntos somos invencibles, ARMY.»"
            ]
        },
        closing: {
            title: "El viaje continúa",
            message: "Guarda este recuerdo digital en tu corazón y llévalo siempre contigo."
        }
    },
    "bts-rm": {
        id: "bts-rm",
        name: "RM (Kim Namjoon)",
        subtitle: "Poesía, arte y liderazgo",
        biography: "Líder, compositor y alma creativa de BTS. Namjoon transforma cada reflexión sobre el arte, la naturaleza y la vida en obras maestras literarias y musicales.",
        theme: {
            colors: {
                primary: "#2563eb",
                secondary: "#60a5fa",
                accent: "#93c5fd",
                background: "#070c18",
                surface: "rgba(15, 28, 54, 0.75)",
                text: "#ffffff",
                muted: "#bfdbfe"
            },
            gradient: "linear-gradient(135deg, #2563eb 0%, #06b6d4 100%)"
        },
        hero: {
            image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=80",
            alt: "RM de BTS",
            title: "Namjoon",
            description: "El arte, los museos y las palabras convertidas en refugio.",
            quote: "«Persona, Ego, Shadow. Todo forma parte de quién eres.»"
        },
        allGallery: [
            { image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80", title: "Namjooning", description: "Paseos entre naturaleza, libros y galerías de arte." },
            { image: "https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?auto=format&fit=crop&w=800&q=80", title: "Reflexiones", description: "Espacios de inspiración pura." }
        ],
        allFacts: [
            { number: "01", text: "Es un ávido coleccionista de arte contemporáneo y apasionado de la lectura." }
        ],
        music: {
            title: "RM - Mono (Ambient Mix)",
            audioUrl: "https://actions.google.com/sounds/v1/ambiences/night_train.ogg",
            loop: true
        },
        floatingConfig: {
            type: "📘",
            messages: ["«Encuentra tu propio mapa en este vasto mundo.»"]
        },
        closing: {
            title: "Keep cool & wander",
            message: "Gracias por valorar la poesía detrás de cada nota."
        }
    },
    "bts-jin": {
        id: "bts-jin",
        name: "Jin (Kim Seokjin)",
        subtitle: "WorldWide Handsome & voz de ángel",
        biography: "El hyung mayor de BTS, reconocido por su voz cristalina en baladas conmovedoras, su carisma inigualable y su sentido del humor único.",
        theme: {
            colors: {
                primary: "#f43f5e",
                secondary: "#fda4af",
                accent: "#ffe4e6",
                background: "#16070a",
                surface: "rgba(51, 15, 23, 0.75)",
                text: "#ffffff",
                muted: "#fecdd3"
            },
            gradient: "linear-gradient(135deg, #f43f5e 0%, #fb7185 100%)"
        },
        hero: {
            image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1200&q=80",
            alt: "Jin de BTS",
            title: "Seokjin",
            description: "Notas altas que emocionan y una sonrisa que ilumina el mundo.",
            quote: "«The Astronaut: You're my universe.»"
        },
        allGallery: [
            { image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=800&q=80", title: "Epiphany", description: "El amor propio como el viaje más importante." }
        ],
        allFacts: [
            { number: "01", text: "Su tema solista 'The Astronaut' fue co-escrito junto a Coldplay." }
        ],
        music: {
            title: "Jin - The Astronaut (Acoustic)",
            audioUrl: "https://actions.google.com/sounds/v1/weather/rain_heavy_loud.ogg",
            loop: true
        },
        floatingConfig: {
            type: "🌟",
            messages: ["«You and me in this galaxy...»"]
        },
        closing: {
            title: "Moonlight memories",
            message: "Gracias por sonreír siempre junto a ARMY."
        }
    },
    "bts-suga": {
        id: "bts-suga",
        name: "SUGA (Min Yoongi)",
        subtitle: "Agust D, productor y pianista",
        biography: "Genio musical, rapero y productor. Yoongi plasma sus batallas personales y su superación en letras profundas y producciones impecables.",
        theme: {
            colors: {
                primary: "#64748b",
                secondary: "#cbd5e1",
                accent: "#f8fafc",
                background: "#0f1115",
                surface: "rgba(22, 27, 34, 0.75)",
                text: "#ffffff",
                muted: "#94a3b8"
            },
            gradient: "linear-gradient(135deg, #475569 0%, #94a3b8 100%)"
        },
        hero: {
            image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=80",
            alt: "SUGA de BTS",
            title: "Agust D",
            description: "El piano, las teclas y la fuerza de un sueño cumplido.",
            quote: "«Dream, we will eventually converge in full bloom.»"
        },
        allGallery: [
            { image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80", title: "D-Day Tour", description: "Fuerza y libertad absoluta sobre el escenario." }
        ],
        allFacts: [
            { number: "01", text: "Produce música desde su adolescencia y ha colaborado con leyendas globales." }
        ],
        music: {
            title: "SUGA - Interlude: Shadow",
            audioUrl: "https://actions.google.com/sounds/v1/ambiences/night_crickets.ogg",
            loop: true
        },
        floatingConfig: {
            type: "🎹",
            messages: ["«The last stop where dreams become reality.»"]
        },
        closing: {
            title: "Daechwita spirit",
            message: "Sigue luchando por tus metas sin mirar atrás."
        }
    },
    "bts-jhope": {
        id: "bts-jhope",
        name: "J-Hope (Jung Hoseok)",
        subtitle: "Nuestra esperanza, nuestra luz",
        biography: "Bailarín principal, rapero y rayo de sol del grupo. Hoseok contagia alegría, energía imparable y una precisión artística deslumbrante.",
        theme: {
            colors: {
                primary: "#f59e0b",
                secondary: "#fde68a",
                accent: "#fffbeb",
                background: "#181307",
                surface: "rgba(56, 42, 12, 0.75)",
                text: "#ffffff",
                muted: "#fef3c7"
            },
            gradient: "linear-gradient(135deg, #f59e0b 0%, #10b981 100%)"
        },
        hero: {
            image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80",
            alt: "J-Hope de BTS",
            title: "J-Hope",
            description: "I'm your hope, I'm your angel, you're my hope.",
            quote: "«Safety zone: donde la pasión y el ritmo se encuentran.»"
        },
        allGallery: [
            { image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80", title: "Jack In The Box", description: "Innovación y autenticidad artística sin límites." }
        ],
        allFacts: [
            { number: "01", text: "Es el pilar rítmico y director de coreografías en las presentaciones en vivo." }
        ],
        music: {
            title: "J-Hope - More (Dance Groove)",
            audioUrl: "https://actions.google.com/sounds/v1/ambiences/coffee_shop.ogg",
            loop: true
        },
        floatingConfig: {
            type: "☀️",
            messages: ["«Smile on, the sun is always shining for you.»"]
        },
        closing: {
            title: "Jack in the box",
            message: "Rompe tus propios límites con una sonrisa."
        }
    },
    "bts-jimin": {
        id: "bts-jimin",
        name: "Jimin (Park Jimin)",
        subtitle: "Gracia, delicadeza y voz celestial",
        biography: "Formado en danza contemporánea, Jimin combina una expresividad corporal única con tonos vocales angelicales que conmueven profundamente.",
        theme: {
            colors: {
                primary: "#ec4899",
                secondary: "#fbcfe8",
                accent: "#fdf2f8",
                background: "#160711",
                surface: "rgba(54, 16, 41, 0.75)",
                text: "#ffffff",
                muted: "#fce7f3"
            },
            gradient: "linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)"
        },
        hero: {
            image: "img/jimin3.jpg",
            alt: "Jimin de BTS",
            title: "Jimin",
            description: "Like Crazy: melodías envolventes que atrapan los sentidos.",
            quote: "«Promise: I want you to be your light.»"
        },
      allGallery: [
            { image: "img/jimin1.jpg", title: "Face of Art", description: "Vulnerabilidad y belleza en cada nota interpretada." },
            { image: "img/jimin2.jpg", title: "Danza contemporánea", description: "La elegancia hecha movimiento sobre el escenario." },
            { image: "img/jimin0.jpg", title: "Momentos de luz", description: "La calidez y empatía que transmite siempre a sus fans." }
        ],
      allFacts: [
            { number: "01", text: "Primer solista coreano en alcanzar el número 1 en el Billboard Hot 100." },
            { number: "02", text: "Fue el mejor estudiante de su clase en el departamento de danza moderna en la Escuela Superior de Artes de Busan." },
            { number: "03", text: "Es ampliamente reconocido por su gran generosidad, realizando donaciones constantes y silenciosas a la educación y la infancia." }
        ],
        music: {
            title: "BTS - Life goes on",
            audioUrl: "musica/BTS_life_goes_on.mp4",
            loop: true
        },
        floatingConfig: {
            type: "🌸",
            messages: [
                "«You never walk alone in this journey.»",
                "«Cuídate mucho y recuerda lo valioso que eres.»",
                "«I want you to be your light, baby.»",
                "«Incluso en los días grises, tu sonrisa ilumina todo.»",
                "«Gracias por quedarte a mi lado y caminar juntos.»",
                "«Let's love ourselves, and keep moving forward.»",
                "«Eres mucho más fuerte de lo que imaginas.»",
                "«Que la música siempre sea un refugio cálido para tu corazón.»",
                "«No estás solo, nuestros latidos están conectados por la música.»",
                "«Recuerda sonreír hoy; te ves hermoso cuando lo haces.»",
                "«El esfuerzo y la pasión nunca traicionan tus sueños.»"
            ]
        },
        closing: {
            title: "With You",
            message: "Gracias por regalar tanta sensibilidad al mundo."
        }
    },
    "bts-v": {
        id: "bts-v",
        name: "V (Kim Taehyung)",
        subtitle: "Barítono cautivador y alma libre",
        biography: "Con su voz profunda, su sensibilidad estética por el jazz, la fotografía clásica y el arte, Taehyung crea experiencias artísticas inconfundibles.",
        theme: {
            colors: {
                primary: "#0ea5e9",
                secondary: "#7dd3fc",
                accent: "#e0f2fe",
                background: "#06121a",
                surface: "rgba(14, 38, 56, 0.75)",
                text: "#ffffff",
                muted: "#bae6fd"
            },
            gradient: "linear-gradient(135deg, #0ea5e9 0%, #6366f1 100%)"
        },
        hero: {
            image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80",
            alt: "V de BTS",
            title: "Taehyung",
            description: "Winter Bear, jazz nocturno y una mirada única sobre la belleza.",
            quote: "«Scenery: captured moments in the gallery of time.»"
        },
        allGallery: [
            { image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80", title: "Slow Dancing", description: "Melodías relajantes que invitan a soñar despiertos." }
        ],
        allFacts: [
            { number: "01", text: "Amante del saxofón, el jazz clásico y la fotografía analógica." }
        ],
        music: {
            title: "V - Winter Bear Acoustic",
            audioUrl: "https://actions.google.com/sounds/v1/weather/rain_heavy_loud.ogg",
            loop: true
        },
        floatingConfig: {
            type: "🐻",
            messages: ["«Sleep like a winter bear, everything will be fine.»", "«Disfruta de los pequeños detalles artísticos de cada día.»"]
        },
        closing: {
            title: "Sweet Night",
            message: "Que tus noches estén llenas de hermosas melodías."
        }
    },
    "bts-jungkook": {
        id: "bts-jungkook",
        name: "Jungkook (Jeon Jungkook)",
        subtitle: "Golden Maknae y voz de oro",
        biography: "El miembro más joven de BTS destaca en el canto, la danza, la producción y la dirección visual. Su talento polifacético no conoce límites.",
        theme: {
            colors: {
                primary: "#10b981",
                secondary: "#6ee7b7",
                accent: "#ecfdf5",
                background: "#061812",
                surface: "rgba(13, 51, 37, 0.75)",
                text: "#ffffff",
                muted: "#a7f3d0"
            },
            gradient: "linear-gradient(135deg, #10b981 0%, #3b82f6 100%)"
        },
        hero: {
            image: "img/jungkook1.jpg",
            alt: "Jungkook de BTS",
            title: "Jungkook",
            description: "Seven days a week: energía imparable y talento legendario.",
            quote: "«Standing Next to You: un amor que trasciende cualquier escenario.»"
        },
        allGallery: [
            { image: "img/jungkook0.jpg", title: "Golden Moments", description: "Pasión entregada en cada actuación en vivo con una energía arrolladora." },
            { image: "img/jungkook2.jpg", title: "Euphoria en el escenario", description: "Momentos mágicos flotando sobre el público y llenando de luz cada rincón." },
            { image: "img/jungkook3.jpg", title: "Pasión por el arte", description: "Creando, cantando y dejando el alma en cada proyecto que emprende." }
        ],
        allFacts: [
            { number: "01", text: "Ha batido récords globales con su álbum debut en solitario 'GOLDEN'." },
            { number: "02", text: "Es conocido cariñosamente como el 'Golden Maknae' ya que destaca con excelencia en todo lo que hace, desde el canto y la danza hasta la pintura y la edición de video." },
            { number: "03", text: "Participó activamente en la composición y producción de varios de los grandes éxitos del grupo y de sus propias canciones solistas." }
        ],
        music: {
            title: "BTS - Life goes on",
            audioUrl: "musica/BTS_life_goes_on.mp4",
            loop: true
        },
        floatingConfig: {
            type: "🔥",
            messages: [
                "«You bring me to my saneness, every single day.»",
                "«Dale con todo a tus metas sin mirar atrás; eres imparable.»",
                "«Seven days a week, mi corazón late al ritmo de tus sueños.»",
                "«Never let go of the passion that makes you shine.»",
                "«El esfuerzo de hoy es la gloria de mañana. ¡Tú puedes con todo!»",
                "«Incluso en los momentos difíciles, encuentra motivos para sonreír.»",
                "«Gracias por ser mi inspiración constante en este viaje.»",
                "«Un latido dorado que resuena por siempre en la eternidad.»",
                "«Sueña en grande y trabaja duro para alcanzar las estrellas.»"
            ]
        },
        closing: {
            title: "Golden memories",
            message: "Brilla siempre con luz propia y nunca dejes de perseguir tus sueños."
        }
    },
    "airbag": {
        id: "airbag",
        name: "Airbag",
        subtitle: "Rock argentino con alma épica",
        biography: "La banda formada por los hermanos Sardelli representa la cumbre del rock nacional argentino contemporáneo, combinando potencia guitarrera, melodías sinfónicas y una conexión visceral con su público.",
        theme: {
            colors: {
                primary: "#1d4ed8",
                secondary: "#93c5fd",
                accent: "#dbeafe",
                background: "#060a17",
                surface: "rgba(15, 29, 64, 0.75)",
                text: "#ffffff",
                muted: "#bfdbfe"
            },
            gradient: "linear-gradient(135deg, #1d4ed8 0%, #dc2626 100%)"
        },
        hero: {
            image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1200&q=80",
            alt: "Airbag en vivo",
            title: "El futuro prende mi ansiedad",
            description: "Riffs demoledores, solos inolvidables y la pasión inquebrantable del rock.",
            quote: "«Una descarga de energía pura directo al corazón de los fans.»"
        },
        allGallery: [
            { image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80", title: "Estadios vibrantes", description: "Guitarras encendidas bajo el cielo nocturno." },
            { image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80", title: "Pasión en directo", description: "La comunión perfecta con el público." }
        ],
        allFacts: [
            { number: "01", text: "Liderada por Patricio, Guido y Gastón Sardelli, consolidando generaciones de rock argentino." }
        ],
        music: {
            title: "Airbag - Rock Session",
            audioUrl: "https://actions.google.com/sounds/v1/ambiences/night_train.ogg",
            loop: true
        },
        floatingConfig: {
            type: "🎸",
            messages: [
                "«El rock vive en cada acorde que vibra en tu pecho.»",
                "«La libertad se siente con las guitarras al máximo.»"
            ]
        },
        closing: {
            title: "Hasta el próximo acorde",
            message: "Gracias por mantener encendida la llama del verdadero rock."
        }
    },
    "ariana": {
        id: "ariana",
        name: "Ariana Grande",
        subtitle: "Vocalista de pop legendaria",
        biography: "Con un registro vocal de cinco octavas y una sensibilidad pop inigualable, Ariana Grande ha creado himnos atemporales que acompañan los momentos más emotivos de sus arianators.",
        theme: {
            colors: {
                primary: "#ec4899",
                secondary: "#fbcfe8",
                accent: "#fff1f2",
                background: "#160711",
                surface: "rgba(54, 16, 41, 0.75)",
                text: "#ffffff",
                muted: "#fce7f3"
            },
            gradient: "linear-gradient(135deg, #ec4899 0%, #a855f7 100%)"
        },
        hero: {
            image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=80",
            alt: "Ariana Grande",
            title: "Ain't got no tears left to cry",
            description: "Un universo estelar de nubes pastel, notas celestiales y emociones profundas.",
            quote: "«Even with no tears left, the music keeps us floating.»"
        },
        allGallery: [
            { image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80", title: "Estética celestial", description: "Atmósferas de ensueño inspiradas en sus eras más emblemáticas." }
        ],
        allFacts: [
            { number: "01", text: "Posee múltiples récords Guinness gracias a sus debuts en las listas globales." }
        ],
        music: {
            title: "Ariana Grande - Eternal Sunshine",
            audioUrl: "https://actions.google.com/sounds/v1/ambiences/coffee_shop.ogg",
            loop: true
        },
        floatingConfig: {
            type: "☁️",
            messages: [
                "«Thank u, next to the obstacles in your path.»",
                "«Brillas con luz propia en cada melodía.»"
            ]
        },
        closing: {
            title: "Eternal sunshine",
            message: "Gracias por llenar el mundo con tu voz inigualable."
        }
    },
    "taylor": {
        id: "taylor",
        name: "Taylor Swift",
        subtitle: "Narradora de historias y eras",
        biography: "Compositora magistral que ha definido a una generación entera a través de letras poéticas, emotivas y un recorrido musical que abarca desde el country hasta el pop alternativo.",
        theme: {
            colors: {
                primary: "#991b1b",
                secondary: "#fca5a5",
                accent: "#fef2f2",
                background: "#140606",
                surface: "rgba(48, 14, 14, 0.75)",
                text: "#ffffff",
                muted: "#fecaca"
            },
            gradient: "linear-gradient(135deg, #991b1b 0%, #d97706 100%)"
        },
        hero: {
            image: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=1200&q=80",
            alt: "Taylor Swift en The Eras Tour",
            title: "The Eras of Our Lives",
            description: "Un recorrido poético por cada capítulo, pulsera de la amistad y melodía eterna.",
            quote: "«Long live all the magic we made.»"
        },
        allGallery: [
            { image: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=800&q=80", title: "The Eras Tour", description: "Estadios repletos cantando cada verso al unísono." }
        ],
        allFacts: [
            { number: "01", text: "Es la única artista en ganar cuatro premios Grammy al Álbum del Año." }
        ],
        music: {
            title: "Taylor Swift - Cardigan Loop",
            audioUrl: "https://actions.google.com/sounds/v1/weather/rain_heavy_loud.ogg",
            loop: true
        },
        floatingConfig: {
            type: "✨",
            messages: [
                "«Make the friendship bracelets, take the moment and taste it.»",
                "«Long live the walls we crashed through.»"
            ]
        },
        closing: {
            title: "Long live",
            message: "Gracias por ponerle banda sonora a nuestros recuerdos más hermosos."
        }
    },
    "harry": {
        id: "harry",
        name: "Harry Styles",
        subtitle: "Icono pop, estilo y libertad",
        biography: "Con una propuesta visual sofisticada y un sonido influenciado por el rock clásico y el pop luminoso, Harry Styles inspira autoexpresión, bondad y alegría en cada show.",
        theme: {
            colors: {
                primary: "#f43f5e",
                secondary: "#fed7aa",
                accent: "#fff7ed",
                background: "#180909",
                surface: "rgba(59, 20, 20, 0.75)",
                text: "#ffffff",
                muted: "#ffedd5"
            },
            gradient: "linear-gradient(135deg, #f43f5e 0%, #fbbf24 100%)"
        },
        hero: {
            image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80",
            alt: "Harry Styles",
            title: "Treat People With Kindness",
            description: "Un refugio de luz solar, plumas, lentejuelas y buena música.",
            quote: "«You sunshine, you temptress, you're the best.»"
        },
        allGallery: [
            { image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80", title: "Love On Tour", description: "Alegría compartida bajo boas de colores y sombreros." }
        ],
        allFacts: [
            { number: "01", text: "Su lema 'Treat People With Kindness' guía una comunidad global de respeto." }
        ],
        music: {
            title: "Harry Styles - Watermelon Vibes",
            audioUrl: "https://actions.google.com/sounds/v1/ambiences/coffee_shop.ogg",
            loop: true
        },
        floatingConfig: {
            type: "🍉",
            messages: [
                "«Treat people with kindness, always.»",
                "«You got that sunshine in your pocket.»"
            ]
        },
        closing: {
            title: "As it was",
            message: "Gracias por recordarnos que el mundo es un lugar hermoso para ser libres."
        }
    },
    "duki": {
        id: "duki",
        name: "Duki",
        subtitle: "Pionero del trap argentino y mundial",
        biography: "Mauro Ezequiel Lombardo lideró la revolución del trap en Sudamérica, llevando el sonido de las calles argentinas a agotar estadios históricos en todo el planeta.",
        theme: {
            colors: {
                primary: "#dc2626",
                secondary: "#fca5a5",
                accent: "#fef2f2",
                background: "#160505",
                surface: "rgba(54, 14, 14, 0.75)",
                text: "#ffffff",
                muted: "#fecaca"
            },
            gradient: "linear-gradient(135deg, #dc2626 0%, #1e1b4b 100%)"
        },
        hero: {
            image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=80",
            alt: "Duki en vivo",
            title: "Modo Diablo",
            description: "De las plazas de Buenos Aires a la cima del mundo con barras de pura pasión.",
            quote: "«Si te sentís solo, escuchá esto: el barrio y los sueños llegan lejos.»"
        },
        allGallery: [
            { image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80", title: "Estadios históricos", description: "El rugido de miles de almas." }
        ],
        allFacts: [
            { number: "01", text: "Primer artista argentino en agotar el Estadio River Plate en múltiples ocasiones." }
        ],
        music: {
            title: "Duki - Ameri Trap Beat",
            audioUrl: "https://actions.google.com/sounds/v1/ambiences/night_train.ogg",
            loop: true
        },
        floatingConfig: {
            type: "🔥",
            messages: [
                "«Modo diablo activo en cada paso que das.»",
                "«De cero a la cima sin olvidar las raíces.»"
            ]
        },
        closing: {
            title: "Desde el corazón del hood",
            message: "Gracias por demostrar que los sueños de barrio no tienen techo."
        }
    },
    "cerati": {
        id: "cerati",
        name: "Gustavo Cerati",
        subtitle: "Poeta mayor del rock en español",
        biography: "Líder de Soda Stereo y referente absoluto de la vanguardia sonora latinoamericana. Su sensibilidad poética, guitarras etéreas y genialidad artística siguen más vivas que nunca.",
        theme: {
            colors: {
                primary: "#64748b",
                secondary: "#93c5fd",
                accent: "#f8fafc",
                background: "#080b11",
                surface: "rgba(20, 27, 41, 0.75)",
                text: "#ffffff",
                muted: "#cbd5e1"
            },
            gradient: "linear-gradient(135deg, #475569 0%, #3b82f6 100%)"
        },
        hero: {
            image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=80",
            alt: "Gustavo Cerati en concierto",
            title: "Poder decir adiós es crecer",
            description: "Un viaje espacial y sonoro a través de acordes que desafiaron el tiempo.",
            quote: "«Desanudar el tiempo con canciones que flotan para siempre en el espacio.»"
        },
        allGallery: [
            { image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80", title: "Fuerza Natural", description: "Paisajes sonoros inolvidables." }
        ],
        allFacts: [
            { number: "01", text: "Con Soda Stereo y como solista, revolucionó la estética musical de Iberoamérica." }
        ],
        music: {
            title: "Cerati - Fuerza Natural Ambient",
            audioUrl: "https://actions.google.com/sounds/v1/ambiences/night_crickets.ogg",
            loop: true
        },
        floatingConfig: {
            type: "⭐",
            messages: [
                "«Me verás volar por la ciudad de la furia.»",
                "«Gracias por venir... tu música es eterna.»"
            ]
        },
        closing: {
            title: "Siempre es hoy",
            message: "Gracias por regalarnos un universo de belleza sonora inmortal."
        }
    },
    "recuerdo-especial": {
        id: "recuerdo-especial",
        name: "Nuestra Canción Favorita",
        subtitle: "Un momento guardado para siempre",
        biography: "Hay canciones que detienen el tiempo y se convierten en el refugio perfecto de los recuerdos más hermosos que compartimos. Este espacio fue diseñado exclusivamente para revivir ese instante único.",
        theme: {
            colors: {
                primary: "#f43f5e",
                secondary: "#fda4af",
                accent: "#fff1f2",
                background: "#120608",
                surface: "rgba(45, 15, 22, 0.75)",
                text: "#ffffff",
                muted: "#fecdd3"
            },
            gradient: "linear-gradient(135deg, #f43f5e 0%, #fb7185 100%)"
        },
        hero: {
            image: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=1200&q=80",
            alt: "Recuerdo personalizado",
            title: "Para alguien muy especial",
            description: "Una dedicatoria única plasmada en este QRecuerdo.",
            quote: "«Donde sea que estemos, esta melodía siempre nos volverá a conectar.»"
        },
        allGallery: [
            { image: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=800&q=80", title: "Instante inolvidable", description: "El día en que todo cobró un sentido diferente." },
            { image: "https://images.unsplash.com/photo-1494774157365-9e04c6720e47?auto=format&fit=crop&w=800&q=80", title: "Nuestra historia", description: "Pequeños detalles que construyen un gran camino juntos." }
        ],
        allFacts: [
            { number: "01", text: "La fecha que cambió nuestra perspectiva de las cosas." },
            { number: "02", text: "Una risa compartida que vale más que mil palabras." }
        ],
        music: {
            title: "Nuestra Canción Especial",
            audioUrl: "https://actions.google.com/sounds/v1/ambiences/night_train.ogg",
            loop: true
        },
        floatingConfig: {
            type: "✨",
            messages: [
                "«Gracias por cada momento compartido y por los que faltan.»",
                "«Tu sonrisa es el mejor paisaje de este recuerdo.»"
            ]
        },
        closing: {
            title: "Por siempre en la memoria",
            message: "Escanea este QR siempre que quieras volver a este momento."
        }
    }
},    "btsjiminespecial": {
        id: "recuerdo-especial-jimin",
        name: "Recuerdo Especial con Jimin",
        subtitle: "Un momento guardado junto a Jimin",
        biography: "Hay momentos y melodías que detienen el tiempo, convirtiéndose en el refugio perfecto de los recuerdos más hermosos. Este espacio fue diseñado exclusivamente para revivir ese instante mágico con Jimin.",
        theme: {
            colors: {
                primary: "#ec4899",
                secondary: "#fbcfe8",
                accent: "#fdf2f8",
                background: "#160711",
                surface: "rgba(54, 16, 41, 0.75)",
                text: "#ffffff",
                muted: "#fce7f3"
            },
            gradient: "linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)"
        },
        hero: {
            image: "img/jimin1.jpg",
            alt: "Recuerdo especial Jimin",
            title: "Para alguien muy especial",
            description: "Una dedicatoria única plasmada en este QRecuerdo.",
            quote: "«You never walk alone in this journey.»"
        },
        allGallery: [
            { image: "img/jimin1.jpg", title: "Instante inolvidable", description: "El día en que su voz cobró un sentido diferente." },
            { image: "img/jimin2.jpg", title: "Nuestra historia", description: "Pequeños detalles que construyen un gran camino juntos." }
        ],
        allFacts: [
            { number: "01", text: "La fecha que cambió nuestra perspectiva de las cosas." },
            { number: "02", text: "Una melodía compartida que vale más que mil palabras." }
        ],
        music: {
            title: "Jimin - Like Crazy Vibes",
            audioUrl: "https://actions.google.com/sounds/v1/ambiences/night_train.ogg",
            loop: true
        },
        floatingConfig: {
            type: "🌸",
            messages: [
                "«Gracias por cada momento compartido y por los que faltan.»",
                "«Tu sonrisa es el mejor paisaje de este recuerdo.»"
            ]
        },
        closing: {
            title: "Por siempre en la memoria",
            message: "Escanea este QR siempre que quieras volver a este momento."
        }
    },
    "btsjkespecial": {
        id: "recuerdo-especial-jk",
        name: "Recuerdo Especial con Jungkook",
        subtitle: "Un momento dorado guardado para siempre",
        biography: "Hay canciones que detienen el tiempo y se convierten en el refugio perfecto de los recuerdos más hermosos que compartimos. Este espacio fue diseñado exclusivamente para revivir ese instante único junto a Jungkook.",
        theme: {
            colors: {
                primary: "#10b981",
                secondary: "#6ee7b7",
                accent: "#ecfdf5",
                background: "#061812",
                surface: "rgba(13, 51, 37, 0.75)",
                text: "#ffffff",
                muted: "#a7f3d0"
            },
            gradient: "linear-gradient(135deg, #10b981 0%, #3b82f6 100%)"
        },
        hero: {
            image: "img/jungkook1.jpg",
            alt: "Recuerdo especial Jungkook",
            title: "Para alguien muy especial",
            description: "Una dedicatoria única plasmada en este QRecuerdo.",
            quote: "«Standing Next to You: un amor que trasciende cualquier escenario.»"
        },
        allGallery: [
            { image: "img/jungkook1.jpg", title: "Instante inolvidable", description: "El día en que todo cobró un sentido diferente." },
            { image: "img/jungkook2.jpg", title: "Nuestra historia", description: "Pequeños detalles que construyen un gran camino juntos." }
        ],
        allFacts: [
            { number: "01", text: "La fecha que cambió nuestra perspectiva de las cosas." },
            { number: "02", text: "Una risa compartida que vale más que mil palabras." }
        ],
        music: {
            title: "Jungkook - Seven Beats",
            audioUrl: "https://actions.google.com/sounds/v1/ambiences/coffee_shop.ogg",
            loop: true
        },
        floatingConfig: {
            type: "🔥",
            messages: [
                "«Gracias por cada momento compartido y por los que faltan.»",
                "«Tu sonrisa es el mejor paisaje de este recuerdo.»"
            ]
        },
        closing: {
            title: "Por siempre en la memoria",
            message: "Escanea este QR siempre que quieras volver a este momento."
        }
    };
