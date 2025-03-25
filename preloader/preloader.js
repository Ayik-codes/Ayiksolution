document.addEventListener("DOMContentLoaded", function () {
    let startScreen = document.getElementById("start-screen");
    let preloader = document.getElementById("preloader");
    let video = document.getElementById("preloader-video");
    let text = document.getElementById("text-animation");
    let mainContent = document.getElementById("main-content");

    // Show "Click to Start" screen first
    startScreen.style.display = "flex";
    video.style.display = "none"
    // When user clicks anywhere, start the video
    startScreen.addEventListener("click", function () {
        startScreen.style.display = "none"; // Hide start screen
        video.style.display = "flex"
        preloader.style.display = "flex"; // Show video preloader
        video.muted = false; // Unmute the video
        video.play(); // Play video
    }, { once: true }); // Ensures it runs only once

    // When the video ends, show text animation
    video.onended = function () {
        text.classList.remove("hidden");
        text.style.opacity = "1";

        // After text animation, apply zoom-out transition
        setTimeout(() => {
            preloader.classList.add("zoom-out");

            // After zoom-out animation, remove preloader and show homepage
            setTimeout(() => {
                preloader.style.display = "none";
                mainContent.style.display = "block";
            }, 1000);
        }, 2000); // 2 sec delay for text animation
    };
});
