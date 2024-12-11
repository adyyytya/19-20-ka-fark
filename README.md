# Cyberpunk Birthday Protocol 🎮🎂

A stylish, cyberpunk-themed birthday celebration webpage featuring an interactive loading sequence, matrix rain effect, and glitch animations.

## 🚀 Features

- **Interactive Loading Sequence**
  - Progressive loading bar with percentage display
  - Dynamic text updates simulating system initialization
  - Cyberpunk-style progress animations

- **Matrix Rain Effect**
  - Custom Matrix-style falling characters
  - Personalized character set including birthday message
  - Dynamic canvas rendering

- **Visual Effects**
  - Glitch text animations
  - Cyber-styled button with hover effects
  - Digital confetti animation
  - Dynamic color schemes with CSS variables

- **Interactive Elements**
  - Activation button triggering special effects
  - Audio feedback on interaction
  - Hidden messages revealed on activation

## 🛠️ Technical Implementation

### Core Technologies
- HTML5
- CSS3
- JavaScript
- GSAP (GreenSock Animation Platform)

### Key Components

1. **Preloader System**
   - Multi-stage loading sequence
   - Animated progress bar
   - Dynamic status messages

2. **Animation System**
   - GSAP Timeline for sequenced animations
   - Custom CSS keyframe animations
   - Matrix rain effect using Canvas API

3. **Styling**
   - CSS Variables for theme colors
   - Responsive design
   - Custom button effects
   - Glitch text effects

## 🎯 Usage

1. Clone the repository
2. Ensure all files are in the same directory:
   - `index.html`
   - `style.css`
   - `script.js`
3. Open `index.html` in a modern web browser

## 📦 Dependencies

- GSAP (loaded via CDN)
- GSAP TextPlugin (loaded via CDN)

## 🎨 Customization

### Color Scheme
Modify the CSS variables in `:root`:
```css
:root {
    --primary: #0ff;
    --secondary: #f0f;
    --bg: #000;
    --glitch-offset: 3px;
}
```

### Text Content
Update the birthday message and recipient name in:
- `index.html` for static content
- `script.js` for dynamic loading messages

## 🌟 Special Effects

1. **Matrix Rain**
   - Customizable characters
   - Adjustable speed and density
   - Dynamic resizing

2. **Glitch Effect**
   - Configurable glitch intensity
   - Color-shifting text shadows
   - Random offset animations

3. **Button Interactions**
   - Hover effects with glow
   - Click activation with sound
   - System overload animation

## 🔧 Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge

## 📝 Notes

- Ensure JavaScript is enabled
- Audio autoplay may be blocked by some browsers
- For best experience, view in fullscreen mode

## 🎉 Credits

Created with ❤️ for birthday celebrations in cyberpunk style.
