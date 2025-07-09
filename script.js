// Select the toggle button
const toggle = document.getElementById('darkModeToggle');

// Toggle event
toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');

  // Save theme preference
  if (document.body.classList.contains('dark')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});

// On page load, apply saved theme
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark');
  }
});
