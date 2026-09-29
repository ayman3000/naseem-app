// Light/dark toggle for every page but the landing page (same behaviour).
(function () {
  var root = document.documentElement, btn = document.getElementById('theme-toggle');
  if (!btn) return;
  var mq = window.matchMedia('(prefers-color-scheme: dark)');
  function dark() { return root.dataset.theme ? root.dataset.theme === 'dark' : mq.matches; }
  function sync() {
    var d = dark();
    root.classList.toggle('is-dark', d);
    btn.setAttribute('aria-label', d ? 'Switch to light theme' : 'Switch to dark theme');
  }
  btn.addEventListener('click', function () {
    root.dataset.theme = dark() ? 'light' : 'dark';
    try { localStorage.setItem('theme', root.dataset.theme); } catch (e) {}
    sync();
  });
  mq.addEventListener('change', sync);
  sync();
})();
