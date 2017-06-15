$(document).ready(function(){
    // animation scroll
    $(window).scroll(function(){
      var scrollY = $(this).scrollTop();
      var heightPart1 = $("#part1").offset().top;
      var heightPart2 = $("#part2").offset().top;
      var heightPart3 = $("#part3").offset().top;
      var recently = $(".recently").offset().top;
      if(scrollY >= (heightPart1 - 630)){
        $("#part1 .img").addClass('animateLeft');
        $("#part1 .text").addClass('animateRight');
      }
      if(scrollY >= (heightPart2 - 630)){
        $("#part2 .text").addClass('animateLeft');
        $("#part2 .img").addClass('animateRight');
      }
      if(scrollY >= (heightPart3 - 630)){
        $("#part3 .img").addClass('animateLeft');
        $("#part3 .text").addClass('animateRight');
      }
      if(scrollY >= (recently - 630)){
        $(".row2 img").addClass('animateBottom');
      }
    });
    // slider
    var owl = $('.owl-carousel');
    owl.owlCarousel({
      items: 1,
      loop: true,
      margin: 10,
      nav: true,
      dots: true,
      lazyLoad: true,
      autoplay: true,
      autoplayTimeout:4000,
      smartSpeed: 750,
    });
    // click more
    $(".more p").click(() => {
      var heightScroll = $(".space").offset().top;
       $("body").animate({
         scrollTop: heightScroll
       },1200);
    });
    // change content => show content
    $("#showImage").css({'display' : 'none'});
    $("#menu a").click((e) => {
      e.preventDefault();
    })
    $("#showProduct").click(() => {
      $("#changeContent").css({'transform' : 'translateX(100%)'});
      setTimeout(() => {
          $("#changeContent").css({
            'display' : 'none',
            'transform' : 'translateX(0)'
          });
          $("#showImage").css({'display' : 'block'});
      },500);
    });
    // change content => show images of shop
    $("#showShop").click(() => {
      $("#showImage").css({'transform' : 'translateX(-100%)'});
      setTimeout(() => {
          $("#showImage").css({
            'display' : 'none',
            'transform' : 'translateX(0)'
          });
          $("#changeContent").css({'display' : 'block'});
      },500);
    });
    // open modal
    $('.modal_images img').click(function() {
        $('.modal').css({'display' : 'block'});
        $("body").css({'overflow-y' : 'hidden'});
        $(".modal-content").attr('src',this.src);
    });
    // close modal
    $(".close").click(function() {
      $('.modal-content').addClass('animateOut');
      setTimeout(() => {
        $('.modal').css({'display' : 'none'});
        $("body").css({'overflow-y' : 'auto'});
        $('.modal-content').removeClass('animateOut');
      },350);
    });
})
