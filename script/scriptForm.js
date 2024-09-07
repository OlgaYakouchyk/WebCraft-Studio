(function () {
  emailjs.init("NKquNOAIFzIyOTajD");
  // your puplic key
  console.log("EmailJS initialized");
})();

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Собираем данные формы
    const clientName = document.getElementById("name").value;
    const clientEmail = document.getElementById("email").value;
    const clientMessage = document.getElementById("message").value;

    // Отправляем данные через EmailJS
    emailjs
      .send("service_lpvg7rp", "template_oddzioj", {
        name: clientName,
        email: clientEmail,
        message: clientMessage,
      })
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
          alert("Massage sent!");
        },
        function (error) {
          console.log("FAILED...", error);
          alert("ERROR!!!");
        }
      );
  });
