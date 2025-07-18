let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};
document.addEventListener('DOMContentLoaded', () => {
    const reviewButtons = document.querySelectorAll('.project-card .btn');
    const projectModal = document.getElementById('projectModal');
    const closeButton = document.querySelector('.modal .close-button');
    const modalProjectTitle = document.getElementById('modalProjectTitle');
    const modalImagesContainer = document.getElementById('modalImagesContainer');

    const projectData = {
        1: {
            title: "Project 1: My Project VAWC (Web & Mobile)",
            images: [
                'project 1.png',
                'project 1.2.png',
                'project 1.3.png',
                'project 1.4.png'
            ]
        },
        2: {
            title: "Project 2: Facility Fables",
            images: [
                'project 2.png'
            ]
        },
        3: {
            title: "Project 3: SunShinePay",
            images: [
                'project 3.png',
                'project 3.1.png',
                'project 3.3.png',
                'project 3.4.png',
                'project 3.5.png'
            ]
        },
        4: {
            title: "Project 4: Data Visualization",
            images: [
                'project 4.png',
                'project 4.1.png',
                'project 4.2.png',
                'project 4.3.png',
                'project 4.4.png'
            ]
        }
    };

    reviewButtons.forEach(button => {
        button.addEventListener('click', () => {
            const projectCard = button.closest('.project-card');
            const projectId = projectCard.dataset.projectId;
            const project = projectData[projectId];

            if (project) {
                modalProjectTitle.textContent = project.title;
                modalImagesContainer.innerHTML = '';

                project.images.forEach(imageSrc => {
                    const img = document.createElement('img');
                    img.src = imageSrc;
                    img.alt = `Image for ${project.title}`;
                    modalImagesContainer.appendChild(img);
                });

                projectModal.style.display = 'block';
            } else {
                console.warn(`No data found for project ID: ${projectId}`);
            }
        });
    });

    closeButton.addEventListener('click', () => {
        projectModal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === projectModal) {
            projectModal.style.display = 'none';
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && projectModal.style.display === 'block') {
            projectModal.style.display = 'none';
        }
    });
});
