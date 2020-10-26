document.querySelector("#change").addEventListener("click",randomColor);
function randomColor(){
  var i;
  for(i=0;i<=9;i++){
    document.getElementsByClassName("square")[i].style.backgroundColor=getRandomColor();
    document.getElementsByTagName("h1")[i].innerHTML=Math.floor(Math.random() * 9) + 1;
  }

}


function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

var text;
function disappear(pass){
  pass.style.visibility="hidden";
  text+=","+pass.innerHTML;
alert("the order in which the numbers disappear is"+text);
}
