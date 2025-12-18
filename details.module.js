document.addEventListener("DOMContentLoaded", function () {
  const title = document.querySelector(".hero-title");
  const desc = document.querySelector(".hero-description");

  setTimeout(() => {
    title.style.opacity = "1";
    title.style.transform = "translateY(0)";
  }, 200);

  setTimeout(() => {
    desc.style.opacity = "1";
    desc.style.transform = "translateY(0)";
  }, 400);
});
