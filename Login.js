//Lấy ra nút đăng nhập
var btnLogin = document.getElementById('btnLogin');
var container_container_login = document.querySelector('.container_container_login');
var loginForm = document.querySelector('.loginForm');

btnLogin.addEventListener('click', function() {
    container_container_login.style.display = 'flex';
    loginForm.style.animation = 'show_FormLogin ease 1s';
});

//Ngăn chặn sự kiện click của thẻ form bị nổi ra ngoài
loginForm.addEventListener('click', function(e) {
    e.stopPropagation();
});

document.getElementById('btnSubmitLogin').addEventListener('click', function(e) {
    e.preventDefault();
});

//Bắt sự kiện click vào thẻ cha của form
container_container_login.addEventListener('click', function() {
    loginForm.style.animation = 'hide_FormLogin ease 1s';
    setTimeout(function() {
        container_container_login.style.display = 'none';
    }, 600);
});