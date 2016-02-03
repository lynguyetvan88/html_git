/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

 $(document).ready(function() {
    $('.carousel').carousel({
      interval: 5000
    });
    
      $("#owl-demo").owlCarousel({
    items : 5,
    lazyLoad : true,
    navigation : true
  }); 
 
  });