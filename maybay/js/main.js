/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



  $( ".wap_airport .border_mt .person_golf li" ).each(function( index ) {
    $( this ).show();
   var time = parseInt(index*1200);
  $( this ).css({
      "animation-delay" : time+"ms",
      "-webkit-animation-delay" : time+"ms",
      "-moz-animation-delay": time+"ms"
    }) ;
});

setInterval(function (){ 
   
     
      
     $('.wap_airport').find('.anima>div').removeClass("fadeOutDown delay_0 delay_1 delay_2 delay_3 delay_4 delay_5 delay_6 delay_7 delay_8 animated bounceInLeft fadeInUpBig fadeInLeft fadeInRight fadeInLeftBig fadeInRightBig fadeInDownBig");
    setTimeout(function(){
        
         $('.person').addClass("delay_1 animated bounceInLeft");
         $('.txt1').addClass("delay_5 animated fadeInUpBig");
         $('.txt2').addClass("delay_6 animated fadeInUpBig");
         $('.txt2 img').addClass("delay_7 animated fadeInLeft");
         $('.txt3').addClass("delay_8 animated fadeInRight");
         $('.txt4').addClass("delay_3 animated fadeInLeftBig");
         $('.txt5').addClass("delay_2 animated fadeInRightBig");
         $('.txt6').addClass("delay_1 animated fadeInDownBig");
    },300);
     
},12000)
