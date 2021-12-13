$(document).ready(function()  {
      /*------------------
          Preloader
      --------------------*/
      $(window).on('load', function () {
          $(".loader").fadeOut();
          $("#preloder").delay(400).fadeOut("fast");


      /*------------------
          Next id scroll
      --------------------*/
      $(".hero-text, .about-text").on("click","a", function (event) {
          event.preventDefault();
          var id  = $(this).attr('href'),
              top = $(id).offset().top;
          $('body,html').animate({scrollTop: top}, 2000);
      });

      $(".single-price-plan").on("click","a", function (event) {
          event.preventDefault();
          var id  = $(this).attr('href'),
              top = $(id).offset().top;
          $('body,html').animate({scrollTop: top}, 2000);
      });

      $(".workout-program").on("click","a", function (event) {
          event.preventDefault();
          var id  = $(this).attr('href'),
              top = $(id).offset().top;
          $('body,html').animate({scrollTop: top}, 2000);
      });
        /*------------------
            Gallery filter
        --------------------*/
        $('.gallery-controls ul li').on('click', function() {
            $('.gallery-controls ul li').removeClass('active');
            $(this).addClass('active');
        });
        if($('.gallery-filter').length > 0 ) {
            var containerEl = document.querySelector('.gallery-filter');
            var mixer = mixitup(containerEl);
        }

        $('.blog-gird').masonry({
			itemSelector: '.grid-item',
			columnWidth: '.grid-sizer',
		});

  });

    /*------------------
        Background Set
    --------------------*/
    $('.set-bg').each(function () {
        var bg = $(this).data('setbg');
        $(this).css({
          'background-image': 'url(' + bg + ')'
        });
    });

    /*------------------
		Navigation
	--------------------*/
    $(".mobile-menu").slicknav({
        prependTo: '#mobile-menu-wrap',
        allowParentLinks: true
    });

    /*------------------
		Menu Hover
	--------------------*/
    $(".header-section .nav-menu .mainmenu ul li").on('mousehover', function() {
        $(this).addClass('active');
    });
    $(".header-section .nav-menu .mainmenu ul li").on('mouseleave', function() {
        $('.header-section .nav-menu .mainmenu ul li').removeClass('active');
    });

    /*------------------
        Carousel Slider
    --------------------*/
    $(".hero-items").owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        items: 1,
        dots: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        navText: ['<i class="arrow_carrot-left"></i>', '<i class="arrow_carrot-right"></i>'],
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
    });


    /*------------------
        Magnific Popup
    --------------------*/
    $('.play-btn').magnificPopup({
        type: 'iframe'
    });

    $('.image-popup').magnificPopup({
        type: 'image'
    });

    $('.show-result-select').niceSelect();


    /*------------------
        Modal
    --------------------*/

   // $('#first_form').on('submit', function(e) {
   //   e.preventDefault(); //stop submit
   //   if ($('#myCheck').is(':checked')) {
   //      $('#msgModal').modal('show');
   //   }
   //   $('#first_form').trigger('reset');
   // });
   //

 //   $('#first_form').submit(function () {
 //     e.preventDefault();
 //    $('#first_form').trigger('reset');
 // });
    /*------------------
       Timetable Filter
    --------------------*/
    $('.timetable-controls ul li').on('click', function() {
        var tsfilter = $(this).data('tsfilter');
        $('.timetable-controls ul li').removeClass('active');
        $(this).addClass('active');

        if(tsfilter == 'all') {
            $('.classtime-table').removeClass('filtering');
            $('.ts-item').removeClass('show');
        } else {
            $('.classtime-table').addClass('filtering');
        }
        $('.ts-item').each(function(){
            $(this).removeClass('show');
            if($(this).data('tsmeta') == tsfilter) {
                $(this).addClass('show');
            }
        });
    });
  });

/*------------------
  Checkbox
--------------------*/


  $(document).ready(function() {
    let isOpen = false;
      $("input:checkbox").change(function() {
        isOpen = !isOpen;

        if (isOpen) {
            $(".price-plan").css("display", "none");
            $(".price-plan2").css("display", "block")
        } else {
            $(".price-plan2").css("display", "none")
            $(".price-plan").css("display", "block");
        }
      });

  })
