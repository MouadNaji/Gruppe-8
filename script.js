 let burgermenu = document.querySelector("#burgermenu");
 burgermenu.addEventListener("click", () => {
     if (document.querySelector("nav").className == "block") {
         document.querySelector("nav").classList.remove("block")
         document.querySelector("nav ul").classList.remove("opacity")
     } else {
         document.querySelector("nav").classList.add("block")
         document.querySelector("nav ul").classList.add("opacity")
     }
 })
