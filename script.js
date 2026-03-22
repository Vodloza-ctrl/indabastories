// ===== Sticky Topbar =====
const topbar = document.getElementById('topbar');

function handleTopbar() {
  if (window.scrollY > 12) {
    topbar.classList.add('scrolled');
  } else {
    topbar.classList.remove('scrolled');
  }
}

handleTopbar();
window.addEventListener('scroll', handleTopbar);


// ===== Mobile Nav Toggle =====
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', isOpen);
  });

  // Close menu when clicking a link
  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      navToggle.setAttribute('aria-expanded', false);
    });
  });
}


// ===== Reveal Animations =====
const revealElements = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealElements.forEach(el => observer.observe(el));


// ===== WhatsApp Form Handling =====
const form = document.getElementById('schoolForm');
const formStatus = document.getElementById('formStatus');

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const school = document.getElementById('school').value.trim();
    const contact = document.getElementById('contact').value.trim();
    const role = document.getElementById('role').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const interest = document.getElementById('interest').value.trim();
    const message = document.getElementById('message').value.trim();

    const text = `Indaba Stories Academy - School Enquiry

School: ${school}
Contact Person: ${contact}
Role / Position: ${role}
Phone Number: ${phone}
Area of Interest: ${interest}
Message: ${message}`;

    // Feedback to user
    formStatus.textContent = "Opening WhatsApp...";

    const url = `https://wa.me/263716173131?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');

    setTimeout(() => {
      formStatus.textContent = "Your enquiry has been prepared in WhatsApp.";
    }, 2000);
  });
}