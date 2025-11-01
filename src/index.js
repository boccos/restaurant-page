import './styles.css';
import logoImg from './imgs/Kiku.png';
import foodImg from './imgs/food.png';

import loadAbout from './about.js';
import loadMenu from './menu.js';
import loadContact from './contact.js';

const app = document.getElementById('app');

const header = document.createElement('header');
const headerElements = document.createElement('div');
headerElements.className = 'headerElements';

const logo = document.createElement('img');
logo.src = logoImg;
logo.alt = 'Kiku Logo';
logo.id = 'logo';

const nav = document.createElement('nav');

const aboutBtn = document.createElement('button');
aboutBtn.textContent = 'About';
aboutBtn.addEventListener('click', loadAbout);

const menuBtn = document.createElement('button');
menuBtn.textContent = 'Menu';
menuBtn.addEventListener('click', loadMenu);

const contactBtn = document.createElement('button');
contactBtn.textContent = 'Contact Us';
contactBtn.addEventListener('click', loadContact);

const reservationBtn = document.createElement('button');
reservationBtn.id = "reserved";
reservationBtn.textContent = 'Reservation';

nav.append(aboutBtn, menuBtn, contactBtn, reservationBtn);
headerElements.append(logo, nav);
header.appendChild(headerElements);
app.appendChild(header);

const content = document.createElement('div');
content.id = 'content';
app.appendChild(content);

function loadIndex() {
  content.innerHTML = '';

  const food = document.createElement('img');
  food.src = foodImg;
  food.alt = 'Delicious Sushi';
  food.id = 'food';
  content.appendChild(food);

  const mainContent = document.createElement('div');
  mainContent.id = 'mainContent';

  const title = document.createElement('div');
  title.id = 'title';
  title.textContent = 'Authentic, Fresh, Delicious';

  const subTitle = document.createElement('div');
  subTitle.id = 'subTitle';
  subTitle.textContent = 'Kiku Sushi Bar';

  const info = document.createElement('div');
  info.id = 'info';
  info.textContent =
    'Where tradition meets taste. We honor the authentic craft of sushi-making, sourcing only the freshest fish locally every week to create a delicious and unforgettable experience. Everything that enters the mouth is prepared with precision and respect for centuries-old techniques, blending time-honored artistry with a touch of modern creativity. From the careful selection of ingredients to the elegant presentation on your plate, we strive to capture the essence of Japanese culinary culture — balance, harmony, and simplicity. Come and taste the dedication in every bite.'

  const homeMenuBtn = document.createElement('button');
  homeMenuBtn.id = 'contentMenu';
  homeMenuBtn.textContent = 'Menu';
  homeMenuBtn.addEventListener('click', loadMenu);

  mainContent.append(title, subTitle, info, homeMenuBtn);
  content.appendChild(mainContent);
}

logo.addEventListener('click', loadIndex);

loadIndex();

const footer = document.createElement('footer');
const footerDiv = document.createElement('div');
footerDiv.textContent = '© 2025 Kiku Sushi Bar. All rights reserved';
footer.appendChild(footerDiv);
app.appendChild(footer);
