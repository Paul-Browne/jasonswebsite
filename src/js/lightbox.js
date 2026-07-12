const toggleLightbox = img => {
    if (!document.startViewTransition) {
        img.classList.toggle('lightbox-active');
        return;
    }
      
    document.startViewTransition(() => {
        img.classList.toggle('lightbox-active');
    });
}  

export const closeLightboxes = () => {
    const allActiveImages = document.querySelectorAll('.lightbox-active');
    [...allActiveImages].forEach(img => toggleLightbox(img));
}

// bind escape key to close lightbox
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeLightboxes()
    }
});

export default toggleLightbox;