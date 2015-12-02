$(document).ready(function() {
  //global variables
  var CAROUSEL_BOUND_LEFT = -3840;
  var CAROUSEL_BOUND_RIGHT = 0;
  var CAROUSEL_ITEM_WIDTH = 960;


  //Implement the showing and hiding of the sidebar when the user clicks on #sidebar-button here:
  $("#sidebar-button").click(function() {
    if ($(".sidebar-container").hasClass("sidebar-active")) {
      $('body').removeClass('no-scroll');
      $("#sidebar-button").removeClass("button-active");
      $(".sidebar-container").removeClass("sidebar-active");
      $(".page-wrapper").removeClass("wrapper-active");
    } else {
      $("#sidebar-button").addClass("button-active");
      $(".sidebar-container").addClass("sidebar-active");
      $(".page-wrapper").addClass("wrapper-active");
      setTimeout(function() {
        $('body').addClass('no-scroll');
      }, 300);
    }
  })


  //Implement the hiding of the sidebar when the user clicks on the page wrapper here:
  $(".page-wrapper").click(function() {
    if ($(".sidebar-container").hasClass("sidebar-active")) {
      $('body').removeClass('no-scroll');
      $("#sidebar-button").removeClass("button-active");
      $(".sidebar-container").removeClass("sidebar-active");
      $(".page-wrapper").removeClass("wrapper-active");
    }
  })


  //Implement the "slide to left" when the user clicks on #carousel-next here
  $("#carousel-next").click(function() {
    var pos = parseInt($('#carousel').css('margin-left').replace("px", ""));
    if (pos == CAROUSEL_BOUND_LEFT) {
      return false;
    }
    $("#carousel").css("margin-left", pos - CAROUSEL_ITEM_WIDTH);
  })

  //Implement the "slide to right" when the user clicks on #carousel-prev here
  $("#carousel-prev").click(function() {
    var pos = parseInt($('#carousel').css('margin-left').replace("px", ""));
    if (pos == CAROUSEL_BOUND_RIGHT) {
      return false;
    }
    $("#carousel").css("margin-left", pos + CAROUSEL_ITEM_WIDTH);
  })


  // Implement a "smooth scroll" when the user clicks on the sidebar links here
  $("#home-button").click(function() {
    $('body').removeClass('no-scroll');
    $('html, body').animate({
      scrollTop: $("body").offset().top
    }, 1000);
    setTimeout(function() {
      $("#sidebar-button").removeClass("button-active");
      $(".sidebar-container").removeClass("sidebar-active");
      $(".page-wrapper").removeClass("wrapper-active");
    }, 300);
    return false;
  })

  $("#about-button").click(function() {
    $('body').removeClass('no-scroll');
    $('html, body').animate({
      scrollTop: $("#about-section").offset().top
    }, 1000);
    setTimeout(function() {
      $("#sidebar-button").removeClass("button-active");
      $(".sidebar-container").removeClass("sidebar-active");
      $(".page-wrapper").removeClass("wrapper-active");
    }, 300);
    return false;
  })

  $("#photos-button").click(function() {
    $('body').removeClass('no-scroll');
    $('html, body').animate({
      scrollTop: $("#carousel-section").offset().top
    }, 1000);
    setTimeout(function() {
      $("#sidebar-button").removeClass("button-active");
      $(".sidebar-container").removeClass("sidebar-active");
      $(".page-wrapper").removeClass("wrapper-active");
    }, 300);
    return false;
  })

  $("#video-button").click(function() {
    $('body').removeClass('no-scroll');
    $('html, body').animate({
      scrollTop: $("#percussion-section").offset().top
    }, 1000);
    setTimeout(function() {
      $("#sidebar-button").removeClass("button-active");
      $(".sidebar-container").removeClass("sidebar-active");
      $(".page-wrapper").removeClass("wrapper-active");
    }, 300);
    return false;
  })



});
