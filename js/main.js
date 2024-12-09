// Project Data
const projects = [
    {
        title: "E-commerce Platform",
        description: "A full-stack e-commerce solution with real-time inventory management",
        image: "images/project1.jpg",
        technologies: ["React", "Node.js", "MongoDB", "Express"],
        liveLink: "#",
        githubLink: "#"
    },
    {
        title: "Task Management App",
        description: "A collaborative task management application with real-time updates",
        image: "images/project2.jpg",
        technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
        liveLink: "#",
        githubLink: "#"
    },
    {
        title: "Portfolio Website",
        description: "A responsive portfolio website with modern design principles",
        image: "images/project3.jpg",
        technologies: ["HTML", "CSS", "JavaScript"],
        liveLink: "#",
        githubLink: "#"
    }
];

// Experience Data
const experiences = [
    {
        title: "Senior Frontend Developer",
        company: "Tech Corp",
        period: "2022 - Present",
        description: "Led the frontend development team in building scalable web applications"
    },
    {
        title: "Full Stack Developer",
        company: "Digital Solutions Inc",
        period: "2020 - 2022",
        description: "Developed and maintained full-stack applications using modern technologies"
    },
    {
        title: "Junior Developer",
        company: "StartUp Hub",
        period: "2018 - 2020",
        description: "Collaborated in developing innovative web solutions for various clients"
    }
];

// Populate Projects
function populateProjects() {
    const projectsGrid = document.querySelector('.projects-grid');
    
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card animate-on-scroll';
        
        projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.title}" class="project-image">
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-technologies">
                    ${project.technologies.map(tech => `<span class="skill-item">${tech}</span>`).join('')}
                </div>
                <div class="project-links">
                    <a href="${project.liveLink}" class="btn primary-btn" target="_blank">Live Demo</a>
                    <a href="${project.githubLink}" class="btn secondary-btn" target="_blank">GitHub</a>
                </div>
            </div>
        `;
        
        projectsGrid.appendChild(projectCard);
    });
}

// Populate Experience Timeline
function populateExperience() {
    const timeline = document.querySelector('.timeline');
    
    experiences.forEach(exp => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item animate-on-scroll';
        
        timelineItem.innerHTML = `
            <div class="timeline-content">
                <h3>${exp.title}</h3>
                <h4>${exp.company}</h4>
                <p class="period">${exp.period}</p>
                <p>${exp.description}</p>
            </div>
        `;
        
        timeline.appendChild(timelineItem);
    });
}

// Mobile Navigation
function setupMobileNav() {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // Toggle Navigation
        nav.classList.toggle('nav-active');
        
        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
        
        // Burger Animation
        burger.classList.toggle('toggle');
    });
}

// Scroll Animation
function handleScrollAnimation() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });
    
    elements.forEach(element => observer.observe(element));
}

// Form Handling
function setupContactForm() {
    const form = document.getElementById('contact-form');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        // Here you would typically send the data to a server
        console.log('Form submitted:', data);
        
        // Show success message
        alert('Thank you for your message! I will get back to you soon.');
        form.reset();
    });
}

// Initialize everything when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    populateProjects();
    populateExperience();
    setupMobileNav();
    handleScrollAnimation();
    setupContactForm();
});
