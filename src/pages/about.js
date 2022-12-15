import "../styles/about.css";

export default function aboutPage() {
    const $content = document.querySelector("#content");
    $content.classList = "about-page";

    //create container element
    const $container = document.createElement("div");
    $container.classList = "container";
    $content.appendChild($container);

    //create tittle
    const $title = document.createElement("h1");
    $title.textContent = "Restaurant Page: About Us";
    $container.appendChild($title);

    //create content
    const $p1 = document.createElement("p");
    $p1.textContent =
        "Since our modest beginnings in 2005 with a little space in ‘City Name’’s stylish Yorkville locale, ‘Organization Name’ ‘s development has been enlivened with the energy to cook and serve solid, Indian-roused takeout food.";
    $container.appendChild($p1);

    const $p2 = document.createElement("p");
    $p2.textContent =
        "In contrast to other Indian eateries, ‘Organization Name’ was made with the explicit expectation to appear as something else.";
    $container.appendChild($p2);

    const $p3 = document.createElement("p");
    $p3.textContent =
        "We realize numerous individuals love Indian sustenance, yet a large number of them loathe or are unconscious of the regularly unfortunate fixings that make run-of-the-mill Indian nourishment taste so great.";
    $container.appendChild($p3);

    const $p4 = document.createElement("p");
    $p4.textContent =
        "Our menu highlights things that utilization the sound and fragrant flavors, however, forgets the stuffing ghee, spread, oil, and overwhelming cream.";
    $container.appendChild($p4);

    const $p5 = document.createElement("p");
    $p5.textContent =
        "‘Organization Name’ has developed to incorporate four superb takeout areas in ‘City Name’ with additional to come sooner rather than later. Our group takes pride in the way that we can furnish our new and faithful clients with extraordinary tasting Indian-roused nourishment that is not normal for that at some other Indian eatery you visit.";
    $container.appendChild($p5);

    const $p6 = document.createElement("p");
    $p6.textContent =
        "We perceive that a few people are as yet searching for the run-of-the-mill Indian nourishment, and that is fine with us. Our disclaimer is that on the off chance that you’re anticipating overwhelming, slick, undesirable Indian nourishment, ‘Organization Name’ isn’t the place for you.";
    $container.appendChild($p6);

    //create copyright
    const $copyright = document.createElement("em");
    $copyright.textContent =
        "This template is from : https://thewordyboy.com/restaurant-about-us/";
    $container.appendChild($copyright);
}
