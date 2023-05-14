const btnAlterTheme = document.getElementById("btn-alter-theme");
const body = document.querySelector("body");

const imgBtnAlterTheme = document.querySelector(".sun");

btnAlterTheme.addEventListener("click", () => {

  body.classList.toggle("dark-mode");


  const darkModeActivated = body.classList.contains("dark-mode");

  if (darkModeActivated) {
    imgBtnAlterTheme.setAttribute("src", "./src/img/moon.png");
    imgBtnAlterTheme.setAttribute("alt", "Lua");
    imgBtnAlterTheme.setAttribute("class", "moon");
  }
  else {
    imgBtnAlterTheme.setAttribute("src", "./src/img/sun.png");
    imgBtnAlterTheme.setAttribute("alt", "Sol");
    imgBtnAlterTheme.setAttribute("class", "sun");
  };

});