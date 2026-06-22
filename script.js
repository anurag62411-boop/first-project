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

  function submitForm() {
    const name   = document.getElementById('f-name').value.trim();
    const age    = document.getElementById('f-age').value.trim();
    const qual   = document.getElementById('f-qual').value;
    const addr   = document.getElementById('f-addr').value.trim();
    const mobile = document.getElementById('f-mobile').value.trim();

    // Clear errors
    ['f-name','f-age','f-qual','f-addr','f-mobile'].forEach(id => {
      document.getElementById(id).classList.remove('error');
    });

    let valid = true;
    if (!name)   { document.getElementById('f-name').classList.add('error'); valid=false; }
    if (!age || parseInt(age)<18) { document.getElementById('f-age').classList.add('error'); valid=false; }
    if (!qual)   { document.getElementById('f-qual').classList.add('error'); valid=false; }
    if (!addr)   { document.getElementById('f-addr').classList.add('error'); valid=false; }
    if (!mobile || mobile.length < 10) { document.getElementById('f-mobile').classList.add('error'); valid=false; }

    if (!valid) return;

    const msg =
      `🙏 *Namaskar Anurag Bhai!*\n\nMaine Work From Anywhere ke liye apply kiya hai:\n\n` +
      `👤 *Naam:* ${name}\n` +
      `🎂 *Age:* ${age} saal\n` +
      `🎓 *Qualification:* ${qual}\n` +
      `🏠 *Address:* ${addr}\n` +
      `📱 *Mobile:* +91 ${mobile}\n\n` +
      `Kripya mujhe joining ke baare mein guide karein. 🙏`;

    // Show success
    document.getElementById('form-card').style.display = 'none';
    document.getElementById('success-card').style.display = 'block';

    setTimeout(() => {
      window.open('https://wa.me/917541907181?text=' + encodeURIComponent(msg), '_blank');
    }, 600);
  }
   