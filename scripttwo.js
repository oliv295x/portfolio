window.addEventListener("load", loadPage)

/* konstant "burger" er selectoren til klassen .burger - samme med nav */
const burger = document.querySelector(".burger");
const nav = document.querySelector(".body-nav");

const h1 = document.querySelector("h1")

const box = document.querySelector(".gridbox")
const boxlink = document.querySelector(".gridlink")

function loadPage() {
    h1.classList.toggle("shrink")
    burger.addEventListener("click", toggleMenu)

    box.addEventListener("mouseover", myFunction)
    box.addEventListener("mouseleave", myFunction2)

}

/* toggle giver nu klassen show, hvis den ikke er der, og fjerner den igen hvis den er */
function toggleMenu(){
    nav.classList.toggle("show")

    h1.classList.toggle("shrink")
    /* document.querySelector("main").classList.toggle("disapear") */
}

function myFunction() {
    console.log("1")
    boxlink.classList.add("move")
    boxlink.classList.remove("moveback")
}
function myFunction2() {
    console.log("2")
    boxlink.classList.remove("move")
    boxlink.classList.add("moveback")
    
}

