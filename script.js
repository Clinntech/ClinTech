/* 
    Clinton Mutinda - Professional Portfolio Styles
    Theme: International Tech / Minimalist Dark
*/

:root {
    /* Color Palette - Neutral Charcoal & Vibrant Accents */
    --bg-dark: #050505;
    --bg-accent: #0a0a0a;
    --card-bg: #111111;
    --vibrant-cyan: #22d3ee;
    --vibrant-blue: #3b82f6;
    --text-main: #f8fafc;
    --text-dim: #94a3b8;
    --border: rgba(255, 255, 255, 0.06);
    --glass: rgba(255, 255, 255, 0.02);
    
    /* System variables */
    --nav-height: 80px;
    --transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Base Styles */
* { margin: 0; padding: 0; box-sizing: border-box; }

html { 
    scroll-behavior: smooth; 
    overflow-x: hidden;
}

body { 
    font-family: 'Inter', sans-serif; 
    background-color: var(--bg-dark); 
    color: var(--text-main); 
    line-height: 1.7; 
    -webkit-font-smoothing: antialiased;
}

.container { max-width: 1200px; margin: 0 auto; padding: 0 40px; }
.section-spacing { padding: 140px 0; }

/* Navigation - Glassmorphism */
.navbar { 
    position: fixed; width: 100%; top: 0; 
    background: rgba(5, 5, 5, 0.8); 
    backdrop-filter: blur(15px); 
    z-index: 1000; 
    border-bottom: 1px solid var(--border);
    height: var(--nav-height); 
    display: flex; align-items: center;
}

.nav-container { 
    display: flex; justify-content: space-between; align-items: center; 
    width: 100%; max-width: 1300px; margin: 0 auto; padding: 0 40px; 
}

.logo { 
    font-weight: 800; font-size: 1.2rem; letter-spacing: -0.5px; 
    text-transform: uppercase; color: #fff;
}
.logo-light { font-weight: 300; color: var(--text-dim); }
.logo-link { text-decoration: none; }

.nav-links { display: flex; list-style: none; gap: 40px; align-items: center; }
.nav-links a { 
    text-decoration: none; color: var(--text-dim); 
    font-size: 0.85rem; font-weight: 500; transition: var(--transition); 
}
.nav-links a:hover { color: var(--vibrant-cyan); }

.btn-nav { 
    background: #fff; color: #000 !important; 
    padding: 10px 24px; border-radius: 4px; font-weight: 700 !important;
}

/* Hero Section */
.hero { 
    padding: calc(var(--nav-height) + 120px) 0 100px; 
    background: radial-gradient(circle at 50% -20%, rgba(34, 211, 238, 0.08), transparent 50%);
}

.hero-badge { 
    display: inline-block; padding: 6px 14px; background: var(--glass);
    border: 1px solid var(--border); border-radius: 50px;
    font-size: 0.7rem; color: var(--vibrant-cyan); 
    font-weight: 700; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 24px;
}

h1 { 
    font-size: clamp(2.8rem, 7vw, 4.8rem); font-weight: 800; line-height: 1; 
    letter-spacing: -0.04em; margin-bottom: 28px; 
}

.text-vibrant { 
    background: linear-gradient(90deg, var(--vibrant-cyan), var(--vibrant-blue)); 
    -webkit-background-clip: text; -webkit-text-fill-color: transparent; 
}

.hero-desc { 
    font-size: 1.25rem; color: var(--text-dim); max-width: 750px; 
    margin-bottom: 48px; font-weight: 400; 
}

.hero-btns { display: flex; gap: 16px; flex-wrap: wrap; }

/* Services Section (Bento Grid Style) */
.section-header { margin-bottom: 60px; }
.section-title { 
    font-size: 2.2rem; font-weight: 800; letter-spacing: -0.02em; margin-bottom: 12px;
}
.section-subtitle { color: var(--text-dim); font-size: 1.1rem; max-width: 600px; }

.services-grid { 
    display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; 
}

.service-card { 
    background: var(--card-bg); padding: 48px 40px; border-radius: 12px;
    border: 1px solid var(--border); transition: var(--transition);
}

.service-card:hover { 
    background: #161616; transform: translateY(-8px); border-color: rgba(255,255,255,0.15); 
}

.icon-vibrant { font-size: 2.5rem; color: var(--vibrant-cyan); margin-bottom: 24px; display: block; }

.service-card h3 { font-size: 1.4rem; margin-bottom: 16px; color: #fff; }
.service-card p { color: var(--text-dim); font-size: 0.95rem; line-height: 1.6; }

/* Expertise Bars */
.edu-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; }
.skill-item { margin-bottom: 24px; }
.skill-info { display: flex; justify-content: space-between; margin-bottom: 12px; font-weight: 600; font-size: 0.85rem; color: #cbd5e1; }
.skill-bar { background: rgba(255,255,255,0.04); height: 6px; border-radius: 10px; overflow: hidden; }
.bar-fill { background: var(--vibrant-cyan); height: 100%; width: 0; transition: width 1.5s cubic-bezier(0.17, 0.67, 0.83, 0.67); }
.bar-fill.visible { /* Animated via JS */ }

/* Timeline */
.timeline { border-left: 1px solid var(--border); padding-left: 40px; position: relative; }
.timeline-item { position: relative; margin-bottom: 70px; }
.timeline-item::before { 
    content: ''; position: absolute; left: -50px; top: 6px; 
    width: 18px; height: 18px; background: var(--bg-dark); 
    border: 2px solid var(--vibrant-cyan); border-radius: 50%; 
}
.date { color: var(--vibrant-cyan); font-weight: 700; font-size: 0.75rem; text-transform: uppercase; margin-bottom: 10px; display: block; }
.text-highlight { color: #fff; font-weight: 700; }

/* Project Cards */
.projects-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
.project-card { 
    background: var(--card-bg); padding: 40px; border-radius: 12px; border: 1px solid var(--border); 
    display: flex; flex-direction: column; justify-content: space-between; transition: var(--transition);
}
.project-card:hover { border-color: var(--vibrant-cyan); }
.status-tag { 
    display: inline-block; padding: 4px 10px; border-radius: 4px; font-size: 0.6rem; 
    font-weight: 800; text-transform: uppercase; margin-bottom: 24px; letter-spacing: 0.5px;
}
.done { background: rgba(34, 211, 238, 0.1); color: var(--vibrant-cyan); }
.in-progress { background: rgba(245, 158, 11, 0.1); color: #f59e0b; }

.project-card h3 { font-size: 1.5rem; margin-bottom: 12px; color: #fff; }
.project-card p { color: var(--text-dim); font-size: 0.9rem; margin-bottom: 30px; }

/* Contact Section */
.contact-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; }
.label { font-size: 0.65rem; text-transform: uppercase; color: var(--vibrant-cyan); font-weight: 800; margin-bottom: 10px; display: block; }
.value { font-size: 0.95rem; color: #fff; text-decoration: none; font-weight: 600; display: block; word-break: break-word; }

/* Buttons & Interactions */
.btn-primary { 
    background: #fff; color: #000; padding: 16px 32px; 
    text-decoration: none; border-radius: 4px; font-weight: 700; transition: var(--transition);
}
.btn-primary:hover { transform: translateY(-3px); box-shadow: 0 10px 20px rgba(255,255,255,0.1); }

.btn-secondary { 
    border: 1px solid var(--border); color: #fff; padding: 16px 32px; 
    text-decoration: none; border-radius: 4px; font-weight: 700; transition: var(--transition);
}
.btn-secondary:hover { background: var(--glass); border-color: var(--text-dim); }

.btn-card { 
    text-decoration: none; color: #fff; font-weight: 700; font-size: 0.85rem; 
    border-bottom: 1px solid var(--border); padding-bottom: 4px; align-self: flex-start;
}
.btn-card:hover { border-color: var(--vibrant-cyan); color: var(--vibrant-cyan); }

.btn-card-vibrant { 
    text-decoration: none; background: linear-gradient(90deg, var(--vibrant-cyan), var(--vibrant-blue));
    color: #fff; font-weight: 700; font-size: 0.85rem; padding: 12px 24px; border-radius: 4px; text-align: center;
}

/* Scroll To Top */
#scrollToTop {
    position: fixed; bottom: 40px; right: 40px;
    width: 54px; height: 54px; background: #fff; color: #000;
    border: none; border-radius: 50%; cursor: pointer; display: none;
    z-index: 2000; font-size: 1.2rem; transition: var(--transition);
}
#scrollToTop:hover { transform: scale(1.1); }

/* Footer */
.footer { border-top: 1px solid var(--border); padding: 80px 0; text-align: center; color: var(--text-dim); font-size: 0.8rem; }

/* Mobile Menu Button */
.menu-btn { 
    display: none; background: none; border: none; cursor: pointer; z-index: 1100; flex-direction: column; gap: 6px; 
}
.menu-btn span { width: 28px; height: 2px; background: #fff; transition: var(--transition); }

/* Responsive Media Queries */
@media (max-width: 1024px) {
    .services-grid, .projects-grid { grid-template-columns: 1fr 1fr; }
    .contact-grid { grid-template-columns: 1fr 1fr; gap: 40px; }
}

@media (max-width: 768px) {
    .container { padding: 0 24px; }
    .menu-btn { display: flex; }
    .nav-links { 
        position: fixed; top: 0; right: -100%; width: 80%; height: 100vh;
        background: var(--bg-dark); flex-direction: column; justify-content: center;
        transition: 0.5s cubic-bezier(0.77, 0, 0.175, 1);
    }
    .nav-links.active { right: 0; box-shadow: -20px 0 40px rgba(0,0,0,0.5); }
    
    .services-grid, .projects-grid, .edu-grid, .contact-grid { grid-template-columns: 1fr; }
    h1 { font-size: 3.2rem; }
    .section-spacing { padding: 100px 0; }
}
