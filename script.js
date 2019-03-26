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






 function myFunction() {
     var dots = document.getElementById("dots");
     var moreText = document.getElementById("more");
     var btnText = document.getElementById("myBtn");

     if (dots.style.display === "none") {
         dots.style.display = "inline";
         btnText.innerHTML = "Read more";
         moreText.style.display = "none";
     } else {
         dots.style.display = "none";
         btnText.innerHTML = "Read less";
         moreText.style.display = "inline";
     }
 }







 var total = 158,
     buttons = document.querySelector('.buttons'),
     pie = document.querySelector('.pie'),
     activeClass = 'active';

 var continents = {
     "0-6": 0.5536464299,
     "7-17": 10.7101947308,
     "18-34": 23.9022527682,
     "35-44": 13.5166093929,
     "45-65": 33.3906071019,
     "65+": 17.9266895762
 };

 // work out percentage as a result of total
 var numberFixer = function (num) {
     var result = ((num * total) / 100);
     return result;
 }

 // create a button for each country
 for (property in continents) {
     var newEl = document.createElement('button');
     newEl.innerText = property;
     newEl.setAttribute('data-name', property);
     buttons.appendChild(newEl);
 }

 // when you click a button setPieChart and setActiveClass
 buttons.addEventListener('click', function (e) {
     if (e.target != e.currentTarget) {
         var el = e.target,
             name = el.getAttribute('data-name');
         setPieChart(name);
         setActiveClass(el);
     }
     e.stopPropagation();
 });

 var setPieChart = function (name) {
     var number = continents[name],
         fixedNumber = numberFixer(number),
         result = fixedNumber + ' ' + total;

     pie.style.strokeDasharray = result;
 }

 var setActiveClass = function (el) {
     for (var i = 0; i < buttons.children.length; i++) {
         buttons.children[i].classList.remove(activeClass);
         el.classList.add(activeClass);
     }
 }

 // Set up default settings
 setPieChart('asia');
