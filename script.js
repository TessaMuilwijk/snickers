const switchTheme = document.querySelector("#switch");  // Bron: https://dev.to/daveyhert/how-to-implement-a-dark-mode-with-css-and-3-simple-lines-of-javascript-576

switchTheme.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});

const decreaseFontBtn = document.getElementById('decrease-font'); // Bron: https://chatgpt.com/
const increaseFontBtn = document.getElementById('increase-font');

let fontSize = 16; 

decreaseFontBtn.addEventListener('click', () => {
    if (fontSize > 12) { 
        fontSize -= 1;
        document.documentElement.style.fontSize = fontSize + 'px';
    }
});

increaseFontBtn.addEventListener('click', () => {
    if (fontSize < 24) {
        fontSize += 1;
        document.documentElement.style.fontSize = fontSize + 'px';
    }
});


document.addEventListener("DOMContentLoaded", function() { // Bron: https://dev.to/jslim/fading-up-sections-using-intersection-observer-3fhj
  const observerOptions = {
    root: null, 
    rootMargin: "0px",
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view'); 
        observer.unobserve(entry.target); 
      }
    });
  }, observerOptions);

  const favorites = document.querySelectorAll('.favorite');
  favorites.forEach(favorite => {
    observer.observe(favorite);
  });
});

const creamyImage = document.querySelector('.creamy img'); // Bron: https://chatgpt.com/

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!prefersReducedMotion) {
  window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    creamyImage.style.transform = `rotate(${scrollPosition / 2.5}deg)`; 
  });
}




document.addEventListener('DOMContentLoaded', () => {  // Bron: https://chatgpt.com/
  const carousel = document.querySelector('.carousel');
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');

  const itemWidth = carousel.querySelector('li').offsetWidth;
  const itemMarginRight = parseInt(getComputedStyle(carousel.querySelector('li')).marginRight);

  nextButton.addEventListener('click', () => {
      carousel.scrollBy({ left: itemWidth + itemMarginRight, behavior: 'smooth' });
  });

  prevButton.addEventListener('click', () => {
      carousel.scrollBy({ left: -(itemWidth + itemMarginRight), behavior: 'smooth' });
  });
});



document.addEventListener('DOMContentLoaded', () => {  // Bron: https://chatgpt.com/
  const video = document.querySelector('.home-video');
  const playPauseButton = document.querySelector('.play-pause-button');
  
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  if (prefersReducedMotion) {
      video.autoplay = false; 
      playPauseButton.textContent = '▶'; 
  } else {
      video.autoplay = true;
  }
  
  playPauseButton.addEventListener('click', () => {
      if (video.paused) {
          video.play();
          playPauseButton.textContent = '❚❚'; 
      } else {
          video.pause();
          playPauseButton.textContent = '▶'; 
      }
  });
  
});