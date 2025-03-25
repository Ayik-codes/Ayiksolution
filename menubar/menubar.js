let hiddenDiv = document.getElementById("hiddenDiv");
let menuBtn = document.getElementById("menuBtn");
let divShow = false;
 menuBtn.addEventListener("click", () => {
  if (divShow === false) {
     // button animation
        menuBtn.style.scale = "1.2"
       setTimeout(() => {
        menuBtn.style.scale ="1"
       }, 80)
    // 100vh to show menu
     hiddenDiv.style.translate = "0px 100vh"; 
     console.log("100") ;// debug
     // ready for next time show and hide 
     divShow = true ;
  } else {
       // button animation
       menuBtn.style.scale = "1.2"
       setTimeout(() => {
        menuBtn.style.scale ="1"
       }, 80)
      // -100vh to hide  menu
    hiddenDiv.style.translate = "0px -100vh";
    console.log("-100"); //debug
     // ready for next time show and hide
    divShow = false;
  }
 });
