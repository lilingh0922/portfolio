// ScrollTop_BTN


$(function() {
    lightbox_open()
    goToTop();
 loadNav();
});

function goToTop() {
    $('#topBTN').click(function() {
        var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
        $body.animate({
            scrollTop: 0
        }, 600);
        return false;
    });
    $(window).scroll(function() {
        var scrollVal = $(this).scrollTop();
        if (scrollVal > 200) {
            $('#topBTN').fadeIn();
        } else {
            $('#topBTN').fadeOut();
        };
    });
}

function lightbox_open() {

    $('.lightboxOpen-control').click(function() {
        var targetID = $(this).attr('target');
        var targetClass = '.lightboxOpen' + targetID;

        $(targetClass).fadeIn();
    });
    $('.lightboxClose').click(function(){
   
        $(this).closest('.lightboxOpen').fadeOut();
    })

}

 loadNav = function() {
      $("#nav").load("../nav.html",function(){
        $("a.nav-icon").click(function(){
          $("#nav .nav-inner").toggleClass("open");
          $(".page").toggleClass("open");
          $(".nav-icon").toggleClass("open");
          // e.preventdefault()
        })
      });
  }
 