import homePage from "./pages/home.js";
import menuPage from "./pages/menu.js";
import aboutPage from "./pages/about.js";
import bread from "./assets/bx-baguette.svg";
import bowl from "./assets/bx-bowl-hot.svg";
import rice from "./assets/bx-bowl-rice.svg";
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
const $homeLi = document.createElement("li");
const $home = document.createElement("div");
const $bread = new Image();

$home.innerText = `Home`;
$bread.src = bread;

$homeLi.appendChild($bread);
$homeLi.appendChild($home);

$homeLi.addEventListener("click", (e) => {
    removeContent();
    homePage();
});

$ul.appendChild($homeLi);

//menu page button
const $menuLi = document.createElement("li");
const $menu = document.createElement("div");
const $rice = new Image();

$menu.innerText = "Menu";
$rice.src = rice;

$menuLi.appendChild($rice);
$menuLi.appendChild($menu);

$menuLi.addEventListener("click", (e) => {
    removeContent();
    menuPage();
});
$ul.appendChild($menuLi);

//about page button
const $aboutLi = document.createElement("li");
const $about = document.createElement("div");
const $bowl = new Image();

$about.innerText = "About";
$bowl.src = bowl;

$aboutLi.appendChild($bowl);
$aboutLi.appendChild($about);

$aboutLi.addEventListener("click", (e) => {
    removeContent();
    aboutPage();
});
$ul.appendChild($aboutLi);

//remove all children from $content
const removeContent = () => {
    $content.innerHTML = "";
};

homePage();
