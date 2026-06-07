// ===== FUTURISTIC AI PLATFORM - INTERACTIVE SCRIPT =====

// ===== UTILITY FUNCTIONS =====
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// ===== PARTICLES BACKGROUND =====
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;

    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        const tx = (Math.random() - 0.5) * 300;
        const ty = (Math.random() - 0.5) * 300;
        
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        particle.style.setProperty('--tx', tx + 'px');
        particle.style.setProperty('--ty', ty + 'px');
        particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
        
        particlesContainer.appendChild(particle);
    }
}

// ===== MOBILE MENU =====
const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
    });

    document.querySelectorAll('.nav__link').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
        });
    });
}

// ===== STAT COUNTER ANIMATION =====
function animateCounter(element, target) {
    const duration = 2000;
    const startTime = Date.now();
    
    function update() {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const current = Math.floor(target * progress);
        element.textContent = current.toLocaleString();
        
        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }
    
    update();
}

// Animate counters on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.dataset.animated) {
            const target = parseInt(entry.target.dataset.target);
            animateCounter(entry.target, target);
            entry.target.dataset.animated = 'true';
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-number').forEach(element => {
    observer.observe(element);
});

// ===== GLITCH EFFECT =====
document.querySelectorAll('.glitch').forEach(element => {
    const text = element.textContent;
    element.addEventListener('mouseenter', function() {
        this.style.animation = 'none';
        setTimeout(() => {
            this.style.animation = '';
        }, 10);
    });
});

// ===== FORM SUBMISSION =====
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const inputs = contactForm.querySelectorAll('input, textarea');
        const nombre = inputs[0].value;
        const email = inputs[1].value;
        const mensaje = inputs[2].value;
        
        if (!nombre || !email || !mensaje) {
            alert('⚠️ Por favor completa todos los campos');
            return;
        }
        
        alert(`✓ TRANSMISIÓN EXITOSA\n\nDatos recibidos de ${nombre}\nEmail: ${email}\n\nNos contactaremos pronto.`);
        contactForm.reset();
    });
}

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== HEADER SCROLL EFFECT =====
const header = document.querySelector('.header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.style.boxShadow = '0 0 50px rgba(0, 217, 255, 0.5), inset 0 0 20px rgba(0, 217, 255, 0.1)';
    } else {
        header.style.boxShadow = '0 0 30px rgba(0, 217, 255, 0.2)';
    }
    
    lastScroll = currentScroll;
});

// ===== CUSTOM CURSOR (opcional) =====
const cursorElement = document.getElementById('cursor');
if (cursorElement) {
    document.addEventListener('mousemove', (e) => {
        cursorElement.style.left = (e.clientX - 10) + 'px';
        cursorElement.style.top = (e.clientY - 10) + 'px';
    });

    document.addEventListener('mouseenter', () => {
        cursorElement.style.display = 'block';
    });

    document.addEventListener('mouseleave', () => {
        cursorElement.style.display = 'none';
    });
}

// ===== INTERSECTION OBSERVER PARA ANIMACIONES =====
const animationObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.ai-module, .service-terminal, .widget, .campaign-item').forEach(element => {
    element.style.opacity = '0';
    animationObserver.observe(element);
});

// ===== TYPING EFFECT EN HERO =====
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// ===== REAL-TIME SYSTEM STATUS =====
function updateSystemStatus() {
    const statusDots = document.querySelectorAll('.status-dot.online');
    statusDots.forEach(dot => {
        setInterval(() => {
            dot.style.opacity = Math.random() > 0.5 ? 1 : 0.7;
        }, 500);
    });
}

// ===== LIVE CAMPAIGN UPDATES =====
function animateCampaignBars() {
    const bars = document.querySelectorAll('.module-fill');
    bars.forEach((bar, index) => {
        const randomIncrease = Math.random() * 5;
        const currentWidth = parseFloat(bar.style.width) || 0;
        const newWidth = Math.min(currentWidth + randomIncrease, 100);
        bar.style.width = newWidth + '%';
    });
}

setInterval(animateCampaignBars, 3000);

// ===== INIT FUNCTIONS =====
function init() {
    createParticles();
    updateSystemStatus();
    
    // Animate elements on page load
    document.querySelectorAll('.ai-module').forEach((el, index) => {
        el.style.animationDelay = (index * 0.1) + 's';
    });
}

// Run on page load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// ===== TERMINAL CONSOLE EFFECT =====
console.log('%c╔══════════════════════════════════════════════════════╗', 'color: #00d9ff; font-weight: bold;');
console.log('%c║   AI FELIX PIXEL - PLATAFORMA FUTURISTA v2.0-ALPHA   ║', 'color: #00ff88; font-weight: bold;');
console.log('%c║   Powered by Quantum Intelligence & Deep Learning    ║', 'color: #00d9ff; font-weight: bold;');
console.log('%c╚══════════════════════════════════════════════════════╝', 'color: #00d9ff; font-weight: bold;');
console.log('%c[SYSTEM] Inicializando plataforma...', 'color: #ff006e; font-weight: bold;');
console.log('%c[STATUS] Módulos IA activados correctamente ✓', 'color: #00ff88; font-weight: bold;');
console.log('%c[INFO] Precisión: 99.8% | Performance: Óptimo', 'color: #ffb700;');

// ===== KEYBOARD SHORTCUTS =====
document.addEventListener('keydown', (e) => {
    // Ctrl+Shift+I para abrir consola
    if (e.ctrlKey && e.shiftKey && e.key === 'I') {
        console.log('%c🔐 ACCESO CONCEDIDO', 'color: #00ff88; font-size: 20px; font-weight: bold;');
    }
});

// ===== RESPONSIVENESS CHECK =====
function checkResponsive() {
    const isMobile = window.innerWidth < 768;
    if (isMobile) {
        document.body.style.fontSize = '14px';
    }
}

checkResponsive();
window.addEventListener('resize', checkResponsive);