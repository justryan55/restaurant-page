function clearContent(){
    const content = document.querySelector('#content'); 
    content.innerText = "";
}

export function addContactTabToPage(){
    clearContent();
    const content = document.querySelector('#content'); 
    const heading = document.createElement('h1');

    heading.innerText = "About Us";

    content.appendChild(heading);
}