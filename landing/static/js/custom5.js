!function(){"use strict";AOS.init({duration:800,easing:"slide",once:!0});var e,t;new Rellax(".rellax");function o(t){t.style.opacity=1,function e(){(t.style.opacity-=.1)<0?t.style.display="none":requestAnimationFrame(e)}()}e=document.querySelector(".loader"),t=document.getElementById("overlayer"),setTimeout(function(){o(e),o(t)},200);0<document.querySelectorAll(".wide-slider-testimonial").length&&tns({container:".wide-slider-testimonial",items:1,slideBy:1,axis:"horizontal",swipeAngle:!1,speed:700,nav:!0,loop:!0,edgePadding:40,controls:!0,controlsPosition:"bottom",autoHeight:!0,autoplay:!0,mouseDrag:!0,autoplayHoverPause:!0,autoplayTimeout:3500,autoplayButtonOutput:!1,controlsContainer:"#prevnext-testimonial",responsive:{350:{items:1},500:{items:2},600:{items:3},900:{items:5}}}),0<document.querySelectorAll(".destination-slider").length&&tns({container:".destination-slider",mouseDrag:!0,items:1,axis:"horizontal",swipeAngle:!1,speed:700,edgePadding:50,nav:!0,gutter:30,autoplay:!0,autoplayButtonOutput:!1,controlsContainer:"#destination-controls",responsive:{350:{items:1},500:{items:2},600:{items:3},900:{items:5}}});GLightbox({selector:".glightbox3"})}();