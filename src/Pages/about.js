import Icon from "../assets/content.png";

export default function aboutPage() {
    const $content = document.querySelector("#content");

    const $info = document.createElement("div");
    $info.setAttribute("class", "info");

    const $h1 = document.createElement("h1");
    $h1.innerText = "Time to order food";
    $info.appendChild($h1);

    const $h2 = document.createElement("h2");
    $h2.innerText = "Find our restaurant in your area";
    $info.appendChild($h2);

    const $form = document.createElement("form");
    $info.appendChild($form);

    const $label = document.createElement("label");
    $label.innerText = "Your ABOUT Address";
    $label.setAttribute("for", "address");
    $form.appendChild($label);

    const $input = document.createElement("input");
    $input.setAttribute("type", "text");
    $input.setAttribute("name", "address");
    $input.setAttribute("id", "address");
    $form.appendChild($input);

    const $rightImg = document.createElement("div");
    $rightImg.setAttribute("class", "right-img");

    const $img = new Image();
    $img.src = Icon;
    $rightImg.appendChild($img);

    $content.appendChild($info);
    $content.appendChild($rightImg);
}
