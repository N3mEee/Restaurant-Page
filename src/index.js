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
$logo.innerText = "Restaurant Page";
$header.appendChild($logo);

//navigation
const $nav = document.createElement("div");
$nav.classList.add("nav");
$header.appendChild($nav);

//home page button
const $homeBtn = document.createElement("button");
$homeBtn.innerText = "Home";
homePage();
$homeBtn.addEventListener("click", (e) => {
    removeContent();
    homePage();
});
$nav.appendChild($homeBtn);

//menu page button
const $menu = document.createElement("button");
$menu.innerText = "Menu";
$menu.addEventListener("click", (e) => {
    removeContent();
    menuPage();
});
$nav.appendChild($menu);

//about page button
const $about = document.createElement("button");
$about.innerText = "About";
$about.addEventListener("click", (e) => {
    removeContent();
    aboutPage();
});
$nav.appendChild($about);

//remove all children from $content
const removeContent = () => {
    $content.innerHTML = "";
};
