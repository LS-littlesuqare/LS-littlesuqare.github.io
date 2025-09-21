// main.js
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const submitButton = document.getElementById('submit-button');
    const latestPostsContainer = document.getElementById('latest-posts');

    // 处理用户登录
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            // 简单的表单验证
            if (username && password) {
                alert('登录成功！');
                // 这里可以添加实际的登录逻辑
            } else {
                alert('请填写用户名和密码。');
            }
        });
    }

    // 动态加载最新作品
    function loadLatestPosts() {
        const posts = [
            { title: '作品1', description: '这是作品1的描述' },
            { title: '作品2', description: '这是作品2的描述' },
            { title: '作品3', description: '这是作品3的描述' }
        ];

        posts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.classList.add('post');
            postElement.innerHTML = `<h3>${post.title}</h3><p>${post.description}</p>`;
            latestPostsContainer.appendChild(postElement);
        });
    }

    loadLatestPosts();
});