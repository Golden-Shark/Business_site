"use strict";
window.addEventListener("DOMContentLoaded", () => {});

let nav = document.querySelectorAll('.nav');
const hero = document.querySelector('.logo-btn');
const footerNav = document.querySelector('.footer-nav');
const mobMenu = document.querySelector('.mob-menu');
const cookie = document.querySelector('.cookie');
const contact = document.querySelector('.contact-form');
const input = document.querySelectorAll('.main');
const errorText = document.querySelectorAll('.fields');
const username = document.getElementById('name');
const mail = document.getElementById('mail');
const phone = document.getElementById('phone');

const changeActiveNav = () => {
    nav.forEach(el => {
        el.classList.toggle('active')
    });
}

if (contact.offsetHeight > window.innerHeight) {
    contact.style.top = '0';
}

const openMenu = () => {
    mobMenu.style.display = 'flex';
}

const closeMenu = () => {
    mobMenu.style.display = 'none';
}

const closeCookie = () => {
    cookie.style.display = 'none';
}

if (window.innerWidth <= 819) {
    footerNav.innerHTML = '<li>For Business</li><li>For Customers</li><li>Privacy Policy</li><li>Terms Of Use - Seller</li><li>Terms of Use - Sellers &amp; Customers</li>';
    hero.innerHTML = '<img src="img/logo.png" alt="" class="logo"><img class="burger" src="img/Burger.png" alt="" onclick="openMenu()">';
}

const openContact = () => {
    contact.style.display = 'block';
}

const closeContact = () => {
    contact.style.display = 'none';
}

const closeMessage = () => {
    document.querySelector('.successForm').style.display = 'none';
}

const sendForm = () => {
    let error = 0;
    for (let i=0; i<input.length; i++) {
        if (input[i].value == '') {
            errorText[i].style.display = 'block';
            error++;
        }
    }

    if (error > 0) {
        document.querySelector('.allFields').style.display = 'block';
    } else {
        contact.style.display = 'none';
        document.querySelector('.successForm').style.display = 'flex';
    }
}

username.addEventListener('input', changeBackground);
mail.addEventListener('input', changeBackground);
phone.addEventListener('input', changeBackground);

function changeBackground() {
  if (username.value !== '' && mail.value !== '' && phone.value !== '') {
    document.querySelector('.sendContact').style.background = '#954CED';
    // document.querySelector('.sendContact').type = 'submit';
    document.querySelector('.allFields').style.display = 'none';
    for (let i=0; i<errorText.length; i++) {
        errorText[i].style.display = 'none';
    }
  } else {
    document.querySelector('.sendContact').style.background = '#B9B9B9';
  }
}
