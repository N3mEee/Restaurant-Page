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

//hamburger navigation
const $ham = document.createElement("div");
$ham.classList.add("ham");
$nav.appendChild($ham);

const $icon = document.createElement("i");
$icon.classList.add("fa", "fa-bars");
$ham.appendChild($icon);
$ham.addEventListener("click", (e) => {
    toggleNavListMobile();
});

//toggle navigation list mobile
function toggleNavListMobile() {
    if ($containerNav.style.display === "block") {
        $containerNav.style.display = "none";
    } else {
        $containerNav.style.display = "block";
    }
}
//navigation list mobile
const $containerNav = document.createElement("ul");
$containerNav.classList.add("container-nav");
$header.appendChild($containerNav);

//home page button
const $mobilehomeLi = document.createElement("li");
const $mobilehome = document.createElement("div");
const $mobilebread = new Image();

$mobilehome.innerText = `Home`;
$mobilebread.src = bread;

$mobilehomeLi.appendChild($mobilebread);
$mobilehomeLi.appendChild($mobilehome);

$mobilehomeLi.addEventListener("click", (e) => {
    removeContent();
    homePage();
    toggleNavListMobile();
});

$containerNav.appendChild($mobilehomeLi);

//menu page button
const $mobilemenuLi = document.createElement("li");
const $mobilemenu = document.createElement("div");
const $mobilerice = new Image();

$mobilemenu.innerText = "Menu";
$mobilerice.src = rice;

$mobilemenuLi.appendChild($mobilerice);
$mobilemenuLi.appendChild($mobilemenu);

$mobilemenuLi.addEventListener("click", (e) => {
    removeContent();
    menuPage();
    toggleNavListMobile();
});
$containerNav.appendChild($mobilemenuLi);

//about page button
const $mobileaboutLi = document.createElement("li");
const $mobileabout = document.createElement("div");
const $mobilebowl = new Image();

$mobileabout.innerText = "About";
$mobilebowl.src = bowl;

$mobileaboutLi.appendChild($mobilebowl);
$mobileaboutLi.appendChild($mobileabout);

$mobileaboutLi.addEventListener("click", (e) => {
    removeContent();
    aboutPage();
    toggleNavListMobile();
});
$containerNav.appendChild($mobileaboutLi);

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
