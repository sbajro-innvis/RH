/* HomePage */

/* Hamburger Menu Bar */
function initHamburger() {
  const hamburger = document.getElementById("hamburger");
  const menu = document.getElementById("overlay");
  const js_content_blur = document.getElementById("js_content_blur");
  let open = false;

  function change() {
    if (!open) {
      hamburger.classList.add("open");
      menu.classList.add("menu");
      js_content_blur.style.filter = "blur(6px)";
      document.body.style.overflow = "auto";
    } else {
      hamburger.classList.remove("open");
      overlay.classList.add("hidden");
      menu.classList.remove("menu");
      js_content_blur.style.filter = "none";
      document.body.style.overflow = "auto";
    }
    open = !open;
  }

  hamburger.addEventListener("click", change);
  menu.addEventListener("click", change);
};

initHamburger();


/* h1 animation  */
$('h1 ').hide().slideDown(1000);
