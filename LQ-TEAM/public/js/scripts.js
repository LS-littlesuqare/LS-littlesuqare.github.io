document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('registerForm');
    const loginForm = document.getElementById('loginForm');
    const postForm = document.getElementById('postForm');

    if (registerForm) {
        registerForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const formData = new FormData(registerForm);
            fetch('/api/auth/register', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                alert(data.message);
                if (data.success) {
                    registerForm.reset();
                }
            })
            .catch(error => console.error('Error:', error));
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const formData = new FormData(loginForm);
            fetch('/api/auth/login', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                alert(data.message);
                if (data.success) {
                    window.location.href = '/';
                }
            })
            .catch(error => console.error('Error:', error));
        });
    }

    if (postForm) {
        postForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const formData = new FormData(postForm);
            fetch('/api/posts', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                alert(data.message);
                if (data.success) {
                    postForm.reset();
                    loadPosts();
                }
            })
            .catch(error => console.error('Error:', error));
        });
    }

    function loadPosts() {
        fetch('/api/posts')
        .then(response => response.json())
        .then(data => {
            const postsContainer = document.getElementById('postsContainer');
            postsContainer.innerHTML = '';
            data.posts.forEach(post => {
                const postElement = document.createElement('div');
                postElement.classList.add('post');
                postElement.innerHTML = `<h3>${post.title}</h3><p>${post.content}</p>`;
                postsContainer.appendChild(postElement);
            });
        })
        .catch(error => console.error('Error:', error));
    }

    loadPosts();
});