const form = document.querySelector(".login-form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = form.elements.email.value.trim();
    const password = form.elements.password.value.trim();
    const data = { email, password };

      if (email === "" || password === "") {
        return alert("All form fields must be filled in");
      }
  console.log(data);
  form.reset();
});
