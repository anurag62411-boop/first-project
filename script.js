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