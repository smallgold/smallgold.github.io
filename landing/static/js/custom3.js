!function(){"use strict";AOS.init({duration:800,easing:"slide",once:!0});var e,t;function o(t){t.style.opacity=1,function e(){(t.style.opacity-=.1)<0?t.style.display="none":requestAnimationFrame(e)}()}e=document.querySelector(".loader"),t=document.getElementById("overlayer"),setTimeout(function(){o(e),o(t)},200);var n,r,l,s;n=document.querySelectorAll(".hero-slide"),r=document.querySelectorAll(".property-slider"),l=document.querySelectorAll(".img-property-slide"),s=document.querySelectorAll(".testimonial-slider"),0<n.length&&tns({container:".hero-slide",mode:"carousel",speed:700,autoplay:!0,controls:!1,nav:!1,autoplayButtonOutput:!1,controlsContainer:"#hero-nav"}),0<l.length&&tns({container:".img-property-slide",mode:"carousel",speed:700,items:1,gutter:30,autoplay:!0,controls:!1,nav:!0,autoplayButtonOutput:!1}),0<r.length&&tns({container:".property-slider",mode:"carousel",speed:700,gutter:30,items:3,autoplay:!0,autoplayButtonOutput:!1,controlsContainer:"#property-nav",responsive:{0:{items:1},700:{items:2},900:{items:3}}}),0<s.length&&tns({container:".testimonial-slider",mode:"carousel",speed:700,items:3,gutter:50,autoplay:!0,autoplayButtonOutput:!1,controlsContainer:"#testimonial-nav",responsive:{0:{items:1},700:{items:2},900:{items:3}}})}();