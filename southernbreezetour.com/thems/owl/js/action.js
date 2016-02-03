/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

jQuery(document).ready(function ($) {
    //Reference http://www.jssor.com/development/slider-with-caption.html
    //Reference http://www.jssor.com/development/reference-ui-definition.html#captiondefinition
    //Reference http://www.jssor.com/development/tool-caption-transition-viewer.html

    var _CaptionTransitions = [{$Duration:400,$FlyDirection:1,$Easing:$JssorEasing$.$EaseInQuad}];

    var options = {
        $AutoPlay: true, //[Optional] Whether to auto play, to enable slideshow, this option must be set to true, default value is false
        $AutoPlaySteps: 1, //[Optional] Steps to go for each navigation request (this options applys only when slideshow disabled), the default value is 1
        $AutoPlayInterval: 4000, //[Optional] Interval (in milliseconds) to go for next slide since the previous stopped if the slider is auto playing, default value is 3000
        $PauseOnHover: 0, //[Optional] Whether to pause when mouse over if a slider is auto playing, 0 no pause, 1 pause for desktop, 2 pause for touch device, 3 pause for desktop and touch device, default value is 3

        $ArrowKeyNavigation: true, //[Optional] Allows keyboard (arrow key) navigation or not, default value is false
        $SlideDuration: 500, //[Optional] Specifies default duration (swipe) for slide in milliseconds, default value is 500
        $MinDragOffsetToSlide: 20, //[Optional] Minimum drag offset to trigger slide , default value is 20
        //$SlideWidth: 600,                                 //[Optional] Width of every slide in pixels, default value is width of 'slides' container
        //$SlideHeight: 300,                                //[Optional] Height of every slide in pixels, default value is height of 'slides' container
        $SlideSpacing: 0, //[Optional] Space between each slide in pixels, default value is 0
        $DisplayPieces: 1, //[Optional] Number of pieces to display (the slideshow would be disabled if the value is set to greater than 1), the default value is 1
        $ParkingPosition: 0, //[Optional] The offset position to park slide (this options applys only when slideshow disabled), default value is 0.
        $UISearchMode: 1, //[Optional] The way (0 parellel, 1 recursive, default value is 1) to search UI components (slides container, loading screen, navigator container, direction navigator container, thumbnail navigator container etc).
        $PlayOrientation: 1, //[Optional] Orientation to play slide (for auto play, navigation), 1 horizental, 2 vertical, default value is 1
        $DragOrientation: 3, //[Optional] Orientation to drag slide, 0 no drag, 1 horizental, 2 vertical, 3 either, default value is 1 (Note that the $DragOrientation should be the same as $PlayOrientation when $DisplayPieces is greater than 1, or parking position is not 0)

        $CaptionSliderOptions: {//[Optional] Options which specifies how to animate caption
            $Class: $JssorCaptionSlider$, //[Required] Class to create instance to animate caption
            $CaptionTransitions: _CaptionTransitions, //[Required] An array of caption transitions to play caption, see caption transition section at jssor slideshow transition builder
            $PlayInMode: 1, //[Optional] 0 None (no play), 1 Chain (goes after main slide), 3 Chain Flatten (goes after main slide and flatten all caption animations), default value is 1
            $PlayOutMode: 3                                 //[Optional] 0 None (no play), 1 Chain (goes before main slide), 3 Chain Flatten (goes before main slide and flatten all caption animations), default value is 1
        },
        $NavigatorOptions: {//[Optional] Options to specify and enable navigator or not
            $Class: $JssorNavigator$, //[Required] Class to create navigator instance
            $ChanceToShow: 2, //[Required] 0 Never, 1 Mouse Over, 2 Always
            $AutoCenter: 0, //[Optional] Auto center navigator in parent container, 0 None, 1 Horizontal, 2 Vertical, 3 Both, default value is 0
            $Steps: 1, //[Optional] Steps to go for each navigation request, default value is 1
            $Lanes: 1, //[Optional] Specify lanes to arrange items, default value is 1
            $SpacingX: 10, //[Optional] Horizontal space between each item in pixel, default value is 0
            $SpacingY: 10, //[Optional] Vertical space between each item in pixel, default value is 0
            $Orientation: 1                                 //[Optional] The orientation of the navigator, 1 horizontal, 2 vertical, default value is 1
        },
        $DirectionNavigatorOptions: {
            $Class: $JssorDirectionNavigator$, //[Requried] Class to create direction navigator instance
            $ChanceToShow: 1, //[Required] 0 Never, 1 Mouse Over, 2 Always
            $Steps: 1                                       //[Optional] Steps to go for each navigation request, default value is 1
        }
    };
    var jssor_slider1 = new $JssorSlider$("slider1_container", options);

//responsive code begin
//you can remove responsive code if you don't want the slider scales while window resizes
  function ScaleSlider() {
                var parentWidth = jssor_slider1.$Elmt.parentNode.clientWidth;
                if (parentWidth)
                    jssor_slider1.$SetScaleWidth(Math.min(parentWidth, 1920));
                else
                    window.setTimeout(ScaleSlider, 30);
            }

            ScaleSlider();
$(window).bind("load", ScaleSlider);
$(window).bind("resize", ScaleSlider);
$(window).bind("orientationchange", ScaleSlider);

    if (!navigator.userAgent.match(/(iPhone|iPod|iPad|BlackBerry|IEMobile)/)) {
        $(window).bind('resize', ScaleSlider);
    }
    //responsive code end
   
});

