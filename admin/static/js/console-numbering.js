$("#console-pad").keyup(function(e){-1!=$(this).val().lastIndexOf("\n")&&(x=$(this).val().split("\n")),"13"==e.keyCode?$(".console-numbers").append("<li>"+x.length+"</li>"):"8"==e.keyCode&&$(".console-numbers li").size()>x.length&&$(".console-numbers li:last-child").remove()});