var form = document.getElementById("sign-up-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  var fullname = document.getElementById("fullname").value;
  var fullemail = document.getElementById("fullemail").value;
  var fullpassword = document.getElementById("fullpassword").value;
  var fullcopassword = document.getElementById("fullcopassword").value;

  if (fullpassword !== fullcopassword) {
    alert("Password does not match!");
  } else {
    if (fullname === "admin" || "administrator" || "Admin" || "Administrator") {
      var newRole = "admin";
    } else {
      var newRole = "user";
    }
    fetch("http://localhost:3105/user/create", {
      method: "POST",
      body: JSON.stringify({
        name: fullname,
        bmi: 0,
        email: fullemail,
        role: newRole,
        password: fullpassword,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        alert(data.success);
        if (data.success === "Email already exists") {
          console.log(data.success);
        } else {
          window.location = "getstarted.html";
        }
      })
      .catch((error) => alert("Error:", error));
  }
});
