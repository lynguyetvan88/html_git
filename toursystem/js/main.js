/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(function () {
    $('.carousel').carousel({
        interval: 4000
    });
});

// back next
$("#owl-demo").owlCarousel({
    items: 4,
    lazyLoad: true,
    autoPlay: 3000,
    stopOnHover: true,
    navigation: true
});

$("#owl_list_tour_mb").owlCarousel({
    items: 2,
//    itemsTablet: [980,1],
    lazyLoad: true,
    navigation: true,
    autoPlay: 8000,
    stopOnHover: true,
    responsive: true
});
$("#owl_list_tour").owlCarousel({
    items: 2,
    itemsTablet: [980,1],
    lazyLoad: true,
    navigation: true,
    autoPlay: 8000,
    stopOnHover: true,
    responsive: true
});
$("#owl_list_hotel").owlCarousel({
    items: 4,
    lazyLoad: true,
    navigation: true,
    autoPlay: 8000,
    stopOnHover: true,
    responsive: true
});

$("#owl_list_golf").owlCarousel({
    items: 3,
    lazyLoad: true,
    navigation: true,
    autoPlay: 8000,
    stopOnHover: true,
    responsive: true
});

$("#owl_list_gallery").owlCarousel({
    items: 1,
     itemsTablet: [980,1],
    lazyLoad: true,
    navigation: true,
    autoPlay: 8000,
    stopOnHover: true,
    responsive: true
});

// canh width height hinh tron
//var with_round = ($("section#home_marketing .list_country_tour .round").width());
//$("section#home_marketing .list_country_tour .round").css("width", with_round);
//$("section#home_marketing .list_country_tour .round").css("height", with_round);
////alert($("section#home_marketing .list_country_tour .round").width());
////alert($("section#home_marketing .list_country_tour .round").height());
//var with_round_hotel = ($("section#home_hotel .list_country_hotel .round").width());
//$("section#home_hotel .list_country_hotel .round").css("height", with_round_hotel);
//$("section#home_hotel .list_country_hotel .round").css("width", with_round_hotel);
//
//
//var with_round_golf = ($("section#home_golf .list_country_golf .round").width());
//$("section#home_golf .list_country_golf .round").css("height", with_round_golf);
//$("section#home_golf .list_country_golf .round").css("width", with_round_golf);
//$(window).resize(function () {
//    var width = $( window ).width();
//    var width_round_1=120;
//   if(width >= 1170){
//       width_round_1= 220;
//   }
//   if(width >= 970){
//       width_round_1= 155;
//   }
//    //var with_round = ($("section#home_marketing .list_country_tour .round").width());
//    //alert(width_round_1);
//    $("section#home_marketing .list_country_tour .round").css("width", width_round_1);
//    $("section#home_marketing .list_country_tour .round").css("height", width_round_1);
//
//    $("section#home_hotel .list_country_hotel .round").removeAttr("style");
//    var with_round_hotel = ($("section#home_hotel .list_country_hotel .round").width());
//    $("section#home_hotel .list_country_hotel .round").css("height", width_round_1);
//    $("section#home_hotel .list_country_hotel .round").css("width", width_round_1);
//    
//    $("section#home_golf .list_country_golf .round").removeAttr("style");
//    var with_round_golf = ($("section#home_golf .list_country_golf .round").width());
//    $("section#home_golf .list_country_golf .round").css("height", width_round_1);
//    $("section#home_golf .list_country_golf .round").css("width", width_round_1);
//});





$("#owl-demo .item").addClass("hvr-float-shadow");

$(window).scroll(function () {
    $('section#home_marketing .list_country_tour').each(function () {
        if ($(window).scrollTop() + $(window).height() > $(this).offset().top) {
            $('section#home_marketing .list_country_tour .round').each(function (i) {
              
                var addclass = 'delay_' + i + ' show bounceInLeft animated';
                $(this).addClass(addclass);
            });
        }
        //$("section#home_marketing .list_country_tour .round").addClass('bounceInLeft animated show');

    });

    $('section#home_hotel .list_country_hotel').each(function () {
        if ($(window).scrollTop() + $(window).height() > $(this).offset().top) {
            $('section#home_hotel .list_country_hotel .round').each(function (i) {
                var addclass = 'delay_' + i + ' show bounceInLeft animated';
                $(this).addClass(addclass);
            });
        }
        //$("section#home_marketing .list_country_tour .round").addClass('bounceInLeft animated show');

    });

    $('section#home_golf .list_country_golf').each(function () {
        if ($(window).scrollTop() + $(window).height() > $(this).offset().top) {
            $('section#home_golf .list_country_golf .round').each(function (i) {
                var addclass = 'delay_' + i + ' show bounceInLeft animated';
                $(this).addClass(addclass);
            });
        }
        //$("section#home_marketing .list_country_tour .round").addClass('bounceInLeft animated show');

    });
});

// gallery
$("[rel='tooltip']").tooltip();

$('.list_gallery_2 .list').hover(
        function () {
            $(this).find('.caption').slideDown(250); //.fadeIn(250)
        },
        function () {
            $(this).find('.caption').slideUp(250); //.fadeOut(205)
        }
);


// slider planet

setInterval(function () {
    $("section#home_slider .island").removeClass("animated zoomIn delay_1");
    $("section#home_slider .gilr").removeClass("animated bounceInLeft delay_3");
    $("section#home_slider .luggage").removeClass("animated bounceInRight delay_5");
    $("section#home_slider .txt1").removeClass("animated fadeInLeft delay_7");
    $("section#home_slider .txt2").removeClass("animated fadeInLeft delay_9");

    $("section#home_slider .island").fadeOut("slow");
    $("section#home_slider .gilr").fadeOut("slow");
    $("section#home_slider .luggage").fadeOut("slow");
    $("section#home_slider .txt1").fadeOut(3000);
    $("section#home_slider .txt2").fadeOut(3000);


    $("section#home_slider .island").addClass("animated zoomIn delay_1 show");
    $("section#home_slider .gilr").addClass("animated bounceInLeft delay_3 show");
    $("section#home_slider .luggage").addClass("animated bounceInRight delay_5 show");
    $("section#home_slider .txt1").addClass("animated fadeInLeft delay_7 show");
    $("section#home_slider .txt2").addClass("animated fadeInLeft delay_9 show");

}, 20000);

// stroll section id
$(".topdiv").click(function () {
    var id = $(this).attr("rel");
    $("html, body").delay(10).animate({scrollTop: $('#' + id).offset().top}, 2000);
    return false;
})
$("#back_top").click(function () {
    $("html, body").animate({scrollTop: 0}, 3000);
});

//menu fixed
$('nav#nav').addClass('original').clone().insertAfter('nav#nav').addClass('cloned').css('position', 'fixed').css('top', '0').css('margin-top', '0').css('z-index', '500').removeClass('original').hide();

scrollIntervalID = setInterval(stickIt, 10);
function stickIt() {
    var orgElementPos = $('.original').offset();
    orgElementTop = orgElementPos.top;

    if ($(window).scrollTop() >= (orgElementTop)) {
        // scrolled past the original position; now only show the cloned, sticky element.
        // Cloned element should always have same left position and width as original element.     
        orgElement = $('.original');
        coordsOrgElement = orgElement.offset();
        leftOrgElement = coordsOrgElement.left;
        widthOrgElement = orgElement.css('width');
        $('.cloned').css('left', leftOrgElement + 'px').css('top', 0).css('width', widthOrgElement).show();
        $('.original').css('visibility', 'hidden');
    } else {
        // not scrolled past the menu; only show the original menu.
        $('.cloned').hide();
        $('.original').css('visibility', 'visible');
    }
}
//end menu fixed