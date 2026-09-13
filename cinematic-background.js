
(function () {
  const images = [
    "assets/backgrounds/cinema_01.png",
    "assets/backgrounds/cinema_02.png",
    "assets/backgrounds/cinema_03.png",
    "assets/backgrounds/cinema_04.png",
    "assets/backgrounds/cinema_05.png",
    "assets/backgrounds/cinema_06.png",
    "assets/backgrounds/cinema_07.png",
    "assets/backgrounds/cinema_08.png",
    "assets/backgrounds/cinema_09.png",
    "assets/backgrounds/cinema_10.png"
  ];

  const bg = document.getElementById("cinematic-background");
  if (!bg) return;

  images.forEach(src => {
    const img = new Image();
    img.src = src;
  });

  let index = 0;
  bg.style.backgroundImage = "url('" + images[0] + "')";

  setInterval(() => {
    index = (index + 1) % images.length;
    bg.style.opacity = "0.25";

    setTimeout(() => {
      bg.style.backgroundImage = "url('" + images[index] + "')";
      requestAnimationFrame(() => {
        bg.style.opacity = "1";
      });
    }, 700);
  }, 6000);
})();

/* v43.6 clean half star rendering applied */
