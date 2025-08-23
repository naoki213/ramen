// 年号
document.getElementById('y') && (document.getElementById('y').textContent = new Date().getFullYear());


// モバイルメニュー
const header = document.querySelector('.site-header');
const toggle = document.querySelector('.nav-toggle');
if (toggle) {
toggle.addEventListener('click', () => {
document.body.classList.toggle('nav-open');
toggle.setAttribute('aria-expanded', document.body.classList.contains('nav-open'));
});
}


// 現在ページのナビ強調
const current = document.body.getAttribute('data-page');
document.querySelectorAll('[data-nav]').forEach(a => {
const href = a.getAttribute('href');
if (href && href.includes(`${current}.html`)) a.classList.add('active');
if (current === 'index' && href.includes('index.html')) a.classList.add('active');
});


// スクロール時の軽い影
window.addEventListener('scroll', () => {
const y = window.scrollY;
header && (header.style.boxShadow = y > 8 ? '0 6px 18px rgba(0,0,0,.25)' : 'none');
});


// IntersectionObserver でふわっと表示
const io = 'IntersectionObserver' in window ? new IntersectionObserver((entries) => {
entries.forEach(e => {
if (e.isIntersecting) {
e.target.classList.add('in');
io.unobserve(e.target);
}
});
}, {threshold: 0.1}) : null;


document.querySelectorAll('.reveal-group .reveal, .gallery .reveal, .news-card.reveal').forEach(el => io && io.observe(el));
