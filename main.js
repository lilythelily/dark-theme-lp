"use strict";

const input = document.querySelector("input");
const btn = document.querySelector(".sign-up-btn");
const error = document.querySelector("small");

// === email validation ===

let isEmpty = true;
function emptyCheck() {
  if (input.value.trim() == "") {
    error.style.display = "block";
    isEmpty = true;
  } else {
    isEmpty = false;
  }
}
let isValid = false;

function regexCheck() {
  const regex = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/gim;
  if (!regex.test(input.value.trim())) {
    error.style.display = "block";
    isValid = false;
  } else {
    isValid = true;
  }
}

function success() {
  input.style.backgroundBlendMode = "normal";
  input.style.border = "2.6px solid hsl(176, 68%, 64%)";
  error.style.display = "none";
}

btn.addEventListener("click", () => {
  emptyCheck();
  regexCheck();
  if (!isEmpty && isValid) {
    success();
  }
});
