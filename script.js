/**
 * Clinton Kyutha Mutinda - Professional Portfolio Script
 * Performance-optimized for smooth UI interactions.
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
            // Prevent background scrolling when menu is open
            if (navLinks.classList.contains('active')) {
                body.style.overflow = 'hidden';
            } else {
                body.style.overflow = 'initial';
            }
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
    // This captures the target width from HTML and animates it when the user scrolls to it
    const skillBars = document.querySelectorAll('.bar-fill');
    
    const skillObserverOptions = {
        threshold: 0.2 // Start animation when 20% of the section is visible
    };

    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                // Capture the percentage from the inline style set in HTML
                const targetWidth = bar.style.width; 
                
                // Temporarily set to 0 to "reset" the animation
                bar.style.width = '0';
                
                // Force a reflow and then set to target width to trigger CSS transition
                setTimeout(() => {
                    bar.style.transition = "width 1.5s cubic-bezier(0.17, 0.67, 0.83, 0.67)";
                    bar.style.width = targetWidth;
                }, 100);
                
                skillObserver.unobserve(bar); // Only animate once per page load
            }
        });
    }, skillObserverOptions);

    skillBars.forEach(bar => skillObserver.observe(bar));

    // --- 3. Scroll to Top Functionality ---
    const scrollBtn = document.getElementById('scrollToTop');

    window.addEventListener('scroll', () => {
        // Show button after scrolling down 600px
        if (window.scrollY > 600) {
            scrollBtn.style.display = "block";
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

    // --- 4. Navbar Aesthetic Transitions ---
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = "rgba(5, 5, 5, 0.98)";
            navbar.style.padding = "5px 0";
            navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,0.5)";
        } else {
            navbar.style.background = "rgba(5, 5, 5, 0.8)";
            navbar.style.padding = "0";
            navbar.style.boxShadow = "none";
        }
    });

    // --- 5. Active Link Switcher ---
    // Highlights the navigation link based on which section is currently on screen
    const sections = document.querySelectorAll('section, header');
    const navItems = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - 250)) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(a => {
            a.style.color = "var(--text-dim)";
            if (a.getAttribute('href').includes(current)) {
                a.style.color = "var(--vibrant-cyan)";
            }
        });
    });
});
