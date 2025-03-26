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
     hiddenDiv.style.translate = "0px 100%"; 
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
    hiddenDiv.style.translate = "0px -100%";
    console.log("-100"); //debug
     // ready for next time show and hide
    divShow = false;
  }
 });


 // drag funtion 
    const container = document.getElementById("hiddenDiv");
    let activeElement = null;
    let offsetX = 0, offsetY = 0, isDragging = false;

    document.querySelectorAll(".draggable").forEach(letter => {
        letter.addEventListener("mousedown", (e) => {
            isDragging = true;
            activeElement = e.target;
            activeElement.style.cursor = "grabbing";

            let rect = activeElement.getBoundingClientRect();
            offsetX = e.clientX - rect.left;
            offsetY = e.clientY - rect.top;
        });
    });

    document.addEventListener("mousemove", (e) => {
        if (!isDragging || !activeElement) return;

        let containerRect = container.getBoundingClientRect();
        let newX = e.clientX - offsetX - containerRect.left;
        let newY = e.clientY - offsetY - containerRect.top;

        newX = Math.max(0, Math.min(newX, containerRect.width - activeElement.offsetWidth));
        newY = Math.max(0, Math.min(newY, containerRect.height - activeElement.offsetHeight));

        activeElement.style.left = newX + "px";
        activeElement.style.top = newY + "px";
    });

    document.addEventListener("mouseup", () => {
        if (activeElement) activeElement.style.cursor = "grab";
        isDragging = false;
        activeElement = null;
    });
