import homePage from "./pages/home.js";
import menuPage from "./pages/menu.js";
import aboutPage from "./pages/about.js";
import "./styles/style.css";

//setup header
const $body = document.querySelector("body");
const $content = document.querySelector("#content");
const $header = document.createElement("div");
$header.classList.add("header");
$body.insertBefore($header, $content);

//logo
const $logo = document.createElement("div");
$logo.classList.add("logo");
$logo.innerText = "Restaurant Page";
$logo.addEventListener("click", (e) => {
    removeContent();
    homePage();
});
$header.appendChild($logo);

//navigation
const $nav = document.createElement("div");
$nav.classList.add("nav");
$header.appendChild($nav);

//navigation list
const $ul = document.createElement("ul");
$nav.appendChild($ul);

//home page button
const $homeBtn = document.createElement("li");
$homeBtn.innerText = "Home";
homePage();
$homeBtn.addEventListener("click", (e) => {
    removeContent();
    homePage();
});
$ul.appendChild($homeBtn);

//menu page button
const $menu = document.createElement("li");
$menu.innerText = "Menu";
$menu.addEventListener("click", (e) => {
    removeContent();
    menuPage();
});
$ul.appendChild($menu);

//about page button
const $about = document.createElement("li");
$about.innerText = "About";
$about.addEventListener("click", (e) => {
    removeContent();
    aboutPage();
});
$ul.appendChild($about);

//remove all children from $content
const removeContent = () => {
    $content.innerHTML = "";
};
