var form = document.getElementById("sign-in-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  fetch("http://localhost:3105/user/login", {
    method: "POST",
    body: JSON.stringify({
      email: email,
      password: password,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      if (data.name !== undefined) {
        localStorage.setItem("userName", data.name);
        localStorage.setItem("userEmail", data.email);
        localStorage.setItem("userBMI", data.bmi);
        localStorage.setItem("userRole", data.role);
        localStorage.setItem("userID", data.id);

        console.log(data.id, "IDDD");
        window.location = "welcome.html";
      } else {
        alert("Invalid Credentials");
      }
    })
    .catch((error) => alert("Error:", error));
});
