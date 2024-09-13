(function () {
  emailjs.init("NKquNOAIFzIyOTajD");
  // your puplic key
  // console.log("EmailJS initialized");
})();

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Собираем данные формы
    const clientName = document.getElementById("name").value;
    const clientEmail = document.getElementById("email").value;
    const clientMessage = document.getElementById("message").value;
    const clientPhone = document.getElementById("phone").value;

    console.log(clientName);
    console.log(clientEmail);
    console.log(clientPhone);

    // Отправляем данные через EmailJS
    emailjs
      .send("service_lpvg7rp", "template_oddzioj", {
        from_name: clientName,
        email: clientEmail,
        message: clientMessage,
        reply_to: clientEmail,
        phone: clientPhone,
      })
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
          alert("Massage sent!");
        },

        // отправляем автоответ клиетт

        emailjs.send("service_lpvg7rp", "template_q1nnbgh", {
          to_name: clientName,
          email: clientEmail,
        }),

        function (error) {
          console.log("FAILED...", error);
          alert("ERROR!!!");
        }
      );
  });
