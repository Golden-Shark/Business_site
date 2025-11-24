"use strict";
window.addEventListener("DOMContentLoaded", () => {});

const nav = document.querySelectorAll(".nav");
const navig = document.querySelector("nav");
const contact = document.querySelector(".contact-form");
const input = document.querySelectorAll(".main");
const inputContact = document.querySelectorAll(".contact-input");
const errorText = document.querySelectorAll(".fields");
const username = document.getElementById("name");
const mail = document.getElementById("mail");
const phone = document.getElementById("phone");

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    navig.style.position = "fixed";
  } else {
    navig.style.position = "relative";
  }
});

const changeActiveNav = () => {
  nav.forEach((el) => {
    el.classList.toggle("active");
    el.classList.toggle("non-active");
  });
};

function closeEl(el) {
  document.querySelector(`${el}`).style.display = "none";
  if (el === ".contact-form") {
    errorText.forEach((error) => {
      error.style.display = "none";
    });
    inputContact.forEach((input) => {
      input.value = "";
    });
    document.querySelector(".allFields").style.display = "none";
  }
}

function openEl(el) {
  document.querySelector(`${el}`).style.display = "flex";
}

const setCookie = () => {
  document.querySelector(".cookie").style.display = "none";
  document.cookie = "userCookie=true";
};

const sendForm = () => {
  let error = 0;
  for (let i = 0; i < input.length; i++) {
    console.log(input[i].value);
    if (input[i].value === "") {
      errorText[i].style.display = "block";
      error++;
    }
  }

  if (error > 0) {
    document.querySelector(".allFields").style.display = "block";
  } else {
    contact.style.display = "none";
    inputContact.forEach((input) => {
      input.value = "";
    });
    document.querySelector(".successForm").style.display = "flex";
  }
};

username.addEventListener("input", changeInput);
mail.addEventListener("input", changeInput);
phone.addEventListener("input", changeInput);

phone.addEventListener("focus", function (event) {
  if (event.target.value.trim() == "") {
    event.target.value = "+7 ";
  }
});

phone.addEventListener("blur", function (event) {
  if (event.target.value.trim() == "+7") {
    event.target.value = "";
  }
});

function changeInput() {
  if (username.value !== "" && mail.value !== "" && phone.value !== "") {
    document.querySelector(".sendContact").style.background = "#954CED";
    document.querySelector(".sendContact").style.cursor = "pointer";
    document.querySelector(".allFields").style.display = "none";
    for (let i = 0; i < errorText.length; i++) {
      errorText[i].style.display = "none";
    }
  } else {
    document.querySelector(".sendContact").style.background = "#B9B9B9";
  }
}
