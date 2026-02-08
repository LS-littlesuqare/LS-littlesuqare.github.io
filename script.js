document.addEventListener('DOMContentLoaded', function() {
    console.log('博客页面已加载');
    
    const loginButton = document.getElementById('loginButton');
    const closeModal = document.getElementById('closeModal');
    const loginModal = document.getElementById('loginModal');
    
    loginButton.addEventListener('click', function() {
        loginModal.style.display = 'block';
    });
    
    closeModal.addEventListener('click', function() {
        loginModal.style.display = 'none';
    });
    
    window.addEventListener('click', function(event) {
        if (event.target === loginModal) {
            loginModal.style.display = 'none';
        }
    });
});
