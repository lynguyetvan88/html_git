/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$("section#news .event_touris .pagination > li > a, section#news .event_touris .pagination > li > span").click(function () {
    var i = $(this).attr('title');

    $("section#news .event_touris .new_gr").hide(100);
    $("section#news .event_touris  #new_gp_" + i).removeClass("animated lightSpeedIn pulse");
    $("section#news .event_touris  #new_gp_" + i).show(100);
    $("section#news .event_touris  #new_gp_" + i).addClass("animated lightSpeedIn");

    $(".pagination > li > a, .pagination > li > spa").parent().removeClass("active");
    $(this).parent().addClass("active");
    return false;
});
var i = 1;
setInterval(function () {
    $("section#news .event_touris .new_gr").hide(10);
    $("section#news .event_touris  #new_gp_" + i).removeClass("animated pulse lightSpeedIn");
    $("section#news .event_touris  #new_gp_" + i).show(10);

    $("section#news .event_touris  #new_gp_" + i).addClass("animated pulse");
    //$("section#news .event_touris  #new_gp_"+i+" col-md-4:nth-child(1)").addClass("delay_1");
    $("section#news .event_touris .pagination > li").removeClass("active");
    $("section#news .event_touris  .pagination > li:nth-child(" + i + ")").addClass("active");
    i++;
    if (i === 5)
        i = 1;
}, 5000);