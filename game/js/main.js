!function(e){"use strict";function n(s){s.each(function(){var s=e(this),t=s.data("delay"),i="animated "+s.data("animation");s.css({"animation-delay":t,"-webkit-animation-delay":t}),s.addClass(i).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){s.removeClass(i)})})}var s;e(".skill-per").each(function(){var s=e(this),t=s.attr("per");s.css("width",t+"%"),e({animatedValue:0}).animate({animatedValue:t},{duration:1e3,step:function(){s.attr("per",Math.floor(this.animatedValue)+"%")},complete:function(){s.attr("per",Math.floor(this.animatedValue)+"%")}})}),e(window).on("scroll",function(){e(window).scrollTop()<200?e("#header-sticky").removeClass("sticky-menu"):e("#header-sticky").addClass("sticky-menu")}),e(".responsive").on("click",function(s){e("#mobile-menu").slideToggle()}),e("#mobile-menu").meanmenu({meanMenuContainer:".mobile-menu",meanScreenWidth:"992"}),e(".info-bar").on("click",function(){e(".extra-info").addClass("info-open")}),e(".close-icon").on("click",function(){e(".extra-info").removeClass("info-open")}),e(".menu-tigger").on("click",function(){return e(".offcanvas-menu,.offcanvas-overly").addClass("active"),!1}),e(".menu-close,.offcanvas-overly").on("click",function(){e(".offcanvas-menu,.offcanvas-overly").removeClass("active")}),e(".main-menu li a").on("click",function(){e(window).width()<700&&e("#mobile-menu").slideUp()}),e(function(){e("a.smoth-scroll").on("click",function(s){var t=e(this);e("html, body").stop().animate({scrollTop:e(t.attr("href")).offset().top-100},1e3),s.preventDefault()})}),(s=e(".slider-active")).on("init",function(s,t){n(e(".single-slider:first-child").find("[data-animation]"))}),s.on("beforeChange",function(s,t,i,o){n(e('.single-slider[data-slick-index="'+o+'"]').find("[data-animation]"))}),s.slick({autoplay:!0,autoplaySpeed:1e4,dots:!1,fade:!0,arrows:!0,prevArrow:'<button type="button" class="slick-prev"><i class="fal fa-arrow-up"></i></button>',nextArrow:'<button type="button" class="slick-next"><i class="fal fa-arrow-down"></i></button>',responsive:[{breakpoint:1200,settings:{dots:!1,arrows:!1}}]}),e(".services-active").slick({dots:!0,infinite:!0,arrows:!1,speed:1e3,slidesToShow:3,slidesToScroll:1,responsive:[{breakpoint:1200,settings:{slidesToShow:3,slidesToScroll:1,infinite:!0,dots:!0}},{breakpoint:992,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:767,settings:{slidesToShow:1,slidesToScroll:1}}]}),e(".video-active").slick({dots:!1,infinite:!0,arrows:!0,prevArrow:'<button type="button" class="slick-prev"><i class="icon dripicons-arrow-thin-left"></i></button>',nextArrow:'<button type="button" class="slick-next"><i class="icon dripicons-arrow-thin-right"></i></button>',speed:1e3,slidesToShow:1,slidesToScroll:1,responsive:[{breakpoint:1200,settings:{slidesToShow:3,slidesToScroll:1,infinite:!0,dots:!0}},{breakpoint:992,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:767,settings:{slidesToShow:1,slidesToScroll:1}}]}),e(".video-active2").slick({dots:!1,infinite:!0,arrows:!1,prevArrow:'<button type="button" class="slick-prev"><i class="icon dripicons-arrow-thin-left"></i></button>',nextArrow:'<button type="button" class="slick-next"><i class="icon dripicons-arrow-thin-right"></i></button>',speed:1e3,slidesToShow:3,slidesToScroll:1,responsive:[{breakpoint:1200,settings:{slidesToShow:3,slidesToScroll:1,infinite:!0,dots:!0}},{breakpoint:992,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:767,settings:{slidesToShow:1,slidesToScroll:1}}]}),e(".macthe-active").slick({dots:!0,infinite:!0,arrows:!1,prevArrow:'<button type="button" class="slick-prev"><i class="icon dripicons-arrow-thin-left"></i></button>',nextArrow:'<button type="button" class="slick-next"><i class="icon dripicons-arrow-thin-right"></i></button>',speed:1e3,slidesToShow:1,slidesToScroll:1,responsive:[{breakpoint:1200,settings:{slidesToShow:3,slidesToScroll:1,infinite:!0,dots:!0}},{breakpoint:992,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:767,settings:{slidesToShow:1,slidesToScroll:1}}]}),e(".team-active").slick({dots:!0,infinite:!0,arrows:!0,prevArrow:'<button type="button" class="slick-prev"><i class="icon dripicons-arrow-thin-left"></i></button>',nextArrow:'<button type="button" class="slick-next"><i class="icon dripicons-arrow-thin-right"></i></button>',speed:1e3,slidesToShow:3,slidesToScroll:1,responsive:[{breakpoint:1200,settings:{slidesToShow:3,slidesToScroll:1,infinite:!0,dots:!0}},{breakpoint:992,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:767,settings:{slidesToShow:1,slidesToScroll:1}}]}),e(".portfolio-active").slick({dots:!1,infinite:!0,arrows:!0,prevArrow:'<button type="button" class="slick-prev"><i class="fas fa-arrow-left"></i></button>',nextArrow:'<button type="button" class="slick-next"><i class="fas fa-arrow-right"></i></button>',speed:1e3,slidesToShow:5,slidesToScroll:1,responsive:[{breakpoint:1200,settings:{slidesToShow:5,slidesToScroll:1,infinite:!0,dots:!0}},{breakpoint:992,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:767,settings:{slidesToShow:1,slidesToScroll:1}}]}),e(".brand-active").slick({dots:!1,infinite:!0,autoplay:!0,autoplaySpeed:1500,arrows:!1,speed:1e3,slidesToShow:4,slidesToScroll:2,responsive:[{breakpoint:1500,settings:{slidesToShow:4,slidesToScroll:3,infinite:!0}},{breakpoint:1200,settings:{slidesToShow:3,slidesToScroll:3,infinite:!0}},{breakpoint:992,settings:{slidesToShow:3,slidesToScroll:1}},{breakpoint:767,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]}),e(".testimonial-active").slick({dots:!1,infinite:!0,arrows:!1,speed:1e3,slidesToShow:2,slidesToScroll:1,prevArrow:'<button type="button" class="slick-prev"><i class="fal fa-chevron-left"></i></button>',nextArrow:'<button type="button" class="slick-next"><i class="fal fa-chevron-right"></i></button>',responsive:[{breakpoint:1024,settings:{slidesToShow:1,slidesToScroll:1,infinite:!0,dots:!0}},{breakpoint:992,settings:{slidesToShow:1,slidesToScroll:1}},{breakpoint:767,settings:{slidesToShow:1,slidesToScroll:1}}]}),e(".testimonial-active2").slick({dots:!1,autoplay:!0,autoplaySpeed:1500,infinite:!0,arrows:!0,prevArrow:'<button type="button" class="slick-prev"><i class="fas fa-arrow-left"></i></button>',nextArrow:'<button type="button" class="slick-next"><i class="fas fa-arrow-right"></i></button>',speed:1e3,slidesToShow:2,slidesToScroll:1,responsive:[{breakpoint:1024,settings:{slidesToShow:1,slidesToScroll:1,infinite:!0,dots:!0}},{breakpoint:992,settings:{slidesToShow:1,slidesToScroll:1}},{breakpoint:767,settings:{slidesToShow:1,slidesToScroll:1}}]}),e(".slider-for").slick({slidesToShow:1,slidesToScroll:1,arrows:!1,fade:!0,asNavFor:".slider-nav"}),e(".slider-nav").slick({slidesToShow:3,slidesToScroll:1,asNavFor:".slider-for",dots:!1,arrows:!0,centerMode:!0,focusOnSelect:!0,variableWidth:!0,prevArrow:'<button type="button" class="slick-prev"><i class="fas fa-arrow-left"></i></button>',nextArrow:'<button type="button" class="slick-next"><i class="fas fa-arrow-right"></i></button>'}),e(".home-blog-active").slick({dots:!1,infinite:!0,arrows:!0,speed:1e3,slidesToShow:3,slidesToScroll:1,prevArrow:'<button type="button" class="slick-prev"><i class="fal fa-chevron-left"></i></button>',nextArrow:'<button type="button" class="slick-next"><i class="fal fa-chevron-right"></i></button>',responsive:[{breakpoint:1200,settings:{slidesToShow:3,slidesToScroll:1,infinite:!0,dots:!0}},{breakpoint:992,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:767,settings:{slidesToShow:1,slidesToScroll:1}}]}),e(".blog-active").slick({dots:!1,infinite:!0,arrows:!0,speed:1500,slidesToShow:1,slidesToScroll:1,fade:!0,prevArrow:'<button type="button" class="slick-prev"><i class="fas fa-arrow-left"></i></button>',nextArrow:'<button type="button" class="slick-next"><i class="fas fa-arrow-right"></i></button>'}),e(".count").counterUp({delay:100,time:1e3}),e(".popup-image").magnificPopup({type:"image",gallery:{enabled:!0}}),e(".popup-video").magnificPopup({type:"iframe"}),e(".paroller").length&&e(".paroller").paroller(),e("#parallax").length&&(s=document.getElementById("parallax"),new Parallax(s)),e(".s-single-services").on("mouseenter",function(){e(this).addClass("active").parent().siblings().find(".s-single-services").removeClass("active")}),e.scrollUp({scrollName:"scrollUp",topDistance:"300",topSpeed:300,animation:"fade",animationInSpeed:200,animationOutSpeed:200,scrollText:'<i class="fas fa-level-up-alt"></i>',activeOverlay:!1}),e(".grid").imagesLoaded(function(){var t=e(".grid").isotope({itemSelector:".grid-item",percentPosition:!0,masonry:{columnWidth:1}});e(".button-group").on("click","button",function(){var s=e(this).attr("data-filter");t.isotope({filter:s})})}),e(".element").each(function(){var s=e(this);s.typed({strings:s.attr("data-elements").split(","),typeSpeed:100,backDelay:3e3})}),e(".button-group > button").on("click",function(s){e(this).siblings(".active").removeClass("active"),e(this).addClass("active"),s.preventDefault()}),(new WOW).init(),e(".tabs-box").length&&e(".tabs-box .tab-buttons .tab-btn").on("click",function(s){s.preventDefault();s=e(e(this).attr("data-tab"));if(e(s).is(":visible"))return!1;s.parents(".tabs-box").find(".tab-buttons").find(".tab-btn").removeClass("active-btn"),e(this).addClass("active-btn"),s.parents(".tabs-box").find(".tabs-content").find(".tab").fadeOut(0),s.parents(".tabs-box").find(".tabs-content").find(".tab").removeClass("active-tab animated fadeIn"),e(s).fadeIn(300),e(s).addClass("active-tab animated fadeIn")}),e(".pricing-tab-switcher").on("click",function(){e(this).toggleClass("active"),e(".pricing-amount").toggleClass("change-subs-duration")})}(jQuery);