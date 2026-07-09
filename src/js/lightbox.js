export default img => {
    if (!document.startViewTransition) {
        img.classList.toggle('lightbox-active');
        return;
    }
      
    document.startViewTransition(() => {
        img.classList.toggle('lightbox-active');
    });
}   

export const closeLightbox = () => {
    const allActiveImages = document.querySelectorAll('.lightbox-active');
    [...allActiveImages].forEach(img => img.classList.remove('lightbox-active'));
}

// bind escape key to close lightbox
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeLightbox();
    }
});