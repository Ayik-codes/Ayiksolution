let progress = 0
let progressText = document.getElementById('progress-value')
let parentLoadingDiv = document.getElementById('parent-loader-div')
function updateProgress() {
    if (progress < 100) {
        progress += Math.floor(Math.random() * 4) + 4
        if (progress > 100) progress = 100
        progressText.innerText = progress
        setTimeout(updateProgress, 100)
        if (progress == 100) {
            parentLoadingDiv.style.translate = '0% -110%'
        }
    }
}
updateProgress()
// nav Animation
function toggleMenu() {
    const menu = document.getElementById('navMenu')
    if (menu.classList.contains('active')) {
        menu.classList.add('closing')
        setTimeout(() => {
            menu.classList.remove('active', 'closing')
        }, 300)
    } else {
        menu.classList.add('active')
    }
}
