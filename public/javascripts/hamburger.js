var hamburgerBtn = document.getElementById('ham-btn')
var sideMenu = document.getElementById("side-menu")

sideMenu.className = "menu-wrap slide-out-left"

hamburgerBtn.addEventListener('click', menuSlide)

function menuSlide(e) {

    if (sideMenu.className === "menu-wrap slide-out-left") {
        sideMenu.classList.remove("slide-out-left")
        sideMenu.classList.toggle("slide-in-left")

    } else {
        sideMenu.classList.toggle("slide-out-left")
    }
    // if (sideMenu.className === "menu-wrap slide-in-left") {
    //     console.log("hello")
    //     sideMenu.classList.remove("slide-in-left")
    //     sideMenu.classList.add("slide-out-left")



    // }
}
// function menuSlide(e) {

//     if (sideMenu.style.transform == "translateX(-1000px)") {
//         sideMenu.classList.toggle("slide-in-left")
//     }
//     if (sideMenu.style.transform == "translateX(0)") {
//         sideMenu.style.transform = "translateX(-1000px)"

//         sideMenu.classList.toggle("slide-out-left")
//     }
// }