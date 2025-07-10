document.addEventListener('DOMContentLoaded', () => {
  // 🔘 DARK MODE TOGGLE
  const toggle = document.getElementById('darkModeToggle');
  if (toggle) {
    if (localStorage.getItem('theme') === 'dark') {
      document.body.classList.add('dark');
    }

    toggle.addEventListener('click', () => {
      document.body.classList.toggle('dark');
      localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
    });
  }

  // 🎥 AUTO CAROUSEL LOADING
  const track = document.getElementById('carouselTrack');
  const extensions = ['jpg', 'jpeg', 'JPG', 'JPEG'];

  if (track) {
    const totalImages = 24;
    let loaded = 0;

    for (let i = 1; i <= totalImages; i++) {
      (function (index) {
        let found = false;

        extensions.forEach(ext => {
          const imgPath = `gallery/${index}.${ext}`;
          const testImg = new Image();

          testImg.onload = () => {
            if (!found) {
              found = true;
              const img = document.createElement('img');
              img.src = imgPath;
              img.alt = `Gallery Image ${index}`;
              img.className = "carousel-img"; // use CSS for styling
              track.appendChild(img);

              loaded++;
              if (loaded === totalImages) {
                startCarousel();
              }
            }
          };

          testImg.onerror = () => {
            // silently fail if image not found
          };

          testImg.src = imgPath;
        });
      })(i);
    }

    function startCarousel() {
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
  }
});
