import Nuggets from "../assets/nuggets.png";
import Tasty from "../assets/tasty.png";
import Rosty from "../assets/rosty.png";

import "../styles/menu.css";

export default function menuPage() {
    const $content = document.querySelector("#content");
    $content.classList = "menu-page";

    //create container element
    const $container = document.createElement("div");
    $container.classList = "container";
    $content.appendChild($container);

    //create 3 menu cards
    createcard(
        "20 Chicken McNuggets®",
        "Mit saftigem Hähnchenbrustfleisch + 3 Gewinnchancen - Solange der Vorrat reicht!",
        "Choice of: Cocktail Dip 25ml, Spicy Sauce 25ml, Buttermilk Ranch Dip 25ml, Sour Cream-Schnittlauch Dip 25ml, Ketchup 20ml and more.",
        "10,29 €",
        Nuggets
    );
    createcard(
        "Big Tasty® Bacon McMenü",
        "1 Klassiker + 1 Beilage + 1 Getränk. Bei Auswahl pfandpflichtiger Produkte erhöht sich der Endpreis um das Pfand. + 9 Gewinnchancen - Solange der Vorrat reicht!",
        "Choice of: Big Tasty® Bacon, Pommes Frites groß, Riffelkartoffeln, Snack Salad Classic, Ketchup 20ml and more.",
        "10,99 €",
        Tasty
    );
    createcard(
        "Big Mac® McMenü",
        "1 Klassiker + 1 Beilage + 1 Getränk. Bei Auswahl pfandpflichtiger Produkte erhöht sich der Endpreis um das Pfand.",
        "Choice of: Big Mac®, Pommes Frites groß, Riffelkartoffeln, Snack Salad Classic, Ketchup 20ml and more.",
        "10,19 €",
        Rosty
    );
}

//create a menu card
const createcard = function (title, info, info2, price, image) {
    const $container = document.querySelector(".container");

    const $card = document.createElement("div");
    $card.classList = "menu-card";
    $container.appendChild($card);

    const $left = document.createElement("div");
    $left.classList = "left";
    $card.appendChild($left);

    const $title = document.createElement("p");
    $title.textContent = title;
    $title.classList = "card-title";
    $left.appendChild($title);

    const $info = document.createElement("p");
    $info.textContent = info;
    $info.classList = "card-info";
    $left.appendChild($info);

    const $info2 = document.createElement("p");
    $info2.textContent = info2;
    $info2.classList = "card-info2";
    $left.appendChild($info2);

    const $price = document.createElement("p");
    $price.textContent = price;
    $price.classList = "card-price";
    $left.appendChild($price);

    const $img = new Image();
    $img.src = image;
    $card.appendChild($img);
};
