/*----header----*/
$('.btn-menu').click(function() {
    $('body').toggleClass('show-menu');
});
$('.nav-mobile__list li .link').click(function() {
    $('.btn-menu__mobile').removeClass('active');
});
$('.nav-mobile__list li .link').click(function() {
    $('body').removeClass('show-menu');
});
$('.show-sub').click(function(e) {
    e.preventDefault()
    $(this).toggleClass('active');
    $('.sub-menu').toggleClass('show');
});
/*----end header----*/

/*----scrolltop----*/
var back_to_top=$(".back__to--top"),offset=220,duration=500;$(window).scroll(function(){$(this).scrollTop()>offset?back_to_top.addClass("active"):back_to_top.removeClass("active")}),$(document).on("click",".back__to--top",function(o){return o.preventDefault(),$("html, body").animate({scrollTop:0},duration),!1});
/*----end scrolltop----*/

var wow = new WOW(
{
    boxClass:     'wow',
    animateClass: 'animated',
    offset:       0,
    mobile:       true,
    live:         true
}
);
wow.init();

/* Detect open_under*/
function open_under(elem) {
    $(elem).click(function(e) {
        e.preventDefault();
        $(this).toggleClass('has_under_open');
        $(this).next().toggleClass('show');
    });
}


function header_fixed() {
    lastScroll = 0;
    $(window).on('scroll', function() {
        var scroll = $(window).scrollTop();
        let $header = $(".header--mb")
        if (scroll > 1) {
            $header.addClass("fixed-header");
        } else {
            $header.removeClass("fixed-header");
        }
    });
}


// Sticky navbar
// =========================
$(document).ready(function () {
    // Custom function which toggles between sticky class (is-sticky)
    var stickyToggle = function (sticky, stickyWrapper, scrollElement,stickyHeight) {
        var stickyTop = stickyWrapper.offset().top;
        if (scrollElement.scrollTop() >= stickyTop ) {
            stickyWrapper.height(stickyHeight);
            sticky.addClass("is-sticky");
        }
        else {
            sticky.removeClass("is-sticky");
            stickyWrapper.height('auto');
        }
    };
    $('[data-toggle="sticky-onscroll"]').each(function () {
        var sticky = $(this);
        var stickyWrapper = $('<div>').addClass('sticky-wrapper'); // insert hidden element to maintain actual top offset on page
        sticky.before(stickyWrapper);
        sticky.addClass('sticky');
        var stickyHeight = sticky.outerHeight();
        // Scroll & resize events
        $(window).on('scroll.sticky-onscroll resize.sticky-onscroll', function () {
            stickyToggle(sticky, stickyWrapper, $(this),stickyHeight);
        });

        // On page load
        stickyToggle(sticky, stickyWrapper, $(window),stickyHeight);
    });
});


// Page Scroll
$(document).ready(function () {

    header_fixed()

    //smoothscroll
    $('.service__nav a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - 50
        });
    });
});
