async function isNotLoggedIn() {
  const userEmail = localStorage.getItem("userEmail");

  // if (!userEmail) return false
  if (!userEmail) {
    window.location = "getstarted.html";
  } else {
    // console.log(userName, "User logged in");
  }
}

async function isLoggedIn() {
  const userEmail = localStorage.getItem("userEmail");

  // if (!userEmail) return false
  if (!userEmail) {
    console.log("Please Login");
  } else {
    window.location = "welcome.html";
  }
}

async function isLogout() {
  localStorage.removeItem("userEmail");
  localStorage.removeItem("userName");
  localStorage.removeItem("userBMI");
  localStorage.removeItem("userRole");
  localStorage.removeItem("userID");
  isNotLoggedIn();
}

async function isNotAdmin() {
  const userRole = localStorage.getItem("userRole");

  // if (!userEmail) return false
  if (userRole !== "admin" && userRole !== "user") {
    window.location = "index.html";
  } else if (userRole === "user") {
    window.location = "welcome.html";
  } else {
    console.log(userName, "Admin logged in");
  }
}

// All users Table info
// api url
const api_url = "http://localhost:3105/user/all";

// Defining async function
async function getapi(url) {
  // Storing response
  const response = await fetch(url);

  // Storing data in form of JSON
  var data = await response.json();
  console.log(data);

  show(data);
}
// Calling that async function
getapi(api_url);

// Function to define innerHTML for HTML table
function show(data) {
  let tab = `<tr>
     <th>Name</th>
     <th>Email</th>
     <th>BMI</th>
     <th>Last Updated</th>
     </tr>`;

  // Loop to access all rows
  for (let user of data) {
    tab += `<tr>	
 <td>${user.name} </td>
 <td>${user.email}</td>
 <td>${user.bmi}</td>
 <td>${user.updatedAt.split("T")[0]}</td>	
 </tr>`;
  }
  // Setting innerHTML as tab variable
  document.getElementById("users").innerHTML = tab;
}

function stateChecker() {
  const userRole = localStorage.getItem("userRole");

  if (userRole !== "admin") {
    document.getElementById("state1").style.display = "none";
    console.log(userRole, "mr 1");
  } else {
    document.getElementById("state1").style.display = "block";
    console.log(userRole, "mr 2");
  }
}
