document.addEventListener('DOMContentLoaded', function () {
  let startScreen = document.getElementById('start-screen')
  let preloader = document.getElementById('preloader')
  let video = document.getElementById('preloader-video')
  let text = document.getElementById('text-animation')
  let mainContent = document.getElementById('main-content')
  let skipDiv = document.getElementById('skipDiv')
  let skipDivBtn = document.getElementById('skipDivBtn')
  let h1TextBlack = document.querySelectorAll("#h1TextBlack")
  let h1TextWhite = document.querySelectorAll("#h1TextWhite")
  skipDivBtn.addEventListener('click', () => {
    video.style.display = "none";
    skipDivBtn.style.display = "none"
    video.onended()
  })
  // Show "Click to Start" screen first
  startScreen.style.display = 'flex'
  video.style.display = 'none'
  skipDiv.style.display = 'none'
  // When user clicks anywhere, start the video
  startScreen.addEventListener(
    'click',
    function () {
      startScreen.style.display = 'none' // Hide start screen
      video.style.display = 'flex' 
      skipDiv.style.display = 'block'
      preloader.style.display = 'flex' // Show video preloader
      video.muted = false // Unmute the video
      video.play() // Play video
    },
    { once: true }
  ) // Ensures it runs only once

  // When the video ends, show text animation
  video.onended = function () {
    // Make the text visible first
    text.classList.remove('hidden');
    text.style.opacity = '1';
  
    setTimeout(() => {
      h1TextBlack.forEach((b) => {
        b.style.transform = "translateY(-0vh)"; // Trigger animation
      });
      h1TextWhite.forEach((w) => {
        w.style.transform = "translateY(0vh)"; // Trigger animation
      });
  
      // After text animation, apply zoom-out transition
      setTimeout(() => {
        preloader.classList.add('zoom-out');
  
        // After zoom-out animation, remove preloader and show homepage
        setTimeout(() => {
          preloader.style.display = 'none';
          mainContent.style.display = 'block';
        }, 1000);
      }, 2000); // 2 sec delay for text animation
    }, 100);
  };
  
})

// skip button funtion
