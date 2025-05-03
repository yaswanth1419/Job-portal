document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const username = document.getElementById("username").value;
    const role = document.getElementById("role").value;
  
    if (!username || !role) {
      alert("Please fill all fields");
      return;
    }
  
    // Save user session in localStorage
    localStorage.setItem("username", username);
    localStorage.setItem("role", role);
  
    // Redirect based on role
    switch (role) {
      case "user":
        window.location.href = "user.html";
        break;
      case "hr":
        window.location.href = "hr.html";
        break;
      case "manager":
        window.location.href = "manager.html";
        break;
      case "admin":
        window.location.href = "admin.html";
        break;
      default:
        alert("Invalid role");
    }
  });