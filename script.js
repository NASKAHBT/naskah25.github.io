// Smooth Scrolling for Navigation
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Interactive Button Effects
document.querySelectorAll('.explore-btn').forEach(button => {
    button.addEventListener('mouseover', function () {
        this.style.backgroundColor = '#f40612';
    });
    button.addEventListener('mouseout', function () {
        this.style.backgroundColor = '#e50914';
    });
});

// Dark Mode Toggle
const toggleDarkMode = document.querySelector('#dark-mode-toggle');
toggleDarkMode.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
});

// Scroll to Top Button
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.textContent = '↑';
scrollToTopBtn.classList.add('scroll-to-top');
document.body.appendChild(scrollToTopBtn);

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});
// Smooth Scrolling for Navigation
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Interactive Button Effects
document.querySelectorAll('.explore-btn').forEach(button => {
    button.addEventListener('mouseover', function () {
        this.style.backgroundColor = '#f40612';
    });
    button.addEventListener('mouseout', function () {
        this.style.backgroundColor = '#e50914';
    });
});

// Dark Mode Toggle
const toggleDarkMode = document.querySelector('#dark-mode-toggle');
toggleDarkMode.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
});

// Scroll to Top Button
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.textContent = '↑';
scrollToTopBtn.classList.add('scroll-to-top');
document.body.appendChild(scrollToTopBtn);

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});
// Dark Mode Toggle
const toggleDarkMode = document.querySelector('#dark-mode-toggle');
toggleDarkMode.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
});

// Smooth Scrolling for Navigation
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scroll to Top Button
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.textContent = '↑';
scrollToTopBtn.classList.add('scroll-to-top');
document.body.appendChild(scrollToTopBtn);

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});


document.addEventListener('DOMContentLoaded', () => {
    const exploreBtn = document.querySelector('.explore-btn');

    if (exploreBtn) {
        exploreBtn.addEventListener('click', (event) => {
            // Tambahkan kelas animasi ke tombol
            exploreBtn.classList.add('animate-click');

            // Hapus kelas animasi dan arahkan setelah animasi selesai
            setTimeout(() => {
                window.location.href = 'gallery.html'; // Ubah URL sesuai tujuan
            }, 200); // Durasi animasi dalam milidetik
        });
    }
});

