import './style.css';

import { createElementsOnLandingPage } from "./pageLoad.js";
import { loadMenuTabToPage } from "./menuLoad.js";
import { addContactTabToPage } from "./AboutUsLoad.js";

const menuBtn = document.getElementById('menu');
const homeBtn = document.getElementById('home');
const contactBtn = document.getElementById('about-us');

function addEventListenersToButtons(){
    menuBtn.addEventListener("click", loadMenuTabToPage);
    homeBtn.addEventListener("click", createElementsOnLandingPage);
    contactBtn.addEventListener("click", addContactTabToPage);
}

function addBackgroundImageToPage(){
    const content = document.querySelector('#content'); 
    const backgroundImage = './background.svg';
    const imgElement = document.createElement('img');
    
    imgElement.src = backgroundImage;
    content.appendChild(imgElement);
    // content.style.backgroundImage = `url(${backgroundImage})`;
}

createElementsOnLandingPage();
addEventListenersToButtons();
addBackgroundImageToPage()




    
    // content.style.backgroundImage = "url('4dec1b3c642ab7ad588d9bcc2a259042.svg')";
    // content.style.backgroundRepeat = "repeat";
    // content.style.backgroundSize = "200px";
    // content.style.backgroundPosition = "center";
    // content.style.backgroundAttachment = "fixed"; 
