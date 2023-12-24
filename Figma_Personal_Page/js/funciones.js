//MANEJO DE LOS COLORES PARA EL NAV OPTION

let navOptions = document.querySelectorAll(".nav-bar>.option-nav-bar>span>a");

/*FUNCION PARA EL BOTON QUE CAMBIA EL TEMA DE LA PAGINA WEB */

//datos para saber el valor del boton theme
let themeButton = document.querySelector(".buttonSetTheme");
let valueButton = themeButton.getAttribute("value");
let setThem = document.getElementById("setTheme");
//datos globales
const body = document.querySelector("body");
const principal = document.querySelector(".Developer-container");
const Optnav = document.querySelectorAll(".option-nav-bar");
const header = document.querySelector("header");
const buttonSetTheme = document.querySelector(".buttonSetTheme");
navOptions.forEach(function (navStyle) {
  navStyle.setAttribute("style", "color: white");
});

function setThemeDark() {
  body.setAttribute("style", "background-color: black;");
  principal.setAttribute("style", "background-color:grey;");
  header.setAttribute("style", "background-color: white;");
  buttonSetTheme.setAttribute("style", "background-color: gold;");
  buttonSetTheme.setAttribute("style", "color: black;");
  buttonSetTheme.setAttribute("style", "font-weight:bold;");
  Optnav.forEach(function (element) {
    element.setAttribute("style", "background-color: white");
  });
  navOptions.forEach(function (navStyle) {
    navStyle.removeAttribute("style");
  });
  navOptions.forEach(function (navStyle) {
    navStyle.setAttribute("style", "color: black");
  });
  setThem.removeAttribute("value");
  setThem.setAttribute("value", "Light-Theme");
  console.log(setThem.getAttribute("value"));

  setThem.removeAttribute("onclick");
  setThem.setAttribute("onclick", "setThemeLight()");
  console.log(setThem.getAttribute("onclick"));
}

function setThemeLight() {
  window.location.reload();
}
