// ScrollTop_BTN


$(function() {

    goToTop(); //goToTop
    lightbox_open(); // 光箱開收
    calendar_open(); // 日曆開收
    fixed_menu(); //固定選單
    see_more(); //手機板 看更多
    active_tooltip(); // tool tip
    add_class_layout(); // 版型 
    adjustFontSize(); //字級大小
    activ_swiper(); //主圖
    loadHeader();
    loadFooter();
    loadNav();
    trafficHoverEffect();
    openImage();
    isShrink();




});
loadHeader = function() {
    $("header").load("../header.html");
}


loadFooter = function() {
    $("footer").load("../footer.html");
}


loadNav = function() {
    $("#nav").load("../nav.html");
}

function openImage() {
    $('.travel-itinerary-spots .spot').click(function() {
        var link = $(this).css('background-image').replace(/^url\(["']?/, '').replace(/["']?\)$/, '');;

        window.open(link);
    })



}

function isShrink() {
    $('#is-shrink').on("click", function() {
        $('.travel-itinerary-spots').toggle('slow');
    })

}

function trafficHoverEffect() {

    $('#travel-traffic .box').hover(
        function() {
            $(this).addClass('focus')
        },
        function() {
            $(this).removeClass('focus')
        })
    $('.flight_detail .flight').hover(function() {
        var flight_i = $(this).index();


        $(this).closest('.box').find('.flight').removeClass('hover');
        $(this).addClass('hover');
        $(this).closest('.box').find('.progress_bar .bar').removeClass('hover');

        $(this).closest('.box').find('.progress_bar .flying.bar').eq(flight_i).addClass('hover');
    });

}


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


function calendar_open() {
    $('.travel-calendar-open').click(function() {
        $('.travel-calendar-open').hide();
        $('.travel-calendar').fadeIn();
    });
    $('.travel-calendar-close-btn').click(function() {
        $('.travel-calendar').hide();
        $('.travel-calendar-open').fadeIn();
    });
}


function fixed_menu() {

    $(window).bind('scroll resize', function() {
        var $this = $(this);
        var $this_Top = $this.scrollTop();

        //當高度小於100時，關閉區塊 

        if ($this_Top < 850) { $('#travel-innerMenu-fixed').stop().animate({ top: "-150px" }); }
        if ($this_Top > 850) { $('#travel-innerMenu-fixed').stop().animate({ top: "0px" }); }
        if ($this_Top > 850) { $('.fixed-menu-1').addClass('active'); }
        if ($this_Top > 1200) {
            $('.fixed-menu-1').removeClass('active');
            $('.fixed-menu-2').addClass('active');
        }
        if ($this_Top > 1700) {
            $('.fixed-menu-2').removeClass('active');
            $('.fixed-menu-3').addClass('active');
        }
        if ($this_Top > 2500) {
            $('.fixed-menu-3').removeClass('active');
            $('.fixed-menu-4').addClass('active');
        }
        if ($this_Top > 3000) {
            $('.fixed-menu-4').removeClass('active');
            $('.fixed-menu-5').addClass('active');
        }
        if ($this_Top < 3000) {
            $('.fixed-menu-5').removeClass('active');
        }
        if ($this_Top < 2500) {
            $('.fixed-menu-4').removeClass('active');
        }
        if ($this_Top < 1700) {
            $('.fixed-menu-3').removeClass('active');
        }
        if ($this_Top < 1200) {
            $('.fixed-menu-2').removeClass('active');
        }
        if ($this_Top < 850) { $('.fixed-menu-1').removeClass('active'); }



    }).scroll();

}

function see_more() {
    $('.travelInformation-more-mobile>a').click(function() {
        $('.travelInformation').css('height', 'auto');
        $('.travelInformation-more-mobile').hide();
    });
    $('.travel-itinerary-day-more>a').click(function() {
        $(this).parent().parent().css('height', 'auto');
        $(this).parent().hide();
    });
}

function active_tooltip() {
    $('[data-toggle="tooltip"]').tooltip({

    });
}


function add_class_layout() {
    $('.travel-itinerary-day').each(function() {
        var day = $(this);
        var spot_box = day.find('.spot_box');
        var spots = spot_box.children();

        if (spots.length > 0) {
            var grid_num = spots.length;
            var spot_className = 'grid_' + grid_num;
            spot_box.addClass(spot_className);

        }

        spots.each(function() {

            var img_url = $(this).css('background-image');

            if (img_url == 'none' && $(this).find('img').length == 0) {
                $(this).addClass('only_word');

            }
        })
    })
}

function activ_swiper() {

    var swiper = new Swiper('.swiper-container', {
        autoplay: {
            delay: 3000,
        },
        speed: 1000,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: function(index, className) {
                var $slide = $('.swiper-slide')[index];
                // var $slide_img_url = $($slide).find('img').attr('src');
                var $slide_img_url = $($slide).find('.img_filter').attr('img-source');

                // var img =  $($slide),
                //     style = img.currentStyle || window.getComputedStyle(img, false),
                //     bi = style.backgroundImage.slice(4, -1).replace(/"/g, "");
                var thumbHTML = '<div class="img_filter ' + className + '"' + ' style="background-image:url(' + $slide_img_url + ')"></div>';

                return thumbHTML;

            },
        },
    });
}

function adjustFontSize() {
    //get inital font size
    getSize();
    var $target = $(".travelTitle,.introduction .spec .item .txt, .txt_box p,.txt_box .txt,.flight_detail span,.travel-itinerary-day,.travel-itinerary-title .title, .travel-itinerary-food span,.spot .location, .spot .description,.spot .other, .travel-optional .item , .item .title span:first-child, .travel-description,.travel-description ul, .travel-otherday .item .box, .schedule span");


    $("#up").on("click", function() {
        if ((size + 2) <= 24) {
            $target.css("font-size", "+=2");
            $target.css("line-height", "+=2px");

            $("#font-size").text(size += 2);
        }
    });

    $("#down").on("click", function() {
        if ((size - 2) >= 16) {
            $target.css("font-size", "-=2");
            $target.css("line-height", "-=2px");
            $("#font-size").text(size -= 2);
        }
    });

    function getSize() {
        size = $(".btn_box").css("font-size");
        size = parseInt(size, 10);
        $("#font-size").text(size);
    }
}