let hamburger = document.querySelector(".hamburger");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    document.querySelector(".go-up").style.right = "30px";
  } else {
    document.querySelector(".go-up").style.right = "-100px";
  }
}

document.querySelector(".go-up").addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("opened");
  document.querySelector(".layout-menu").classList.toggle("fullscreen");
  document
    .querySelector(".layout-content")
    .classList.toggle("content-fullscreen");
});

// [11:29] Aleksander Truss
