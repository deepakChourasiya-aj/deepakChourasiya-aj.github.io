var sidemenu = document.getElementById("sidemenu");

function openmenu(){
  sidemenu.style.right = "0";
}
function closemenu(){
  sidemenu.style.right = "-200px";
}

// function open_in_newtab(){
//   window.open("https://drive.google.com/file/d/1ZvaB_-bSCtWWAGExGhZ51e9v1n0b9ixG/view?usp=sharing");
// }

// let resumebtn1 = document.getElementById("resume-button-1").addEventListener("click",()=>{
//   window.location.assign("https://drive.google.com/file/d/1ZvaB_-bSCtWWAGExGhZ51e9v1n0b9ixG/view?usp=sharing")
// })
function homePage(){
  window.location.href='#home'
}