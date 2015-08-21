$(document).ready(function() {
    function animacija1(){

	$( ".trougao2")
	.delay(1200)
    .fadeIn(500)
	.animate({ "left": "+=300px" }, 500 )
	.delay()

	$( ".trougao3")
	.delay(1700)
	.fadeIn(false)
	.animate({ "left": "-=300px" }, 500 );
}
    
    animacija1();
    
$('#okruglo1')
	.delay(2000)
	.animate({"left": "+=325px"},300)
	.delay(1100)
	.addClass('floatwho');

$('#okruglo2')
	.delay(2300)
	.animate({"left": "+=425px"},300)
	.delay(1300)
	.addClass('floatmusic');

$('#okruglo3')
	.delay(2300)
	.animate({"right": "+=365px"},300)
	.delay(1300)
	.addClass('floatphotos');
$('#okruglo4')
	.delay(2600)
	.animate({"right": "+=365px"},500)
	.delay(1600)
    .addClass('floatvideo');

   $(".container").animsition({
    
    inClass               :   'fade-in',
    outClass              :   'rotate-out',
    inDuration            :    1500,
    outDuration           :    800,
    linkElement           :   '.animsition-link1',
    // e.g. linkElement   :   'a:not([target="_blank"]):not([href^=#])'
    loading               :    true,
    loadingParentElement  :   '.container', //animsition wrapper element
    loadingClass          :   'animsition-loading',
    unSupportCss          : [ 'animation-duration',
                              '-webkit-animation-duration',
                              '-o-animation-duration'
                            ],
    //"unSupportCss" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
    //The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
    
    overlay               :    false ,
    
    overlayClass          :   'animsition-overlay-slide',
    overlayParentElement  :   ""
  });
   
    $(".whoare-container").animsition({
    
    inClass               :   'rotate-in',
    outClass              :   'rotate-out',
    inDuration            :    1500,
    outDuration           :    800,
    linkElement           :   '.animsition-link',
    // e.g. linkElement   :   'a:not([target="_blank"]):not([href^=#])'
    loading               :    true,
    loadingParentElement  :   '.whoare-container', //animsition wrapper element
    loadingClass          :   'animsition-loading',
    unSupportCss          : [ 'animation-duration',
                              '-webkit-animation-duration',
                              '-o-animation-duration'
                            ],
    //"unSupportCss" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
    //The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
    
    overlay               :    false ,
    
    overlayClass          :   'animsition-overlay-slide',
    overlayParentElement  :   ".wh"
  });
    $(".music-container").animsition({
    
    inClass               :   'flip-in-x',
    outClass              :   'flip-out-x',
    inDuration            :    1500,
    outDuration           :    800,
    linkElement           :   '.animsition-link2',
    // e.g. linkElement   :   'a:not([target="_blank"]):not([href^=#])'
    loading               :    true,
    loadingParentElement  :   '.music-container', //animsition wrapper element
    loadingClass          :   'animsition-loading',
    unSupportCss          : [ 'animation-duration',
                              '-webkit-animation-duration',
                              '-o-animation-duration'
                            ],
    //"unSupportCss" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
    //The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
    
    overlay               :    false ,
    
    overlayClass          :   'animsition-overlay-slide',
    overlayParentElement  :   ".wh"
  });
   
});
