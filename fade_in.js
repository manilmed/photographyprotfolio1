document.addEventListener("DOMContentLoaded", function () {
  // 1. Rendre le corps visible
  document.body.classList.add("visible");

  // 2. Cibler UNIQUEMENT les images de la galerie (pour ne pas casser Fancybox)
  const photos = document.querySelectorAll("section img");
  
  let delay = 0;
  photos.forEach((photo) => {
    setTimeout(() => {
      // On utilise la classe .visible définie dans votre <style> HTML
      photo.classList.add("visible");
    }, delay);
    delay += 100; // Effet d'apparition en cascade
  });
});
