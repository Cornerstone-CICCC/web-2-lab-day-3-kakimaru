gsap.registerPlugin(ScrollTrigger);

// YOUR CODE HERE
let section1Tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".section1",
    // markers: true,
    start: "top center",
    end: "bottom",
  },
});

section1Tl
  .from(".content h1 span:first-child", {
    x: "-100vw",
    duration: 1,
  })
  .from(
    ".content h1 span:last-child",
    {
      x: "100vw",
      duration: 1,
    },
    "<"
  )
  .from(".content p", {
    opacity: 0,
    rotate: 45,
    transformOrigin: "0% 0%",
  })
  .from(".content img", {
    y: "100vh",
  });


let section2Tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".section2",
    start: "top center",
    end: 'bottom center',
    markers: true,
    toggleActions: "play none reverse reverse",
  },
});

section2Tl
  .from(".section2 h2 span:first-child", {
    y: "-100vh",
  })
  .from(
    ".section2 h2 span:last-child",
    {
      y: "-100vh",
    },
    "-=.2"
  )
  .from(".section2 p", {
    opacity: 0,
    rotationY: 90,
    duration: 1,
  });

// section3, section4
const wrap = document.querySelector(".horizontal-sections");
const items = document.querySelectorAll(".horizontal-sections section");

const sectionWidth = items[0].offsetWidth;
const num = items.length;

gsap.to(items, {
  xPercent: -100 * (num - 1),
  ease: "none",
  scrollTrigger: {
    trigger: wrap,
    start: "top",
    end: "bottom",
    pin: true,
    scrub: true,
  },
});

let section3Tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".section3",
    // markers: true,
    start: "top center",
    end: "bottom center",
    toggleActions: "play none reverse reverse",
  },
});

section3Tl
  .from(".section3 h2", {
    scale: 4,
    opacity: 0,
    x: "-100vw",
    duration: 0.2,
  })
  .to(".section3 span", {
    backgroundColor: "white",
    color: "gray",
  })
  .from(".section3 span", {
    y: "100vh",
    stagger: 0.2,
  });

// section4
let section4Tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".section4",
    start: "left ",
    end: "right center",
    toggleActions: "play none reverse reverse",
  }, 
});

section4Tl.from(".portfolio-item", {
  x: "100vw",
  stagger: .5,
  duration: 2,
  delay: .5,
});

// section 5
const spanWrapText = (text) => {
  const characters = text.split("").map(char => char === ' ' ? '&nbsp;' : char)
  const spans = characters.map((char) => `<span>${char}</span>`);
  return spans.join("");
};

const h2Element = document.querySelector(".section5 h2");
const contactTitle = spanWrapText(h2Element.textContent);

h2Element.innerHTML = contactTitle;

let section5Tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".section5",
    // markers: true,
    start: "top",
    end: "bottom",
    scrub: true,
    pin: true,
  },
});

section5Tl
  .from(".section5 h2 span", {
    opacity: 0,
    y: "-100vh",
    stagger: 0.5,
  })
  .from(".section5 p", {
    opacity: 0,
    y: "80px",
  })
  .from(".contact-btn", {
    scale: 0,
  })
  .to('.section5', {
    backgroundColor: 'black'
  })
  .from(".section5", {
    backgroundPosition: "200% 90%",
  }, '<')
