!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):"object"==typeof module&&module.exports?module.exports=t(require("jquery")):t(jQuery)}(function(d){function t(){for(var t=l.scrollTop(),e=h.height(),i=e-g,n=i<t?i-t:0,r=0,s=u.length;r<s;r++){var o,c,p=u[r],a=p.stickyWrapper.offset().top-p.topSpacing-n;p.stickyWrapper.css("height",p.stickyElement.outerHeight()),t<=a?null!==p.currentTop&&(p.stickyElement.css({width:"",position:"",top:"","z-index":""}),p.stickyElement.parent().removeClass(p.className),p.stickyElement.trigger("sticky-end",[p]),p.currentTop=null):((a=e-p.stickyElement.outerHeight()-p.topSpacing-p.bottomSpacing-t-n)<0?a+=p.topSpacing:a=p.topSpacing,p.currentTop!==a&&(p.getWidthFrom?o=d(p.getWidthFrom).width()||null:p.widthFromWrapper&&(o=p.stickyWrapper.width()),null==o&&(o=p.stickyElement.width()),p.stickyElement.css("width",o).css("position","fixed").css("top",a).css("z-index",p.zIndex),p.stickyElement.parent().addClass(p.className),null===p.currentTop?p.stickyElement.trigger("sticky-start",[p]):p.stickyElement.trigger("sticky-update",[p]),p.currentTop===p.topSpacing&&p.currentTop>a||null===p.currentTop&&a<p.topSpacing?p.stickyElement.trigger("sticky-bottom-reached",[p]):null!==p.currentTop&&a===p.topSpacing&&p.currentTop<a&&p.stickyElement.trigger("sticky-bottom-unreached",[p]),p.currentTop=a),c=p.stickyWrapper.parent(),p.stickyElement.offset().top+p.stickyElement.outerHeight()>=c.offset().top+c.outerHeight()&&p.stickyElement.offset().top<=p.topSpacing?p.stickyElement.css("position","absolute").css("top","").css("bottom",0).css("z-index",""):p.stickyElement.css("position","fixed").css("top",a).css("bottom","").css("z-index",p.zIndex))}}function e(){g=l.height();for(var t=0,e=u.length;t<e;t++){var i=u[t],n=null;i.getWidthFrom?i.responsiveWidth&&(n=d(i.getWidthFrom).width()):i.widthFromWrapper&&(n=i.stickyWrapper.width()),null!=n&&i.stickyElement.css("width",n)}}var i=Array.prototype.slice,n=Array.prototype.splice,o={topSpacing:0,bottomSpacing:0,className:"is-sticky",wrapperClassName:"sticky-wrapper",center:!1,getWidthFrom:"",widthFromWrapper:!0,responsiveWidth:!1,zIndex:"auto"},l=d(window),h=d(document),u=[],g=l.height(),c={init:function(s){return this.each(function(){var t=d.extend({},o,s),e=d(this),i=e.attr("id"),n=i?i+"-"+o.wrapperClassName:o.wrapperClassName,r=d("<div></div>").attr("id",n).addClass(t.wrapperClassName),i=(e.wrapAll(function(){if(0==d(this).parent("#"+n).length)return r}),e.parent());t.center&&i.css({width:e.outerWidth(),marginLeft:"auto",marginRight:"auto"}),"right"===e.css("float")&&e.css({float:"none"}).parent().css({float:"right"}),t.stickyElement=e,t.stickyWrapper=i,t.currentTop=null,u.push(t),c.setWrapperHeight(this),c.setupChangeListeners(this)})},setWrapperHeight:function(t){var t=d(t),e=t.parent();e&&e.css("height",t.outerHeight())},setupChangeListeners:function(e){window.MutationObserver?new window.MutationObserver(function(t){(t[0].addedNodes.length||t[0].removedNodes.length)&&c.setWrapperHeight(e)}).observe(e,{subtree:!0,childList:!0}):window.addEventListener?(e.addEventListener("DOMNodeInserted",function(){c.setWrapperHeight(e)},!1),e.addEventListener("DOMNodeRemoved",function(){c.setWrapperHeight(e)},!1)):window.attachEvent&&(e.attachEvent("onDOMNodeInserted",function(){c.setWrapperHeight(e)}),e.attachEvent("onDOMNodeRemoved",function(){c.setWrapperHeight(e)}))},update:t,unstick:function(t){return this.each(function(){for(var t=d(this),e=-1,i=u.length;0<i--;)u[i].stickyElement.get(0)===this&&(n.call(u,i,1),e=i);-1!==e&&(t.unwrap(),t.css({width:"",position:"",top:"",float:"","z-index":""}))})}};window.addEventListener?(window.addEventListener("scroll",t,!1),window.addEventListener("resize",e,!1)):window.attachEvent&&(window.attachEvent("onscroll",t),window.attachEvent("onresize",e)),d.fn.sticky=function(t){return c[t]?c[t].apply(this,i.call(arguments,1)):"object"!=typeof t&&t?void d.error("Method "+t+" does not exist on jQuery.sticky"):c.init.apply(this,arguments)},d.fn.unstick=function(t){return c[t]?c[t].apply(this,i.call(arguments,1)):"object"!=typeof t&&t?void d.error("Method "+t+" does not exist on jQuery.sticky"):c.unstick.apply(this,arguments)},d(function(){setTimeout(t,0)})});