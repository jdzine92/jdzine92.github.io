window.onscroll = function() {progressBar()}

//PROGRESS SCROLL BAR
const progressBar = () => {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("scrollBar").style.width = scrolled + "%";
};

//HUE ROTATOR FOR HEADER/PROFILE + BACK TO TOP BUTTON
document.querySelector("header").animate(
  {
    filter: ['hue-rotate(0deg)', 'hue-rotate(360deg)']
  },
  {
    duration: 60000,
    iterations: Infinity
  }
);

document.getElementById("backtotop").animate(
  {
    filter: ['hue-rotate(0deg)', 'hue-rotate(360deg)']
  },
  {
    duration: 60000,
    iterations: Infinity
  }
);

//EVENT LISTENERS FOR SCROLL AND RESIZE
window.addEventListener("scroll", function(){
    if(window.innerWidth > 600) scroller();
}); 

window.addEventListener("resize", function(){
    if(window.innerWidth < 600) collapse();
}); 

window.addEventListener("resize", function(){
    if(window.innerWidth > 600) expand();
});

//COLLAPSE HEADER WHEN SCROLLING
const scroller = () => {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.querySelector("header").style.height = "5rem";
    document.querySelector("h1").style.display = "none";
    document.querySelector("nav").style.top = "1rem";
    document.querySelector("main").style.marginTop = "5rem";
    document.getElementById("scrollContainer").style.top = "5rem";
    document.getElementById("scrollBar").style.top = "5rem";  
    
  } else {
    document.querySelector("header").style.height = "15rem";
    document.querySelector("h1").style.display = "inherit";
    document.querySelector("nav").style.top = "3rem";
    document.querySelector("main").style.marginTop = "15rem";
    document.getElementById("scrollContainer").style.top = "15rem";
    document.getElementById("scrollBar").style.top = "15rem";   
  } //end of else 
}; //end of scroller


//COLLAPSE AND EXPAND WINDOW FUNCTIONS (FOR RESIZE)
const collapse = () => {
  document.querySelector("header").style.height = "5rem";
  document.querySelector("h1").style.display = "none";
  document.querySelector("nav").style.top = "1.4rem";
  document.querySelector("main").style.marginTop = "5rem";
  document.getElementById("scrollContainer").style.top = "5rem";
  document.getElementById("scrollBar").style.top = "5rem";
};

const expand = () => {
  if (document.querySelector("header").style.height === "15rem") {
    document.querySelector("nav").style.top = "3rem";
  } else {
    document.querySelector("nav").style.top = "1rem";
  }
};


//BACK TO TOP ONCLICK FUNCTION
document.getElementById("backtotop").onclick = function() {backToTop()};

const backToTop = () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};




