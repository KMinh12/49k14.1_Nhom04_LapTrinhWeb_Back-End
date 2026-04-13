const regModal = document.getElementById('registerModal');
const loginModal = document.getElementById('loginModal');
const mainContent = document.getElementById('mainContent');

// Mở form Đăng ký
function openRegister() {
    closeAllModals(); 
    regModal.classList.remove('hidden');
    regModal.classList.add('flex');
    mainContent.classList.add('blur-effect');
    document.body.style.overflow = 'hidden';
}

// Mở form Đăng nhập
function openLogin() {
    closeAllModals(); 
    loginModal.classList.remove('hidden');
    loginModal.classList.add('flex');
    mainContent.classList.add('blur-effect');
    document.body.style.overflow = 'hidden';
}

// Đóng tất cả modal
function closeAllModals() {
    regModal.classList.add('hidden');
    regModal.classList.remove('flex');
    loginModal.classList.add('hidden');
    loginModal.classList.remove('flex');
    mainContent.classList.remove('blur-effect');
    document.body.style.overflow = 'auto';
}

// Hàm bổ sung để khớp với thuộc tính onclick="closeModal()" trong HTML của bạn
function closeModal() {
    closeAllModals();
}

// Phím Esc để thoát nhanh
window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeAllModals();
});

document.querySelector('#loginModal form').addEventListener('submit', function(e) {
    e.preventDefault(); // Ngăn trang load lại
    window.location.href = 'DatLich.html'; // Chuyển hướng sang trang Đặt lịch
});

