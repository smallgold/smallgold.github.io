AOS.init({duration:800,easing:"slide",once:!0}),$(function(){"use strict";$(".loader").delay(200).fadeOut("slow"),$("#overlayer").delay(200).fadeOut("slow");$(".js-clone-nav").each(function(){$(this).clone().attr("class","site-nav-wrap").appendTo(".site-mobile-menu-body")}),setTimeout(function(){var s=0;$(".site-mobile-menu .has-children").each(function(){var e=$(this);e.prepend('<span class="arrow-collapse collapsed">'),e.find(".arrow-collapse").attr({"data-toggle":"collapse","data-target":"#collapseItem"+s}),e.find("> ul").attr({class:"collapse",id:"collapseItem"+s}),s++})},1e3),$("body").on("click",".arrow-collapse",function(e){var s=$(this);s.closest("li").find(".collapse").hasClass("show")?s.removeClass("active"):s.addClass("active"),e.preventDefault()}),$(window).resize(function(){768<$(this).width()&&$("body").hasClass("offcanvas-menu")&&$("body").removeClass("offcanvas-menu")}),$("body").on("click",".js-menu-toggle",function(e){$(this);e.preventDefault(),$("body").hasClass("offcanvas-menu")?($("body").removeClass("offcanvas-menu"),$("body").find(".js-menu-toggle").removeClass("active")):($("body").addClass("offcanvas-menu"),$("body").find(".js-menu-toggle").addClass("active"))}),$(document).mouseup(function(e){var s=$(".site-mobile-menu");s.is(e.target)||0!==s.has(e.target).length||$("body").hasClass("offcanvas-menu")&&($("body").removeClass("offcanvas-menu"),$("body").find(".js-menu-toggle").removeClass("active"))}),0<$(".owl-2-slider").length&&(s=$(".owl-2-slider").owlCarousel({loop:!0,autoHeight:!0,margin:40,autoplay:!0,smartSpeed:700,items:2,stagePadding:0,nav:!0,dots:!0,navText:['<span class="icon-keyboard_backspace"></span>','<span class="icon-keyboard_backspace"></span>'],responsive:{0:{items:1},600:{items:1},800:{items:2},1e3:{items:2},1100:{items:2}}}),$(".js-custom-next-v2").click(function(e){e.preventDefault(),s.trigger("next.owl.carousel")}),$(".js-custom-prev-v2").click(function(e){e.preventDefault(),s.trigger("prev.owl.carousel")})),0<$(".owl-3-slider").length&&$(".owl-3-slider").owlCarousel({loop:!0,autoHeight:!0,margin:40,autoplay:!0,smartSpeed:700,items:4,stagePadding:0,nav:!0,dots:!0,navText:['<span class="icon-keyboard_backspace"></span>','<span class="icon-keyboard_backspace"></span>'],responsive:{0:{items:1},600:{items:1},800:{items:2},1e3:{items:2},1100:{items:3}}}),0<$(".owl-4-slider").length&&$(".owl-4-slider").owlCarousel({loop:!0,autoHeight:!0,margin:10,autoplay:!0,smartSpeed:700,items:4,nav:!1,dots:!0,navText:['<span class="icon-keyboard_backspace"></span>','<span class="icon-keyboard_backspace"></span>'],responsive:{0:{items:1},600:{items:2},800:{items:2},1e3:{items:3},1100:{items:4}}}),0<$(".owl-single-text").length&&$(".owl-single-text").owlCarousel({loop:!0,autoHeight:!0,margin:0,autoplay:!0,smartSpeed:1200,items:1,nav:!1,navText:['<span class="icon-keyboard_backspace"></span>','<span class="icon-keyboard_backspace"></span>']}),0<$(".owl-single").length&&(a=$(".owl-single").owlCarousel({loop:!0,autoHeight:!0,margin:0,autoplay:!0,smartSpeed:800,mouseDrag:!1,touchDrag:!1,items:1,nav:!1,navText:['<span class="icon-keyboard_backspace"></span>','<span class="icon-keyboard_backspace"></span>'],onChanged:function(e){e=e.item.index;0==e||null==e?e=1:(e-=1,$(".js-custom-dots a").removeClass("active"),$('.js-custom-dots a[data-index="'+e+'"]').addClass("active"))}}),$(".js-custom-dots a").each(function(e){e+=1;$(this).attr("data-index",e)}),$(".js-custom-dots a").on("click",function(e){e.preventDefault(),a.trigger("stop.owl.autoplay");e=$(this).data("index");a.trigger("to.owl.carousel",[e-=1,500])})),$(".site-menu-toggle"),$("body").on("click",".site-nav .site-menu li a[href^='#'], .smoothscroll[href^='#'], .site-mobile-menu .site-nav-wrap li a",function(e){e.preventDefault();var s=this.hash;$("html, body").animate({scrollTop:$(s).offset().top},400,"easeInOutExpo",function(){window.location.hash=s})}),$("body").on("activate.bs.scrollspy",function(){}),$(window).scroll(function(){var e=$(this).scrollTop(),s=$(".js-site-navbar"),a=$(".js-scroll-wrap");$(".site-menu-toggle");150<e&&(s.hasClass("scrolled")||s.addClass("scrolled")),e<150&&s.hasClass("scrolled")&&s.removeClass("scrolled sleep"),350<e&&(s.hasClass("awake")||s.addClass("awake"),0<a.length)&&a.addClass("sleep"),e<350&&(s.hasClass("awake")&&(s.removeClass("awake"),s.addClass("sleep")),0<a.length)&&a.removeClass("sleep")}),$(".count-numbers").waypoint(function(e){var a;"down"!==e||$(this.element).hasClass("ut-animated")||(a=$.animateNumber.numberStepFactories.separator(","),$(".counter > span").each(function(){var e=$(this),s=e.data("number");e.animateNumber({number:s,numberStep:a},5e3)}))},{offset:"95%"}),0<$(".jarallax").length&&$(".jarallax").jarallax({speed:.2});$('.btn-link[aria-expanded="true"]').closest(".accordion-item").addClass("active"),$(".collapse").on("show.bs.collapse",function(){$(this).closest(".accordion-item").addClass("active")}),$(".collapse").on("hidden.bs.collapse",function(){$(this).closest(".accordion-item").removeClass("active")});var s,a,e=$(".js-hover-focus-one .service-sm").mouseenter(function(){e.addClass("unfocus"),$(this).removeClass("unfocus")}).mouseleave(function(){$(this).removeClass("unfocus"),e.removeClass("unfocus")})});