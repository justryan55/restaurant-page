function clearContent(){
    const content = document.querySelector('#content'); 
    content.innerText = "";
}

export function loadMenuTabToPage(){
    clearContent();
    const content = document.querySelector('#content'); 
    const heading = document.createElement('h1');

    heading.innerText = "Menu";
    content.appendChild(heading);




}