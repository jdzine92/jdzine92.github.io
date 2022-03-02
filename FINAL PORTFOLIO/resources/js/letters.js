//MOVING LETTER SETTINGS FILE

var textWrapper = document.querySelector('.ml6 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.ml6 .letter',
    translateY: ["1.2em", 0],
    translateZ: 0,
    duration: 3000,
    delay: (el, i) => 100 * i
  }).add({
    targets: '.ml6',
    opacity: 0,
    duration: 2000,
    easing: "easeOutExpo",
    delay: Infinity
  });