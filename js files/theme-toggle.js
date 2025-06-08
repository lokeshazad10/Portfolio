const root = document.documentElement;
    const toggleSwitch = document.getElementById('themeSwitch');

    function setInitialTheme() {
      const savedTheme = localStorage.getItem('theme');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const isDark = savedTheme === 'dark' || (!savedTheme && prefersDark);

      root.classList.toggle('dark-theme', isDark);
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