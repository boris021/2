// Получаем элементы
const menuBtn = document.getElementById('menuBtn');
const sidebar = document.getElementById('sidebar');
const sidebarClose = document.getElementById('sidebarClose');
const overlay = document.getElementById('overlay');
const cookieBtn = document.getElementById('cookieBtn');
const cookieNotice = document.getElementById('cookieNotice');

// Функции для меню
function openMenu() {
    sidebar.classList.add('open');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeMenu() {
    sidebar.classList.remove('open');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
}

// События для меню
menuBtn.addEventListener('click', openMenu);
sidebarClose.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);

// Закрытие меню по ESC
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && sidebar.classList.contains('open')) {
        closeMenu();
    }
});

// Закрытие cookie уведомления
if (cookieBtn) {
    cookieBtn.addEventListener('click', function() {
        cookieNotice.style.display = 'none';
        localStorage.setItem('cookieAccepted', 'true');
    });
}

// Проверяем, было ли принято cookie уведомление
if (localStorage.getItem('cookieAccepted') === 'true') {
    cookieNotice.style.display = 'none';
}

// Плавная прокрутка для якорных ссылок
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});