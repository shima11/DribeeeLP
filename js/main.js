!function(){"use strict";var a=function(){var a=$(".owl-carousel-fullwidth");a.owlCarousel({items:1,loop:!0,margin:0,responsiveClass:!0,nav:!1,dots:!0,autoHeight:!0,smartSpeed:800,autoHeight:!0})},t=function(){var a=0;$(".animate-box").waypoint(function(t){"down"!==t||$(this.element).hasClass("animated-fast")||(a++,$(this.element).addClass("item-animate"),setTimeout(function(){$("body .animate-box.item-animate").each(function(a){var t=$(this);setTimeout(function(){var a=t.data("animate-effect");"fadeIn"===a?t.addClass("fadeIn animated-fast"):"fadeInLeft"===a?t.addClass("fadeInLeft animated-fast"):"fadeInRight"===a?t.addClass("fadeInRight animated-fast"):t.addClass("fadeInUp animated-fast"),t.removeClass("item-animate")},200*a,"easeInOutExpo")})},100))},{offset:"85%"})};$(function(){a(),t()})}();