let button = document.getElementById("btn");
let headingChange = document.querySelector("h1");
let flag = false;
function changeBackgroundColor() {
  if (flag == true) {
    // document.querySelector("section").style.backgroundColor = "#212121";
    button.style.transform = "translateX(40px)";
    // document.getElementById("toggle").style.background = "#212121";
    document.body.style.filter = "invert(1)";

    flag = false;
  } else {
    // document.querySelector("section").style.backgroundColor = "#fff";
    button.style.transform = "translateX(0px)";
    document.body.style.filter = "invert(0)";
    // document.getElementById("toggle").style.backgroundColor = " #ddd";
    flag = true;
  }
}
