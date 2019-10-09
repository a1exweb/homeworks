let animateHTML = function() {
  let elems;
  let windowHeight;
  function init() {
      elems = document.querySelectorAll('.block_anim');
      windowHeight = window.innerHeight;
      addEventHandlers();
      checkPosition();
  };
  function addEventHandlers() {
      window.addEventListener('scroll', checkPosition);
      window.addEventListener('resize', init);
  };
  function checkPosition() {
      for (let i = 0; i < elems.length; i++) {
      let positionFromTop = elems[i].getBoundingClientRect().top;
          if (positionFromTop - windowHeight <= 0) {
              elems[i].className = elems[i].className.replace(
              'block_anim',
              'fadeInLeftBig'
              );
          }
      }
  }
  return {
      init: init
  };
 };
 animateHTML().init();