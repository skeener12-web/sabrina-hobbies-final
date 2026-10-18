// Form processing: validates user input and prepares an email in the visitor's email app.
// Optional: enter your email address below to receive messages. Do not publish a private address.
const recipient = '';
const form = document.querySelector('#contactForm');
if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.querySelector('#name').value.trim();
    const message = document.querySelector('#message').value.trim();
    const status = document.querySelector('#formStatus');
    if (!name || !message) {
      status.textContent = 'Please enter your name and a message.';
      return;
    }
    if (!recipient) {
      status.textContent = 'Your message is ready. The site owner has not set up an email address yet.';
      return;
    }
    const subject = encodeURIComponent(`Message from ${name} via Sabrina's Hobbies`);
    const body = encodeURIComponent(`From: ${name}\n\n${message}`);
    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
    status.textContent = 'Your email app should open so you can send the message.';
  });
}
