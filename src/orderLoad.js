function clearContent(){
    const content = document.querySelector('#content'); 
    content.innerText = "";
}

export function addOrderTabToPage(){
    clearContent();
    const content = document.querySelector('#content'); 
    const headline = document.createElement('h1');
    
    headline.innerText = "Order";
    
    content.appendChild(headline);

}


