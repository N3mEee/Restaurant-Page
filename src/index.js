import homePage from "./home.js";
import foodPage from "./food.js";

const $body = document.querySelector("body");
const $content = document.querySelector("#content");
const $header = document.createElement("div");
$header.setAttribute("class", "header");
$body.insertBefore($header, $content);
const $homeBtn = document.createElement("button");
$homeBtn.innerText = "Home";
homePage();

$homeBtn.addEventListener("click", (e) => {
    removeContent();
    homePage();
});
$header.appendChild($homeBtn);

const $food = document.createElement("button");
$food.innerText = "Food";
$food.addEventListener("click", (e) => {
    removeContent();
    foodPage();
});
$header.appendChild($food);

const removeContent = () => {
    $content.innerHTML = "";
};
