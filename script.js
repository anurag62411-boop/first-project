function toggleCard(card) {
  const isOpen = card.classList.contains('open');

  // Pehle sab band karo
  document.querySelectorAll('.team-card.open').forEach(c => c.classList.remove('open'));

  // Agar pehle se open nahi tha toh open karo
  if (!isOpen) {
    card.classList.add('open');
    // Smooth scroll to card
    setTimeout(() => {
      card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 100);
  }
}

function closeCard(event, btn) {
  event.stopPropagation(); // Card ka onclick fire na ho
  btn.closest('.team-card').classList.remove('open');
}
  // ── Scroll Animation Observer ──
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.15 });

  // Section titles, labels, desc
  document.querySelectorAll(
    '.section-label, .section-title, .section-desc, .tagline-wrap'
  ).forEach(el => {
    el.classList.add('anim-fadeup');
    observer.observe(el);
  });

  // Rating cards ya koi bhi stat box
  document.querySelectorAll('.rating-card, .stat-box, .review-card').forEach(el => {
    el.classList.add('anim-scalein');
    observer.observe(el);
  });

  // Team cards — stagger delay ke saath
  document.querySelectorAll('.team-card').forEach((card, i) => {
    card.style.transitionDelay = `${i * 0.12}s`;
    observer.observe(card);
  });

  // Already existing toggleCard & closeCard functions
  function toggleCard(card) {
    const isOpen = card.classList.contains('open');
    document.querySelectorAll('.team-card.open').forEach(c => c.classList.remove('open'));
    if (!isOpen) {
      card.classList.add('open');
      setTimeout(() => {
        card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 100);
    }
  }

  function closeCard(event, btn) {
    event.stopPropagation();
    btn.closest('.team-card').classList.remove('open');
  }