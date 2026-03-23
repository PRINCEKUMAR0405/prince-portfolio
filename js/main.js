// Prince Kumar Portfolio - Main JavaScript
// Handles all interactive features and animations

document.addEventListener('DOMContentLoaded', function() {
    // ===================================
    // Navigation Functionality
    // ===================================
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Navbar scroll effect
    let lastScroll = 0;
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });

    // Mobile menu toggle
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');

            // Animate hamburger icon
            const spans = navToggle.querySelectorAll('span');
            if (navMenu.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translateY(8px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translateY(-8px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    }

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            const spans = navToggle.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        });
    });

    // ===================================
    // Active Navigation Link
    // ===================================
    function setActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 150;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => link.classList.remove('active'));
                if (navLink) navLink.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', setActiveNavLink);

    // ===================================
    // Smooth Scrolling
    // ===================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ===================================
    // Scroll to Top Button
    // ===================================
    const scrollTopBtn = document.getElementById('scrollTop');

    if (scrollTopBtn) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                scrollTopBtn.classList.add('visible');
            } else {
                scrollTopBtn.classList.remove('visible');
            }
        });

        scrollTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // ===================================
    // Intersection Observer for Animations
    // ===================================
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

    // Observe elements for scroll animations
    const animatedElements = document.querySelectorAll(
        '.timeline-item, .leadership-card, .project-card, .experience-card, .achievement-card, .skill-category, .highlight-card'
    );

    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // ===================================
    // Contact Form Handling
    // ===================================
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            // Form will be handled by Formspree
            // Show a loading state
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;

            // Re-enable after submission (Formspree will handle the redirect)
            setTimeout(() => {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 2000);
        });
    }

    // ===================================
    // Analytics Tracking
    // ===================================
    function trackEvent(category, action, label) {
        if (typeof gtag !== 'undefined') {
            gtag('event', action, {
                'event_category': category,
                'event_label': label
            });
        }
    }

    // Track navigation clicks
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            const section = this.getAttribute('href');
            trackEvent('Navigation', 'Click', section);
        });
    });

    // Track button clicks
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const btnText = this.textContent.trim();
            trackEvent('Button', 'Click', btnText);
        });
    });

    // Track external links
    document.querySelectorAll('a[target="_blank"]').forEach(link => {
        link.addEventListener('click', function() {
            const url = this.getAttribute('href');
            trackEvent('External Link', 'Click', url);
        });
    });

    // ===================================
    // Dynamic Year in Footer
    // ===================================
    const currentYear = new Date().getFullYear();
    const yearElements = document.querySelectorAll('.footer-bottom p');
    if (yearElements.length > 0) {
        yearElements[0].innerHTML = yearElements[0].innerHTML.replace('2026', currentYear);
    }

    // ===================================
    // Page Load Performance Tracking
    // ===================================
    window.addEventListener('load', function() {
        if (typeof gtag !== 'undefined') {
            // Track page load time
            const loadTime = window.performance.timing.domContentLoadedEventEnd -
                           window.performance.timing.navigationStart;

            gtag('event', 'timing_complete', {
                'name': 'page_load',
                'value': loadTime,
                'event_category': 'Performance'
            });
        }

        // Log visitor info for analytics dashboard
        logVisitor();
    });

    // ===================================
    // Visitor Tracking for Dashboard
    // ===================================
    function logVisitor() {
        const visitorData = {
            timestamp: new Date().toISOString(),
            userAgent: navigator.userAgent,
            language: navigator.language,
            screen: `${window.screen.width}x${window.screen.height}`,
            viewport: `${window.innerWidth}x${window.innerHeight}`,
            referrer: document.referrer || 'Direct',
            page: window.location.pathname
        };

        // Store in localStorage for dashboard
        let visitors = JSON.parse(localStorage.getItem('portfolioVisitors') || '[]');
        visitors.push(visitorData);

        // Keep only last 100 visitors
        if (visitors.length > 100) {
            visitors = visitors.slice(-100);
        }

        localStorage.setItem('portfolioVisitors', JSON.stringify(visitors));

        // Also track page views
        let pageViews = parseInt(localStorage.getItem('portfolioPageViews') || '0');
        localStorage.setItem('portfolioPageViews', (pageViews + 1).toString());
    }

    // ===================================
    // Scroll Progress Indicator
    // ===================================
    function updateScrollProgress() {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;

        // Create progress bar if it doesn't exist
        let progressBar = document.getElementById('scrollProgress');
        if (!progressBar) {
            progressBar = document.createElement('div');
            progressBar.id = 'scrollProgress';
            progressBar.style.position = 'fixed';
            progressBar.style.top = '0';
            progressBar.style.left = '0';
            progressBar.style.width = '0%';
            progressBar.style.height = '3px';
            progressBar.style.background = 'linear-gradient(90deg, #00ff88 0%, #00cc6f 100%)';
            progressBar.style.zIndex = '9999';
            progressBar.style.transition = 'width 0.1s ease';
            document.body.appendChild(progressBar);
        }

        progressBar.style.width = scrolled + '%';
    }

    window.addEventListener('scroll', updateScrollProgress);

    // ===================================
    // Typing Effect for Hero (Optional Enhancement)
    // ===================================
    const heroTagline = document.querySelector('.hero-tagline');
    if (heroTagline) {
        const originalText = heroTagline.textContent;
        heroTagline.textContent = '';
        let charIndex = 0;

        function typeWriter() {
            if (charIndex < originalText.length) {
                heroTagline.textContent += originalText.charAt(charIndex);
                charIndex++;
                setTimeout(typeWriter, 50);
            }
        }

        // Start typing after a short delay
        setTimeout(typeWriter, 500);
    }

    // ===================================
    // Lazy Load Images (if any are added later)
    // ===================================
    const lazyImages = document.querySelectorAll('img[data-src]');

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });

    lazyImages.forEach(img => imageObserver.observe(img));

    // ===================================
    // Accessibility Enhancements
    // ===================================

    // Add keyboard navigation support
    document.addEventListener('keydown', function(e) {
        // Press 'Escape' to close mobile menu
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
        }
    });

    // Focus management for skip links
    const skipLinks = document.querySelectorAll('a[href^="#"]');
    skipLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href').substring(1);
            const target = document.getElementById(targetId);
            if (target) {
                target.setAttribute('tabindex', '-1');
                target.focus();
            }
        });
    });

    // ===================================
    // Console Easter Egg
    // ===================================
    console.log('%c🚀 Prince Kumar Portfolio', 'font-size: 20px; font-weight: bold; color: #00ff88;');
    console.log('%cBuilding at the intersection of Economics, Technology, and Sustainability', 'font-size: 14px; color: #8b949e;');
    console.log('%cInterested in collaboration? Reach out!', 'font-size: 12px; color: #00ff88;');

    // ===================================
    // Initialize
    // ===================================
    console.log('Portfolio loaded successfully!');
});
