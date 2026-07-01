document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.getElementById('carousel');
  
  // Safety check
  if (!carousel) return; 

  // Grab all the cards and turn them into an array
  let cards = Array.from(carousel.querySelectorAll('.card'));

  function updatePositions() {
    // Apply the positional classes based on the current array order
    cards.forEach((card, index) => {
      card.className = 'card pos-' + (index + 1);
    });
  }

  function rotateCarousel() {
    // Take the first card in the array and move it to the end
    // This creates the continuous loop effect
    const firstCard = cards.shift();
    cards.push(firstCard);
    
    // Visually update them
    updatePositions();
  }

  // 1. Set the initial positions as soon as the page loads
  updatePositions();

  // 2. Rotate the carousel every 3 seconds (3000 milliseconds)
  setInterval(rotateCarousel, 3000);
});