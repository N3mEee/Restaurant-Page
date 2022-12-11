import homePage from "./Pages/home.js";
import menuPage from "./Pages/menu.js";
import aboutPage from "./Pages/about.js";
import "./Styles/style.css";

//setup header
const $body = document.querySelector("body");
const $content = document.querySelector("#content");
const $header = document.createElement("div");
$header.setAttribute("class", "header");
$body.insertBefore($header, $content);

//home page button
const $homeBtn = document.createElement("button");
$homeBtn.innerText = "Home";
homePage();
$homeBtn.addEventListener("click", (e) => {
    removeContent();
    homePage();
});
$header.appendChild($homeBtn);

//menu page button
const $menu = document.createElement("button");
$menu.innerText = "Menu";
$menu.addEventListener("click", (e) => {
    removeContent();
    menuPage();
});
$header.appendChild($menu);

//about page button
const $about = document.createElement("button");
$about.innerText = "About";
$about.addEventListener("click", (e) => {
    removeContent();
    aboutPage();
});
$header.appendChild($about);

//remove all children from $content
const removeContent = () => {
    $content.innerHTML = "";
};