// Function to handle user login
function login() {
  // Get username and password values from input fields
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;
  // Check if "Remember Me" checkbox is checked
  const remember = document.getElementById("remember").checked;

  // Get stored users from localStorage, or empty array if none
  const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

  // Find user object where username and password match input
  const user = storedUsers.find(u => u.username === username && u.password === password);

  if (user) {
    // If user found and password correct, save username for session
    if (remember) {
      // Save username in localStorage if "Remember Me" is checked (persists after browser closes)
      localStorage.setItem("username", username);
    } else {
      // Save username in sessionStorage if not checked (cleared when browser/tab closes)
      sessionStorage.setItem("username", username);
    }
    // Redirect to the home page after successful login
    window.location.href = "home.html";
  } else {
    // If login fails, show error message
    document.getElementById("error").textContent = "Invalid credentials.";
  }
}

// Function to handle user registration
function register() {
  // Get new username and password from registration inputs
  const username = document.getElementById("newUsername").value.trim();
  const password = document.getElementById("newPassword").value;

  // Check if both fields are filled
  if (!username || !password) {
    document.getElementById("regError").textContent = "Please enter all fields.";
    return; // Stop function if fields empty
  }

  // Get existing users from localStorage, or empty array if none
  const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
  // Check if username already exists
  const exists = storedUsers.some(u => u.username === username);

  if (exists) {
    // If username taken, show error
    document.getElementById("regError").textContent = "Username already exists.";
  } else {
    // Add new user to the array
    storedUsers.push({ username, password });
    // Save updated users array to localStorage
    localStorage.setItem("users", JSON.stringify(storedUsers));
    // Show success alert
    alert("Registered successfully!");
    // Redirect to login page
    window.location.href = "index.html";
  }
}

// thoe comments lone is explaination on based on my knowledge and its typed under my logic(mujahid) 