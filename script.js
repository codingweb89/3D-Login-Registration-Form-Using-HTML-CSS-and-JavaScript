const register = document.getElementById("register");
const login = document.getElementById("login");
const cube = document.querySelector(".cube");

register.addEventListener("click", (e) => {
  e.preventDefault();
  cube.style.transform = "rotateY(90deg)";
});

login.addEventListener("click", (e) => {
  e.preventDefault();
  cube.style.transform = "rotateY(0)";
});
