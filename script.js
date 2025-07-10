document.addEventListener('DOMContentLoaded', () => {
  // 🔘 DARK MODE TOGGLE
  const toggle = document.getElementById('darkModeToggle');
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
  }
  toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
  });

  // 🎥 AUTO CAROUSEL
  const track = document.getElementById('carouselTrack');
  if (track) {
    for (let i = 1; i <= 24; i++) {
      const img = document.createElement('img');
      img.src = `gallery/${i}.jpg`;
      img.alt = `Gallery Image ${i}`;
      img.style.maxWidth = '250px';
      img.style.borderRadius = '10px';
      img.style.margin = '10px';
      img.style.objectFit = 'cover';
      img.style.height = 'auto';
      track.appendChild(img);
    }

    const clone = track.cloneNode(true);
    clone.id = "carouselClone";
    track.parentNode.appendChild(clone);

    let scrollX = 0;
    const speed = 0.5;

    function animateScroll() {
      scrollX += speed;
      track.style.transform = `translateX(-${scrollX}px)`;
      clone.style.transform = `translateX(-${scrollX}px)`;

      if (scrollX >= track.scrollWidth) {
        scrollX = 0;
      }

      requestAnimationFrame(animateScroll);
    }

    animateScroll();
  }
});
