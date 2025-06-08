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

// var icon = document.getElementById("toggleTheme");

// icon.addEventListener("click", ()=>{
//     document.body.classList.toggle("dark-theme");
// })

const root = document.documentElement;
    const toggleSwitch = document.getElementById('themeSwitch');

    function setInitialTheme() {
      const savedTheme = localStorage.getItem('theme');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const isDark = savedTheme === 'dark' || (!savedTheme && prefersDark);

      root.classList.toggle('dark', isDark);
      toggleSwitch.checked = isDark;
    }

    function showAnimationImage(imageSrc) {
      const img = document.createElement('img');
      img.src = imageSrc;
      img.className = 'theme-animation';
      document.body.appendChild(img);

      img.addEventListener('animationend', () => {
        img.remove();
      });
    }

    function toggleTheme() {
      const isDark = toggleSwitch.checked;
      root.classList.toggle('dark-theme', isDark);
      localStorage.setItem('theme', isDark ? 'dark' : 'light');

      const imageSrc = isDark ? './assets/moon.png' : './assets/sun.png';
      showAnimationImage(imageSrc);
    }

    toggleSwitch.addEventListener('change', toggleTheme);
    setInitialTheme();