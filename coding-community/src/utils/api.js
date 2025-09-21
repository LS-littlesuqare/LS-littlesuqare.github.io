const API_BASE_URL = 'https://api.codingcommunity.com';

async function login(username, password) {
    const response = await fetch(`${API_BASE_URL}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    });
    return response.json();
}

async function publishPost(title, content, userId) {
    const response = await fetch(`${API_BASE_URL}/posts`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({ title, content, userId }),
    });
    return response.json();
}

async function fetchPosts() {
    const response = await fetch(`${API_BASE_URL}/posts`);
    return response.json();
}

async function fetchUserPosts(userId) {
    const response = await fetch(`${API_BASE_URL}/users/${userId}/posts`, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
    });
    return response.json();
}

export { login, publishPost, fetchPosts, fetchUserPosts };