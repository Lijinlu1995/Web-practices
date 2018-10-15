# HTML and CSS

### 1.什么是盒子模型？
    （1）有两种， IE 盒子模型、标准 W3C 盒子模型；IE的content部分包含了 border 和 pading;

    （2）盒模型： 内容(content)、填充(padding)、边界(margin)、 边框(border).
在网页中，一个元素占有空间的大小由几个部分构成，其中包括元素的内容(content)，元素的内边距(padding)，元素的边框(border)，元素的外边距(margin)四个部分。这四个部分占有的空间中，有的部分可以显示相应的内容，而有的部分只用来分隔相邻的区域或区域。4个部分一起构成了css中元素的盒模型。

###简述一下src和href的区别

href:指向外部资源所在位置，建立和当前元素(锚点)或当前文档(链接)之间的链接，用于超链接。

src:是指向外部资源的位置，指向的内容将会嵌入到文档中当前标签所在位置;在请求src资源时会将其指向的资源下载并应用到文档内，例如js脚本，img图片和frame等元素。当浏览器解析到该元素时，会暂停其他资源的下载和处理，直到将该资源加载、编译、执行完毕，图片和框架等元素也如此，类似于将所指向资源嵌入当前标签内。这也是为什么将js脚本放在底部而不是头部。

### css中如何设置英文首字母大写？
在相应的元素中设置text-transform的属性值为text-transform:capitalize。

### 4.是否应该支持ie6？
2014年4月，微软就停止了对XP系统和IE6浏览器的支持，已经很多年了，用XP和IE6的用户已经很少很少了。我觉得作为一个前端开发者，不必要一味迁就这些用户，应当适当推动他们改变，这对技术的发展也是有好处的。
### 5.px、em、rem的区别
- px是相对于显示器的像素而言的；em是相对于当前对象内的字体尺寸而言，如果行内字体大小没有被设置，则是默认相对于浏览器字体尺寸；而rem是相对于根元素字体的大小而言。
- 1em = 16px，1rem = 16px。为什么是这样，因为所有未经调整的浏览器字体大小都是16px；
- IE9及以上的版本兼容rem。
### 6.写出几种解决IE6Bug的方法

1.双边距BUG float引起的 使用display  
2.像素问题 使用float引起的 使用dislpay:inline -3px  
3.超链接hover 点击后失效 使用正确的书写顺序 link visited hover active  
4.Ie z-index问题 给父级添加position:relative  
5.Png 透明 使用js代码改  
6.Min-height 最小高度 !Important 解决  
7.select 在ie6下遮盖 使用iframe嵌套  
8.为什么没有办法定义1px左右的宽度容器(IE6默认的行高造成的，使用over:hidden,zoom:0.08 line-height:1px)
### 7.css的引入方式有哪些?link和@import的区别是什么?
引入方式有：内嵌 、内联 、嵌入
link是HTML的方法，@import是CSS的方法。
同时加载前者无兼容性，后者CSS2.1以下浏览器不支持；Link 支持使用javascript改变样式，后者不可。
### 8.对WEB标准以及W3C的理解和认识
WEB标准不是某一个标准，而是一系列标准的集合。目前所通常所说的WEB标准一般指网站建设采用基于XHTML语言的网站设计语言,WEB标准中典型的应用模式是“css+div”(什么是css+div)。实际上，WEB标准并不是某一个标准，而是一系列标准的集合。

WEB标准不是某一个标准，而是一系列标准的集合。目前所通常所说的WEB标准一般指网站建设采用基于XHTML语言的网站设计语言,WEB标准中典型的应用模式是“css+div”(什么是css+div)。实际上，WEB标准并不是某一个标准，而是一系列标准的集合。

### 9.页面渲染的原理是什么？

1. 渲染引擎开始解析html，根据标签构建DOM节点
1. 根据css样式构建渲染树，包括元素的大小、颜色，隐藏的元素不会被构建到该树中。
1. 根据css样式构建布局树，主要是确定元素要显示的位置。
1. 根据前面的信息，绘制渲染树。

### 10.页面优化有哪些方法？
可遵循雅虎军规。

- 请求HTTP请求：合并文件、CSS精灵、inline Image   
- 减少DNS查询
	- DNS查询完成之前浏览器不能从这个主机下载任何任何文件。方法：DNS缓存、将资源分布到恰当数量的主机名，平衡并行下载和DNS查询   
- 避免重定向：多余的中间访问 
	- 重定向状态码：302Found被找到了，但不在原来的地址，临时重定向
	- 状态码：301Move Permanently 永久重定向
	- 对用户来说，301、302没有区别；对搜索引擎来说，区别很大
- 使Ajax可缓存  
- 非必须组件延迟加载  
- 未来所需组件预加载  
- 减少DOM元素数量  
优化DOM操作的方式：  
1.1 用cssText来合并多次DOM操作。

		var el = document.getElementById('mydiv');   
		el.style.borderLeft = '1px';   
		el.style.borderRight = '2px';   
		el.style.padding = '5px';  
改为：

		var el = document.getElementById('mydiv');   
		l.style.cssText = 'border-left: 1px; border-right: 2px; padding: 5px;';  
1.2 将需要多次重排的元素position设置为absolute和fixed,这样元素就脱离了文档流，它的变化就不会影响其他元素的渲染。例如针对有动画效果的元素。   
1.3 减少对DOM元素的查询和修改，查询时可将其赋值给局部变量。   

		 divUpdate.innerHTML = "";
		 for ( var i=0; i<100; i++ )
		 {
		  divUpdate.innerHTML += "<SPAN>This is a slower method! </SPAN>";
		 }
改成：
- 将资源放到不同的域下：浏览器同时从一个域下载资源的数目有限，增加域可以提高并行下载量  
- 减少iframe数量  
- 不要404
  
Server方面    

- 使用CDN  
	内容分发网络，就近使用服务器获得资源，减少网络拥塞。
- 添加Expires或者Cache-Control响应头  
	- 当服务器开启了expire模块的时候，浏览器发送请求，服务器机会返回一个带expire的http请求头
	- expire头的值是一个时间值，值就是资源在本地的过期时间、存在本地、在本地缓存阶段，找到一个对应的资源值，当前时间还没超过资源的过期时间，就直接使用这一个资源，不会发送http请求。
	- cache-control和expires类似，但是有更多的选项值。
	
- 对组件使用Gzip压缩  
    - 本地压缩
    - 服务器压缩
- 配置实体标签ETag  
- Flush Buffer Early   
- Ajax使用GET进行请求  
- 避免空src的img标签  
- Cookie方面  
- 减小cookie大小  
- 引入资源的域名不要包含cookie 
 
css方面     
       
- 将样式表放到页面顶部  
- 不使用CSS表达式 
	 - css表达式：就是将CSS和javascript联系起来。
- 使用不使用@import  
- 不使用IE的Filter 
 
Javascript方面 
 
- 将脚本放到页面底部  
- 将javascript和css从外部引入 
	- 提高了复用性
	- 减少页面体积
	- 提高了可维护性
	- 利大于弊，缺点是页面的渲染速度有下降  
- 压缩javascript和css
	- 在正式上线项目之前，将js和CSS都进行压缩，使线上版本是最轻量的。  
- 删除不需要的脚本  
- 减少DOM访问  
- 合理设计事件监听器
  
图片方面 
 
- 优化图片：根据实际颜色需要选择色深、压缩  
- 优化css精灵  
- 不要在HTML中拉伸图片  
- 保证favicon.ico小并且可缓存 
 
移动方面
 
- 保证组件小于25k
