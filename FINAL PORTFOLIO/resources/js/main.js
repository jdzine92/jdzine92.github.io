window.onscroll = function () {
  progressBar();
};

//PROGRESS SCROLL BAR
const progressBar = () => {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("scrollBar").style.width = scrolled + "%";
};

//HUE ROTATOR FOR PROGRESS BAR + HEADER/PROFILE + BACK TO TOP BUTTON
document.getElementById("hcolour").animate(
  {
    filter: ["hue-rotate(0deg)", "hue-rotate(360deg)"],
  },
  {
    duration: 60000,
    iterations: Infinity,
  }
);

document.getElementById("backtotop").animate(
  {
    filter: ["hue-rotate(0deg)", "hue-rotate(360deg)"],
  },
  {
    duration: 60000,
    iterations: Infinity,
  }
);

//EVENT LISTENERS FOR SCROLL AND RESIZE
window.addEventListener("scroll", function () {
  if (window.innerWidth > 600) scroller();
});

window.addEventListener("resize", function () {
  if (window.innerWidth < 600) collapse();
});

window.addEventListener("resize", function () {
  if (window.innerWidth > 600) expand();
});

//BACK TO TOP ONCLICK FUNCTION
document.getElementById("backtotop").onclick = function () {
  backToTop();
};

const backToTop = () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};
