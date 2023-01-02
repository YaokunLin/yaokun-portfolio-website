/* ============================== Contact form validation ============================ */
/* const contactName = document.getElementById("contact-name");
const contactEmail = document.getElementById("contact-email");
const contactSubject = document.getElementById("contact-subject");
const contactMsg = document.getElementById("contact-msg");
const contactBtn = document.getElementById("contact-btn");
const contactForm = document.getElementById("contact-form");
const contactError = document.getElementById("contact-error");
console.log(contactMsg);

contactForm.addEventListener("submit", (e) => {
    let errorMsgs = [];
    if (!contactName.value) {
        errorMsgs.push("name is required");
    }

    if (errorMsgs.length > 0) {
        contactError.innerText = errorMsgs.join(",");
    }

    console.log(contactEmail.value);
    console.log(contactSubject.value);
    console.log(contactMsg.value);
    console.log(contactName.value);
    e.preventDefault();
}); */

/* ============================== Save Contact Form to Google Sheet ============================ */
const scriptURL =
    "https://script.google.com/macros/s/AKfycbx9DaRM1wnPUgLFRZo2zbgSrk5eCRaXhRaJt6mBvoMqV_f5R3p619flgWcEdZWtrbcU/exec";
const form = document.forms["submit-to-google-sheet"];
const returnMsg = document.getElementById("return-msg");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    fetch(scriptURL, { method: "POST", body: new FormData(form) })
        .then((response) => {
            returnMsg.innerHTML = "🙌Message Sent!";
            setTimeout(() => {
                returnMsg.innerHTML = "";
            }, 5000);
            form.reset();
            // console.log("Successfully saved in Google Sheet!", response);
        })
        .catch((error) => console.error("Error!", error.message));
});