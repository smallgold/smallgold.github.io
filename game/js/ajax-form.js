$(function(){var t=$("#contact-form"),a=$(".ajax-response");$(t).submit(function(e){e.preventDefault();e=$(t).serialize();$.ajax({type:"POST",url:$(t).attr("action"),data:e}).done(function(e){$(a).removeClass("error"),$(a).addClass("success"),$(a).text(e),$("#contact-form input,#contact-form textarea").val("")}).fail(function(e){$(a).removeClass("success"),$(a).addClass("error"),""!==e.responseText?$(a).text(e.responseText):$(a).text("Oops! An error occured and your message could not be sent.")})})});