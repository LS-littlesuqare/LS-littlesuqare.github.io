function toggleLogin() {
    const loginForm = document.getElementById('loginForm');
    if (loginForm.style.display === 'block') {
        loginForm.style.display = 'none';
    } else {
        loginForm.style.display = 'block';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    console.log('博客页面已加载');
});
