// This file contains the main JavaScript logic for handling user interactions and dynamic content updates. 

document.addEventListener('DOMContentLoaded', () => {
    const showcaseButton = document.getElementById('showcase-button');
    const loginButton = document.getElementById('login-button');
    const registerButton = document.getElementById('register-button');

    showcaseButton.addEventListener('click', () => {
        window.location.href = '/showcase';
    });

    loginButton.addEventListener('click', () => {
        window.location.href = '/login';
    });

    registerButton.addEventListener('click', () => {
        window.location.href = '/register';
    });

    // Function to fetch programming works from the server
    async function fetchProgrammingWorks() {
        try {
            const response = await fetch('/api/works');
            const works = await response.json();
            displayWorks(works);
        } catch (error) {
            console.error('Error fetching programming works:', error);
        }
    }

    // Function to display programming works on the page
    function displayWorks(works) {
        const worksContainer = document.getElementById('works-container');
        worksContainer.innerHTML = '';

        works.forEach(work => {
            const workElement = document.createElement('div');
            workElement.className = 'work-item';
            workElement.innerHTML = `
                <h3>${work.title}</h3>
                <p>${work.description}</p>
                <p>Language: ${work.language}</p>
            `;
            worksContainer.appendChild(workElement);
        });
    }

    // Initial fetch of programming works
    fetchProgrammingWorks();
});