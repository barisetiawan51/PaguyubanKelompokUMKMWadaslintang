function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  const offset = document.querySelector('.navbar').offsetHeight;
  const position = element.offsetTop - offset;

  window.scrollTo({
    top: position,
    behavior: 'smooth'
  });
}
