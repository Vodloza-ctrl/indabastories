const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const packagesModal = document.getElementById('packagesModal');
const openPackageButtons = document.querySelectorAll('[data-open-packages]');
const closePackages = document.getElementById('closePackages');
const modalEnquiryLink = document.getElementById('modalEnquiryLink');
const schoolForm = document.getElementById('schoolForm');
const formStatus = document.getElementById('formStatus');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navMenu.querySelectorAll('a, button').forEach((item) => {
    item.addEventListener('click', () => {
      navMenu.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

function openModal() {
  packagesModal.classList.add('active');
  packagesModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  packagesModal.classList.remove('active');
  packagesModal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

openPackageButtons.forEach((button) => {
  button.addEventListener('click', openModal);
});

if (closePackages) {
  closePackages.addEventListener('click', closeModal);
}

if (packagesModal) {
  packagesModal.addEventListener('click', (event) => {
    if (event.target === packagesModal) {
      closeModal();
    }
  });
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && packagesModal.classList.contains('active')) {
    closeModal();
  }
});

if (modalEnquiryLink) {
  modalEnquiryLink.addEventListener('click', () => {
    closeModal();
  });
}

if (schoolForm) {
  schoolForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const school = document.getElementById('school').value.trim();
    const contact = document.getElementById('contact').value.trim();
    const role = document.getElementById('role').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const interest = document.getElementById('interest').value.trim();
    const message = document.getElementById('message').value.trim();

    const whatsappMessage = [
      'Hello Indaba Stories Academy, I would like to enquire about a school partnership.',
      '',
      `School Name: ${school}`,
      `Contact Person: ${contact}`,
      `Role / Position: ${role}`,
      `Phone Number: ${phone}`,
      `Area of Interest: ${interest}`,
      `School Notes: ${message}`,
    ].join('\n');

    const encoded = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/263776773231?text=${encoded}`;

    formStatus.textContent = 'Opening WhatsApp with your enquiry...';
    window.open(whatsappUrl, '_blank');
  });
}

const revealItems = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.16,
});

revealItems.forEach((item) => revealObserver.observe(item));
