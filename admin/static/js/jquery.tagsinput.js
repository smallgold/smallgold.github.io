!function(d){var u=new Array,o=new Array;d.fn.doAutosize=function(t){var a=d(this).data("minwidth"),e=d(this).data("maxwidth"),i="",n=d(this),u=d("#"+d(this).data("tester_id"));""!==(i=n.val())&&(i=i.replace(/&/g,"&amp;").replace(/\s/g," ").replace(/</g,"&lt;").replace(/>/g,"&gt;"),u.html(i),(u=(i=u.width())+t.comfortZone>=a?i+t.comfortZone:a)<n.width()&&a<=u||a<u&&u<e)&&n.width(u)},d.fn.resetAutosize=function(t){var a=d(this).data("minwidth")||t.minInputWidth||d(this).width(),t=d(this).data("maxwidth")||t.maxInputWidth||d(this).closest(".tagsinput").width()-t.inputPadding,e=d(this),i=d("<tester/>").css({position:"absolute",top:-9999,left:-9999,width:"auto",fontSize:e.css("fontSize"),fontFamily:e.css("fontFamily"),fontWeight:e.css("fontWeight"),letterSpacing:e.css("letterSpacing"),whiteSpace:"nowrap"}),n=d(this).attr("id")+"_autosize_tester";0<!d("#"+n).length&&(i.attr("id",n),i.appendTo("body")),e.data("minwidth",a),e.data("maxwidth",t),e.data("tester_id",n),e.css("width",a)},d.fn.addTag=function(i,n){return n=jQuery.extend({focus:!1,callback:!0},n),this.each(function(){var t,a=d(this).attr("id"),e=d(this).val().split(u[a]);""==e[0]&&(e=new Array),i=jQuery.trim(i),n.unique?1==(t=d(this).tagExist(i))&&d("#"+a+"_tag").addClass("not_valid"):t=!1,""!=i&&1!=t&&(d("<span>").addClass("tag").append(d("<span>").text(i).append("&nbsp;&nbsp;"),d("<a>",{href:"#",title:"Removing tag",text:"x"}).click(function(){return d("#"+a).removeTag(escape(i))})).insertBefore("#"+a+"_addTag"),e.push(i),d("#"+a+"_tag").val(""),n.focus?d("#"+a+"_tag").focus():d("#"+a+"_tag").blur(),d.fn.tagsInput.updateTagsField(this,e),n.callback&&o[a]&&o[a].onAddTag&&o[a].onAddTag.call(this,i),o[a])&&o[a].onChange&&(t=e.length,o[a].onChange.call(this,d(this),e[t-1]))}),!1},d.fn.removeTag=function(e){return e=unescape(e),this.each(function(){var t=d(this).attr("id"),a=d(this).val().split(u[t]);for(d("#"+t+"_tagsinput .tag").remove(),str="",i=0;i<a.length;i++)a[i]!=e&&(str=str+u[t]+a[i]);d.fn.tagsInput.importTags(this,str),o[t]&&o[t].onRemoveTag&&o[t].onRemoveTag.call(this,e)}),!1},d.fn.tagExist=function(t){var a=d(this).attr("id"),a=d(this).val().split(u[a]);return 0<=jQuery.inArray(t,a)},d.fn.importTags=function(t){id=d(this).attr("id"),d("#"+id+"_tagsinput .tag").remove(),d.fn.tagsInput.importTags(this,t)},d.fn.tagsInput=function(t){var n=jQuery.extend({interactive:!0,defaultText:"add a tag",minChars:0,width:"300px",height:"100px",autocomplete:{selectFirst:!1},hide:!0,delimiter:",",unique:!0,removeWithBackspace:!0,placeholderColor:"#666666",autosize:!0,comfortZone:20,inputPadding:12},t);return this.each(function(){n.hide&&d(this).hide();var i=d(this).attr("id"),t=(i&&!u[d(this).attr("id")]||(i=d(this).attr("id","tags"+(new Date).getTime()).attr("id")),jQuery.extend({pid:i,real_input:"#"+i,holder:"#"+i+"_tagsinput",input_wrapper:"#"+i+"_addTag",fake_input:"#"+i+"_tag"},n)),a=(u[i]=t.delimiter,(n.onAddTag||n.onRemoveTag||n.onChange)&&(o[i]=new Array,o[i].onAddTag=n.onAddTag,o[i].onRemoveTag=n.onRemoveTag,o[i].onChange=n.onChange),'<div id="'+i+'_tagsinput" class="tagsinput"><div id="'+i+'_addTag">');if(n.interactive&&(a=a+'<input id="'+i+'_tag" value="" data-default="'+n.defaultText+'" />'),d(a+='</div><div class="tags_clear"></div></div>').insertAfter(this),d(t.holder).css("width",n.width),d(t.holder).css("min-height",n.height),d(t.holder).css("height","100%"),""!=d(t.real_input).val()&&d.fn.tagsInput.importTags(d(t.real_input),d(t.real_input).val()),n.interactive){if(d(t.fake_input).val(d(t.fake_input).attr("data-default")),d(t.fake_input).css("color",n.placeholderColor),d(t.fake_input).resetAutosize(n),d(t.holder).bind("click",t,function(t){d(t.data.fake_input).focus()}),d(t.fake_input).bind("focus",t,function(t){d(t.data.fake_input).val()==d(t.data.fake_input).attr("data-default")&&d(t.data.fake_input).val(""),d(t.data.fake_input).css("color","#000000")}),null!=n.autocomplete_url){for(attrname in autocomplete_options={source:n.autocomplete_url},n.autocomplete)autocomplete_options[attrname]=n.autocomplete[attrname];void 0!==jQuery.Autocompleter?(d(t.fake_input).autocomplete(n.autocomplete_url,n.autocomplete),d(t.fake_input).bind("result",t,function(t,a,e){a&&d("#"+i).addTag(a[0]+"",{focus:!0,unique:n.unique})})):void 0!==jQuery.ui.autocomplete&&(d(t.fake_input).autocomplete(autocomplete_options),d(t.fake_input).bind("autocompleteselect",t,function(t,a){return d(t.data.real_input).addTag(a.item.value,{focus:!0,unique:n.unique}),!1}))}else d(t.fake_input).bind("blur",t,function(t){var a=d(this).attr("data-default");return""!=d(t.data.fake_input).val()&&d(t.data.fake_input).val()!=a?t.data.minChars<=d(t.data.fake_input).val().length&&(!t.data.maxChars||t.data.maxChars>=d(t.data.fake_input).val().length)&&d(t.data.real_input).addTag(d(t.data.fake_input).val(),{focus:!0,unique:n.unique}):(d(t.data.fake_input).val(d(t.data.fake_input).attr("data-default")),d(t.data.fake_input).css("color",n.placeholderColor)),!1});d(t.fake_input).bind("keypress",t,function(t){if(t.which==t.data.delimiter.charCodeAt(0)||13==t.which)return t.preventDefault(),t.data.minChars<=d(t.data.fake_input).val().length&&(!t.data.maxChars||t.data.maxChars>=d(t.data.fake_input).val().length)&&d(t.data.real_input).addTag(d(t.data.fake_input).val(),{focus:!0,unique:n.unique}),d(t.data.fake_input).resetAutosize(n),!1;t.data.autosize&&d(t.data.fake_input).doAutosize(n)}),t.removeWithBackspace&&d(t.fake_input).bind("keydown",function(t){var a;8==t.keyCode&&""==d(this).val()&&(t.preventDefault(),t=d(this).closest(".tagsinput").find(".tag:last").text(),a=d(this).attr("id").replace(/_tag$/,""),t=t.replace(/[\s]+x$/,""),d("#"+a).removeTag(escape(t)),d(this).trigger("focus"))}),d(t.fake_input).blur(),t.unique&&d(t.fake_input).keydown(function(t){8!=t.keyCode&&!String.fromCharCode(t.which).match(/\w+|[áéíóúÁÉÍÓÚñÑ,/]+/)||d(this).removeClass("not_valid")})}}),this},d.fn.tagsInput.updateTagsField=function(t,a){var e=d(t).attr("id");d(t).val(a.join(u[e]))},d.fn.tagsInput.importTags=function(t,a){d(t).val("");var e=d(t).attr("id"),n=a.split(u[e]);for(i=0;i<n.length;i++)d(t).addTag(n[i],{focus:!1,callback:!1});o[e]&&o[e].onChange&&o[e].onChange.call(t,t,n[i])}}(jQuery);