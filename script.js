/**
 * Clinton Mutinda - Professional Portfolio Script
 * Focus: Performance, smooth interactions, and scroll observers.
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Mobile Menu Logic ---
    const menuBtn = document.getElementById('menu-btn');
    const navLinks = document.getElementById('nav-links');
    const body = document.body;

    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuBtn.classList.toggle('open');
            // Prevent scrolling when menu is open
            body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : 'initial';
        });

        // Close menu when a link is clicked
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                menuBtn.classList.remove('open');
                body.style.overflow = 'initial';
            });
        });
    }

    // --- 2. Skill Bars Intersection Observer ---
    // This triggers the "filling" animation only when the user scrolls to the Expertise section
    const skillBars = document.querySelectorAll('.bar-fill');
    
    const skillObserverOptions = {
        threshold: 0.3 // Trigger when 30% of the bar is visible
    };

    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                // Get the intended width from the inline style we set in HTML
                const targetWidth = bar.style.width; 
                // Reset width to 0 then immediately to target to trigger CSS transition
                bar.style.width = '0';
                setTimeout(() => {
                    bar.style.width = targetWidth;
                }, 100);
                
                skillObserver.unobserve(bar); // Only animate once
            }
        });
    }, skillObserverOptions);

    skillBars.forEach(bar => skillObserver.observe(bar));

    // --- 3. Scroll to Top Visibility & Smoothness ---
    const scrollBtn = document.getElementById('scrollToTop');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 600) {
            scrollBtn.style.display = "grid"; // Using grid to center the icon
            scrollBtn.style.placeItems = "center";
        } else {
            scrollBtn.style.display = "none";
        }
    });

    scrollBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // --- 4. Navbar Background Blur on Scroll ---
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = "rgba(5, 5, 5, 0.95)";
            navbar.style.padding = "10px 0";
        } else {
            navbar.style.background = "rgba(5, 5, 5, 0.8)";
            navbar.style.padding = "20px 0";
        }
    });

    // --- 5. Navigation Active State Switcher ---
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(a => {
            a.classList.remove('active-link'); // You can add a style for this in CSS if desired
            if (a.getAttribute('href').includes(current)) {
                a.style.color = "var(--vibrant-cyan)";
            } else {
                a.style.color = "var(--text-dim)";
            }
        });
    });
});
