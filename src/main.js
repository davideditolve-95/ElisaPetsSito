import './style.css'

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

console.log('ElisaPets website initialized 🐾');

// Cookie Banner Logic
const cookieBanner = document.getElementById('cookie-banner');
const acceptBtn = document.getElementById('accept-cookies');
const declineBtn = document.getElementById('decline-cookies');

if (cookieBanner) {
    if (localStorage.getItem('cookies-accepted')) {
        cookieBanner.style.display = 'none';
    } else {
        // Force a reflow to ensure the transition works if we wanted an animation, 
        // but for now let's just make sure it's visible.
        cookieBanner.style.display = 'block';
    }
}

acceptBtn?.addEventListener('click', () => {
    localStorage.setItem('cookies-accepted', 'true');
    cookieBanner.style.transform = 'translateY(150%)';
    setTimeout(() => { cookieBanner.style.display = 'none'; }, 500);
});

declineBtn?.addEventListener('click', () => {
    cookieBanner.style.transform = 'translateY(150%)';
    setTimeout(() => { cookieBanner.style.display = 'none'; }, 500);
});
