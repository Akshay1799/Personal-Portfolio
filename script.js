const toggleTheme = document.getElementById('toggle-mode');

let isDarkMode = false;
toggleTheme.addEventListener('click',()=>{
    if (isDarkMode) {
        document.body.style.background = 'white'; 
        document.body.style.color = 'black'; 
    } else {
        document.body.style.background = 'black';
        document.body.style.color = 'white';
    }
    isDarkMode = !isDarkMode;
})