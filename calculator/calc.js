function solve(e) {
  var result = document.querySelector(".input");
  result.innerHTML += e;
}
function operator(value) {
  var result = document.querySelector(".input");
  result.innerHTML += value;
}
function delValue() {
  var result = document.querySelector(".input");
  var newString = result.innerHTML.slice(0, -1);

  result.innerHTML = newString;
  console.log(result);
}
function allClear() {
var result=document.querySelector(".input");
result.innerHTML = "";


}
function output(){
    var result=document.querySelector(".input");
    result.innerHTML = eval(result.innerHTML);
    console.log(result);
}