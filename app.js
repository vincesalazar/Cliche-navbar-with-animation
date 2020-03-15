// using query selectors
const navBar = document.querySelector('.nav-bar');
const navLink = document.querySelectorAll('#nav-link');

// this works too
const content = document.getElementsByClassName("content")[0];

function openNav() {
    console.log("this is opening")
    var m = window.matchMedia("(max-width: 790px)")
    if (m.matches) {
        navBar.style.width = "100vw"
    } else {
        navBar.style.width = "25vw"
    }

    console.log(navLink)
    navLink.forEach((link, index) => {
        link.style.animation = `fadeIn 3s ease forwards ${index / 7 +.1}s`;
    });

    content.style.marginLeft = "25vw";

}

function closeNav() {
    navBar.style.width = "0";
    content.style.marginLeft = "0";
    navLink.forEach((link, index) => {
        link.style.animation = "";
    });
}