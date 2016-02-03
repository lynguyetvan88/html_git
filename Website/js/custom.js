function supports_input_placeholder() {
    var i = document.createElement('input');
    return 'placeholder' in i;
}
var page1 = "";
function ShowLoading(isshow) {
    if (isshow) {
        $(".overlay-popup").fadeIn(500);
        $(".popup_loading").css({
            left: ($(window).width() - $('.popup_loading').width()) / 2,
            top: ($(window).width() - $('.popup_loading').width()) / 7
        }).show();

    }
    else {
        setTimeout(function () {
            $(".overlay-popup").fadeOut(200);
            $(".popup_loading").fadeOut(500).hide();
        }, 500);
    }

}

if (!supports_input_placeholder()) {
    var fields = document.getElementsByTagName('INPUT');
    for (var i = 0; i < fields.length; i++) {
        if (fields[i].hasAttribute('placeholder')) {
            fields[i].defaultValue = fields[i].getAttribute('placeholder');
            fields[i].onfocus = function () { if (this.value == this.defaultValue) this.value = ''; }
            fields[i].onblur = function () { if (this.value == '') this.value = this.defaultValue; }
        }
    }
}
$(document).ready(function () {

    $.address.crawlable(true).init(function (event) {
    }).change(function (event) {
        // Identifies the page selection 
        var page = event.parameters.page ? '/?page=' + event.parameters.page : event.path;
        page1 = page;
        if (page == "/" || page == "" ) {
            $(".backtproreview:visible").click();
        }
        else if (page.search("lumiadetail") > -1) {
           var $this= $("a[href='#!" + page + "']")
            var headheight = $("#header").height();
            var targetOffset = $($this.parents(".row-fluid ")).offset().top - (headheight == 100 ? 170 : 70);
            $('html,body').animate({ scrollTop: targetOffset }, 1000);
            if ($this.parents(".row-fluid ").find(".productdetail").html() == "") {
                ShowLoading(true);
                $this.parents(".row-fluid ").find(".productdetail").load("pages/" + $this.parents(".row-fluid ").attr("id") + ".html", function () {
                    ShowLoading(false);
                    showprodetail($this);
                });
            }
            else {
                showprodetail($this);
            }
 
        }
        else if (page.search("lienhe") > -1  ) {
            $("a[rel='#Contact']").click();
    
        }
        else if (page.search("lienhe") > -1 ) {
            $("a[rel='#Contact']").click();
    
        }
        else if (page.search("ungdung") > -1 ) {
            $("a[rel='#Footer']").click();
    
        }
        else if (page.search("sanpham") > -1 ) {
            $("a[rel='#lumia920']").click();
      
        }
    });



    ShowLoading(true);
    var windowwidth = $(document).width();
    $(window).resize(function () {
        $("#slider").height($(".sl-slide-inner img:visible").height());
    });
    if ($.browser.msie ==undefined ) {
        $(".fullscreen").bind('click', function () {
            if ($(this).hasClass('exitfullscreen') == false) {
                screenfull.request();
                $(this).addClass('exitfullscreen');
            }
            else {
                screenfull.exit();
                $(this).removeClass('exitfullscreen');
            }
        });
    }
    else {
        $(".fullscreen").hide();
    }

    if ($.browser.msie && parseInt($.browser.version, 10) === 8 && windowwidth > 1170) {
        $(".container").width(1170);
    }


    /*menu*/
    $(".nav a").click(function () {
        $(".nav a").removeClass("active");
        $(this).addClass("active");
        if ($(this).attr("rel") != undefined) {
            var headheight = $("#header").height()
            var targetOffset = $($(this).attr("rel")).offset().top - (headheight==100?170:70);
            $('html,body').animate({ scrollTop: targetOffset }, 1000);
        } else {
            $.scrollTo(0, 1000);
        }
    });
    $(window).scroll(function (e) {
        var newScroll = $(document).scrollTop();
        if (newScroll > 180 && windowwidth > 767) {
            $("#header").addClass("menuscroll");
        }
        else {
            $("#header").removeClass("menuscroll");
        }
        if (newScroll >= 972 && newScroll < 3572) {
            $(".nav a").removeClass("active");
            $(".nav a").eq(1).addClass("active");
        }
        else if (newScroll >= 3572 && newScroll < 4031) {
            $(".nav a").removeClass("active");
            $(".nav a").eq(3).addClass("active");
        }
        else if (newScroll >= 4031) {
            $(".nav a").removeClass("active");
            $(".nav a").eq(2).addClass("active");
        }
        else {
            $(".nav a").removeClass("active");
            $(".nav a").eq(0).addClass("active");
        }
        if (windowwidth <= 480) {
            $("#header").addClass("menuscroll");
        }

    });
    /*Slider*/
    var foo = null;
    var playing = function Rnslider() {
        if (foo == null) {
            foo = setInterval(function () {
                var block = $('.sl-slide:visible')
                if (block.next(".sl-slide").length > 0) {
                    block.fadeOut()
                    block.next(".sl-slide").fadeIn('linear')
                    var curnav = $(".nav-dot-current")
                    curnav.next('span').addClass('nav-dot-current')
                    curnav.removeClass('nav-dot-current');
                }
                else {
                    block.fadeOut()
                    $('.sl-slide').first().fadeIn('linear')
                    $('.nav-dots span').removeClass('nav-dot-current');
                    $('.nav-dots span:first').addClass('nav-dot-current');
                }
            }, 5000)
        }
    }
    playing();
    $("#nav-dots span").click(function () {
        $('.sl-slide:visible').fadeOut();
        $('.sl-slide').eq($("#nav-dots span").index(this)).fadeIn('linear');
        $("#nav-dots span").removeClass('nav-dot-current');
        $(this).addClass('nav-dot-current');
        clearInterval(foo);
        foo = null
        setTimeout(playing(), 5000)
    });

    $(".live-tile, .flip-list").not(".exclude").liveTile();
    $(".viewmoreapps a, .viewdetailproductwhite, .viewdetailproductblack").hover(function () {
        $(this).children('img').delay(0).animate({ opacity: '1' }, { queue: true, duration: 200 });
        $(this).children('img').rotate({ angle: 0, animateTo: 360 });
    });

    function showprodetail(button) {
        $(".productdetail:visible").parents(".row-fluid ").find(".backtproreview").click();
        button.parents(".row-fluid ").find(".overview").animate({ left: "-" + $(window).width() + "px" }, 1000, function () {
            button.parents(".row-fluid ").find(".productdetail").show();
            button.parents(".row-fluid ").find(".productdetail").parents(".row-fluid").animate({ backgroundColor: '#fff' });
            button.parents(".row-fluid ").find(".pronav").show();
            button.parents(".row-fluid ").find(".backtproreview").show();
            $(this).hide();
        })

    }

    $(".backtproreview").click(function () {
        $(this).parents(".row-fluid ").find(".productdetail").hide();
        $(this).parents(".row-fluid ").find(".pronav").hide();
        $(this).parents(".row-fluid ").removeAttr("style");
        $(this).parents(".row-fluid ").find(".overview").show().animate({ left: "0px" }, 1000);
        $(this).hide();

    });
    $(".pronav li").hover(function () {
        if ($(this).hasClass("current") == false) {
            $(".pronav li").removeClass("current").stop().animate({ width: "130px" }, 500);
            $(this).stop().animate({ width: "140px" }).addClass("current");
            $(this).parents(".row-fluid").find(".productdetail>div").hide();
            $(this).parents(".row-fluid").find(".productdetail>div").eq($("li", $(this).parents('.pronav')).index($(this))).stop().show("8000");
        }
      
    },
    function () {
        if ($(this).hasClass("current") == false) {
            $(this).stop().animate({ width: "130px" });
        }
      
    });
    function GetDateTime() {
        MyStrDate = new String;
        var isnMonth = new
        Array("Tháng một", "Tháng hai", "Tháng ba", "Tháng tư", "Tháng năm", "Tháng sáu", "Tháng bảy", "Tháng tám", "Tháng chín", "Tháng mười", "Tháng mười một", "Tháng mười hai");
        var isnDay = new
        Array("Chủ nhật", "Thứ hai", "Thứ ba", "Thứ tư", "Thứ năm", "Thứ sáu", "Thứ bảy", "Chủ nhật");
        today = new Date();
        Year = today.getYear();
        if (Year < 1000)
            Year += 1900
        Daten = today.getDate();
        $("#time").text((today.getHours() == 0 ? "12" : today.getHours()) + ":" + today.getMinutes());
        $("#datenow").text(isnDay[today.getDay()] + ", " + Daten + " " + isnMonth[today.getMonth()]);
    }
    $("#intro").click(function () {
        $(this).animate({ height: '0px' }, 1000);
        $("#wraper").show();
        $("#wraper").animate({ "top": 0 + "px" }, 1000)
    });

    if (windowwidth > 980 && location.hash.search("lumia") == -1 && location.hash.search("lienhe") == -1 && location.hash.search("ungdung") == -1 && location.hash.search("sanpham") == -1) {
   
        $(window).load(function () {
            setTimeout(function () {
                $("#logo h3").animate({ opacity: '1' });
            }, 1000);
            setTimeout(function () {
                $("#logo h1").animate({ opacity: '1' });
            }, 2000);
            setTimeout(function () {
                $("#logo .slogan").animate({ opacity: '1' });
            }, 2500);
            GetDateTime();
            $('.intro_hand').css({ "display": "block", "bottom": "-" + $(window).height() + "px" });
            $("#intro").width($(window).width());
            $(".background_intro").css("display", "block");
            $("#intro").height($(window).height());
            setTimeout(function () { GetDateTime() }, 60000);
            $('.intro_hand').animate({
                bottom: '-50'
            }, 5000, function () {
                // Animation complete.
                setTimeout(function () {
                    $("#intro").animate({ height: '0px' }, 1000, function () {
                        $(this).hide();
                    });
                    $("#wraper").show();
                    $("#wraper").animate({ "top": 0 + "px" }, 1000)
                }, 3000);
            });
            $("#wraper").css("top", $(window).height() + "px")
            ShowLoading(false);
        })
    }
    else {
        $("#wraper").show();
        $("#wraper").animate({ "top": 0 + "px" })
        ShowLoading(false);
    }

    


})



