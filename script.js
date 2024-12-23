document.addEventListener('DOMContentLoaded', () => {
    // Add music control
    const bgMusic = new Audio('assets/happy.mp3');
    bgMusic.loop = true;
    let isMusicPlaying = false;

    const musicBtn = document.querySelector('.music-btn');
    musicBtn.addEventListener('click', () => {
        if (isMusicPlaying) {
            bgMusic.pause();
            musicBtn.classList.remove('playing');
        } else {
            bgMusic.play().catch(e => console.log("Music play failed:", e));
            musicBtn.classList.add('playing');
        }
        isMusicPlaying = !isMusicPlaying;
    });

    // Register TextPlugin
    gsap.registerPlugin(TextPlugin);
    
    const tl = gsap.timeline();
    const detailsContainer = document.querySelector('.loading-details');
    
    // Initial states
    gsap.set(['.matrix-bg', '.glitch-container', '.content'], { 
        opacity: 0,
        visibility: 'visible'
    });
    
    // Add percentage element
    const progressBar = document.querySelector('.progress-bar');
    const percentageDiv = document.createElement('div');
    percentageDiv.className = 'progress-percentage';
    progressBar.appendChild(percentageDiv);

    // Enhanced loading sequence with percentage updates
    tl.to('.progress', {
        width: '30%',
        duration: 1,
        ease: 'power1.inOut',
        onUpdate: function() {
            const progress = Math.round(this.progress() * 100);
            percentageDiv.textContent = `${progress}%`;
        }
    })
    .to('.loading-text', {
        text: {
            value: "CONNECTING ACROSS MILES",
            delimiter: ""
        },
        duration: 0.5
    })
    .to('.loading-details', {
        text: {
            value: "LOCATING BIRTHDAY STAR...",
            delimiter: ""
        },
        duration: 0.5
    })
    .to('.progress', {
        width: '50%',
        duration: 0.8,
        ease: 'power1.inOut',
        onUpdate: function() {
            const progress = Math.round(this.progress() * 100);
            percentageDiv.textContent = `${progress}%`;
        }
    })
    .to('.loading-details', {
        text: {
            value: "FOUND: HARSH BHI",
            delimiter: ""
        },
        duration: 1
    })
    .to('.loading-text', {
        text: {
            value: "GATHERING GOOD VIBES",
            delimiter: ""
        },
        duration: 0.5
    })
    .to('.loading-details', {
        text: {
            value: "COLLECTING BIRTHDAY CHEERS...",
            delimiter: ""
        },
        duration: 0.5
    })
    .to('.progress', {
        width: '65%',
        duration: 0.8,
        ease: 'power1.inOut',
        onUpdate: function() {
            const progress = Math.round(this.progress() * 100);
            percentageDiv.textContent = `${progress}%`;
        }
    })
    .to('.loading-details', {
        text: {
            value: "PREPARING SPECIAL MESSAGE...",
            delimiter: ""
        },
        duration: 0.5
    })
    .to('.loading-text', {
        text: {
            value: "DISTANCE NO BARRIER",
            delimiter: ""
        },
        duration: 0.5
    })
    .to('.loading-details', {
        text: {
            value: "CELEBRATION MODE: ACTIVATED!",
            delimiter: ""
        },
        duration: 0.5
    })
    .to('.progress', {
        width: '85%',
        duration: 0.8,
        ease: 'power1.inOut',
        onUpdate: function() {
            const progress = Math.round(this.progress() * 100);
            percentageDiv.textContent = `${progress}%`;
        }
    })
    .to('.loading-details', {
        text: {
            value: "SENDING VIRTUAL HIGH FIVE...",
            delimiter: ""
        },
        duration: 0.5
    })
    .to('.loading-text', {
        text: {
            value: "ALMOST READY",
            delimiter: ""
        },
        duration: 0.5
    })
    .to('.loading-details', {
        text: {
            value: "BIRTHDAY VIBES LOADED",
            delimiter: ""
        },
        duration: 0.5
    })
    .to('.progress', {
        width: '100%',
        duration: 0.8,
        ease: 'power1.inOut',
        onUpdate: function() {
            const progress = Math.round(this.progress() * 100);
            percentageDiv.textContent = `${progress}%`;
        }
    })
    .to('.loading-details', {
        text: {
            value: "LET'S MAKE THIS DAY AMAZING!",
            delimiter: ""
        },
        duration: 0.5
    })
    .to('.loading-details', {
        textDecoration: 'underline',
        textUnderlineOffset: '3px',
        textDecorationColor: 'white',
        text: {
            value: "CLICK TO JOIN THE CELEBRATION >>",
            delimiter: ""
        },
        duration: 0.5,
        onComplete: () => {
            isReadyForClick = true;
        }
    })
    .addPause()
    .to('.preloader', {
        opacity: 0,
        duration: 0.5,
        onStart: () => {
            startWarpTransition();
            console.log("Starting warp transition"); // Debug log
        },
        onComplete: () => {
            console.log("Preloader fade complete"); // Debug log
            setTimeout(() => {
                // Fade out preloader
                document.querySelector('.preloader').style.display = 'none';
                console.log("Preloader hidden, starting animations"); // Debug log

                // Add new content animations here
                const mainContentTimeline = gsap.timeline({
                    defaults: { 
                        ease: "power2.out",
                        duration: 1
                    }
                });

                // Hacker text effect function
                const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
                
                function hackerEffect(element, finalText) {
                    let iteration = 0;
                    let interval = null;
                    
                    clearInterval(interval);
                    
                    interval = setInterval(() => {
                        element.innerText = finalText
                            .split("")
                            .map((letter, index) => {
                                if (index < iteration) {
                                    return finalText[index];
                                }
                                return letters[Math.floor(Math.random() * 26)]
                            })
                            .join("");

                        if (iteration >= finalText.length) {
                            clearInterval(interval);
                        }

                        iteration += 1 / 3;
                    }, 30);
                }

                // First set everything invisible
                gsap.set(['.terminal-text', '.glitch-text', '.status-text', '.cyber-message-small'], {
                    opacity: 0,
                    y: 20
                });

                // Then animate them in
                mainContentTimeline
                    .to('.terminal-text', {
                        y: 0,
                        opacity: 1,
                        duration: .4,
                        delay: 3.4
                    })
                    .to('.glitch-text', {
                        scale: 1,
                        opacity: 1,
                        duration: .5,
                    })
                    .to('.status-text', {
                        y: 0,
                        opacity: 1,
                        duration: .3,
                    })
                    .to('.cyber-message-small', {
                        opacity: 1,
                        y: 0,
                        duration: .6,
                        onComplete: () => {
                            // Apply hacker effect to each paragraph
                            const paragraphs = document.querySelectorAll('.cyber-message-small p');
                            paragraphs.forEach((p, index) => {
                                setTimeout(() => {
                                    hackerEffect(p, p.innerText);
                                }, index * 500); // Stagger the effect for each paragraph
                            });
                        }
                    });

                // First, start fading in the matrix background slightly
                gsap.to('.matrix-bg', {
                    opacity: 0.3,
                    duration: 2,
                    ease: "power2.inOut"
                });

                // Then begin fading out warp while fading in content
                setTimeout(() => {
                    // Smoothly fade out the warp effect
                    gsap.to(warpContainer, {
                        opacity: 0,
                        duration: 2.5,
                        onComplete: () => {
                            // Show the music button here, after warp effect
                            musicBtn.classList.add('show');
                            
                            // Fade in main content while warp is still visible
                            gsap.to(['.matrix-bg', '.glitch-container', '.content'], {
                                opacity: 1,
                                duration: 1.5,
                                stagger: 0.2
                            });

                            // Start background music
                            const bgMusic = new Audio('https://dl.dropboxusercontent.com/s/h7pdq5hk3j5m0vf/matrix-entrance.mp3');
                            bgMusic.loop = true;
                            bgMusic.volume = 0.5;
                            bgMusic.play().catch(e => console.log("Audio play failed:", e));
                        }
                    });
                }, 2000); // Warp effect duration
            }, PORTAL_CONFIG.duration); // Use configured duration
        }
    });

    // Add click handler to continue the timeline
    let isReadyForClick = false;  // Flag to track when clicking is allowed

    // Modified click handler
    document.addEventListener('click', function continueToMain(e) {
        if (isReadyForClick) {
            tl.resume();  // Continue the timeline
            document.removeEventListener('click', continueToMain);
            isReadyForClick = false;  // Reset the flag
        }
    });

    // Matrix rain effect with ASCII art pattern
    const canvas = document.createElement('canvas');
    // canvas.style.border = '10px solid red';
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.zIndex = '-1';
    document.querySelector('.matrix-bg').appendChild(canvas);

    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    // Responsive font size calculation
    function calculateFontSize() {
        // Base font size on screen width
        const baseFontSize = Math.min(width / 100, 14); // Adjust these numbers to tune the scaling
        return Math.max(8, baseFontSize); // Ensure minimum readable size
    }

    let fontSize = calculateFontSize();
    let columns = width / fontSize;
    let drops = Array(Math.floor(columns)).fill(1);

    // Calculate pattern scaling
    function calculatePatternScale() {
        // Scale pattern based on screen width
        const baseScale = width < 768 ? 0.5 : 1; // Adjust scale for mobile
        return baseScale;
    }

    let patternScale = calculatePatternScale();

    // Load and parse ASCII art
    let asciiPattern = [];
    let patternWidth = 0;
    let patternHeight = 0;
    let patternOffsetX = 0;

    // Store the actual characters from the ASCII art
    let asciiChars = new Set();

    const asciiArt = `xxXX$$&&&&&&&&&&&&&&&&&&&&$$$$$$$XXXXXXXXXXXXXX$$$$$$$$$$$$$$$&&&&&&&&&$$$$$$$$$$$$&$$$$$$$$$Xx+
;;;+x$&&&&&&&&&&&&&&&&&&$$XXXXXXxxxxxxxxxXxxxxxXXXXXXXXXXXXXX$$$$&&&&&&&&&&$$$$$$$$$$$$$$$$$$$X+
;;;+++X$&&&&&&&&&&&$$$$XXXxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxXXX$$$&&&&&&&$&$&$&$$$$$&$$$$$$$$$X
;;+x$$$$&&&&&&&&$$XXXXxxxxxxx++++x++++++++++++++++++xxxxxxxxxxxxXX$$&&&&&&&&&$$$$$&&&$$$$$$$$XXx
++xxXX$&&&&&&&&$$XXxxxxx+++++++++++++++++++++++++++++++++++++++xxxXX$$&&&&&&&&&&$&$$&&&&&&$$XX+x
;;+xxX$$$&&&&&$$XXxx+++++++++++++++++++++++++++++++++++++++++++++xxxX$$$&&&&&&&&$$$$$$$$$$Xx+x+;
;;++x$$$&&$&$$$$XXx+++++++++++++++++++++++++;++++++++++++++++++++++xxXX$$&&&&&&&&$&$$$$$XX+;;;;:
+;+xX$$&$$$&&&$$Xx++++++++++++++;++++++++++++++++++++++++++++++++++++xXX$$$$$&&&&&$$$$$$XX;;;;::
;+;xX&$$$$$&&&$$x+++++++;;;;;;;;;;;;;;;;+;;;++++++++++++++++++++++++++xXX$$&$&&&&&&&&$$$$x;;;;::
+++xX&$$$$$&&&$X+++++++;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;++++++++++++++xX$$&$$$&&&&&&$$$$+;:;:::
+++xX&&$$$&&&&$+++++++;;;;+;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;++++++++++xX$$&&$$$&&&&&$$$++;;::::
+++xX$&$$$$&&$x++++x++xx+xxxxx++x+++;;;;;;;;;;;;;;;;;;;;;;+;;++++++++++xx$$&&&$&$$$&&$$X;::;::::
++++xX&&$&$&$X++xxxxxXX$$$$$$$$$$$Xxx+++;;;;;;;;;;++++++++++++++++++++++xX$&&&&&&$$&$$X+:;::::::
+++++x$&$&$$XxxXXXXXXXXXXXXXXXX$$XXXXxx++;;;+;;+++xXXX$$$$$$XXxxxxxxx++++x$&&&&$&&&&$$+:::::::::
+++++xX$$&&$xxXxxxx++++++++xxxxXXXXxxxx++++++++++xXXXXX$$$$$$$$$$$XXxXXx+x$&&$$$&&&$$;::::::::::
++++++xX$$&XxXxxx++++++xXXXxXX$$$XXxxxx+++++++++xxxxXxXXxxxxxXXXxxxXXXxXx+X$&$$&&&$X;:::::::::::
+++++++x$$$x++x++++xX++++xxx+xxxX$$$Xxx+++++++++xxxxxxxxxx++++++++++xxXxxxX$&$$&&$X;::::::::::::
++++++++X$$x+++x+xX+xX$$&$$$$&XX$XXXXXx+;;++++++xxxXXXXxxxxxxx+++++++++xxxx$$$&&$x;:::::::::::::
++++++;X$$$++++++x$$$$$X$$&&$$XXXXX$Xxx+;;+++++xxxXxxxxxxx++++++Xx++++++xxx$$&$$X+::::::::::::::
+++++++X$$&++++++xxxx++xxxxxxxxxxxxxxx++;;++++xxxxX$$$XX$$$$&&$Xx+xX++++x+x$&$$X;;::::::::::::::
++++++xXX$$+++++++++xxxxxxxXXXXXxxx++++;;+;+++xxxxxxXXXX$$&$&$x$&$Xxx+++++x&$$$X;:::::::::::::::
++++++xXX$x++++++;;;;;+++++++++++++++++;;;;+++xx+xxxxxxxxxxxXXXXXXXXxx++++x$$$x+::::::::::::::::
+++++++XX$++++++;;;;;;;;;;++;;;+++++++;;;+;+++++++++++xxxXxxxxxxxxx+++++++x$$XX+::::::::::::::::
;;+++++xXX++++++;;;;;;;;;;;;;;;+++++++;;;+++++++++++++++++++++++++++++++++x$xXx;::::::::::::::::
;;;;;++xxX++++++;;;;;;;;;;;;;;;;++++++;;;;++++++++++++++++++;;;;;;++++++++xXxXx:::::::::::::::::
;;;;++;+xX+++++;;;;;;;;;;;;;;++++++++;;;;;;++++++++++++++++++;+;;;;;++++++xXxX+:::::::::::::::::
;;;;;;;++X+++++;;;;;;;;;;;;++++;;;+;;;;;;;;;;+++++++++;;;;;;;;;;;;;;++++++Xxxx;:::::::::::::::::
;;;;;;;;+X+++++;+;;;;;;;;+++++;;;;;;;;;;;;:;;;+++++++++;;;;;;;;;;+;+++++++Xxx+::::::::::::::::::
;++;;;;;+X+++++++;;;;+++++++++++++++;;;;;;;;;;;;;;;;+++++;;;;;;;;+;+++++++X++;::::::::::::::::::
;;;;;;+++x++++++++++++++++x+++++xXXx++++++++++++++++++++++;;;;;;;+;;+++++xXx+;::::::::::::::::::
;;;;;;;;;x++++++++++++++xx+++++++xxxx+++++++xxxxXx++++++++++;;;;+++++++++Xx+;:::;;::::::::::::::
;;;;;;;;;xx++++++++++++x++++++++++xXXxxxxxxxxxxxx++++++++++++++++++++++++X++;;;;;;::::::::::::::
+;+++++;+x+++++++++++++xxxxxx+x+xxxxxxxXXXxXxxx++++++++++++++++++++++++++X+;;;;;;:::::::::::::::
Xxxxxxxxxx+++++++++++++xxXXxx+xxxxxxxxxxxxxxxxx++++++++++x+++++++++++++++x;;;;;;;:::::::::::::::
XXXXXXXXXxx+++++++++++xXXXXXxxxx++++++++++++x+xx+xx+xxxxxxx+++++++++++++xx;;;;;;;:::::::::::::::
XXXXXXXXXXXxx+++++++++xxxxxxxX$$XX$XXxxxxxxxxx+++++xxxxXxxxx++++++++++++X+;;;;;;::::::::::::::::
XXXXXXXXXXxxx+++++++++++++++x+++++++++++x++xxxxXX$$X$XXXxxx++++++++++x+xx;;;;;;;::::::::::::::::
XXXXXXXXXXXXxx++++++++++++++;++++++++++++++++xxxxxxxxxxXXXx++++++++++xxX;;;;;;;:::::::::::::::::
XXXXXXXXXXXXXxx+++++++++++++;;;++x+++++++++++++++++++++xxx++++++++++xxX+;;;;;;;:::::::::::::::::
$$$XXXXXXXXXXXXxx++++++++++++++;++++x++x++++++++++++++++++++++++x+xxxXx+;;;;;;::::::::::::::::::
$$$XxXx+;:....;Xx+++++++++++++;+++++x+++++++++++++++++++++++++++xxxxxxx;;;;;;;::::::::::::::::::
x;..::......:;+XXxxx+++++++++++++++++++x+x++++++++++++++++++++++xxxxx++;;;;;;;::::::::::::::::::
.:::::::::::;+xXxxxXxxx+++++;+++++++++++++++++++++++++++++++++xxxXx+++;;;;;;;;;;;;;;;:::::::::::
:::::::::.::;+xXx+xXXXxxxx+++++++++++++++++++++++++++++++xxxxxxXx+:xx+;;;;;;;;;;;;;;;;;;;;::::::
:::::::..:::;++$x+++xXXXxxxxxxx+++++++++++++++++++++++++xxxxxXXx+X:+x++;;;;;;;;;;;;;;;;;;;;;;;;;
:::::...:::::;+$xx++++xXXXXXxxxxx+++xxx+++++++++++++xxxxXXXXxx++x$:...:+xxxxxxxxx+++;;;;;;;;;;;;
:......::::::;+$xx+++++xX$$XXXXXxxxxxxxxxxxxxxxxxxxxxxXXXXxxxxxxX$:.:::..:;xxXXXXXXXXxxxx+;;;;;;
......::::::::X$Xx+++++++xxX$$$$XXXXXxxxxxxxxxXXXXXXXX$Xxxxxxxxx$X:..:.::....:xxXXXXXXXXXXXXxxx+
......:::::::;&$Xxx+++++++++xxXXX$$$$$XXXXXXXX$XXXXXXXxxxxxxxxxX&+:...:....::::.+XXXXXXXXXXXXXXX
.......::::::+$$Xxx++++++++++xxxxxxXXXXXXXXXXXXXXxxxxxxxxxxxxxx$&;..........:..::.:xXXXXXXXXXXXX`; 

    // Initialize the pattern and collect unique characters
    asciiPattern = asciiArt.split('\n').map(line => {
        const chars = line.split('');
        chars.forEach(char => {
            if (char !== ' ') asciiChars.add(char);
        });
        return chars;
    });

    patternWidth = Math.max(...asciiPattern.map(line => line.length));
    patternHeight = asciiPattern.length;
    patternOffsetX = Math.floor((columns - patternWidth) / 2);
    if (patternOffsetX < 0) patternOffsetX = 0;

    function isPartOfPattern(x, y) {
        if (!asciiPattern.length) return false;
        
        // Adjust pattern position for different screen sizes
        const scaledPatternWidth = patternWidth * patternScale;
        const patternOffsetX = Math.floor((columns - scaledPatternWidth) / 2);
        
        const patternX = Math.floor(x - patternOffsetX);
        const patternY = Math.floor(y * patternScale) % patternHeight;
        
        if (patternX < 0 || patternX >= patternWidth) return false;
        if (!asciiPattern[patternY]) return false;
        
        return asciiPattern[patternY][patternX] !== ' ' && 
               asciiPattern[patternY][patternX] !== undefined;
    }

    function getCharacterAt(x, y) {
        // Adjust pattern position for different screen sizes
        const scaledPatternWidth = patternWidth * patternScale;
        const patternOffsetX = Math.floor((columns - scaledPatternWidth) / 2);
        
        const patternX = Math.floor(x - patternOffsetX);
        const patternY = Math.floor(y * patternScale) % patternHeight;
        
        if (patternX >= 0 && patternX < patternWidth && asciiPattern[patternY]) {
            return asciiPattern[patternY][patternX] || '.';
        }
        return '.';
    }

    function drawMatrix() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
        ctx.fillRect(0, 0, width, height);
        
        for (let i = 0; i < drops.length; i++) {
            // Randomly select a character position within the pattern
            const randomX = Math.floor(Math.random() * patternWidth);
            const randomY = Math.floor(Math.random() * patternHeight);
            
            const isPattern = isPartOfPattern(randomX, randomY);
            
            if (isPattern) {
                const char = getCharacterAt(randomX, randomY);
                ctx.fillStyle = 'yellow';
                ctx.font = `bold ${fontSize}px monospace`;
                ctx.fillText(char, i * fontSize, drops[i] * fontSize);
                
                const persistentChar = getCharacterAt(randomX, Math.floor(drops[i]));
                ctx.fillStyle = 'rgba(0, 255, 255, 0.3)';
                ctx.fillText(persistentChar, i * fontSize, Math.floor(drops[i]) * fontSize);
                
                drops[i] += 0.1;
            } else {
                ctx.fillStyle = 'rgba(0, 255, 255, 0.1)';
                ctx.font = `${fontSize}px monospace`;
                ctx.fillText('.', i * fontSize, drops[i] * fontSize);
                
                drops[i] += 0.5;
            }
            
            if (drops[i] * fontSize > height) {
                drops[i] = 0;
            }
        }
        
        // Draw persistent pattern overlay with responsive positioning
        for (let i = 0; i < drops.length; i++) {
            for (let y = 0; y < height / fontSize; y++) {
                if (isPartOfPattern(i, y)) {
                    const char = getCharacterAt(i, y);
                    ctx.fillStyle = 'rgba(0, 140, 255, 0.15)';
                    ctx.font = `bold ${fontSize}px monospace`;
                    ctx.fillText(char, i * fontSize, y * fontSize);
                }
            }
        }
    }

    // Enhanced resize handler
    window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
        
        // Recalculate responsive values
        fontSize = calculateFontSize();
        columns = width / fontSize;
        drops = Array(Math.floor(columns)).fill(1);
        patternScale = calculatePatternScale();
        
        // Force immediate redraw
        drawMatrix();
    });

    setInterval(drawMatrix, 50);


    // Add warp transition container
    const warpContainer = document.createElement('div');
    warpContainer.className = 'warp-transition';
    document.body.appendChild(warpContainer);

    // Portal configuration
    const PORTAL_CONFIG = {
        duration: 800,        // Duration of portal effect in milliseconds
        starCount: 15000,      // Number of stars
        portalLength: 2000,    // Length of the portal tunnel
        startingDepth: -1000,  // Starting depth of stars
        maxWarpSpeed: 45,      // Maximum speed of travel
        acceleration: 0.4,     // How quickly it reaches max speed
        starSize: 2,          // Size of stars
        starOpacity: 0.8,     // Opacity of stars
        cameraMovement: 0.5    // Amount of camera sway (0 to disable)
    };

    // Three.js warp speed effect
    function createWarpEffect() {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, PORTAL_CONFIG.portalLength * 1.5);
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        warpContainer.appendChild(renderer.domElement);

        // Create stars with more density in the center
        const starsGeometry = new THREE.BufferGeometry();
        const starVertices = [];
        for (let i = 0; i < PORTAL_CONFIG.starCount; i++) {
            // Create a tunnel effect by concentrating stars in the center
            const radius = Math.random() * Math.random() * PORTAL_CONFIG.portalLength / 2;
            const theta = Math.random() * 2 * Math.PI;
            const y = (Math.random() - 0.5) * PORTAL_CONFIG.portalLength / 2;
            
            const x = radius * Math.cos(theta);
            const z = radius * Math.sin(theta) + PORTAL_CONFIG.startingDepth;
            
            starVertices.push(x, y, z);
        }
        starsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3));
        
        const starsMaterial = new THREE.PointsMaterial({
            color: new THREE.Color('#fff'),  // Cyan
            size: PORTAL_CONFIG.starSize,
            transparent: true,
            opacity: PORTAL_CONFIG.starOpacity,
            blending: THREE.AdditiveBlending
        });
        
        const starField = new THREE.Points(starsGeometry, starsMaterial);
        scene.add(starField);
        
        camera.position.z = 1;
        
        let warpSpeed = 0;
        
        function animate() {
            const animationId = requestAnimationFrame(animate);
            
            if (warpSpeed < PORTAL_CONFIG.maxWarpSpeed) {
                warpSpeed += PORTAL_CONFIG.acceleration;
            }
            
            const positions = starsGeometry.attributes.position.array;
            for (let i = 0; i < positions.length; i += 3) {
                positions[i + 2] += warpSpeed;
                
                // Create infinite tunnel effect
                if (positions[i + 2] > 200) {
                    const radius = Math.random() * Math.random() * PORTAL_CONFIG.portalLength / 2;
                    const theta = Math.random() * 2 * Math.PI;
                    
                    positions[i] = radius * Math.cos(theta);
                    positions[i + 1] = (Math.random() - 0.5) * PORTAL_CONFIG.portalLength / 2;
                    positions[i + 2] = PORTAL_CONFIG.startingDepth;
                }
            }
            starsGeometry.attributes.position.needsUpdate = true;
            
            // Add camera movement
            if (PORTAL_CONFIG.cameraMovement > 0) {
                camera.position.x = Math.sin(Date.now() * 0.0001) * PORTAL_CONFIG.cameraMovement;
                camera.position.y = Math.cos(Date.now() * 0.0001) * PORTAL_CONFIG.cameraMovement;
                camera.lookAt(scene.position);
            }
            
            renderer.render(scene, camera);
            
            if (warpContainer.style.display === 'none') {
                cancelAnimationFrame(animationId);
                renderer.dispose();
            }
        }
        
        animate();
        
        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });
    }

    // Update the startWarpTransition function
    function startWarpTransition() {
        warpContainer.style.display = 'block';
        createWarpEffect();
        
        // Play warp sound
        const warpSound = new Audio('assets/entrance.mp3');
        warpSound.volume = 1;
        warpSound.play().catch(e => console.log("Warp sound failed:", e));
    }
});
