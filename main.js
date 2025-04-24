document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  
    // Video card click handler
    const videoCards = document.querySelectorAll('.video-card');
    videoCards.forEach(card => {
      card.addEventListener('click', () => {
        const videoType = card.dataset.video;
        // Here you would typically open a modal or navigate to a video player
        // For now, we'll just log the action
        console.log(`Playing ${videoType} video`);
      });
    });
  });
  
  // Contact button handler
  function contactUs() {
    // Here you would typically open a contact form modal or navigate to a contact page
    // For now, we'll just log the action
    console.log('Contact button clicked');
    alert('Merci de votre intérêt ! Cette fonctionnalité sera bientôt disponible.');
  }