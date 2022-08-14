const navLinks = document.querySelectorAll('.navbar-item');

navLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault();

    const href = link.getAttribute('href').substring(1);
    
    const topOffset = 0;
    const scrollTarget = document.getElementById(href);

    const elementPosition = scrollTarget.getBoundingClientRect().top;
    const offsetPosition = elementPosition - topOffset;

    window.scrollBy({
      top: offsetPosition,
      behavior: 'smooth'
    });
  });
});
