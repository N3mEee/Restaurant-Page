import Icon from "../assets/home.png";
import "../styles/home.css";

export default function homePage() {
    const $content = document.querySelector("#content");

    const $info = document.createElement("div");
    $info.classList.add("info", "info-home");

    const $infoContent = document.createElement("div");
    $infoContent.classList.add("info-content");

    const $infoTitle = document.createElement("p");
    $infoTitle.innerText = "Time to order food";
    $infoContent.appendChild($infoTitle);

    const $infoSubTitle = document.createElement("p");
    $infoSubTitle.innerText = "Find our restaurant in your area";
    $infoContent.appendChild($infoSubTitle);

    const $form = document.createElement("form");
    $infoContent.appendChild($form);

    const $address = document.createElement("input");
    $address.setAttribute("type", "search");
    $address.setAttribute("name", "address");
    $address.setAttribute("id", "address");
    $address.setAttribute("placeholder", "Address, i.e. Kirchstraße 1");
    $form.appendChild($address);

    const $submit = document.createElement("button");
    $submit.setAttribute("type", "submit");
    $submit.innerText = "Search";
    $form.appendChild($submit);

    const $rightImg = document.createElement("div");
    $rightImg.classList.add("right-img");

    const $img = new Image();
    $img.src = Icon;
    $rightImg.appendChild($img);

    $info.appendChild($infoContent);
    $content.appendChild($info);
    $content.appendChild($rightImg);
}
