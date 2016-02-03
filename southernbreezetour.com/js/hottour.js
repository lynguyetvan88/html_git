/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(".pagination > li > a, .pagination > li > span").click(function(){
    var text = $(this).text();  
    $("section#country_tour .hot_tour .list_hot_tour .group").hide(10);
       $("section#country_tour .hot_tour .list_hot_tour #group_"+text).fadeIn(2000);
       $(".pagination > li > a, .pagination > li > spa").parent().removeClass("active");
       $(this).parent().addClass("active");
    return false;
});