$(function(){$("#validate-form").parsley({successClass:"has-success",errorClass:"has-error",errors:{classHandler:function(r){return $(r).closest(".form-group")},errorsWrapper:'<ul class="help-block list-unstyled"></ul>',errorElem:"<li></li>"}})});