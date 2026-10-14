document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  const form = document.getElementById('contactForm');
  const statusEl = document.getElementById('formStatus');

  if (form && statusEl) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();

      const name = form.elements.name.value.trim();
      const email = form.elements.email.value.trim();
      const message = form.elements.message.value.trim();

      if (!name || !email || !message) {
        statusEl.textContent = 'Please complete all fields before sending your message.';
        statusEl.className = 'status error';
        return;
      }

      statusEl.textContent = `Thanks, ${name}! Your message has been received.`;
      statusEl.className = 'status success';
      form.reset();
    });
  }
});
