// const scroll = new LocomotiveScroll({
//   el: document.querySelector('#main'),
//   smooth: true
// });

//hover images
function page3animation() {
  var elemC = document.querySelector("#elem-container");
  var fix = document.querySelector("#fixed-image");

  elemC.addEventListener("mouseenter", function () {
    fix.style.display = "block";

  });
  elemC.addEventListener("mouseleave", function () {
    fix.style.display = "none";
  });

  var elems = document.querySelectorAll(".elem");
  elems.forEach(function (e) {
    e.addEventListener("mouseenter", function () {
      var image = e.getAttribute("data-image");
      fix.style.backgroundImage = `url(${image})`;
    })
});
}

//elem images in a=max-width:600px
function elem600px() {
  var elemC = document.querySelector("#elem-container");
  var elems = document.querySelectorAll(".elem");
  var elemImages = document.querySelectorAll(".elem-images")
  elems.forEach(function (e,index) {
    
  var elemImagesUrl = e.getAttribute("data-image")
  elemImages[index].style.backgroundImage = `url(${elemImagesUrl})`
    }
  );
}

// divider images
function divider() {
  var rightC = document.getElementById("divider-right");
  var headings = document.querySelectorAll("#divider-left h1");
  var paragraph = document.querySelector("#divider-left p");
  headings.forEach(function (e) {
    e.addEventListener("click", function () {
      console.log("clicked");
      var moveImage = e.getAttribute("data-move-image");
      rightC.style.backgroundImage = `url(${moveImage})`;

      headings.forEach(function (a) {
        a.style.color = "#504A45";
        a.style.borderLeft = "3px solid #504A45"
      });
      e.style.color = "white";
      e.style.borderLeft = "3px solid orangered"
      var text = e.getAttribute("data-text");
      paragraph.innerHTML = `${text}`;
    });
  });
}

function swiperAnimation() {
  var slidesPerViewSetting = window.matchMedia('(max-width: 600px)').matches ? 1.5 : 3;

  var swiper = new Swiper(".mySwiper", {
    cssMode: true,
    slidesPerView: slidesPerViewSetting,
    spaceBetween: 30,
    freeMode: true,
    mousewheel: true,
    keyboard: true,
  });
}

function menuAnimation() {

    var menu = document.querySelector(".menu")
    var full = document.querySelector("#full-scr")
    var navimg = document.querySelector("nav img")
    
    var flag = 0
    menu.addEventListener("click", function () {
        if (flag == 0) {
            full.style.top = 0
            navimg.style.opacity = 0
            flag = 1
        } else {
            full.style.top = "-100%"
            navimg.style.opacity = 1
            flag = 0
        }
    })
}

function loaderAnimation() {
  var loader = document.querySelector("#loader")
  setTimeout(function () {
      loader.style.top = "-100%"
  }, 4200)
}

function handleMediaQueryChange(event) {
  if(!event.matches){
    page3animation()
  }
  swiperAnimation()
  elem600px();
}

const mediaQueryList = window.matchMedia('(max-width:600px)')
mediaQueryList.addEventListener("change",handleMediaQueryChange)


handleMediaQueryChange(mediaQueryList)

divider();
menuAnimation()
loaderAnimation()