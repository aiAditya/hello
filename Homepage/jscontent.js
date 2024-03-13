let btn = document.querySelector(".icon");
let logoShow = document.querySelector(".logo");
let toggle = document.querySelector("#nav");
let showContent = document.querySelector(".content");
btn.onclick = function () {
  toggle.classList.toggle("show ");
  logoShow.classList.toggle("logoShow");
  showContent.classList.toggle("showContent");
};
