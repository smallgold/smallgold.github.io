!function(s){"use strict";var r=s("#contact-form");r.submit(function(e){s(".form-group").removeClass("has-error"),s(".help-block").remove();var a={name:s('input[name="form-name"]').val(),email:s('input[name="form-email"]').val(),phone:s('input[name="form-phone"]').val(),message:s('textarea[name="form-message"]').val()};s.ajax({type:"POST",url:"process.php",data:a,dataType:"json",encode:!0}).done(function(e){e.success?r.html('<div class="alert alert-success">'+e.message+"</div>"):(e.errors.name&&(s("#name-field").addClass("has-error"),s("#name-field").find(".form-input").append('<span class="help-block">'+e.errors.name+"</span>")),e.errors.email&&(s("#email-field").addClass("has-error"),s("#email-field").find(".form-input").append('<span class="help-block">'+e.errors.email+"</span>")),e.errors.phone&&(s("#phone-field").addClass("has-error"),s("#phone-field").find(".form-input").append('<span class="help-block">'+e.errors.phone+"</span>")),e.errors.message&&(s("#message-field").addClass("has-error"),s("#message-field").find(".form-input").append('<span class="help-block">'+e.errors.message+"</span>")))}).fail(function(e){console.log(e)}),e.preventDefault()})}(jQuery,(window,document));