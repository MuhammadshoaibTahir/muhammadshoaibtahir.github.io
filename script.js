window.addEventListener('load', () => {
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
    let loadedCount = 0;
    const totalImages = 24;

    for (let i = 1; i <= totalImages; i++) {
      let imageLoaded = false;

      for (let ext of extensions) {
        const testImg = new Image();
        const src = `gallery/${i}.${ext}`;
        testImg.src = src;

        testImg.onload = function () {
          if (!imageLoaded) {
            imageLoaded = true;
            const img = document.createElement('img');
            img.src = src;
            img.alt = `Gallery Image ${i}`;
            img.style.maxWidth = '250px';
            img.style.borderRadius = '10px';
            img.style.margin = '10px';
            img.style.objectFit = 'cover';
            img.style.height = 'auto';
            track.appendChild(img);

            loadedCount++;

            if (loadedCount === totalImages) {
              setupCarousel(track);
            }
          }
        };
      }
    }

    function setupCarousel(track) {
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
