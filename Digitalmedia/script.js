const hamburger = document.getElementById("hamburger");
const menu = document.querySelector("#menu");
const hLink = document.querySelectorAll("#hLink");
const faSolid = document.querySelector(".fa-solid");
const header = document.querySelector("header");

window.onscroll = () => {
  if (window.scrollY > 100) {
    header.classList.add("bg-color-primary-dark");
    header.classList.add("border-b");
    header.classList.add("border-color-gray");
  } else {
    header.classList.remove("bg-color-primary-dark");
    header.classList.remove("border-b");
    header.classList.remove("border-color-gray");
  }
};

hamburger.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  faSolid.classList.toggle("fa-xmark");
});

hLink.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.toggle("hidden");
    faSolid.classList.toggle("fa-xmark");
  });
});

const userTexts = document.querySelectorAll(".user-text");
const userPics = document.querySelectorAll(".user-pic");

const showReview = () => {
  userPics.forEach((userPic) => {
    userPic.classList.remove("active-pic");
  });
  userTexts.forEach((userText) => {
    userText.classList.remove("active-text");
  });
  let i = Array.from(userPics).indexOf(event.target);
  userPics[i].classList.add("active-pic");
  userTexts[i].classList.add("active-text");
};

const toggleBtn = document.getElementById("toggleBtn");

const card_1_front = document.querySelector("#card_1_front");
const card_1_back = document.querySelector("#card_1_back");

const card_2_front = document.querySelector("#card_2_front");
const card_2_back = document.querySelector("#card_2_back");

const card_3_front = document.querySelector("#card_3_front");
const card_3_back = document.querySelector("#card_3_back");

toggleBtn.addEventListener("click", () => {
  card_1_front.classList.toggle("-rotate-y-180");
  card_1_back.classList.toggle("rotate-y-180");

  card_2_front.classList.toggle("-rotate-y-180");
  card_2_back.classList.toggle("rotate-y-180");

  card_3_front.classList.toggle("-rotate-y-180");
  card_3_back.classList.toggle("rotate-y-180");
});
