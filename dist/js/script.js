function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  const offset = document.querySelector('.navbar').offsetHeight;
  const position = element.offsetTop - offset;

  window.scrollTo({
    top: position,
    behavior: 'smooth'
  });
}

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("contact-form").addEventListener("submit", function(event) {
      event.preventDefault(); // Mencegah reload halaman

      const form = event.target;
      const statusMessage = document.getElementById("status-message");

      fetch(form.action, {
          method: form.method,
          body: new FormData(form),
          headers: {
              "Accept": "application/json"
          }
      }).then(response => {
          if (response.ok) {
              statusMessage.innerText = "Pesan berhasil dikirim!";
              statusMessage.style.color = "green";
              form.reset();
          } else {
              statusMessage.innerText = "Pesan gagal dikirim. Silakan coba lagi.";
              statusMessage.style.color = "red";
          }
      }).catch(error => {
          statusMessage.innerText = "Terjadi kesalahan. Coba lagi nanti.";
          statusMessage.style.color = "red";
      });
  });
});

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("join-form").addEventListener("submit", function(event) {
      event.preventDefault(); // Mencegah reload halaman

      const form = event.target;
      const statusMessage = document.getElementById("status-message");

      fetch(form.action, {
          method: form.method,
          body: new FormData(form),
          headers: {
              "Accept": "application/json"
          }
      }).then(response => {
          if (response.ok) {
              statusMessage.innerText = "Pendaftaran berhasil! Kami akan segera menghubungi Anda.";
              statusMessage.style.color = "green";
              form.reset();
          } else {
              statusMessage.innerText = "Gagal mendaftar. Silakan coba lagi.";
              statusMessage.style.color = "red";
          }
      }).catch(error => {
          statusMessage.innerText = "Terjadi kesalahan. Coba lagi nanti.";
          statusMessage.style.color = "red";
      });
  });
});