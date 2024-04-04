function clearContent(){
    const content = document.querySelector('#content'); 
    content.innerText = "";
}

export function createElementsOnLandingPage(){
    clearContent();
    const content = document.querySelector('#content'); 
    const headline = document.createElement('h1');
    const backgroundImage = document.createElement('img');
    const welcomeText = document.createElement('p');

    headline.classList.add('headline');
    backgroundImage.classList.add('background-image');
    welcomeText.classList.add('welcome-text');
    
    headline.innerText = "Uncle Jack's Pizza";
    welcomeText.innerText = `Indulge in a slice of tradition and taste the difference at Uncle Jack's Pizza! Nestled in the heart of flavor town, our pizzeria is a haven for those seeking the perfect blend of crispy crust, savory sauces, and mouthwatering toppings.

    From classic pepperoni perfection to gourmet creations that push the boundaries of taste, each bite at Uncle Jack's is crafted with love and passion. Whether you're dining in, grabbing takeout, or having us deliver straight to your door, we promise an experience that's as satisfying as it is delicious.
    
    Join us as we celebrate the art of pizza-making, one slice at a time. Welcome to Uncle Jack's Pizza – where every bite feels like home.`;

    // // backgroundImage.src = "4dec1b3c642ab7ad588d9bcc2a259042.svg";
    // backgroundImage.alt = 'pizza background'

    content.appendChild(headline);
    content.appendChild(welcomeText);
    content.appendChild(backgroundImage);
    
    // content.style.backgroundImage = "url('4dec1b3c642ab7ad588d9bcc2a259042.svg')";
    // content.style.backgroundRepeat = "repeat";
    // content.style.backgroundSize = "200px";
    // content.style.backgroundPosition = "center";
    // content.style.backgroundAttachment = "fixed"; 

}


