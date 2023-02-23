"use strict";

const opens = document.getElementById("open");
const closes = document.getElementById("close");
const container = document.querySelector(".container");

opens.addEventListener("click", () => container.classList.add("show-nav"));

closes.addEventListener("click", () => container.classList.remove("show-nav"));
