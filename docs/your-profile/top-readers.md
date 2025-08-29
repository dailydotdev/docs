<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kicengan - La Frontera de la IA</title>
    <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&family=Montserrat:wght@300;400;600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <style>
        :root {
            --color-bg-dark: #000000;
            --color-bg-medium: #0f0f0f;
            --color-mint-primary: #66ffcc; /* Menta vibrante */
            --color-white-accent: #ffffff; /* Blanco puro */
            --color-blue-secondary: #80e6ff; /* Azul cielo suave */
            --color-text-light: #e0f7fa;
            --color-text-dim: #a7d9f7;
            --gradient-bg: linear-gradient(135deg, #0f0f0f, #1a1a1a, #0f0f0f);
            --gradient-mint-blue: linear-gradient(45deg, var(--color-mint-primary), var(--color-blue-secondary));
            --gradient-mint-white: linear-gradient(45deg, var(--color-mint-primary), var(--color-white-accent));
        }

        body {
            font-family: 'Montserrat', sans-serif;
            margin: 0;
            padding: 0;
            background: var(--color-bg-dark);
            color: var(--color-text-light);
            line-height: 1.8;
            overflow-x: hidden;
            position: relative;
        }

        body::before {
            content: '';
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: var(--gradient-bg); /* Fondo más sutil */
            background-size: 400% 400%;
            animation: gradientShift 18s ease infinite;
            z-index: -2;
            opacity: 0.3;
        }

        @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }

        .container {
            width: 90%;
            max-width: 1400px;
            margin: 40px auto;
            background-color: var(--color-bg-medium);
            border-radius: 20px;
            box-shadow: 0 15px 30px rgba(0, 0, 0, 0.7);
            padding: 40px;
            text-align: center;
            position: relative;
            z-index: 1;
            overflow: hidden;
        }

        h1, h2 {
            font-family: 'Orbitron', sans-serif;
            color: var(--color-mint-primary);
            text-shadow: 0 0 15px var(--color-mint-primary), 0 0 30px rgba(102, 255, 204, 0.5);
            margin-bottom: 30px;
            font-size: 3.5em;
            letter-spacing: 2px;
            animation: fadeInScale 1.5s ease-out, glowMint 2s ease-in-out infinite alternate;
        }

        h2 {
            font-size: 2.5em;
            margin-top: 60px;
            color: var(--color-blue-secondary);
            text-shadow: 0 0 12px var(--color-blue-secondary), 0 0 24px rgba(128, 230, 255, 0.4);
            animation: fadeInScale 1.5s ease-out, glowBlue 2s ease-in-out infinite alternate;
        }

        p {
            font-size: 1.2em;
            color: var(--color-text-light);
            margin-bottom: 35px;
            max-width: 900px;
            margin-left: auto;
            margin-right: auto;
            animation: fadeIn 2s ease-out;
        }

        .main-image-container {
            margin-bottom: 50px;
            position: relative;
            overflow: hidden;
            border-radius: 15px;
            box-shadow: 0 0 30px rgba(102, 255, 204, 0.8), 0 0 60px rgba(102, 255, 204, 0.3);
            transition: box-shadow 0.4s ease;
        }

        .main-image {
            width: 100%;
            max-width: 1000px;
            height: auto;
            border-radius: 15px;
            display: block;
            margin: 0 auto;
            transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            filter: brightness(1.1) saturate(1.2);
        }

        .main-image-container::before {
            content: '';
            position: absolute;
            top: 0;
            left: -75%;
            width: 50%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
            transform: skewX(-20deg);
            transition: left 0.7s ease-in-out;
        }

        .main-image-container:hover .main-image {
            transform: scale(1.03);
        }
        
        .main-image-container:hover::before {
            left: 125%;
        }

        .secondary-gallery {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 35px;
            margin-top: 50px;
        }

        .gallery-item {
            position: relative;
            overflow: hidden;
            border-radius: 12px;
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.6);
            cursor: pointer;
            transition: transform 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55), box-shadow 0.4s ease;
        }
        
        .gallery-item:hover {
            transform: translateY(-15px) scale(1.05);
            box-shadow: 0 15px 35px rgba(128, 230, 255, 0.8), 0 0 50px rgba(128, 230, 255, 0.4);
            z-index: 2;
        }

        .gallery-item img {
            width: 100%;
            height: 220px;
            object-fit: cover;
            border-radius: 12px;
            display: block;
            filter: grayscale(0.2) brightness(0.9);
            transition: filter 0.4s ease;
        }

        .gallery-item:hover img {
            filter: grayscale(0) brightness(1.1);
        }

        .gallery-overlay {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            background: linear-gradient(transparent, rgba(0,0,0,0.8));
            color: var(--color-white-accent);
            padding: 15px;
            transform: translateY(100%);
            transition: transform 0.4s ease-out;
            border-bottom-left-radius: 12px;
            border-bottom-right-radius: 12px;
            text-align: left;
            font-size: 0.9em;
            opacity: 0;
        }

        .gallery-item:hover .gallery-overlay {
            transform: translateY(0);
            opacity: 1;
        }

        .gallery-overlay h3 {
            margin: 0 0 5px 0;
            font-family: 'Orbitron', sans-serif;
            color: var(--color-mint-primary);
            font-size: 1.1em;
            text-shadow: none; /* Desactivar glow extra para overlays */
        }
        .gallery-overlay p {
            margin: 0;
            font-size: 0.85em;
            color: var(--color-text-dim);
        }

        .map-section {
            margin-top: 70px;
            margin-bottom: 50px;
            text-align: center;
        }

        .map-container {
            position: relative;
            width: 100%;
            height: 500px;
            overflow: hidden;
            border-radius: 15px;
            box-shadow: 0 0 20px var(--color-blue-secondary);
            border: 2px solid var(--color-blue-secondary);
        }

        .map-container iframe {
            width: 100%;
            height: 100%;
            border: none;
            filter: grayscale(0.6) invert(0.1);
            transition: filter 0.5s ease-in-out;
        }
        
        .map-container:hover iframe {
            filter: grayscale(0) invert(0);
        }

        .social-links {
            margin-top: 50px;
            margin-bottom: 30px;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            gap: 25px;
        }

        .social-links a {
            color: var(--color-blue-secondary);
            font-size: 2.2em;
            text-decoration: none;
            transition: color 0.3s ease, transform 0.3s ease, text-shadow 0.3s ease;
            position: relative;
        }

        .social-links a:hover {
            color: var(--color-mint-primary);
            transform: scale(1.2) rotate(5deg);
            text-shadow: 0 0 15px var(--color-mint-primary), 0 0 25px var(--color-mint-primary);
        }
        
        .social-links a::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 80%;
            height: 80%;
            border-radius: 50%;
            background: var(--color-blue-secondary);
            opacity: 0.1;
            filter: blur(8px);
            z-index: -1;
            transition: opacity 0.3s ease, background 0.3s ease;
        }
        .social-links a:hover::before {
            opacity: 0.3;
            background: var(--color-mint-primary);
        }

        .footer {
            margin-top: 70px;
            font-size: 0.95em;
            color: var(--color-text-dim);
            padding-top: 30px;
            border-top: 1px solid rgba(102, 255, 204, 0.2);
            animation: fadeIn 3s ease-out;
        }

        .footer p {
            margin-bottom: 5px;
        }

        .audio-control-button {
            position: fixed;
            bottom: 30px;
            right: 30px;
            background: var(--gradient-mint-white);
            color: var(--color-bg-dark);
            border: none;
            border-radius: 50%;
            width: 55px;
            height: 55px;
            font-size: 1.5em;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            box-shadow: 0 0 15px var(--color-mint-primary), 0 0 25px rgba(102, 255, 204, 0.5);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            z-index: 1000;
        }

        .audio-control-button:hover {
            transform: scale(1.1);
            box-shadow: 0 0 15px var(--color-blue-secondary), 0 0 25px rgba(128, 230, 255, 0.5);
        }

        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeInScale {
            from { opacity: 0; transform: scale(0.9); }
            to { opacity: 1; transform: scale(1); }
        }

        @keyframes glowMint {
            from { text-shadow: 0 0 15px var(--color-mint-primary), 0 0 30px rgba(102, 255, 204, 0.5); }
            to { text-shadow: 0 0 20px var(--color-mint-primary), 0 0 40px rgba(102, 255, 204, 0.7); }
        }

        @keyframes glowBlue {
            from { text-shadow: 0 0 12px var(--color-blue-secondary), 0 0 24px rgba(128, 230, 255, 0.4); }
            to { text-shadow: 0 0 18px var(--color-blue-secondary), 0 0 36px rgba(128, 230, 255, 0.6); }
        }

        @media (max-width: 768px) {
            h1 {
                font-size: 2.5em;
            }
            h2 {
                font-size: 2em;
            }
            p {
                font-size: 1em;
            }
            .container {
                padding: 20px;
                margin: 20px auto;
            }
            .secondary-gallery {
                grid-template-columns: 1fr;
            }
            .gallery-item {
                height: auto;
            }
            .gallery-item img {
                height: 200px;
            }
            .map-container {
                height: 300px;
            }
            .social-links {
                gap: 15px;
            }
            .social-links a {
                font-size: 1.8em;
            }
            .audio-control-button {
                bottom: 20px;
                right: 20px;
                width: 45px;
                height: 45px;
                font-size: 1.2em;
            }
        }
    </style>
</head>
<body>
    <audio id="background-audio" loop muted>
        <source src="https://assets.mixkit.co/sfx/preview/mixkit-futuristic-software-ambience-1563.mp3" type="audio/mpeg">
        <source src="https://assets.mixkit.co/sfx/preview/mixkit-futuristic-software-ambience-1563.ogg" type="audio/ogg">
    </audio>

    <audio id="sfx-hover" src="https://assets.mixkit.co/sfx/preview/mixkit-sci-fi-click-1144.mp3"></audio>
    <audio id="sfx-click" src="https://assets.mixkit.co/sfx/preview/mixkit-tech-machine-power-on-1798.mp3"></audio>
    <audio id="sfx-toggle" src="https://assets.mixkit.co/sfx/preview/mixkit-game-futuristic-coin-receive-2292.mp3"></audio>

    <button id="audio-toggle" class="audio-control-button">
        <i class="fas fa-volume-mute"></i>
    </button>

    <div class="container">
        <h1>Kicengan - Pioneros en la Frontera de la IA</h1>
        <p>Adéntrate en una experiencia sin precedentes que define la próxima era de la Inteligencia Artificial. En Kicengan, no solo imaginamos el futuro, lo construimos. Explora las visiones más audaces donde la tecnología y la cognición humana convergen, creando realidades que desafían los límites de lo posible.</p>
        
        <div class="main-image-container interactive">
            <img class="main-image" src="https://images.unsplash.com/photo-1596541223130-5d31a73f876b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Visión futurista de la interacción humano-IA en Kicengan">
        </div>
        
        <h2>Nuestra Galería: Ecosistemas de Innovación</h2>
        <p>Cada imagen es una ventana a la innovación, una instantánea de los algoritmos que respiran, las redes neuronales que evolucionan y las interfaces que conectan mundos. Una celebración visual de la inteligencia artificial más allá de la comprensión convencional.</p>

        <div class="secondary-gallery">
            <div class="gallery-item interactive">
                <img src="https://images.unsplash.com/photo-1601614741344-9989b5c2a30d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Interconexión Neural de la IA">
                <div class="gallery-overlay">
                    <h3>Interconexión Neural</h3>
                    <p>Visualización de la complejidad de una red neuronal de IA.</p>
                </div>
            </div>
            <div class="gallery-item interactive">
                <img src="https://images.unsplash.com/photo-1620712948332-909249052b66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Arquitectura de Datos">
                <div class="gallery-overlay">
                    <h3>Arquitectura de Datos</h3>
                    <p>La base de conocimiento que impulsa la IA de Kicengan.</p>
                </div>
            </div>
            <div class="gallery-item interactive">
                <img src="https://images.unsplash.com/photo-1582218084534-11488c531d05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Realidad Aumentada y Colaboración Asistida por IA">
                <div class="gallery-overlay">
                    <h3>Realidad Aumentada</h3>
                    <p>Colaboración humana-IA en entornos inmersivos y virtuales.</p>
                </div>
            </div>
            <div class="gallery-item interactive">
                <img src="https://images.unsplash.com/photo-1549492167-f4e9a38f45a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Consciencia Artificial y Formas Sintéticas">
                <div class="gallery-overlay">
                    <h3>Consciencia Sintética</h3>
                    <p>La IA tomando forma, un paso hacia la autoconsciencia.</p>
                </div>
            </div>
            <div class="gallery-item interactive">
                <img src="https://images.unsplash.com/photo-1563200782-b7e28989f660?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="El Corazón Pensante de la Máquina">
                <div class="gallery-overlay">
                    <h3>El Corazón de la IA</h3>
                    <p>Representación de un cerebro de IA, el motor de la innovación.</p>
                </div>
            </div>
            <div class="gallery-item interactive">
                <img src="https://images.unsplash.com/photo-1605786884635-f09b2e753066?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Visión Robótica y Análisis de Datos Avanzado">
                <div class="gallery-overlay">
                    <h3>Visión Robótica</h3>
                    <p>Máquinas que ven, procesan y aprenden del entorno.</p>
                </div>
            </div>
            <div class="gallery-item interactive">
                <img src="https://images.unsplash.com/photo-1596956247920-5696c6020786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Arquitectura Cerebral de la IA">
                <div class="npx shadcn@latest add "https://animateicons.vercel.app/icons/copy.json"
                
                
                gallery-overlay">
                    <h3>Arquitectura Cerebral</h3>
                    <p>Un vistazo a la estructura interna de la inteligencia artificial.</p>
                </div>
            </div>
            <div class="gallery-item interactive">
                <img src="https://images.unsplash.com/photo-1581093557921-26c7104b281f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Sinergia entre Lógica y Creatividad IA">
                <div class="gallery-overlay">
                    <h3>Sinergia Lógica</h3>
                    <p>La convergencia de algoritmos y pensamiento creativo.</p>
                </div>
            </div>
        </div>

        <div class="map-section interactive">
            <h2>Encuéntranos en el Epicentro de la Innovación</h2>
            
            <p>Nuestra sede en Cuautitlán Izcalli es el corazón de nuestras operaciones. Visítanos y descubre el lugar donde las ideas del futuro se materializan.</p>
            <div class="map-container">
                <iframe src="http://googleusercontent.com/maps.google.com/1" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
        
        <div class="social-links">
            <p>Conecta con nuestro universo de IA:</p>
            <a href="http://googleusercontent.com/youtube.com/2" target="_blank" title="YouTube Kicengan" data-sfx="true" data-hover-sfx="true"><i class="fab fa-youtube"></i></a>
            <a href="http://googleusercontent.com/twitter.com/3" target="_blank" title="Twitter Kicengan" data-sfx="true" data-hover-sfx="true"><i class="fab fa-twitter"></i></a>
            <a href="
            ---
sidebar_position: 5
description: "Celebrate your dedication by earning a Top Reader badge and gain recognition for your activity within specific categories."
---

# Top Readers
Top Readers rewards active readers with a badge that highlights their engagement in specific content categories. By encouraging continuous reading, this feature also enables users to share their achievements with others, boosting personal and community engagement across the platform

## Prerequisites
To be eligible for a Top Reader badge, simply stay active on daily.dev and engage consistently with content in various categories. There’s no additional setup required to start earning badges.

## Benefits of the Top Readers Feature
- **Recognition**: Stand out in the community with a visible badge on your profile.
- **Motivation**: Track and celebrate your reading habits to stay engaged with topics you love.
- **Community**: Share your badge with friends and colleagues to encourage others to dive deeper into relevant content.

![top readers displayed on profile page](https://daily-now-res.cloudinary.com/image/upload/v1730663961/docs/SCR-20241103-szmp.png)

## How to Earn a Top Reader Badge
Here's how you can become a Top Reader:

1. **Read consistently**: Spend time engaging with posts in specific content categories. Categories with higher engagement across the platform are eligible for the Top Reader badge.
2. **Monthly evaluation**: Every month, daily.dev evaluates reading days for each category. Based on engagement, certain high-activity tags are "whitelisted" for badge eligibility.
3. **Notification**: If you're among the top readers for a category, you’ll receive both an in-app notification and an email letting you know you’ve earned the Top Reader badge.
4. **Display on profile**: Once awarded, your badge will display on your profile, showcasing the number of times you've earned this recognition and the specific categories where you excel.

## Badge Frequency and Display
- **Monthly updates**: Badges are awarded each month based on the previous month’s activity. Stay consistent to earn badges across multiple categories!
- **Profile display**: Your Top Reader badge will show on your profile page, highlighting the number of times you've earned it and the categories associated with your achievements.
- **Badge download**: Download your badge from the in-app notification to share your accomplishment outside of daily.dev.

## Troubleshooting
If your badge isn’t displaying correctly or if you don’t receive a notification after significant activity in a category:
- Verify your reading days and make sure you’re engaging consistently in high-activity categories.
- Refresh your profile page after receiving the in-app notification.
- For further support, reach out to [support@daily.dev](mailto:support@daily.dev).
