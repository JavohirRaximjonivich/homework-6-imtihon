document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const errorMessage = document.getElementById('error-message');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const login = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        const correctLogin = 'john@mail.com';
        const correctPassword = 'changeme';

        if (login === correctLogin && password === correctPassword) {
            window.location.href = './admin.html';
        } else {
            errorMessage.textContent = "Noto'g'ri login yoki parol kiritildi. Iltimos, qaytadan urinib ko'ring.";
        }
    });
});
