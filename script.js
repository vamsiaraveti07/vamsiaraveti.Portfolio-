// Base ScrollReveal config
const sr = ScrollReveal({
    distance: '60px',
    duration: 1000,
    delay: 200,
    reset: true  // set false if you prefer reveal only once
  });
  
  /* === Hero === */
  sr.reveal('.hero-content h1',   { origin: 'top'    });
  sr.reveal('.hero-content p',    { origin: 'bottom', delay: 300 });
  sr.reveal('.hero-content .btn', { origin: 'bottom', delay: 400 });
  
  /* === About === */
  sr.reveal('#about h2',             { origin: 'top' });
  sr.reveal('.about-container img',  { origin: 'left' });
  sr.reveal('.about-container p',    { origin: 'right', delay: 300 });
  
  /* === Skills === */
  sr.reveal('#skills h2',         { origin: 'top' });
  sr.reveal('.skill',             { interval: 150, origin: 'bottom' });
  
  /* === Projects === */
  sr.reveal('#projects h2',       { origin: 'top' });
  sr.reveal('.project-card',      { interval: 200, origin: 'bottom' });
  
  /* === Resume === */
  sr.reveal('#resume h2',         { origin: 'top' });
  sr.reveal('#resume .btn',       { origin: 'bottom', delay: 300 });
  
  /* === Contact === */
  sr.reveal('#contact h2',        { origin: 'top' });
  sr.reveal('.contact-form',      { origin: 'left' });
  sr.reveal('.social-icons',      { origin: 'right', delay: 400 });
  