!function(r,c){r.fn.quicksearch=function(e,t){var s,o,u,n,h="",i=this,l=r.extend({delay:100,selector:null,stripeRows:null,loader:null,noResults:"",matchedResultsCount:0,bind:"keyup",onBefore:function(){},onAfter:function(){},show:function(){this.style.display=""},hide:function(){this.style.display="none"},prepareQuery:function(t){return t.toLowerCase().split(" ")},testQuery:function(t,e,s){for(var n=0;n<t.length;n+=1)if(-1===e.indexOf(t[n]))return!1;return!0}},t);return this.go=function(){for(var t=0,e=0,s=!0,n=l.prepareQuery(h),i=0===h.replace(" ","").length,t=0,r=u.length;t<r;t++)i||l.testQuery(n,o[t],u[t])?(l.show.apply(u[t]),s=!1,e++):l.hide.apply(u[t]);return s?this.results(!1):(this.results(!0),this.stripe()),this.matchedResultsCount=e,this.loader(!1),l.onAfter(),this},this.search=function(t){h=t,i.trigger()},this.currentMatchedResults=function(){return this.matchedResultsCount},this.stripe=function(){var e,s;return"object"==typeof l.stripeRows&&null!==l.stripeRows&&(e=l.stripeRows.join(" "),s=l.stripeRows.length,n.not(":hidden").each(function(t){r(this).removeClass(e).addClass(l.stripeRows[t%s])})),this},this.strip_html=function(t){t=t.replace(new RegExp("<[^<]+>","g"),"");return t=r.trim(t.toLowerCase())},this.results=function(t){return"string"==typeof l.noResults&&""!==l.noResults&&(t?r(l.noResults).hide():r(l.noResults).show()),this},this.loader=function(t){return"string"==typeof l.loader&&""!==l.loader&&(t?r(l.loader).show():r(l.loader).hide()),this},this.cache=function(){n=r(e),"string"==typeof l.noResults&&""!==l.noResults&&(n=n.not(l.noResults));var t="string"==typeof l.selector?n.find(l.selector):r(e).not(l.noResults);return o=t.map(function(){return i.strip_html(this.innerHTML)}),u=n.map(function(){return this}),h=h||this.val()||"",this.go()},this.trigger=function(){return this.loader(!0),l.onBefore(),c.clearTimeout(s),s=c.setTimeout(function(){i.go()},l.delay),this},this.cache(),this.results(!0),this.stripe(),this.loader(!1),this.each(function(){r(this).on(l.bind,function(){h=r(this).val(),i.trigger()})})}}(jQuery,this,document);