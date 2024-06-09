/* Slide 114 (#3) */

$(function(){
  var slideKey = 114;
  if(!window.swipers){window.swipers = {};}
  if(!window.swipers[slideKey]){window.swipers[slideKey] = [];}
  $('.swiper-'+slideKey).each(function(){
    var thisKey = window.swipers[slideKey].length;
    window.swipers[slideKey][thisKey] = 
      new Swiper(this, {
      slidesPerView: 1,
      spaceBetween: 30,
      navigation: {
        nextEl: this.querySelector('.swiper-114-next'),
        prevEl: this.querySelector('.swiper-114-prev'), 
      },
      breakpoints: {
        767: {
          slidesPerView: 2,
          spaceBetween: 60,
        },
        1240: {
          slidesPerView: 3,
          spaceBetween: 90,
        },
      }      
    });
  });
});

/* Slide 113 (#4) */

$(function(){
  var slideKey = 113;
  if(!window.swipers){window.swipers = {};}
  if(!window.swipers[slideKey]){window.swipers[slideKey] = [];}
  $('.swiper-'+slideKey).each(function(){
    var thisKey = window.swipers[slideKey].length;
    window.swipers[slideKey][thisKey] = 
      new Swiper(this, {
      slidesPerView: 'auto', 
      spaceBetween: 20,
      /*autoplay: {
      delay: 5000,
      disableOnInteraction: true, 
    }*/ 
    });
  });
});

/* Slide 110 (#6) */

$(function(){
  var slideKey = 110;
  if(!window.swipers){window.swipers = {};}
  if(!window.swipers[slideKey]){window.swipers[slideKey] = [];}
  $('.swiper-'+slideKey).each(function(){
    var thisKey = window.swipers[slideKey].length;
    window.swipers[slideKey][thisKey] = 
      new Swiper(this, {
      slidesPerView: 'auto',
      spaceBetween: 20,
      breakpoints: {
        436: {
          spaceBetween: 40,
        },
      }    
    });
  });
});

/* Slide 117 (#14) */

$(function(){
  var slideKey = 117;
  if(!window.swipers){window.swipers = {};}
  if(!window.swipers[slideKey]){window.swipers[slideKey] = [];}
  $('.swiper-'+slideKey).each(function(){
    var thisKey = window.swipers[slideKey].length;
    window.swipers[slideKey][thisKey] = 
      new Swiper(this, {
      slidesPerView: 'auto',
      spaceBetween: 30,
    });
  });
});