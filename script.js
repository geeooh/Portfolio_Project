let element = document.querySelector(".navbar");
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
}




