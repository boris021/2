        // Menu Toggle
        const menuBtn = document.getElementById('menuBtn');
        const sidebar = document.getElementById('sidebar');
        const sidebarClose = document.getElementById('sidebarClose');
        const overlay = document.getElementById('overlay');

        function openMenu() {
            sidebar.classList.add('open');
            overlay.classList.add('active');
        }

        function closeMenu() {
            sidebar.classList.remove('open');
            overlay.classList.remove('active');
        }

        menuBtn.addEventListener('click', openMenu);
        sidebarClose.addEventListener('click', closeMenu);
        overlay.addEventListener('click', closeMenu);

        // Theme Toggle
        const themeToggle = document.getElementById('themeToggle');
        const body = document.body;

        themeToggle.addEventListener('click', () => {
            body.classList.toggle('light-mode');
            themeToggle.textContent = body.classList.contains('light-mode') ? '☀️' : '🌙';
        });