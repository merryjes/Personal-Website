

const sections = document.querySelectorAll('.section, .hero-section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - 150)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.style.backgroundColor = '#f1f5f9';
            link.style.color = '#000000';
        } else {
            link.style.backgroundColor = 'transparent';
            link.style.color = '#4a5568';
        }
    });
});




const socialLinks = document.querySelectorAll('.social-link');

socialLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.style.transform = 'translateY(-4px)';
        link.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.08)';
    });
    
    link.addEventListener('mouseleave', () => {
        link.style.transform = 'translateY(0)';
        link.style.boxShadow = 'none';
    });
});


const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);


document.querySelectorAll('.card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});






const revealElements = document.querySelectorAll('.section h2, .card, .hero-content, .hero-image-container');


revealElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
});

const revealOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target); // Animate only once
        }
    });
}, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
});

revealElements.forEach(el => revealOnScroll.observe(el));



const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.85)';
        navbar.style.backdropFilter = 'blur(10px)';
        navbar.style.webkitBackdropFilter = 'blur(10px)';
        navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.08)';
        navbar.style.borderColor = 'rgba(226, 232, 240, 0.8)';
    } else {
        navbar.style.backgroundColor = 'var(--card-bg)';
        navbar.style.backdropFilter = 'none';
        navbar.style.webkitBackdropFilter = 'none';
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.05)';
        navbar.style.borderColor = '#e2e8f0';
    }
});



const magneticElements = document.querySelectorAll('.btn, .social-link');

magneticElements.forEach(el => {
    el.addEventListener('mousemove', (e) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        // Pull element slightly toward cursor
        el.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
    });

    el.addEventListener('mouseleave', () => {
        el.style.transform = 'translate(0px, 0px)';
        el.style.transition = 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)';
    });

    el.addEventListener('mouseenter', () => {
        el.style.transition = 'none';
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transition = 'none';
        });
    });
});





// DRAMATIC WELCOME TEXT & SCREEN CONTROLLER
window.addEventListener('load', () => {
    const welcomeScreen = document.getElementById('welcome-screen');
    const welcomeContent = document.querySelector('.welcome-content');
    
    if (!welcomeScreen || !welcomeContent) return;

    // Step 1: Text dramatically fades & floats in (starts after 300ms)
    setTimeout(() => {
        welcomeContent.classList.add('text-in');
    }, 300);

    // Step 2: Text dramatically fades out & blurs away (after 2.8s)
    setTimeout(() => {
        welcomeContent.classList.remove('text-in');
        welcomeContent.classList.add('text-out');
    }, 2800);

    // Step 3: Background slowly dissolves to reveal main profile (after 4.2s)
    setTimeout(() => {
        welcomeScreen.classList.add('fade-out-bg');
    }, 4200);
});


