
### 手写AJAX：
    var xhr = new XMLHttpRequest();
      //
      xhr.open("GET","api",false);
      xhr.onreadyStateChange = function(){
         if(xhr.readyState == 4){
            if(xhr.status == 200){
               alart(xhr.responseText);
            }
         }
      }
      xhr.send(null); 
   

### 创建对象有哪些方式？
(工 构 原 混 动 寄 稳）
1. 工厂模式
2. 构造函数模式
3. 原型模式
4. 混合构造函数和原型模式
5. 动态原型模式
6. 寄生构造函数模式
7. 稳妥构造函数模式

## 闭包不能滥用，否则会导致内存泄露，影响网页的性能。闭包使用完了后，要立即释放资源，将引用变量指向null。


### Ajax 是什么? 如何创建一个Ajax？
我理解Ajax 是一种异步请求数据的一种技术，对于改善用户的体验和程序的性能很有帮助。

### 谈谈你对this的理解？
this是js的一个关键字，随着函数使用场合不同，this的值会发生变化。
但是有一个总原则，那就是this指的是调用函数的那个对象。
this一般情况下：是全局对象Global。 作为方法调用，那么this就是指这个对象

### call() 和 apply() 的区别？
- 相同点：两个方法产生的作用是完全一样的，动态改变某个类的某个方法的运行环境。
- 不同点：调用的参数不同，比较精辟的总结：
>foo.call(this,arg1,arg2,arg3) == foo.apply(this, arguments)==this.foo(arg1, arg2, arg3)

参考：http://blog.csdn.net/myhahaxiao/article/details/6952321

### 创建ajax过程
1. 创建XMLHttpRequest对象,也就是创建一个异步调用对象.
1. 创建一个新的HTTP请求,并指定该HTTP请求的方法、URL及验证信息.
1. 设置响应HTTP请求状态变化的函数.
1. 发送HTTP请求.
1. 获取异步调用返回的数据.
1. 使用JavaScript和DOM实现局部刷新.   

         function startRequest(){   
       createXMLHttpRequest();//第一步: 创建XMLHttpRequest对象,也就是创建一个异步调用对象.  
       xmlHttp.onreadystatechange = handleStateChange;//第二步: 创建一个新的HTTP请求,并指定该HTTP请求的方法、URL及验证信息.  
       xmlHttp.open("GET", "simpleResponse.txt", true);///第三步: 设置响应HTTP请求状态变化的函数.  
       xmlHttp.send(null);//第四步: 发送请求  
   }

### 描述一下 cookies，sessionStorage 和 localStorage 的区别？

sessionStorage用于本地存储一个会话（session）中的数据，这些数据只有在*同一个会话中的页面*才能访问并且当会话结束后数据也随之销毁。因此sessionStorage**不是一种持久化的本地存储**，仅仅是会话级别的存储。

而localStorage用于**持久化**的本地存储，除非主动删除数据，否则数据是永远不会过期的。

Web Storage的概念和cookie相似，区别是它是为了更大容量存储设计的。Cookie的大小是受限的，并且每次你请求一个新的页面的时候Cookie都会被发送过去，这样无形中浪费了带宽，另外cookie还需要指定作用域，不可以跨域调用。

除此之外，Web Storage拥有setItem,getItem,removeItem,clear等方法，不像cookie需要前端开发者自己封装setCookie，getCookie。

但是Cookie也是不可以或缺的：Cookie的作用是与服务器进行交互，作为HTTP规范的一部分而存在 ，而Web Storage仅仅是为了在本地“存储”数据而生

浏览器的支持除了IE７及以下不支持外，其他标准浏览器都完全支持(ie及FF需在web服务器里运行)

localStorage和sessionStorage都具有相同的操作方法，例如setItem、getItem和removeItem等

### 19.说说cookie的弊端和优点？

cookie虽然在持久保存客户端数据提供了方便，分担了服务器存储的负担，但还是有很多局限性的。
第一：每个特定的域名下最多生成20个cookie

1.IE6或更低版本最多20个cookie
2.IE7和之后的版本最后可以有50个cookie。
3.Firefox最多50个cookie
4.chrome和Safari没有做硬性限制
IE和Opera 会清理近期最少使用的cookie，Firefox会随机清理cookie。

cookie的最大大约为4096字节，为了兼容性，一般不能超过4095字节。

IE 提供了一种存储可以持久化用户数据，叫做userData，从IE5.0就开始支持。每个数据最多128K，每个域名下最多1M。这个持久化数据放在缓存中，如果缓存没有清理，那么会一直存在。

优点：极高的扩展性和可用性

1.通过良好的编程，控制保存在cookie中的session对象的大小。
2.通过加密和安全传输技术（SSL），减少cookie被破解的可能性。
3.只在cookie中存放不敏感数据，即使被盗也不会有重大损失。
4.控制cookie的生命期，使之不会永远有效。偷盗者很可能拿到一个过期的cookie。

缺点：
1.`Cookie`数量和长度的限制。每个domain最多只能有20条cookie，每个cookie长度不能超过4KB，否则会被截掉。

2.安全性问题。如果cookie被人拦截了，那人就可以取得所有的session信息。即使加密也与事无补，因为拦截者并不需要知道cookie的意义，他只要原样转发cookie就可以达到目的了。

3.有些状态不可能保存在客户端。例如，为了防止重复提交表单，我们需要在服务器端保存一个计数器。如果我们把这个计数器保存在客户端，那么它起不到任何作用。

### 20.js对象的深度克隆代码实现
 
		function clone(Obj) {
		    var buf;   
		    if (Obj instanceof Array) {
		        buf = [];  // 创建一个空的数组
		        var i = Obj.length;
		        while (i--) {
		            buf[i] = clone(Obj[i]);
		        }
		        return buf;
		    } else if (Obj instanceof Object){
		        buf = {};  // 创建一个空对象
		        for (var k in Obj) {  // 为这个对象添加新的属性
		            buf[k] = clone(Obj[k]);
		        }
		        return buf;
		    }else{
		        return Obj;
		    }
		}

### 21.请你解释一下JS的同源策略，为什么要有同源策略？
概念:同源策略是客户端脚本（尤其是Javascript）的重要的**安全度量标准**。它最早出自Netscape Navigator2.0，其目的是防止某个文档或脚本从多个不同源装载。   
这里的同源策略指的是：协议，域名，端口相同，同源策略是一种安全协议。指一段脚本只能读取来自同一来源的窗口和文档的属性。

我们举例说明：比如一个黑客程序，他利用Iframe把真正的银行登录页面嵌到他的页面上，当你使用真实的用户名，密码登录时，他的页面就可以通过Javascript读取到你的表单中input中的内容，这样用户名，密码就轻松到手了。  
缺点：  
现在网站的JS 都会进行压缩，一些文件用了严格模式，而另一些没有。这时这些本来是严格模式的文件，被 merge 后，这个串就到了文件的中间，不仅没有指示严格模式，反而在压缩后浪费了字节。

### 22.常见WEB安全及防护原理
- SQL注入  
	- 原理：就是通过把SQL命令插入到Web表单递交或输入域名或页面请求的查询字符串，最终达到欺骗服务器执行恶意的SQL命令。  
	- 防护：总的来说有如下。
	
	  > 1.永远不要信任用户的输入，要对用户的输入进行校验，可以通过正则表达式，或限制长度，对单引号和双"-"进行转换等。  
      > 2.永远不要使用动态拼装SQL，可以使用参数化的SQL或者直接使用存储过程进行数据查询存取。   
      > 3.永远不要使用管理员权限的数据库连接，为每个应用使用单独的权限有限的数据库连接。  
      > 4.不要把机密信息明文存放，请加密或者hash掉密码和敏感的信息。

- XSS攻击   

	- 原理：Xss(cross-site scripting)攻击指的是攻击者往Web页面里插入恶意 html标签或者javascript代码。比如：攻击者在论坛中放一个看似安全的链接，骗取用户点击后，窃取cookie中的用户私密信息；或者攻击者在论坛中加一个恶意表单，当用户提交表单的时候，却把信息传送到攻击者的服务器中，而不是用户原本以为的信任站点。
    
	- 防范：
	> 1.首先代码里对用户输入的地方和变量都需要仔细检查长度和对”<”,”>”,”;”,”’”等字符做过滤；
	> 2.其次任何内容写到页面之前都必须加以encode，避免不小心把html tag 弄出来。这一个层面做好，至少可以堵住超过一半的XSS 攻击。   
    > 3.首先，避免直接在cookie 中泄露用户隐私，例如email、密码等等。
    其次，通过使cookie 和系统ip 绑定来降低cookie 泄露后的危险。这样攻击者得到的cookie 没有实际价值，不可能拿来重放。   
    > 4.如果网站不需要再浏览器端对cookie 进行操作，可以在Set-Cookie 末尾加上HttpOnly 来防止javascript 代码直接获取cookie。   
    > 5.尽量采用POST 而非GET 提交表单
    
- CSRF的防御  
	- 服务端的CSRF方式方法很多样，但总的思想都是一致的，就是在客户端页面增加伪随机数。   
    - 通过验证码的方法
      
### 25.什么是 “use strict”? 使用它的好处和坏处是什么？

ECMAscript 5添加了第二种运行模式："严格模式"（strict mode）。顾名思义，这种模式使得Javascript在更严格的条件下运行。

设立"严格模式"的目的，主要有以下几个：

1. 消除Javascript语法的一些不合理、不严谨之处，减少一些怪异行为;
2. 消除代码运行的一些不安全之处，保证代码运行的安全；
3. 提高编译器效率，增加运行速度；
4. 为未来新版本的Javascript做好铺垫。

注：经过测试 IE6,7,8,9 均不支持严格模式。

缺点：   
现在网站的 JS 都会进行压缩，一些文件用了严格模式，而另一些没有。这时这些本来是严格模式的文件，被 merge 后，这个串就到了文件的中间，不仅没有指示严格模式，反而在压缩后浪费了字节。

### 27.如何实现浏览器内多个标签页之间的通信? 

WebSocket、 SharedWorker；     
也可以调用localstorage、 cookies 等本地存储方式；   
localstorage另一个浏览上下文里被添加、修改或删除时，它都会触发一个事件，   

我们通过监听事件，控制它的值来进行页面信息通信；    

注意quirks： Safari 在无痕模式下设置 localstorge 值时会抛出 QuotaExceededError 的异常； 

### 28.事件、IE与火狐的事件机制有什么区别？ 如何阻止冒泡？ 

1. 我们在网页中的某个操作（有的操作对应多个事件）。例如：当我们点击一个按钮就会产生一个事件。是可以被 JavaScript 侦测到的行为
2. 事件处理机制：IE是事件冒泡、firefox同时支持两种事件模型，也就是：捕获型事件和冒泡型事件
3. ev.stopPropagation();
注意旧ie的方法：ev.cancelBubble = true;

### 29.那些操作会造成内存泄漏？

内存泄漏指任何对象在不再拥有或需要它之后仍然存在。
垃圾回收器定期扫描对象，并计算引用了每个对象的其他对象的数量。如果一个对象的引用数量为 0（没有其他对象引用过该对象），或对该对象的惟一引用是循环的，那么该对象的内存即可回收。

1. setTimeout 的第一个参数使用字符串而非函数的话，会引发内存泄漏。
2. 闭包
3. 控制台日志
4. 循环（在两个对象彼此引用且彼此保留时，就会产生一个循环）

### 标准模式和兼容模式各有什么区别？
标准模式的排版 和JS运作模式都是以该浏览器支持的最高标准运行。
兼容模式中，页面以宽松的向后兼容的方式显示,模拟老式浏览器的行为以防止站点无法工作。

### 31.哪些地方会出现css阻塞，哪些地方会出现js阻塞？
 js 的阻塞特性：所有浏览器在下载 JS 的时候，会阻止一切其他活动，比如其他资源的下载，内容的呈现等等。直到 JS 下载、解析、执行完毕后才开始继续并行下载其他资源并呈现内容。为了提高用户体验，新一代浏览器都支持并行下载 JS，但是 JS 下载仍然会阻塞其它资源的下载（例如.图片，css文件等）。       

> 由于浏览器为了防止出现 JS 修改 DOM 树，需要重新构建 DOM 树的情况，所以就会阻塞其他的下载和呈现。   

嵌入 JS 会阻塞所有内容的呈现，
而外部 JS 只会阻塞其后内容的显示，
2 种方式都会阻塞其后资源的下载。也就是说外部样式不会阻塞外部脚本的加载，但会阻塞外部脚本的执行。    

CSS 怎么会阻塞加载了？
CSS 本来是可以并行下载的，在什么情况下会出现阻塞加载了(在测试观察中，IE6 下 CSS 都是阻塞加载）     
当 CSS 后面跟着嵌入的 JS 的时候，该 CSS 就会出现阻塞后面资源下载的情况。而当把嵌入 JS 放到 CSS 前面，就不会出现阻塞的情况了。     
根本原因：因为浏览器会维持 html 中 css 和 js 的顺序，样式表必须在嵌入的 JS 执行前先加载、解析完。而嵌入的 JS 会阻塞后面的资源加载，所以就会出现上面 CSS 阻塞下载的情况。     

嵌入JS应该放在什么位置？     

1. 放在底部，虽然放在底部照样会阻塞所有呈现，但不会阻塞资源下载。
2. 如果嵌入JS放在head中，请把嵌入JS放在CSS头部。
3. 使用 defer（只支持IE）
4. 不要在嵌入的JS中调用运行时间较长的函数，如果一定要用，可以用 setTimeout 来调用

Javascript无阻塞加载具体方式： 
    
1. 将脚本放在底部。<link>还是放在head中，用以保证在js加载前，能加载出正常显示的页面。<script>标签放在</body>前。
2. 阻塞脚本：由于每个<script>标签下载时阻塞页面解析过程，所以限制页面的<script>总数也可以改善性能。适用于内联脚本和外部脚本。
3. 非阻塞脚本：等页面完成加载后，再加载js代码。也就是，在 window.onload 事件发出后开始下载代码。
4. defer属性：支持IE4和fierfox3.5更高版本浏览器
5. 动态脚本元素：文档对象模型（DOM）允许你使用js动态创建HTML的几乎全部文档内容。代码如下：
	
	<script>
	    var script=document.createElement("script");
	    script.type="text/javascript";
	    script.src="file.js";
	    document.getElementsByTagName("head")[0].appendChild(script);
	</script>

此技术的重点在于：无论在何处启动下载，文件额下载和运行都不会阻塞其他页面处理过程，即使在head里（除了用于下载文件的 http 链接）

### 32.ajax 的过程是怎样的？

1. 创建XMLHttpRequest对象,也就是创建一个异步调用对象
2. 创建一个新的HTTP请求,并指定该HTTP请求的方法、URL及验证信息
3. 设置响应HTTP请求状态变化的函数
4. 发送HTTP请求
5. 获取异步调用返回的数据
6. 使用JavaScript和DOM实现局部刷新

### 33.ajax的readystate有5个状态 ，每个状态表示什么？
- 0:未初始化。尚未调用open()方法。
- 1:启动。已经调用open方法，但尚未调用send()方法。
- 2:发送。已经调用send()方法，但尚未接收到响应。
- 3:接收。已经接收到部分响应数据。
- 4:完成。已经接收到全部响应数据，而且可以在客户端使用了。

### 34.简述在IE下mouseover和mouseenter的区别？
当鼠标穿过被选元素或子元素，都会出发mouseover，只有穿过被选元素，才会触发mouseenter。 在IE中，mouseenter子元素不会反复触发事件。

### 37.如何解决跨域问题？
- CORS，跨域资源共享，定义了必须在访问跨域资源时，浏览览器与服务器该如何沟通，基本思想是，使用自定义的HTTP头部让浏览器与服务器进行沟通，从而决定请求或响应是否成功。注意，请求和响应都不包含cookie信息。IE8通过XDomainRequest对象支持CORS，其它浏览器通过XHR对象原生支持CORS。
- 图像Ping，多用于动态创建图像。该方式与服务器进行简单、单向的跨域通信。 它有两个主要缺点，一是只能发送GET请求，二是无法访问服务器的响应文本。
- JSONP，填充式JSON，应用JSON的一种新方法。它是被包含在函数调用中的JSON，例如，callback({“name”:“abc”})； JSONP由两部分组成，毁掉函数和数据。毁掉函数是当响应到来时应该在页面中调用的函数。数据时传入毁掉函数中的JSON数据。
- Comet，是一种服务器向页面推送数据的技术。两种方式可实现，长轮询和流。
- SSE，服务器发送事件。SSE API用于创建到服务器的单向连接，服务器通过这个连接可以发送任意数量的数据。
- Web Sockets API

### 38.js延迟加载的方式有哪些？

1. defer和async
2. 动态创建DOM方式（创建script，插入到DOM中，加载完毕后callBack）
3. 按需异步载入js

### 39.如何判断当前脚本运行在浏览器还是node环境中？
通过判断 Global 对象是否为window，如果不为window，当前脚本没有运行在浏览器中。
即在node中的全局变量是global ,浏览器的全局变量是window。 可以通过该全局变量是否定义来判断宿主环境

### 40.说几条JavaScript的基本规范？
1.不要在同一行声明多个变量。  
2.请使用 ===/!==来比较true/false或者数值   
3.使用对象字面量替代new Array这种形式  
4.不要使用全局函数。  
5.Switch语句必须带有default分支  
6.函数不应该有时候有返回值，有时候没有返回值。  
7.For循环必须使用大括号  
8.If语句必须使用大括号  
9.for-in循环中的变量 应该使用var关键字明确限定作用域，从而避免作用域污染。
### 41.Flash、Ajax各自的优缺点，在使用中如何取舍？

Flash：

1. Flash适合处理多媒体、矢量图形、访问机器
2. 对CSS、处理文本上不足，不容易被搜索

Ajax：

1. Ajax对CSS、文本支持很好，支持搜索
2. 多媒体、矢量图形、机器访问不足

共同点：

1. 与服务器的无刷新传递消息
2. 可以检测用户离线和在线状态
2. 操作DOM

### 45.编程实现函数柯里化
> 函数式编程curry的概念： 只传递给函数一部分参数来调用函数，然后返回一个函数去处理剩下的参数。     
简单的例子如：
		
		function add(num1,num2){
			return num1+num2;
		}
		
		function curriedAdd(num2){
			return add(5,num2);
		}
		
		alert(add(2,3));   //5
		alert(curriedAdd(3));   //8

### 46.web应用从服务器主动推送Data到客户端有哪些方式？
- html5提供的Websocket
- 不可见的iframe
- WebSocket通过Flash
- XHR长时间连接
- XHR Multipart Streaming
- <script\>标签的长时间连接(可跨域)
### 47.是否设计过通用的组件？
请设计一个 Dialog（弹出层） / Suggestion（自动完成） / Slider（图片轮播） 等组件,你会提供什么接口？调用过程是怎样的？可能会遇到什么细节问题？

### 48.用JavaScript脚本为Array对象添加一个去除重复项的方法。（数组去重） 
   
	return Arrays.from(new Set(arr));

### 49.null和undefined的区别？         

null是一个表示"无"的对象，转为数值时为0  
undefined是一个表示"无"的原始值，转为数值时为NaN   

当声明的变量还未被初始化时，变量的默认值为undefined    
null用来表示尚未存在的对象，常用来表示函数企图返回一个不存在的对象    

undefined表示 “缺少值”，就是此处应该有一个值，但是还没有定义。典型用法是：
    
1. 变量被声明了，但没有赋值时，就等于 undefined    
2. 调用函数时，应该提供的参数没有提供，该参数等于 undefined     
3. 对象没有赋值的属性，该属性的值为 undefined    
4. 函数没有返回值时，默认返回 undefined   

null表示“没有对象”，即该处不应该有值。典型用法是：
1. 作为函数的参数，表示该函数的参数不是对象
2. 作为对象原型链的终点
### 50.js实现继承的几种方式？

1. 原型链继承
2. 借用构造函数继承
3. 组合继承(原型+借用构造)
4. 原型式继承
5. 寄生式继承
6. 寄生组合式继承
### 51.webSocket 如何兼容低浏览器？ 

		Adobe Flash Socket 、 ActiveX HTMLFile (IE) 、 基于 multipart 编码发送 XHR 、 基于长轮询的 XHR 
### 52.JS和ECMAScript的区别和联系？
ECMAScript是JavaScript的规范，JavaScript是ECMAScript的实现。
   
s是一种专为与网页交互而设计的脚本语言，由下列三个不同部分组成：  
核心ECMAScript，提供核心语言功能；   
文档对象模型（DOM），提供访问和操作网页内容的方法和接口；   
浏览器对象模型（BOM），提供与浏览器交互的方法和接口。

	function setCookie(name, value, expires, path, domain, secure) {
	   var cookieText = encodeURIComponent(name) + '=' + encodeURIComponent(value);
	   if (expires instanceof Date) {
		cookieText += '; expires=' + expires;
	   }
	   if (path) {
		cookieText += "; path=" + path     }
	   if (domain) {
		cookieText += '; domain=' + domain;
	   }
	   if (secure) {
		cookieText += '; secure';
	   }
	   document.cookie = cookieText;
	}

	function getCookie(name) {
	   var cookieName = encodeURIComponent(name) + '=';
	   var cookieStart = document.cookie.indexOf(cookieName);
	   var cookieValue = null;
	   if(cookieStart > -1){
	      var cookieEnd = document.cookie.indexOf(';', cookieStart);
	      if(cookieEnd == -1){
		 cookieEnd = document.cookie.length;
	      }
	      cookieValue = decodeURIComponent(document.cookie.substring(cookieStart + cookieName.length, cookieEnd));
	   }
	   return cookieValue;
	}

	function unsetCookie(name) {
	   document.cookie = name + "= ; expires=" + new Date(0);
	}
