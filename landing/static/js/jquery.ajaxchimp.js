!function(m){"use strict";m.ajaxChimp={responses:{"We have sent you a confirmation email":0,"Please enter a value":1,"An email address must contain a single @":2,"The domain portion of the email address is invalid (the portion after the @: )":3,"The username portion of the email address is invalid (the portion before the @: )":4,"This email address looks fake or invalid. Please enter a real email address":5},translations:{en:null},init:function(a,e){m(a).ajaxChimp(e)}},m.fn.ajaxChimp=function(s){return m(this).each(function(a,e){var i=m(e),t=i.find("input[type=email]"),r=i.find("label[for="+t.attr("id")+"]"),l=m.extend({url:i.attr("action"),language:"en"},s),o=l.url.replace("/post?","/post-json?").concat("&c=?");i.attr("novalidate","true"),t.attr("name","EMAIL"),i.submit(function(){var s;var n={},a=i.serializeArray(),a=(m.each(a,function(a,e){n[e.name]=e.value}),m.ajax({url:o,data:n,success:function(e){if("success"===e.result)s="We have sent you a confirmation email",r.removeClass("error").addClass("valid"),t.removeClass("error").addClass("valid");else{t.removeClass("valid").addClass("error"),r.removeClass("valid").addClass("error");try{var a=e.msg.split(" - ",2);s=void 0===a[1]?e.msg:parseInt(a[0],10).toString()===a[0]?(a[0],a[1]):e.msg}catch(a){s=e.msg}}"en"!==l.language&&void 0!==m.ajaxChimp.responses[s]&&m.ajaxChimp.translations&&m.ajaxChimp.translations[l.language]&&m.ajaxChimp.translations[l.language][m.ajaxChimp.responses[s]]&&(s=m.ajaxChimp.translations[l.language][m.ajaxChimp.responses[s]]),r.html(s),r.show(2e3),l.callback&&l.callback(e)},dataType:"jsonp",error:function(a,e){console.log("mailchimp ajax submit error: "+e)}}),"Submitting...");return"en"!==l.language&&m.ajaxChimp.translations&&m.ajaxChimp.translations[l.language]&&m.ajaxChimp.translations[l.language].submit&&(a=m.ajaxChimp.translations[l.language].submit),r.html(a).show(2e3),!1})}),this}}(jQuery);