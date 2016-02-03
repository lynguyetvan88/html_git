/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$("section#content_news #menu_news li a").click(function () {
    var rel = $(this).attr("rel");
    $("section#content_news #menu_news li").removeClass("active fist");
    $("section#content_news .contry_news").fadeOut();

    if (rel == 1) {
        $("section#content_news #menu_news li:nth-child(" + rel + ")").addClass("active");
        $("section#content_news #news_vn").fadeIn();
    }
    if (rel == 2) {
        $("section#content_news #menu_news li:nth-child(1)").addClass("fist");
        $("section#content_news #menu_news li:nth-child(" + rel + ")").addClass("active");
        $("section#content_news #news_cambodia").fadeIn();
    }
    if (rel == 3) {
        $("section#content_news #menu_news li:nth-child(2)").addClass("fist");
        $("section#content_news #menu_news li:nth-child(" + rel + ")").addClass("active");
        $("section#content_news #news_laos").fadeIn();
    }
    if (rel == 4) {
        $("section#content_news #menu_news li:nth-child(3)").addClass("fist");
        $("section#content_news #menu_news li:nth-child(" + rel + ")").addClass("active");
        $("section#content_news #news_myanmar").fadeIn();
    }

    return false;

});

var stt=0;
$("#topic .list_topic").each(function(){
   if(stt%2==0)
       $(this).css("padding-right","10px");
   else {
       $(this).css("padding-left","10px");
   }
    
    stt++;
});