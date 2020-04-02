$(document).ready(function($){
	"use strict";

	// WOW Js Active
	new WOW().init();

	// ---- Active
    $(".owl").owlCarousel();
    // Owl Next Privew Change
    //$( ".owl-prev").html('<i class="fa screenshort-arow fa-chevron-left"></i>');
    //$( ".owl-next").html('<i class="fa screenshort-arow fa-chevron-right"></i>');

}(jQuery));

/*--------Animated text--------*/

$(function () {
    
    // function([string1, string2],target id,[color1,color2])    
 consoleText(['Web Developer', 'Web Designer', 'Graphics Designer'], 'home-text',['white','white','white']);

function consoleText(words, id, colors) {
  if (colors === undefined) colors = ['#fff'];
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id)
  target.setAttribute('style', 'color:' + colors[0])
  window.setInterval(function() {

    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function() {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 120)
  window.setInterval(function() {
    if (visible === true) {
      con.className = 'console-underscore hidden'
      visible = false;

    } else {
      con.className = 'console-underscore'

      visible = true;
    }
  }, 400)
}
    
});




/*==================================
            team
====================================*/


$(document).ready(function () {
  $("#team-right").owlCarousel({
      items: 2,
      autoplay: true,
      smartSpeed: 700,
      loop: true,
      dots: false,
      nav: true,
      navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
      responsive: {
          // breakpoint from 0 up
          0: {
              items: 1
          },
          // breakpoint from 480 up
          480: {
              items: 2
          }
      }

  });
});



/*==================================
          progress bar
====================================*/

$(function () {
  $("#progressbar-element").waypoint(function () {
      $(function () {
          $(".progress-bar").each(function () {
              $(this).animate({
                  width: $(this).attr("aria-valuenow") + "%"
              });
          },2000);
      });
      this.destroy();
  }, {
      offset: "bottom-in-view"
  });
});




/*smooth scrolling*/

$(function () {
  $("a.smooth-scroll").click(function (event) {
      event.preventDefault();

      var section_id = $(this).attr("href");


      $("html, body").animate({
          scrollTop: $(section_id).offset().top - 60
      }, 1250, "easeInOutExpo");

  });
});

/*==================================
            protfolio
====================================*/

$(window).on('load', function () {

  var $projects = $('#isotope-container');

  $projects.isotope({
      itemSelector: '.item',
      layoutMode: 'fitRows'
  });


  //filter items on button click
  $('#isotope-filter').on('click', 'button', function () {

      //get filter value
      var sabbir = $(this).attr('data-filter');

      //filter protfolio
      $projects.isotope({
          filter: sabbir,
      });

      //active button
      $('#isotope-filter').find('.active').removeClass('active');
      $(this).addClass('active');

  });
});


/*==================================
            magnifier
====================================*/

$(function () {
  $('#portfolio-item').magnificPopup({
      delegate: 'a', // child items selector, by clicking on it popup will open
      type: 'image',
      gallery: {
          enabled: true
      }
  });
});


/*==================================
            stats
====================================*/
$(function () {
  $('.counter').counterUp({
      delay: 10,
      time: 1000
  });
});


