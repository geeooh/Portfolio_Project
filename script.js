/*let element = document.querySelector(".navbar");
console.log(element);

let isBlackText = element.classList.contains("black-text");

let listItems = element.children
console.log(listItems);

for(let i=0; i<listItems.length; i++) {
    let li = listItems[i];
    let a = li.querySelector("a");
    if(isBlackText){
        a.classList.add("black-text");
    } else {
        a.classList.add("white-text");
    }
    console.log(a);
}*/



var nav = document.getElementById('nav');
var navlinks = nav.getElementsByTagName('a');

function toggleNav() {
    (nav.classList.contains('active')) ? nav.classList.remove('active') : nav.classList.add('active');
  }

document.getElementById('nav-icon').addEventListener('click', function(e) {
    console.log(e);
    e.preventDefault();
    toggleNav();
});

for(var i = 0; i < navlinks.length; i++) {
    navlinks[i].addEventListener('click', function() {
      toggleNav();
  });
}




