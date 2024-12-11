document.addEventListener('DOMContentLoaded', () => {
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
            value: "INITIALIZING BIRTHDAY PROTOCOLS",
            delimiter: ""
        },
        duration: 0.5
    })
    .to('.loading-details', {
        text: {
            value: "SCANNING BIRTHDAY DATABASE...",
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
            value: "TARGET FOUND: HARSH BHI",
            delimiter: ""
        },
        duration: 1
    })
    .to('.loading-text', {
        text: {
            value: "ACCESSING MEMORY BANKS",
            delimiter: ""
        },
        duration: 0.5
    })
    .to('.loading-details', {
        text: {
            value: "LOADING SPECIAL MEMORIES...",
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
            value: "COMPILING BIRTHDAY WISHES...",
            delimiter: ""
        },
        duration: 0.5
    })
    .to('.loading-text', {
        text: {
            value: "SYSTEM OVERRIDE DETECTED",
            delimiter: ""
        },
        duration: 0.5
    })
    .to('.loading-details', {
        text: {
            value: "WARNING: HAPPINESS LEVELS EXCEEDING LIMITS!",
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
            value: "INITIALIZING CELEBRATION PROTOCOLS...",
            delimiter: ""
        },
        duration: 0.5
    })
    .to('.loading-text', {
        text: {
            value: "FINAL CHECKS IN PROGRESS",
            delimiter: ""
        },
        duration: 0.5
    })
    .to('.loading-details', {
        text: {
            value: "PARTY MODE: ACTIVATED",
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
            value: "SYSTEM READY FOR BIRTHDAY CELEBRATION!",
            delimiter: ""
        },
        duration: 0.5
    })
    .to({}, { duration: 1 }) // Pause to read message
    .to('.loading-details', {
        text: {
            value: "CLICK ANYWHERE TO ENTER >>",
            delimiter: ""
        },
        duration: 0.5
    })
    .addPause() // Pause the timeline here
    .to('.preloader', {
        opacity: 0,
        duration: 0.5,
        onStart: () => {
            startWarpTransition();
        },
        onComplete: () => {
            setTimeout(() => {
                // Fade out preloader
                document.querySelector('.preloader').style.display = 'none';
                
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
    document.addEventListener('click', function continueToMain() {
        tl.resume(); // Continue the timeline
        document.removeEventListener('click', continueToMain);
    });

    // Matrix rain effect
    const canvas = document.createElement('canvas');
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.zIndex = '-1';
    document.querySelector('.matrix-bg').appendChild(canvas);
    
    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    // Matrix rain characters
    const chars = 'HAPPY BIRTHDAY HARSH BHI 01'.split('');
    const fontSize = 14;
    const columns = width / fontSize;
    const drops = Array(Math.floor(columns)).fill(1);

    function drawMatrix() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, width, height);
        
        ctx.fillStyle = '#0F0';
        ctx.font = fontSize + 'px monospace';
        
        for (let i = 0; i < drops.length; i++) {
            const text = chars[Math.floor(Math.random() * chars.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            
            if (drops[i] * fontSize > height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }

    setInterval(drawMatrix, 33);

    // Button activation
    const activateButton = document.getElementById('activateButton');
    activateButton.addEventListener('click', () => {
        // Create glitch effect
        document.body.style.animation = 'glitch 0.3s infinite';
        
        // Play cyberpunk-style sound
        const audio = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3');
        audio.play();
        
        // Show hidden messages
        const messageContainer = document.querySelector('.message-container');
        messageContainer.classList.remove('hidden');
        messageContainer.classList.add('show');
        
        // Change button text
        activateButton.innerHTML = '<span></span><span></span><span></span><span></span>SYSTEM OVERLOADED';
        activateButton.style.pointerEvents = 'none';
        
        // Create digital confetti
        createDigitalConfetti();
    });

    function createDigitalConfetti() {
        for (let i = 0; i < 100; i++) {
            const particle = document.createElement('div');
            particle.classList.add('digital-particle');
            particle.style.left = Math.random() * 100 + 'vw';
            particle.style.animationDelay = Math.random() * 2 + 's';
            particle.style.background = `rgba(${Math.random() * 255}, ${Math.random() * 255}, 255, 0.8)`;
            document.body.appendChild(particle);
            
            setTimeout(() => particle.remove(), 5000);
        }
    }

    // Add warp transition container
    const warpContainer = document.createElement('div');
    warpContainer.className = 'warp-transition';
    document.body.appendChild(warpContainer);

    // Portal configuration
    const PORTAL_CONFIG = {
        duration: 900,        // Duration of portal effect in milliseconds
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
            color: 0x00ff00, // Matrix green
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
