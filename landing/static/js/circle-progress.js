$.circleProgress={defaults:{value:0,size:100,startAngle:-Math.PI,thickness:"auto",fill:{gradient:["#3aeabb","#fdd250"]},emptyFill:"rgba(0, 0, 0, .1)",animation:{duration:1200,easing:"circleProgressEasing"}}},$.easing.circleProgressEasing=function(e,t,i,r,a){return(t/=a/2)<1?r/2*t*t*t+i:r/2*((t-=2)*t*t+2)+i},$.fn.circleProgress=function(p){return"widget"==p?this.data("circle-progress"):(p=$.extend({},$.circleProgress.defaults,p),this.each(function(){var i,t,r,a=$(this),n=p.size,s=n/2,l=n/14,o=p.value,c=p.startAngle,g=p.emptyFill,e=($.isNumeric(p.thickness)&&(l=p.thickness),a.data("circle-progress")),d=(e||(e=$("<canvas>").prependTo(a)[0],a.data("circle-progress",e)),e.width=n,e.height=n,e.getContext("2d"));if(!p.fill)throw Error("The fill is not specified!");if(p.fill.color&&(i=p.fill.color),p.fill.gradient){var h=p.fill.gradient;if(1==h.length)i=h[0];else if(1<h.length){for(var f=d.createLinearGradient(0,0,n,0),m=0;m<h.length;m++)f.addColorStop(m/(h.length-1),h[m]);i=f}}function u(e){d.clearRect(0,0,n,n),t=e,d.save(),d.beginPath(),d.arc(s,s,s-l/2,c,c+2*Math.PI*t),d.lineWidth=l,d.strokeStyle=i,d.stroke(),d.restore();var t=e;d.save(),t<1&&(d.beginPath(),t<=0?d.arc(s,s,s-l/2,0,2*Math.PI):d.arc(s,s,s-l/2,c+2*Math.PI*t,c),d.lineWidth=l,d.strokeStyle=g,d.stroke()),d.restore()}p.fill.image&&((t=new Image).src=p.fill.image,t.onload=function(){var e=$("<canvas>")[0];e.width=n,e.height=n,e.getContext("2d").drawImage(t,0,0,n,n),i=d.createPattern(e,"no-repeat"),p.animation||u(o)}),p.animation?(r=o,a.trigger("circle-animation-start"),$(e).css({progress:0}).animate({progress:r},$.extend({},p.animation,{step:function(e){u(e),a.trigger("circle-animation-progress",[e/r,e])},complete:function(){a.trigger("circle-animation-end")}}))):u(o)}))};