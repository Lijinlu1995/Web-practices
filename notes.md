
### 手写AJAX：
    var xhr = new XMLHttpRequest();
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

sessionStorage用于本地存储一个会话（session）中的数据，这些数据只有在*同一个会话中的页面*才能访问并且当会话结束后数据也随之销毁。因此sessionStorage*不是一种持久化的本地存储*，仅仅是会话级别的存储。

而localStorage用于*持久化*的本地存储，除非主动删除数据，否则数据是永远不会过期的。

Web Storage的概念和cookie相似，区别是它是为了更大容量存储设计的。Cookie的大小是受限的，并且每次你请求一个新的页面的时候Cookie都会被发送过去，这样无形中浪费了带宽，另外cookie还需要指定作用域，不可以跨域调用。

除此之外，Web Storage拥有setItem,getItem,removeItem,clear等方法，不像cookie需要前端开发者自己封装setCookie，getCookie。

但是Cookie也是不可以或缺的：Cookie的作用是与服务器进行交互，作为HTTP规范的一部分而存在 ，而Web Storage仅仅是为了在本地“存储”数据而生

浏览器的支持除了IE７及以下不支持外，其他标准浏览器都完全支持(ie及FF需在web服务器里运行)，值得一提的是IE总是办好事，例如IE7、IE6中的UserData其实就是javascript本地存储的解决方案。通过简单的代码封装可以统一到所有的浏览器都支持web storage。

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

IE 提供了一种存储可以持久化用户数据，叫做uerData，从IE5.0就开始支持。每个数据最多128K，每个域名下最多1M。这个持久化数据放在缓存中，如果缓存没有清理，那么会一直存在。

优点：极高的扩展性和可用性

1.通过良好的编程，控制保存在cookie中的session对象的大小。
2.通过加密和安全传输技术（SSL），减少cookie被破解的可能性。
3.只在cookie中存放不敏感数据，即使被盗也不会有重大损失。
4.控制cookie的生命期，使之不会永远有效。偷盗者很可能拿到一个过期的cookie。

缺点：
1.`Cookie`数量和长度的限制。每个domain最多只能有20条cookie，每个cookie长度不能超过4KB，否则会被截掉。

2.安全性问题。如果cookie被人拦截了，那人就可以取得所有的session信息。即使加密也与事无补，因为拦截者并不需要知道cookie的意义，他只要原样转发cookie就可以达到目的了。

3.有些状态不可能保存在客户端。例如，为了防止重复提交表单，我们需要在服务器端保存一个计数器。如果我们把这个计数器保存在客户端，那么它起不到任何作用。
      
