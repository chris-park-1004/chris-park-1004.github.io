// theme toggle with localStorage persistence
(function () {
  const KEY = 'hp-theme';
  const body = document.body;
  const btn = document.getElementById('theme-toggle');
  const sun = document.getElementById('icon-sun');
  const moon = document.getElementById('icon-moon');

  function apply(theme) {
    body.setAttribute('data-theme', theme);
    if (sun) sun.style.display = theme === 'dark' ? 'block' : 'none';
    if (moon) moon.style.display = theme === 'light' ? 'block' : 'none';
  }

  const saved = localStorage.getItem(KEY) || 'dark';
  apply(saved);

  if (btn) {
    btn.addEventListener('click', () => {
      const next = body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      localStorage.setItem(KEY, next);
      apply(next);
    });
  }
})();
