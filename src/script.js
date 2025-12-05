/* --- KONFIGURASI JAVASCRIPT --- */

// 1. Inisialisasi Particles.js (Efek Latar Belakang)
particlesJS("particles-js", {
    "particles": {
        "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
        "color": { "value": "#00fff2" }, 
        "shape": { "type": "circle" },
        "opacity": { "value": 0.5, "random": false },
        "size": { "value": 3, "random": true },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#00fff2",
            "opacity": 0.4,
            "width": 1
        },
        "move": { "enable": true, "speed": 2, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": { "enable": true, "mode": "repulse" },
            "onclick": { "enable": true, "mode": "push" },
            "resize": true
        }
    },
    "retina_detect": true
});

// 2. Variabel Global untuk Efek Mengetik
let typingTimeout;

// 3. Fungsi Navigasi: Membuka Profile
function openProfile(profileId) {
    // Sembunyikan Dashboard
    document.getElementById('dashboard-section').classList.add('hidden');
    
    // Tampilkan Profile yang dituju
    const targetProfile = document.getElementById(profileId);
    targetProfile.classList.remove('hidden');
    targetProfile.classList.add('fade-in');

    // Jalankan efek mengetik pada bio profile tersebut
    const bioElement = targetProfile.querySelector('.typing-area');
    const bioText = bioElement.getAttribute('data-bio');
    startTypingEffect(bioElement, bioText);
}

// 4. Fungsi Navigasi: Kembali ke Dashboard
function backToDashboard() {
    // Sembunyikan semua profile section
    document.querySelectorAll('.profile-detail').forEach(section => {
        section.classList.add('hidden');
        section.classList.remove('fade-in');
    });

    // Hentikan efek mengetik jika masih berjalan
    clearTimeout(typingTimeout);

    // Tampilkan Dashboard kembali
    const dashboard = document.getElementById('dashboard-section');
    dashboard.classList.remove('hidden');
    dashboard.classList.add('fade-in');
}

// 5. Fungsi Efek Mengetik (Typewriter Effect)
function startTypingEffect(element, text) {
    element.innerHTML = '<span class="cursor"></span>'; // Reset dan tambah kursor
    let i = 0;
    let speed = 30; // Kecepatan mengetik (ms)

    function type() {
        if (i < text.length) {
            // Tambahkan huruf sebelum kursor
            element.innerHTML = text.substring(0, i + 1) + '<span class="cursor"></span>';
            i++;
            typingTimeout = setTimeout(type, speed);
        }
    }
    // Mulai mengetik setelah jeda singkat
    clearTimeout(typingTimeout);
    setTimeout(type, 500);
}