$(function(){
  $('.slider').owlCarousel({
      loop:true,
      margin:10,
      nav:true,
      navText : ['<img src="img/portfolio/left-arrow.png" alt="Предыдущий">','<img src="img/portfolio/right-arrow.png" alt="Следующий">'],
      responsive:{
          0:{
              items:1
          },
          768:{
              items:2
          },
          1200:{
              items:3
          }
      }
  });
  $('.owl-nav').addClass('arrows portfolio__arrows');
});