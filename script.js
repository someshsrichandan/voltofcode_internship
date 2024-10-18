function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
}

function openLightbox(src) {
    const lightbox = document.getElementById('lightbox');
    const video = document.getElementById('lightbox-video');
    video.src = src;
    lightbox.style.display = 'flex';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    const video = document.getElementById('lightbox-video');
    video.src = '';
    lightbox.style.display = 'none';
}
