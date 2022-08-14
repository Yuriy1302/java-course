const goToUpBtn = document.querySelector('.go-to-up');

window.addEventListener('scroll', trackScroll);
goToUpBtn.addEventListener('click', backToUp);

function trackScroll() {
  const scrolled = window.scrollY;
  const coords = document.documentElement.clientHeight;

  if (scrolled > coords) {
    goToUpBtn.classList.add('fade-in-up');
  }

  if (scrolled < coords) {
    goToUpBtn.classList.remove('fade-in-up');
  }
}

function backToUp() {
  console.log('up');
  if (window.scrollY === 0) return 
    window.scrollBy(0, -60);
    return setTimeout(backToUp, 5);
}
