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
$("div.bhoechie-tab-menu>div.list-group>a").click(function (e) {
    e.preventDefault();
    $(this).siblings('a.active').removeClass("active");
    $(this).addClass("active");
    var index = $(this).index();
    $("div.bhoechie-tab>div.bhoechie-tab-content").removeClass("active");
    $("div.bhoechie-tab>div.bhoechie-tab-content").eq(index).addClass("active");
});

$(".txt1").click(function () {
    $(".toggle").show();
    $(this).text("");
    $(this).removeClass("btn btn-danger");
});
$(".txt2").click(function () {
    $(".toggle").hide();
    $(".txt1").text("Xem thêm");
    $(".txt1").addClass("btn btn-danger");
});

$(".ribbon a, .nav a").click(function () {
  
    var id = $(this).attr("rel");  
     var video = $(this).attr("id"); 
    if(video=="mn_video"){
         $("div.bhoechie-tab-menu div.list-group > a").removeClass("active");
  $("div.bhoechie-tab-content").removeClass("active");
   $("div.bhoechie-tab-menu div.list-group > a:nth-child(4)").addClass("active");
     $("div.bhoechie-tab div.bhoechie-tab-content:nth-child(4)").addClass("active");
  
    } else {  $("div.bhoechie-tab-menu div.list-group > a").removeClass("active");
  $("div.bhoechie-tab-content").removeClass("active");
    $("div.bhoechie-tab-menu div.list-group > a:nth-child(1)").addClass("active");
     $("div.bhoechie-tab div.bhoechie-tab-content:nth-child(1)").addClass("active");
    }
        $("html, body").delay(100).animate({scrollTop: $(id).offset().top -50}, 100);
    
});



function toggleChevron(e) {
    $(e.target)
        .prev('.panel-heading')
        .find("i.indicator")
        .toggleClass('glyphicon-chevron-down glyphicon-chevron-up');
}
$('#accordion_1').on('hidden.bs.collapse', toggleChevron);
$('#accordion_1').on('shown.bs.collapse', toggleChevron);

$(".panel-title > a").click (function(){
    $("html, body").delay(100).animate({scrollTop: $("section#product").offset().top}, 100);
})

//menu
$("#menutoggle").click(function(){
    $(".nav ul").toggle();
})


//  The function to change the class
			var changeClass = function (r,className1,className2) {
				var regex = new RegExp("(?:^|\\s+)" + className1 + "(?:\\s+|$)");
				if( regex.test(r.className) ) {
					r.className = r.className.replace(regex,' '+className2+' ');
			    }
			    else{
					r.className = r.className.replace(new RegExp("(?:^|\\s+)" + className2 + "(?:\\s+|$)"),' '+className1+' ');
			    }
			    return r.className;
			};	

			//  Creating our button in JS for smaller screens
			var menuElements = document.getElementById('menu');
			menuElements.insertAdjacentHTML('afterBegin','<button type="button" id="menutoggle" class="navtoogle" aria-hidden="true"><i aria-hidden="true" class="glyphicon glyphicon-menu-hamburger"> </i> Menu</button>');

			//  Toggle the class on click to show / hide the menu
			document.getElementById('menutoggle').onclick = function() {
				changeClass(this, 'navtoogle active', 'navtoogle');
			}

			// http://tympanus.net/codrops/2013/05/08/responsive-retina-ready-menu/comment-page-2/#comment-438918
			document.onclick = function(e) {
				var mobileButton = document.getElementById('menutoggle'),
					buttonStyle =  mobileButton.currentStyle ? mobileButton.currentStyle.display : getComputedStyle(mobileButton, null).display;

				if(buttonStyle === 'block' && e.target !== mobileButton && new RegExp(' ' + 'active' + ' ').test(' ' + mobileButton.className + ' ')) {
					changeClass(mobileButton, 'navtoogle active', 'navtoogle');
				}
			}