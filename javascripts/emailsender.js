document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm("lokeshazad10", "template_0u18h2d", this).then(
      function () {
        alert("Message sent successfully!");
      },
      function (error) {
        alert("FAILED... " + error.text);
      }
    );
  });

