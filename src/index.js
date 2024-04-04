import './style.css';
import backgroundImage from "./backgroundImg.png";
import { createElementsOnLandingPage } from "./pageLoad.js";
import { loadMenuTabToPage } from "./menuLoad.js";
import { addContactTabToPage } from "./AboutUsLoad.js";
import { addOrderTabToPage } from "./orderLoad.js";

const menuBtn = document.getElementById('menu');
const homeBtn = document.getElementById('home');
const contactBtn = document.getElementById('about-us');
const orderBtn = document.getElementById('order');

function addEventListenersToButtons(){
    menuBtn.addEventListener("click", loadMenuTabToPage);
    homeBtn.addEventListener("click", createElementsOnLandingPage);
    contactBtn.addEventListener("click", addContactTabToPage);
    orderBtn.addEventListener("click", addOrderTabToPage);

}

function addBackgroundImageToPage(){
    const content = document.querySelector('#content');
    content.style.backgroundImage = `url(${backgroundImage})`;
    content.style.backgroundRepeat = "no-repeat";
    content.style.backgroundSize = "800px";
    content.style.backgroundPosition = "center";
    content.style.backgroundAttachment = "fixed"; 

}

createElementsOnLandingPage();
addEventListenersToButtons();
addBackgroundImageToPage()

