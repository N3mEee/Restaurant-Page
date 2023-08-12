import Icon256 from "../assets/home 256.png";
import Icon1120 from "../assets/home 1120.png";
import Icon from "../assets/home.png";
import Icon1820 from "../assets/home 1820.png";
import Icon2048 from "../assets/home 2048.png";

import "../styles/home.css";

export default function homePage() {
    const $content = document.querySelector("#content");
    $content.classList = "home-page";

    const $info = document.createElement("div");
    $info.classList.add("info");

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
    $img.srcset = `${Icon256} 256w, ${Icon1120} 1120w, ${Icon} 1568w, ${Icon1820} 1820w, ${Icon2048} 2048w`;
    $img.sizes = `(max-width: 256px) 50vw, (max-width: 1120) 50vw, (max-width: 1568) 50vw, (max-width: 1820) 50vw, (max-width: 2048) 50vw`;
    $rightImg.appendChild($img);

    $info.appendChild($infoContent);
    $content.appendChild($info);
    $content.appendChild($rightImg);
}
