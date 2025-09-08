<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Corporativo Internacional Xicotencatl - Soluciones Estratégicas</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Lato:wght@300;400;700&display=swap" rel="stylesheet">
    <style>
        /* Variables y Estilos Generales */
        :root {
            --color-primary: #002D62; /* Azul marino profundo */
            --color-secondary: #C8A35B; /* Dorado */
            --color-text-dark: #333;
            --color-text-light: #f4f4f4;
            --color-bg-light: #ffffff;
            --color-bg-dark: #f0f2f5;
            --font-serif: 'Playfair Display', serif;
            --font-sans: 'Lato', sans-serif;
        }

        body {
            font-family: var(--font-sans);
            line-height: 1.6;
            color: var(--color-text-dark);
            margin: 0;
            padding: 0;
            background-color: var(--color-bg-light);
            overflow-x: hidden;
        }

        .container {
            max-width: 1100px;
            margin: 0 auto;
            padding: 20px;
        }

        /* --- Encabezado --- */
        header {
            background-color: var(--color-primary);
            color: var(--color-text-light);
            padding: 1.5em 0;
            text-align: center;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }
        header .logo {
            font-family: var(--font-serif);
            font-size: 2em;
            letter-spacing: 2px;
            text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
        }

        /* --- Hero Section --- */
        .hero-section {
            background: linear-gradient(rgba(0, 45, 98, 0.7), rgba(0, 45, 98, 0.7)), url("https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?q=80&w=1740&auto=format&fit=crop");
            background-size: cover;
            background-position: center;
            height: 80vh;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            color: var(--color-text-light);
            position: relative;
        }
        .hero-section h1 {
            font-family: var(--font-serif);
            font-size: 3.5em;
            margin: 0;
            letter-spacing: 2px;
            animation: fadeInDown 1s ease-out;
        }
        .hero-section p {
            font-size: 1.5em;
            margin-top: 10px;
            max-width: 800px;
            animation: fadeInUp 1s ease-out;
        }

        /* --- Secciones Generales --- */
        section {
            padding: 60px 0;
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        section.animated {
            opacity: 1;
            transform: translateY(0);
        }
        .section-heading {
            font-family: var(--font-serif);
            font-size: 2.5em;
            text-align: center;
            margin-bottom: 20px;
            color: var(--color-primary);
        }
        .section-subheading {
            text-align: center;
            color: #666;
            margin-bottom: 40px;
            font-size: 1.1em;
        }

        /* --- Propuesta de Valor --- */
        .value-prop-grid {
            display: flex;
            justify-content: space-around;
            gap: 40px;
            text-align: center;
            flex-wrap: wrap;
        }
        .value-prop-item {
            flex-basis: 300px;
        }
        .value-prop-item h3 {
            font-family: var(--font-serif);
            color: var(--color-primary);
            font-size: 1.5em;
            border-bottom: 2px solid var(--color-secondary);
            display: inline-block;
            padding-bottom: 5px;
            margin-bottom: 15px;
        }

        /* --- Servicios (Cards) --- */
        .services-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 30px;
        }
        .service-card {
            background-color: var(--color-bg-dark);
            border-left: 5px solid var(--color-secondary);
            padding: 30px;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .service-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
        }
        .service-card h3 {
            font-family: var(--font-serif);
            color: var(--color-primary);
            font-size: 1.4em;
            margin-top: 0;
            text-align: left;
        }
        .service-card p {
            text-align: left;
            font-size: 0.95em;
        }

        /* --- Confianza y CTA --- */
        .trust-section {
            background-color: var(--color-primary);
            color: var(--color-text-light);
            padding: 80px 0;
            text-align: center;
        }
        .trust-section .section-heading, .trust-section .section-subheading {
            color: var(--color-text-light);
        }
        .cta-button {
            display: inline-block;
            background-color: var(--color-secondary);
            color: var(--color-primary);
            font-family: var(--font-sans);
            font-weight: bold;
            text-decoration: none;
            padding: 15px 40px;
            border-radius: 5px;
            margin-top: 30px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
            transition: transform 0.3s ease, background-color 0.3s ease;
        }
        .cta-button:hover {
            transform: translateY(-3px);
            background-color: #d1b473; /* Tono más claro de dorado */
        }
        .logos-section {
            padding: 40px 0;
        }
        .logos-section .logos {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            gap: 50px;
        }
        .logos img {
            height: 50px;
            filter: grayscale(100%);
            transition: filter 0.3s ease;
        }
        .logos img:hover {
            filter: grayscale(0%);
        }

        /* --- Pie de Página --- */
        footer {
            background-color: var(--color-primary);
            color: var(--color-text-light);
            text-align: center;
            padding: 30px 0;
        }
        footer p {
            margin: 0;
            font-size: 0.9em;
        }
        footer a {
            color: var(--color-secondary);
            text-decoration: none;
            transition: color 0.3s ease;
        }
        footer a:hover {
            color: var(--color-text-light);
        }
        
        /* --- Nueva sección de pilares --- */
        .pilares-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 30px;
            text-align: center;
        }

        .pilar-card {
            background-color: var(--color-bg-dark);
            border-top: 4px solid var(--color-secondary);
            padding: 30px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .pilar-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
        }

        .pilar-card h4 {
            font-family: var(--font-serif);
            color: var(--color-primary);
            font-size: 1.3em;
            margin-top: 0;
            margin-bottom: 10px;
        }
        .pilar-card p {
            font-size: 0.9em;
            color: #555;
        }

        /* --- Video Section Specific Styles --- */
        .video-section {
            background-color: var(--color-bg-dark);
            text-align: center;
            padding: 80px 0;
        }
        .video-wrapper {
            position: relative;
            padding-bottom: 56.25%; /* 16:9 Aspect Ratio */
            height: 0;
            overflow: hidden;
            max-width: 900px;
            margin: 40px auto;
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
        }
        .video-wrapper iframe {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border: 0;
        }
        .video-section .section-heading {
            margin-bottom: 15px;
        }
        .video-section .section-subheading {
            margin-bottom: 20px;
            max-width: 900px;
            margin-left: auto;
            margin-right: auto;
        }
        .play-button {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: var(--color-secondary);
            color: var(--color-primary);
            border: none;
            border-radius: 50%;
            width: 80px;
            height: 80px;
            font-size: 1.5em;
            cursor: pointer;
            transition: transform 0.3s ease, background-color 0.3s ease;
            z-index: 10;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .play-button:hover {
            transform: translate(-50%, -50%) scale(1.1);
            background-color: #d1b473;
        }

        /* Animaciones */
        @keyframes fadeInDown {
            from { opacity: 0; transform: translateY(-20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
    </style>
</head>
<body>

    <header>
        <div class="container">
            <span class="logo">Corporativo Internacional Xicotencatl</span>
        </div>
    </header>

    <div class="hero-section">
        <div>
            <h1>Soluciones Estratégicas para la Era Digital</h1>
            <p>Transformamos su visión de negocio en resultados tangibles mediante la integración de inteligencia artificial y análisis de datos de vanguardia.</p>
        </div>
    </div>

    <main>
        <section class="video-section animated">
            <div class="container">
                <h2 class="section-heading">Corporativo Internacional Xicotencatl: La Creación de un Legado Digital</h2>
                <p class="section-subheading">Inspirados en la esencia de la creación y la armonía, forjamos el futuro digital. Así como los Ainur dieron forma al mundo a través del sonido, nosotros construimos realidades innovadoras mediante la sinfonía de la tecnología y la estrategia.</p>
                <div class="video-wrapper">
                    <iframe id="intro-video" src="" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    <button class="play-button" id="play-btn">
                        ▶
                    </button>
                </div>
            </div>
        </section>

        <section class="container">
            <h2 class="section-heading">Nuestra Propuesta de Valor</h2>
            <p class="section-subheading">Más que tecnología, ofrecemos una visión que impulsa el crecimiento y la eficiencia de su empresa.</p>
            <div class="value-prop-grid">
                <div class="value-prop-item">
                    <h3>Visión Estratégica</h3>
                    <p>Fusionamos el análisis de datos con la inteligencia artificial para identificar oportunidades únicas y diseñar estrategias que le den una ventaja competitiva sostenible.</p>
                </div>
                <div class="value-prop-item">
                    <h3>Excelencia Operativa</h3>
                    <p>Optimizamos sus procesos internos, automatizamos tareas repetitivas y reducimos costos operativos, permitiendo a su equipo enfocarse en lo que realmente importa.</p>
                </div>
                <div class="value-prop-item">
                    <h3>Partnership a Largo Plazo</h3>
                    <p>Establecemos una relación de colaboración con usted, adaptando nuestras soluciones a la evolución de sus necesidades de negocio para asegurar un éxito continuo.</p>
                </div>
            </div>
        </section>

        <section class="container" style="background-color: var(--color-bg-dark);">
            <h2 class="section-heading">Nuestros Servicios Estratégicos</h2>
            <p class="section-subheading">Ofrecemos un portafolio de soluciones diseñadas para catapultar su negocio hacia el futuro.</p>
            <div class="services-grid">
                <div class="service-card">
                    <h3>Consultoría de IA</h3>
                    <p>Análisis de viabilidad y hoja de ruta para la implementación de soluciones de inteligencia artificial que generen un retorno de inversión claro y medible.</p>
                </div>
                <div class="service-card">
                    <h3>Análisis de Big Data</h3>
                    <p>Convertimos volúmenes masivos de datos en insights accionables, permitiéndole tomar decisiones fundamentadas y anticipar las tendencias del mercado.</p>
                </div>
                <div class="service-card">
                    <h3>Optimización de Procesos</h3>
                    <p>Implementación de herramientas de automatización robótica (RPA) y machine learning para aumentar la eficiencia y reducir los errores humanos.</p>
                </div>
                <div class="service-card">
                    <h3>Ciberseguridad Inteligente</h3>
                    <p>Protección proactiva de sus activos digitales con sistemas de seguridad basados en IA que detectan y neutralizan amenazas antes de que se materialicen.</p>
                </div>
            </div>
        </section>

        <section class="container">
            <h2 class="section-heading">Xicotencatl Marketing Digitalizado: Estrategias de Impacto</h2>
            <p class="section-subheading">A través de Xicotencatl Marketing Digitalizado, ampliamos su alcance y construimos su marca con estrategias digitales que resuenan y convierten.</p>
            <div class="services-grid">
                <div class="service-card">
                    <h3>SEO y Estrategia de Contenido</h3>
                    <p>Mejoramos su visibilidad en buscadores para atraer tráfico orgánico de alta calidad. Creamos contenido valioso que resuena con su audiencia y establece su autoridad en la industria.</p>
                </div>
                <div class="service-card">
                    <h3>Marketing en Redes Sociales</h3>
                    <p>Gestionamos sus perfiles para construir una comunidad fuerte y comprometida. Desarrollamos campañas que aumentan el reconocimiento de marca y generan interacciones significativas.</p>
                </div>
                <div class="service-card">
                    <h3>Publicidad Digital (SEM)</h3>
                    <p>Diseñamos y optimizamos campañas de publicidad pagada en Google Ads, Meta Ads y otras plataformas, asegurando un uso eficiente de su presupuesto y un retorno de inversión máximo.</p>
                </div>
                <div class="service-card">
                    <h3>Email Marketing y Automatización</h3>
                    <p>Creamos campañas de email personalizadas para nutrir leads y retener clientes. Implementamos secuencias automatizadas que simplifican sus procesos de comunicación.</p>
                </div>
            </div>
        </section>
        
        <section class="container" style="background-color: var(--color-bg-dark);">
            <h2 class="section-heading">Servicios de Hosting</h2>
            <p class="section-subheading">Asegure la disponibilidad y el rendimiento de su plataforma con nuestro hosting de alta disponibilidad.</p>
            <div class="services-grid">
                <div class="service-card">
                    <h3>Rendimiento Óptimo</h3>
                    <p>Servidores ultra-rápidos optimizados para IA y aplicaciones web complejas, garantizando una experiencia de usuario fluida y sin interrupciones.</p>
                </div>
                <div class="service-card">
                    <h3>Seguridad Avanzada</h3>
                    <p>Protección integral con monitoreo 24/7, firewalls avanzados y copias de seguridad automáticas para resguardar sus datos y los de sus clientes.</p>
                </div>
                <div class="service-card">
                    <h3>Soporte 24/7</h3>
                    <p>Acceso a un equipo de expertos que resolverá cualquier incidencia técnica de forma rápida y eficiente, sin importar la hora o el día.</p>
                </div>
                <div class="service-card">
                    <h3>Escalabilidad Flexible</h3>
                    <p>Infraestructura que crece con su negocio. Aumente recursos (CPU, RAM, almacenamiento) fácilmente a medida que sus necesidades evolucionan.</p>
                </div>
            </div>
        </section>

        <section class="container">
            <h2 class="section-heading">Creación de NPCs: Personalidades Digitales</h2>
            <p class="section-subheading">Desarrollamos asistentes y personajes inteligentes que interactúan de manera autónoma, mejorando la experiencia del cliente y la eficiencia interna.</p>
            <div class="services-grid">
                <div class="service-card">
                    <h3>Asistentes Virtuales (Chatbots)</h3>
                    <p>Diseñamos e implementamos chatbots que brindan atención al cliente 24/7, responden preguntas frecuentes y automatizan procesos de soporte, liberando a su equipo para tareas más complejas.</p>
                </div>
                <div class="service-card">
                    <h3>Personajes para Gamificación</h3>
                    <p>Creamos personajes con IA para videojuegos y aplicaciones interactivas, capaces de generar diálogos dinámicos y comportamientos complejos para una experiencia de usuario más inmersiva.</p>
                </div>
                <div class="service-card">
                    <h3>NPCs para Simulación y Formación</h3>
                    <p>Desarrollamos personajes virtuales inteligentes que participan en simulaciones de entrenamiento, escenarios de seguridad o pruebas de productos, ofreciendo un entorno de aprendizaje seguro y realista.</p>
                </div>
            </div>
        </section>

        <section class="trust-section">
            <div class="container">
                <h2 class="section-heading">Impulse su Empresa con la Inteligencia de Xicotencatl</h2>
                <p class="section-subheading">Únase a los líderes de la industria que ya confían en nuestras soluciones para transformar su futuro. Dé el primer paso hoy.</p>
                <a href="#" class="cta-button">Conozca Nuestras Soluciones</a>
            </div>
        </section>

        <section class="logos-section">
            <div class="container">
                <h2 class="section-heading">Confían en Nosotros</h2>
                <p class="section-subheading">Hemos colaborado con empresas que son referentes en su sector, ayudándoles a alcanzar sus metas digitales.</p>
                <div class="logos">
                    <img src="https://via.placeholder.com/150x50.png?text=Empresa+A" alt="Empresa A logo">
                    <img src="https://via.placeholder.com/150x50.png?text=Empresa+B" alt="Empresa B logo">
                    <img src="https://via.placeholder.com/150x50.png?text=Empresa+C" alt="Empresa C logo">
                    <img src="https://via.placeholder.com/150x50.png?text=Empresa+D" alt="Empresa D logo">
                </div>
            </div>
        </section>
    </main>

    <footer>
        <div class="container">
            <p>© 2025 Corporativo Internacional Xicotencatl. Todos los derechos reservados.</p>
            <p>Hecho con <a href="#">pasión</a> y <a href="#">visión</a> en México.</p>
        </div>
    </footer>

    <script>
        document.addEventListener('DOMContentLoaded', function() {
            // Script para animar las secciones al hacer scroll
            const sections = document.querySelectorAll('section');
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.2
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animated');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            sections.forEach(section => {
                observer.observe(section);
            });

            // Script para el botón de reproducción del video
            const video = document.getElementById('intro-video');
            const playButton = document.getElementById('play-btn');

            if (playButton && video) {
                playButton.addEventListener('click', function() {
                    // **IMPORTANTE:** Reemplaza 'TU_VIDEO_ID' con el ID real de tu video de YouTube.
                    // Ejemplo: para https://www.youtube.com/watch?v=dQw4w9WgXcQ, el ID es dQw4w9WgXcQ
                    const videoId = 'dQw4w9WgXcQ'; 

                    // Construye la URL de inserción de YouTube
                    video.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
                    
                    // Oculta el botón de reproducción
                    playButton.style.display = 'none';
                });
            }
        });
    </script>

</body>
</html>
