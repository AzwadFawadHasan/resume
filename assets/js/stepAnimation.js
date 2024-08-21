document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll('#add-step-animation');
    elements.forEach(function(element) {
      Splitting({ target: element, by: 'chars' });
    });
  });


  gsap.registerPlugin(ScrollTrigger);

  let horizontalSectionCoding = document.querySelector('.horizontal-coding');
  
  gsap.to('.horizontal-coding', {
    x: () => horizontalSectionCoding.scrollWidth * -1,
    xPercent: 100,
    scrollTrigger: {
      trigger: '.horizontal-coding',
      start: 'center center',
      end: '+=2000px',
      pin: '#horizontal-scroll-coding',
      scrub: true,
      invalidateOnRefresh: true
    }
  });
  