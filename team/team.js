
document.addEventListener("DOMContentLoaded", () => { 
    let image = document.querySelectorAll("#image");
    let topText = document.querySelectorAll("#topText");
    let bottomText = document.querySelectorAll("#bottomText");
    console.log(image)
    const normalAnim =   new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('imageAnimation'); 
          } else { }
        });
      }, {
        threshold: 0.8, // Trigger when 80% of the element is visible
      });
      const fadeAnim =   new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fadeText'); 
          } else { }
        });
      }, {
        threshold: 0.8, // Trigger when 80% of the element is visible
      });
      image.forEach(c => normalAnim.observe(c));
      topText.forEach(c => fadeAnim.observe(c));
      bottomText.forEach(c => fadeAnim.observe(c));
    //  [topText, bottomText].forEach(c => fadeAnim.observe(c));
      
});