document.addEventListener('DOMContentLoaded', () => {
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
