// const toggleButton = document.getElementById('toggleTheme');
// const image = document.getElementById('theme-png');
// // const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

// function setTheme() {
//       if(image.src.includes('./assets/moon.png')){
//         image.src = './assets/sun.png';
//       }else{
//         image.src = './assets/moon.png';
//       }
//     }

// // function toggleTheme() {
// //       const currentTheme = document.body.classList.contains('dark') ? 'dark' : 'light';
// //       const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
// //       setTheme(newTheme);
// //     }

// //     // Set initial theme
// const savedTheme = localStorage.getItem('theme');
//     if (savedTheme) {
//       setTheme(savedTheme);
//     } else {
//       setTheme(prefersDark ? 'dark' : 'light');
//     }a
// // 

var icon = document.getElementById("toggleTheme");

icon.addEventListener("click", ()=>{
    document.body.classList.toggle("dark-theme");
})