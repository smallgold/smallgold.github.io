```javascript
// 直接获取调用后台返回的函数名称
/* function IPCallBack(json) {
    console.log(json)
}
window.onload = function () {
    var script = document.createElement('script');
    script.src = "http://whois.pconline.com.cn/ipJson.jsp";
    document.body.appendChild(script)
} */

// 告诉后台你的函数名称
function somename(json) {
    console.log(json)
}
window.onload = function () {
    var script = document.createElement('script');
    script.src = "http://whois.pconline.com.cn/ipJson.jsp?callback=somename";
    document.body.appendChild(script)
}
```