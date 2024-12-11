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
    .to({}, { duration: 1 }) // Pause to read final messages
    .to('.preloader', {
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
            document.querySelector('.preloader').style.display = 'none';
        }
    })
    // First show matrix rain
    .to('.matrix-bg', { 
        opacity: 1,
        duration: 0.5
    })
    // Add a small delay before showing text
    .to({}, { duration: 0.5 })
    // Then show the text elements
    .to('.glitch-container', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out"
    })
    .to('.content', {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power2.out"
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
});
