const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
const dots = [];
const dotRadius = 0.6;
const maxDistance = 100;
const mouseMaxDistance = 150; // Increased to make the mouse lines denser
const mouseLineOpacity = 0.5; // Increased opacity for denser effect

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let mouseX = null;
let mouseY = null;

function drawDot(x, y, opacity) {
    ctx.beginPath();
    ctx.arc(x, y, dotRadius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
    ctx.fill();
}

function drawLine(x1, y1, x2, y2, opacity = 0.2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
    ctx.lineWidth = 1;
    ctx.stroke();
}

function connectDots() {
    for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
            const dx = dots[i].x - dots[j].x;
            const dy = dots[i].y - dots[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < maxDistance) {
                drawLine(dots[i].x, dots[i].y, dots[j].x, dots[j].y);
            }
        }
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    connectDots();
    dots.forEach(dot => {
        dot.x += dot.speedX;
        dot.y += dot.speedY;
        if (dot.x < 0 || dot.x > canvas.width) {
            dot.speedX *= -1;
        }
        if (dot.y < 0 || dot.y > canvas.height) {
            dot.speedY *= -1;
        }
        drawDot(dot.x, dot.y, 1 - dot.zIndex / canvas.width);
    });

    // Draw lines to mouse position if within range
    if (mouseX !== null && mouseY !== null) {
        for (let i = 0; i < dots.length; i++) {
            const dx = mouseX - dots[i].x;
            const dy = mouseY - dots[i].y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < mouseMaxDistance) {
                drawLine(mouseX, mouseY, dots[i].x, dots[i].y, mouseLineOpacity);
            }
        }
        drawDot(mouseX, mouseY, 1);
    }

    requestAnimationFrame(animate);
}

function createDots() {
    for (let i = 0; i < 120; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const speedX = (Math.random() - 0.5) * 2; // Random speed between -1 and 1
        const speedY = (Math.random() - 0.5) * 2; // Random speed between -1 and 1
        const zIndex = Math.random() * canvas.width; // Random zIndex
        dots.push({ x, y, speedX, speedY, zIndex });
    }
}

canvas.addEventListener('mousemove', function(event) {
    mouseX = event.clientX;
    mouseY = event.clientY;
});

canvas.addEventListener('mouseleave', function() {
    mouseX = null;
    mouseY = null;
});

createDots();
animate();


window.addEventListener("DOMContentLoaded", function() {
    var projects = document.querySelectorAll('.home-content');

    projects.forEach(function(project) {
        var projectTop = project.getBoundingClientRect().top;
        var triggerPoint = window.innerHeight - 100; // Adjust as needed

        if (projectTop < triggerPoint) {
            project.classList.add("show");
        } else {
            project.classList.remove("show");
        }
    });
});



window.addEventListener("scroll", function() {
    var projects = document.querySelectorAll(".pro-effect");

    projects.forEach(function(project) {
        var projectTop = project.getBoundingClientRect().top;
        var triggerPoint = window.innerHeight - 100; // Adjust as needed

        if (projectTop < triggerPoint) {
            project.classList.add("show");
        } else {
            project.classList.remove("show");
        }
    });
});

window.addEventListener("scroll", function() {
    var projects = document.querySelectorAll(".contact-box");

    projects.forEach(function(project) {
        var projectTop = project.getBoundingClientRect().top;
        var triggerPoint = window.innerHeight - 100; // Adjust as needed

        if (projectTop < triggerPoint) {
            project.classList.add("show");
        } else {
            project.classList.remove("show");
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var scrollToTopBtn = document.getElementById('scroll-to-top');

    // Show or hide the scroll-to-top button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) { // Adjust this value as needed
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });

    // Scroll to the top when the button is clicked
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Smooth scrolling animation
        });
    });
});
