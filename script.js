var toggle = false;
var mybuttn = document.getElementById("button");
var mypara = document.getElementById("para");
mybuttn.addEventListener("click", function () {
  if (!toggle) {
    document.body.style.backgroundColor = "black";
    toggle = true;
    //njnjnjn
    document.getElementById("para").style.color = "white";
    mybuttn.style.marginLeft = "100px";
  } else {
    document.body.style.background = "white";
    toggle = false;
    document.getElementById("para").style.color = "black";
    mybuttn.style.marginLeft = "10px";
  }
});
//mypara.addEventListener("click", function()({
//document.body.style.color="white";//
