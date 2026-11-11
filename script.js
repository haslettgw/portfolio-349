const toggleBtn = document.getElementById('theme-toggle');
const themeText = document.getElementById('theme-text');
const body = document.body;

function updateButtonUI(isDark) {
  themeText.textContent = isDark ? 'Light Mode' : 'Dark Mode';
}

const savedTheme = localStorage.getItem('site-theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
  body.classList.add('dark-mode');
  updateButtonUI(true);
}

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  const isDark = body.classList.contains('dark-mode');
  
  updateButtonUI(isDark);
  localStorage.setItem('site-theme', isDark ? 'dark' : 'light');
});


if (typeof Glide !== 'undefined' && document.querySelector('.glide')) {
  new Glide('.glide', {
    type: 'slider',   
    rewind: true,   
    perView: 1,
    gap: 20
  }).mount();
}

