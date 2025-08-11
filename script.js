// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const header = document.getElementById('header');
    const navLinks = document.querySelectorAll('.nav-link');

    // Mobile menu toggle
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });

    // Header scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = header.offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Portfolio functionality
const portfolioData = {
    vsl: [
        { id: 'zC3hpydTRs8', title: 'VSL Consultant Digital', platform: 'youtube' },
        { id: 'ggfN5HjMjNA', title: 'VSL Call Liberty', platform: 'youtube' },
        { id: 'mchXWT0YqVE', title: 'VSL Coaching', platform: 'youtube' },
        { id: 'skcFFS4YwuY', title: 'VSL Meta Leads Pro', platform: 'youtube' }
    ],
    ads: [
        { id: '3pOGUHS9fWw', title: 'ADS Consultant Digital 1', platform: 'youtube-short' },
        { id: 'tpHimbujx3s', title: 'ADS Consultant Digital 2', platform: 'youtube-short' },
        { id: 'wamgB00-YBI', title: 'ADS Consultant Digital 3', platform: 'youtube-short' }
    ],
    youtube: [
        { id: 'eSJVqjn7n7M', title: 'Je te dévoile LA méthode pour créer des offres rentables', platform: 'youtube' },
        { id: 'XqUu_p3lZrA', title: 'La vérité que personne ne te dit sur les agences marketing', platform: 'youtube' },
        { id: 'F0tkmkQbse8', title: 'Comment commencer le Cash on Delivery sur Shopify en 2025 (FORMATION GRATUITE)', platform: 'youtube' },
        { id: 'nhJq_Jc8GnU', title: '35 000€ par jour grâce au e-commerce (ce qu’il a compris avant toi…)', platform: 'youtube' },
        { id: 'TXYyeO6uHYY', title: 'Le Dropshipping en 2025 : Arnaque ou Opportunité ?', platform: 'youtube' },
         { id: 'bowgjgw304k', title: 'De zéro à boutique Shopify en 10 min 🔥', platform: 'youtube' }
    ]
};

function getVideoUrl(video) {
    switch (video.platform) {
        case 'youtube':
            return `https://youtu.be/${video.id}`;
        case 'youtube-short':
            return `https://youtube.com/shorts/${video.id}`;
        case 'instagram':
            return `https://www.instagram.com/reel/${video.id}/`;
        default:
            return '';
    }
}

function getThumbnail(video) {
    if (video.platform === 'youtube' || video.platform === 'youtube-short') {
        return `https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`;
    }
    // Pour Instagram, on utilise une image placeholder
    return 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=400';
}

function getPlatformBadge(platform) {
    switch (platform) {
        case 'youtube':
            return { name: 'YouTube', class: 'badge-youtube' };
        case 'youtube-short':
            return { name: 'YouTube Shorts', class: 'badge-youtube' };
        case 'instagram':
            return { name: 'Instagram', class: 'badge-instagram' };
        default:
            return { name: 'Video', class: 'badge-youtube' };
    }
}

function createVideoCard(video) {
    const badge = getPlatformBadge(video.platform);
    const videoUrl = getVideoUrl(video);
    const thumbnail = getThumbnail(video);

    return `
        <div class="video-card">
            <div class="video-thumbnail">
                <img src="${thumbnail}" alt="${video.title}" loading="lazy">
                <div class="video-overlay">
                    <a href="${videoUrl}" target="_blank" rel="noopener noreferrer" class="play-btn">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M8 5v14l11-7z"/>
                        </svg>
                    </a>
                </div>
                <div class="platform-badge ${badge.class}">
                    ${badge.name}
                </div>
            </div>
            <div class="video-info">
                <h3>${video.title}</h3>
                <a href="${videoUrl}" target="_blank" rel="noopener noreferrer" class="video-link">
                    Voir la vidéo
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M7 17L17 7M17 7H7M17 7V17"/>
                    </svg>
                </a>
            </div>
        </div>
    `;
}

function loadPortfolioCategory(category) {
    const portfolioGrid = document.getElementById('portfolio-grid');
    const videos = portfolioData[category] || [];
    
    portfolioGrid.innerHTML = videos.map(video => createVideoCard(video)).join('');
}

// Portfolio tabs functionality
document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    
    // Load initial category
    loadPortfolioCategory('vsl');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            tabButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Load the selected category
            const category = this.getAttribute('data-category');
            loadPortfolioCategory(category);
        });
    });
});

// Contact form functionality
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
        
        // Show success message
        showSuccessMessage();
        
        // Reset form
        this.reset();
        
        // In a real application, you would send the data to a server
        console.log('Form submitted:', data);
    });
});

function showSuccessMessage() {
    // Remove existing success message if any
    const existingMessage = document.querySelector('.success-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Create success message
    const successMessage = document.createElement('div');
    successMessage.className = 'success-message';
    successMessage.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M9 12l2 2 4-4"/>
            <circle cx="12" cy="12" r="10"/>
        </svg>
        Message envoyé avec succès ! Je vous répondrai rapidement.
    `;
    
    // Insert before the form
    const form = document.getElementById('contact-form');
    form.parentNode.insertBefore(successMessage, form);
    
    // Show the message with animation
    setTimeout(() => {
        successMessage.classList.add('show');
    }, 100);
    
    // Remove the message after 5 seconds
    setTimeout(() => {
        successMessage.classList.remove('show');
        setTimeout(() => {
            if (successMessage.parentNode) {
                successMessage.remove();
            }
        }, 300);
    }, 5000);
}

// Intersection Observer for animations
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.about-card, .video-card, .testimonial-card, .stat-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Preload images for better performance
document.addEventListener('DOMContentLoaded', function() {
    const imageUrls = [
        'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400',
        'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=400'
    ];
    
    imageUrls.forEach(url => {
        const img = new Image();
        img.src = url;
    });
    
    // Preload YouTube thumbnails for VSL category
    portfolioData.vsl.forEach(video => {
        const img = new Image();
        img.src = getThumbnail(video);
    });
});