!function(){"use strict";AOS.init({duration:800,easing:"slide",once:!0});var t,e;function o(e){e.style.opacity=1,function t(){(e.style.opacity-=.1)<0?e.style.display="none":requestAnimationFrame(t)}()}t=document.querySelector(".loader"),e=document.getElementById("overlayer"),setTimeout(function(){o(t),o(e)},200);var n,s,i;n=document.querySelectorAll(".features-slider"),s=document.querySelectorAll(".post-slider"),i=document.querySelectorAll(".testimonial-slider"),0<n.length&&tns({container:".features-slider",mode:"carousel",speed:700,items:3,gutter:30,loop:!1,edgePadding:80,controlsPosition:"bottom",nav:!1,controlsContainer:"#features-slider-nav",responsive:{0:{items:1},700:{items:2},900:{items:3}}}),0<s.length&&tns({container:".post-slider",mode:"carousel",speed:700,items:3,gutter:30,loop:!0,edgePadding:10,controlsPosition:"bottom",navPosition:"bottom",nav:!0,autoplay:!0,autoplayButtonOutput:!1,controlsContainer:"#post-slider-nav",responsive:{0:{items:1},700:{items:2},900:{items:3}}}),0<i.length&&tns({container:".testimonial-slider",mode:"carousel",speed:700,items:1,gutter:30,loop:!0,edgePadding:10,controlsPosition:"bottom",navPosition:"bottom",nav:!0,autoplay:!0,autoplayButtonOutput:!1,controlsContainer:"#testimonial-slider-nav",controls:!1,responsive:{0:{items:1},700:{items:1},900:{items:1}}}),GLightbox({selector:".glightbox"})}();