import './style.css';

import { createElementsOnLandingPage } from "./pageLoad.js";
import { loadMenuTabToPage } from "./menuLoad.js";
import { addContactTabToPage } from "./contactLoad.js";

const menuBtn = document.getElementById('menu');
const homeBtn = document.getElementById('home');
const contactBtn = document.getElementById('contact');

function addEventListenersToButtons(){
    menuBtn.addEventListener("click", loadMenuTabToPage);
    homeBtn.addEventListener("click", createElementsOnLandingPage);
    contactBtn.addEventListener("click", addContactTabToPage);
}


createElementsOnLandingPage();
addEventListenersToButtons();
