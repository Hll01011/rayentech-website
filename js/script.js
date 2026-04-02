/* ============================================
   RAYENTECH OTOMASYON - JAVASCRIPT
   ============================================ */

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
            navMenu.style.position = 'absolute';
            navMenu.style.top = '60px';
            navMenu.style.left = '0';
            navMenu.style.right = '0';
            navMenu.style.flexDirection = 'column';
            navMenu.style.backgroundColor = 'white';
            navMenu.style.padding = '20px';
            navMenu.style.gap = '10px';
            navMenu.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
            navMenu.style.zIndex = '1000';
        });
    }

    // Close menu when link is clicked
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', function() {
            if (navMenu) {
                navMenu.style.display = 'none';
            }
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    // Form validation
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const phone = document.getElementById('phone').value.trim();

            if (!name || !email || !phone) {
                e.preventDefault();
                alert('Lütfen zorunlu alanları doldurunuz.');
                return false;
            }

            if (!isValidEmail(email)) {
                e.preventDefault();
                alert('Lütfen geçerli bir e-posta adresi giriniz.');
                return false;
            }

            if (!isValidPhone(phone)) {
                e.preventDefault();
                alert('Lütfen geçerli bir telefon numarası giriniz.');
                return false;
            }
        });
    }

    // Email validation
    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // Phone validation
    function isValidPhone(phone) {
        const re = /^[0-9]{10,}$/;
        return re.test(phone.replace(/\D/g, ''));
    }

    // Scroll animations
    observeElements();
});

// Intersection Observer for scroll animations
function observeElements() {
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'slideInLeft 0.6s ease both';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.service-box, .why-item, .step, .faq-item').forEach(el => {
        observer.observe(el);
    });
}

// Counter animation
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number, .number');
    const speed = 200;

    counters.forEach(counter => {
        const target = parseInt(counter.textContent);
        const increment = target / speed;
        let current = 0;

        const updateCount = () => {
            current += increment;
            if (current < target) {
                counter.textContent = Math.ceil(current) + (counter.textContent.includes('+') ? '+' : '');
                setTimeout(updateCount, 10);
            } else {
                counter.textContent = counter.textContent;
            }
        };

        updateCount();
    });
}

// Trigger counter animation when section comes into view
document.addEventListener('DOMContentLoaded', function() {
    const statsSection = document.querySelector('.reference-stats, .why-us');
    if (statsSection) {
        const observer = new IntersectionObserver(function(entries) {
            if (entries[0].isIntersecting) {
                animateCounters();
                observer.unobserve(statsSection);
            }
        });
        observer.observe(statsSection);
    }
});

// Active navigation link
window.addEventListener('scroll', function() {
    let current = '';
    
    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Lazy loading for images (fallback)
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
});

// Phone number formatting
document.querySelectorAll('input[type="tel"]').forEach(input => {
    input.addEventListener('input', function() {
        let value = this.value.replace(/\D/g, '');
        if (value.length > 0) {
            if (value.startsWith('0')) {
                if (value.length <= 3) {
                    this.value = value;
                } else if (value.length <= 7) {
                    this.value = value.slice(0, 3) + ' ' + value.slice(3);
                } else {
                    this.value = value.slice(0, 3) + ' ' + value.slice(3, 6) + ' ' + value.slice(6, 10);
                }
            }
        }
    });
});

// Prevent form spam
let formSubmissionTime = 0;
const MIN_SUBMISSION_INTERVAL = 3000; // 3 seconds

document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', function(e) {
        const now = Date.now();
        if (now - formSubmissionTime < MIN_SUBMISSION_INTERVAL) {
            e.preventDefault();
            alert('Lütfen biraz bekleyin ve tekrar deneyin.');
        } else {
            formSubmissionTime = now;
        }
    });
});

// Cookie consent (optional)
function showCookieConsent() {
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
        const consent = confirm(
            'Bu site deneyimi geliştirmek için çerezler kullanır. Kabul ediyor musunuz?'
        );
        localStorage.setItem('cookieConsent', consent);
    }
}

// Analytics event tracking
function trackEvent(eventName, eventData = {}) {
    console.log('Event tracked:', eventName, eventData);
    // Google Analytics veya başka bir tracking sistemi buraya eklenebilir
}

// Track button clicks
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function() {
        trackEvent('button_click', { buttonText: this.textContent });
    });
});

// Track form submissions
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', function() {
        trackEvent('form_submission', { formAction: this.action });
    });
});

// Performance optimization
if ('requestIdleCallback' in window) {
    requestIdleCallback(function() {
        // Heavy operations here
    });
}

// Service worker registration for PWA (optional)
if ('serviceWorker' in navigator) {
    // Uncomment when you have a service worker
    // navigator.serviceWorker.register('/sw.js');
}

console.log('RayenTech Otomasyon Website - v1.0');
