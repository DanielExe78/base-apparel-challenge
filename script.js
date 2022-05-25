"use strict";
// Query
const sendBtn = document.querySelector(".send");
const email = document.querySelector(".mail");
const error = document.querySelector(".hidden");

// Function
const colorChange = function (e) {
  const formValue = email.value;

  if (!formValue || !formValue.includes("@")) {
    email.style.border = "2px solid red";
    error.style.opacity = 1;
    email.style.background = "url(images/icon-error.svg) no-repeat 90%";
    e.preventDefault();
  }
};

function controlBorderColor() {
  if (this.value.length > 1) {
    this.style.borderColor = "gray";
    error.style.opacity = 0;
    email.style.background = "none";
  }
}

// Events
sendBtn.addEventListener("click", colorChange);
email.addEventListener("keydown", controlBorderColor);
