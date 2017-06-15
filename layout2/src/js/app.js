import '../css/app.scss';
import 'owl.carousel/dist/owl.carousel.min.js';
import 'materialize-css/dist/js/materialize.min.js';
console.log('%cDừng lại!', 'color: red; font-size: 50px; text-shadow: 1px 1px 5px #000;');
console.log('%cCó vẻ như bạn đang cố tình muốn xâm hại layout của Hiệp !', 'color: #444; font-size: 25px;');
console.log('%cTruy cập https://www.facebook.com/profile.php?id=100008694313581 để biết nói chuyện với tôi.', 'color: #444; font-size: 25px;');
$(document).ready(function(){
  if (window.addEventListener) window.addEventListener('DOMMouseScroll', wheel, false);
  window.onmousewheel = document.onmousewheel = wheel;
  function wheel(event) {
    var delta = 0;
    if (event.wheelDelta) delta = event.wheelDelta / 120;
    else if (event.detail) delta = -event.detail / 3;

    handle(delta);
    if (event.preventDefault) event.preventDefault();
    event.returnValue = false;
  }
  var goUp = true;
  var end = null;
  var interval = null;

  function handle(delta) {
    var animationInterval = 10;
    var scrollSpeed = 10;
    if (end == null) {
          end = $(window).scrollTop();
    }
      end -= 20 * delta;
      goUp = delta > 0;
      if (interval == null) {
            interval = setInterval(function () {
              var scrollTop = $(window).scrollTop();
              var step = Math.round((end - scrollTop) / scrollSpeed);
              if (scrollTop <= 0 ||
                  scrollTop >= $(window).prop("scrollHeight") - $(window).height() ||
                  goUp && step > -1 ||
                  !goUp && step < 1 ) {
                clearInterval(interval);
                interval = null;
                end = null;
              }
              $(window).scrollTop(scrollTop + step );
            }, animationInterval);
      }
  }
   $('.materialboxed').materialbox();
  // slider
  var owl = $('.owl-carousel');
  owl.owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    dots: true,
    lazyLoad: true,
    // autoplay: true,
    autoplayTimeout:4000,
    smartSpeed: 750,
  });
  ////////////
  $(".layout1").hide();
  $("#layout2").click(function(){
      $(".layout1").fadeOut();
      $(".layout2").fadeIn();
  });
  $("#layout1").click(function(){
      $(".layout1").fadeIn();
      $(".layout2").fadeOut();
  });
});
