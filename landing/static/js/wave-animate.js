$(function(){let a=[];for(var t=0;t<=200;t++)a.push(t);let i=0;!function t(){let n="M"+a.map(t=>[t,10+3*Math.sin((t+i)/4)]).map(t=>t[0]+","+t[1]).join(" L");$("path").each(function(){$(this).attr("d",n)}),i+=.1,requestAnimationFrame(t)}()});