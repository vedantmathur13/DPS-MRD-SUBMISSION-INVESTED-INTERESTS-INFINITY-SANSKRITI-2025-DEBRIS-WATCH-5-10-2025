// document.querySelector('.contact-link').addEventListener('click', function(e) {
//   e.preventDefault();
//   document.querySelector('.section7').scrollIntoView({ behavior: 'smooth' });
// });

document.getElementById("earthVid").playbackRate = 0.5;

function unmuteVideo(vid) {
  vid.muted = true;
}

var vid = document.getElementById("thehra")

vid.onclick= function() {
  unmuteVideo(vid);
};

var crsr = document.querySelector(".cursor");
var blur = document.querySelector(".cursor-blur");

document.addEventListener("mousemove", function (dets) {
  // crsr.style.left = dets.x + "px";
  // crsr.style.top = dets.y + "px";
  blur.style.left = dets.x - 250 + "px";
  blur.style.top = dets.y - 250 + "px";
});

// NOW LETS ADD ANIMATION TO OUR CURSOR

function cursor() {
  let cursor = document.querySelector(".cursor");
  let body = document.querySelector("body");

  // NOW WE ARE GOING TO ADD AN EVENT LISTER ON OUR MOUSE

  body.addEventListener("mousemove", (e) => {
    gsap.to(cursor, {
      x: e.x + "px",
      y: e.y + "px",
    });
  });
}
cursor();

// ===============SECTION1 ANIMATION===========

function section1() {
  let tl = gsap.timeline();
  tl.from(".header", {
    y: -50,
    opacity: 0,
    duration: 1,
  });

  tl.from(".text-content h1, .text-content p, .text-content a, .text-content h2", {
    y: 100,
    opacity: 0,
    duration: 0.8,
  });
}
section1();

// =======================SECTION2 ANIMATIONS==================

function section2() {
  let sectionTwo = document.querySelector(".section2");
  let cursor = document.querySelector(".cursor");
  let cursorb4 = CSSRulePlugin.getRule(".cursor:before");
  let body = document.querySelector("body");

  // NOW WE WANT TO EXCUTE THIS CODE WHENEVER OUR MOUSE ENTER IN OUR SECTION2

  sectionTwo.addEventListener("mouseenter", () => {
    gsap.to(cursor, {
      height: "100px",
      width: "100px",
      innerHTML: "<i class='fa-solid fa-volume-high'></i>",
      fontSize: "25px",
      color: "black",
      margin: "20px",
      background: "white",
    });
    gsap.to(cursorb4, {
      opacity: 0,
    })

    // AND WE WANT OUR BODY COLOR TO CHANGE TO THIS

    gsap.to(body, {
      background: "#0f0f0f",
      color: "white",
    });
  });

  // NOW WE WANT TO EXCUTE THIS CODE WHENEVER OUR MOUSE LEAVE IN OUR SECTION2

  sectionTwo.addEventListener("mouseleave", () => {
    gsap.to(cursor, {
      height: "18px",
      width: "18px",
      margin: 0,
      innerHTML: "",
    });

    gsap.to(cursorb4, {
      opacity: 1,
    })

    // AND WE WANT OUR BODY COLOR TO CHANGE TO THIS

    gsap.to(body, {
      background: "white",
      color: "#0f0f0f",
    });
  });
}
section2();

// =================SECTION3 ANIMATION==============

function section3() {
  let cursor = document.querySelector(".cursor");
  let sectionThree = document.querySelector(".section3");

  // NOW WE WANT TO CHANGE OUR CURSOR TO BLACK WHEN IT ENTER TO SECTION3

  sectionThree.addEventListener("mouseenter", () => {
    gsap.to(cursor, {
      background: "#0f0f0f",
    });
  });
  
  sectionThree.addEventListener("mouseenter", () => {
    gsap.to(cursor, {
      background: "#0f0f0f",
      duration: 0.1,
    });
  });

  gsap.from(".section3 .three .right h1, .section3 .three .right h5", {
    y: 100,
    opacity: 0,
    stagger: 1,
    duration: 3,

    scrollTrigger: {
      trigger: ".section3 .three",
      start: "top 60%",
      end: "top 30%",
      scrub: 1,
    },
  });
}
section3();

// =======================SECTION4 ANIMATIONS=============

function section4() {
  let sectionFour = document.querySelector(".section4");
  let cursor = document.querySelector(".cursor");

  sectionFour.style.cursor = "default"

  sectionFour.addEventListener("mouseenter", () => {
    cursor.style.background = "#0f0f0f";

  });

  gsap.to(sectionFour, {
    background: "#0f0f0f",
    color: "white",

    scrollTrigger: {
      trigger: ".section4 .four .moving-text",
      start: "bottom center",
      end: "botttom center",
      scrub: 2,
      // markers: true,
    },
  });

  gsap.to(".services", {
    color: "white",
    scrollTrigger: {
      trigger: ".section4 .four .moving-text",
      start: "bottom center",
      end: "botttom center",
      scrub: 2,
      // markers: true,
    },
  });

  // FOR CHANGING TO OUR CURSOR COLOR TO WHITE WHEN BACKGROUND WILL TURN ITO BLACK

  sectionFour.addEventListener("mouseenter", () => {
    gsap.to(cursor, {
      background: "white",
      scrollTrigger: {
        trigger: ".section4 .four .moving-text",
        start: "bottom center",
        end: "bottom center",
        scrub: 0.1,
        // markers: true,
      },
    });
    gsap.to(cursorb4, {
      opacity: 0,
    })
  });

  // =======project======

  let parentEl = document.querySelector(".bg");
  let childEl = document.querySelectorAll(".first-project .first");
  let cursorb4 = CSSRulePlugin.getRule(".cursor:before");

  childEl.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      let ids = item.getAttribute("data-id");
      let bgEl = document.querySelector(`.id-${ids}`);
      // console.log(bgEl); HERE U CAN SEE WE ARE GETTING THE VIDEO THAT WE ARE SELECTING

      // NOW WE WANT TO DISPLAY THAT PARTICULAR VIDEO THAT WE ARE SELECTIONG

      parentEl.querySelectorAll("video").forEach((video) => {
        video.style.display = "none";
      });

      bgEl.style.display = "block"; //now u can see we are getting video according to our list that we have made in our html

      // NOW WE WANT OUR CURSOR TO INCREASE ITS SIZE WHEN IT ENTER TO THE RED DIV

      gsap.to(cursor, {
        height: "100px",
        width: "100px",
        duration: 0.1,
        innerHTML: "<P>Our Design</P>",
        fontSize: "15px",
        margin: "20px",
      });
      gsap.to(cursorb4, {
        opacity: 0,
      })
    });

    // NOW WE WANT IT TO COME BACK TO ITS NORAML POSITON ON MOUSE LEAVE

    item.addEventListener("mouseleave", () => {
      let ids = item.getAttribute("data-id");
      let bgEl = document.querySelector(`.id-${ids}`);

      parentEl.querySelectorAll("video").forEach((video) => {
        video.style.display = "none";
      });

      bgEl.style.display = "none";

      // NOW WE WANT OUR CURSOR TO CAME BACK TO ITS NORMAL SIZE WHEN IT COME OUT TO THE RED DIV

      gsap.to(cursor, {
        height: "18px",
        width: "18px",
        duration: 0.1,
        innerHTML: "",
        margin: 0,
      });
      gsap.to(cursorb4, {
        opacity: 1,
      })
    });
  });
}
section4();

// ===========================SECTION5 ANMATIONS============

function section5() {
  let sectionFive = document.querySelector(".section5");
  let cursor = document.querySelector(".cursor");

  // FOR CHANGING OUR CURSOR COLOR TO BLACK

  sectionFive.addEventListener("mouseenter", () => {
    gsap.to(cursor, {
      background: "#0f0f0f",
      duration: 0.1,
    });
  });

  gsap.from(".section5 .five .left h1, .section5 .five .left h5", {
    y: 100,
    opacity: 0,
    stagger: 1,
    duration: 3,

    scrollTrigger: {
      trigger: ".section5 .five",
      start: "top 60%",
      end: "top 30%",
      scrub: 1,
    },
  });
}
section5();

// ===========================MENU ANIMATIONS============

let parentElem = document.querySelector(".bg2");
let childElem = document.querySelectorAll(".item");

childElem.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    let ids = item.getAttribute("data-id");
    let bgEl = document.querySelector(`.id-${ids}`);
    // console.log(bgEl); HERE U CAN SEE WE ARE GETTING THE VIDEO THAT WE ARE SELECTING

    // NOW WE WANT TO DISPLAY THAT PARTICULAR VIDEO THAT WE ARE SELECTING

    parentElem.querySelectorAll("video").forEach((video) => {
      video.style.display = "none";
    });

    bgEl.style.display = "block"; //now u can see we are getting video according to our list that we have made in our html

    // NOW WE WANT OUR CURSOR TO INCREASE ITS SIZE WHEN IT ENTER TO THE RED DIV

    gsap.to(cursor, {
      height: "100px",
      width: "100px",
      duration: 0.1,
      innerHTML: "<P>Our Design</P>",
      fontSize: "15px",
      margin: "20px",
    });
    gsap.to(cursorb4, {
      opacity: 0,
    })
  });

  // NOW WE WANT IT TO COME BACK TO ITS NORMAL POSITON ON MOUSE LEAVE

  item.addEventListener("mouseleave", () => {
    let ids = item.getAttribute("data-id");
    let bgEl = document.querySelector(`.id-${ids}`);

    parentElem.querySelectorAll("video").forEach((video) => {
      video.style.display = "none";
    });

    bgEl.style.display = "none";

    // NOW WE WANT OUR CURSOR TO CAME BACK TO ITS NORMAL SIZE WHEN IT COME OUT TO THE RED DIV

    gsap.to(cursor, {
      height: "18px",
      width: "18px",
      duration: 0.01,
      innerHTML: "",
      margin: 0,
    });
    gsap.to(cursorb4, {
      opacity: 1,
    })
  });
});

section4();

// =========================SECTION7 ANIMATIONS-====================

function section7() {
  let cursor = document.querySelector(".cursor");
  let body = document.querySelector("body");
  let sectionSeven = document.querySelector(".section7");

  gsap.to(body, {
    background: "#0f0f0f",
    color: "white",
    scrollTrigger: {
      trigger: ".section6 .right",
      start: "bottom 60%",
      end: "bottom 40%",
      scrub: 1,
    },
  });

  // LET CHANGE OUR CURSOR TO WHITE WHEN BACKGROUND IS BLACK

  sectionSeven.addEventListener("mouseenter", () => {
    gsap.to(cursor, {
      background: "white",
      duration: 0.1,
      scrollTrigger: {
        trigger: ".section6 .right",
        start: "bottom 60%",
        end: "bottom 40%",
        scrub: 1,
      },
    });
  });

  // LET CHANGE OUR CURSOR TO black WHEN BACKGROUND IS white
  sectionSeven.addEventListener("mouseleave", () => {
    gsap.to(cursor, {
      background: "black",
      duration: 0.1,
      scrollTrigger: {
        trigger: ".section6 .right",
        start: "bottom 60%",
        end: "bottom 40%",
        scrub: 1,
      },
    });
  });
}
section7();

// document.querySelector('.banner .item').addEventListener('mouseenter', function() {
//   var video = document.getElementById('hoverVideo');
//   video.currentTime = 0;
//   video.play();
// });

// document.querySelector('.banner .item').addEventListener('mouseleave', function() {
//   var video = document.getElementById('hoverVideo');
//   video.pause();
// });

// var TrandingSlider = new Swiper('.tranding-slider', {
//   effect: 'coverflow',
//   grabCursor: true,
//   centeredSlides: true,
//   loop: true,
//   slidesPerView: 'auto',
//   coverflowEffect: {
//     rotate: 0,
//     stretch: 0,
//     depth: 100,
//     modifier: 2.5,
//   },
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//   },
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   }
// });

//ANIMATION TO MENU


function navbar() {
  let dropdowns = document.querySelectorAll('.dropdown');
  dropdowns.forEach(dropdown => {
    let select = dropdown.querySelector('.select')
    let caret = dropdown.querySelector('.caret')
    let menu = dropdown.querySelector('.dropmenu')
    let options = dropdown.querySelector('.menu li')
    let selected = dropdown.querySelector('.selected')

    select.addEventListener('click', () => {
      // select.classList.toggle('select-clicked');
      // caret.classList.toggle('caret-rotate');
      menu.classList.toggle('menu-open');
    });

    options.forEach(option => {
      option.addEventListener('click', () => {
        selected.innerText = option.innerText;
        // select.classList.remove('select-clicked');
        // caret.classList.remove('caret-rotate');
        menu.classList.remove('menu-open');
        options.forEach(option => {
          option.classList.remove('activemenu');
        });
        option.classList.add('activemenu');
      });
    });
  });
}
navbar();