# HTML and CSS

### 盒子模型？
    （1）有两种， IE 盒子模型、标准 W3C 盒子模型；IE的content部分包含了 border 和 pading;

    （2）盒模型： 内容(content)、填充(padding)、边界(margin)、 边框(border).
在网页中，一个元素占有空间的大小由几个部分构成，其中包括元素的内容(content)，元素的内边距(padding)，元素的边框(border)，元素的外边距(margin)四个部分。这四个部分占有的空间中，有的部分可以显示相应的内容，而有的部分只用来分隔相邻的区域或区域。4个部分一起构成了css中元素的盒模型。

###简述一下src和href的区别

href:指向外部资源所在位置，建立和当前元素(锚点)或当前文档(链接)之间的链接，用于超链接。

src:是指向外部资源的位置，指向的内容将会嵌入到文档中当前标签所在位置;在请求src资源时会将其指向的资源下载并应用到文档内，例如js脚本，img图片和frame等元素。当浏览器解析到该元素时，会暂停其他资源的下载和处理，直到将该资源加载、编译、执行完毕，图片和框架等元素也如此，类似于将所指向资源嵌入当前标签内。这也是为什么将js脚本放在底部而不是头部。

### css中如何设置英文首字母大写？
在相应的元素中设置text-transform的属性值为text-transform:capitalize。

### 是否应该支持ie6？
2014年4月，微软就停止了对XP系统和IE6浏览器的支持，已经很多年了，用XP和IE6的用户已经很少很少了。我觉得作为一个前端开发者，不必要一味迁就这些用户，应当适当推动他们改变，这对技术的发展也是有好处的。

### px、em、rem的区别
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
### CSS有哪些继承属性
- 关于文字排版的属性如：
	- font
	- text-align
	- text-shadow(文字阴影)
	- text-transform(控制文本的大小写)
	- text-indent（规定文本块中首行文本的缩进）
	- word-spacing（改变字（单词）之间的标准间隔）
	- letter-spacing（修改字符或字母之间的间隔）
	- word-break（）
- line-height
- color
- visibility
- cursor

### 12.Web前端项目的结构是怎样的？文件有哪些命名规范？
js、css、html、图片、数据文件分类命名。

### 13.css样式书写有哪些规范？
- 书写顺序  
1.位置属性(position, top, right,z-index, display, float等)  
2.大小(width, height, padding,margin)  
3.文字系列(font, line-height,letter-spacing, color- text-align等)   
4.背景(background, border等)      
5.其他(animation, transition等)
- 书写规范
- 命名规范。标签的选择以及class、id属性要符合语义化。
- 注释规范。/* 这样的注释规范 */

### 14.iframe有哪些缺点？

优点：

1. 解决加载缓慢的第三方内容如图标和广告等的加载问题
2. Security sandbox
3. 并行加载脚本

缺点：

1. iframe会阻塞主页面的Onload事件
2. 即时内容为空，加载也需要时间
3. 没有语意

### 15.元素定位有哪些？
position是元素定位属性：

- absolute绝对定位   
相对位置为父元素为非static的第一个父元素进行定位。
- fixed 固定定位（老IE6不支持）   
相对于浏览器窗口进行定位。 
- relative相对定位    
相对于其正常（默认布局）位置进行定位。
-  static   
默认值。没有定位，元素出现在正常的流中（忽略 top, bottom, left, right z-index 声明）  

所有的定位如果left、top、right、bottom属性都为默认值，则为默认定位
absolute定位会脱离文档，浮动起来，多个层重叠可以使用z-index属性改变层叠顺序
absolute定位忽略padding，相对位置为相对定位容器的左上角内边框，

### ::before和：before有什么区别？ 

- 相同点  
    - 都可以用来表示伪类对象，用来设置对象前的内容       
	- :befor和::before写法是等效的
- 不同点   
	- :befor是Css2的写法，::before是Css3的写法   
    - :before的兼容性要比::before好 ，不过在H5开发中建议使用::before比较好
    
### 17.CSS的优先级是怎样的？
!important>id>class>tap

### 18.如何居中一个元素？
- 元素水平居中的方式
	- 行级元素水平居中对齐：在父元素中设置一个text-align:center;
	- 块级元素水平居中对齐：父元素设置text-align:center，该元素自身设置为margin:0 auto;
	- 浮动元素水平居中对齐：
		- 可以在外层加一个div，外层的div采用margin居中，里层的div设置宽度为100%。
		- 设置当前div的宽度，然后设置margin-left:50%; position:relative; left:-250px;其中的left是宽度的一半。
- 元素垂直居中对齐
	- 行级元素垂直居中：对行级元素垂直居中（heiht与line-height的值一样）
	- 块级元素垂直居中：
		- 父元素高度固定:父元素的height与line-height值相同;需要垂直居中的元素
			> vertical-align:middle;// 垂直居中对齐     
 			display:inline|inline-block //块级元素转行级元素   
		- 父元素高度不固定：设置父元素的padding-top和padding-bottom一样 
		
### 19.为什么要初始化样式？
因为浏览器的兼容的问题，不同浏览器有些标签的默认值是不同的，如果没有CSS初始化往往会出现浏览器之间的

### 20.用纯CSS创建一个三角形的原理是什么？
border：分别设置上下左右border属性，然后将其他的border设置为transparent。

### 21.CSS样式-如何清除元素浮动？
1、clear:both；  
2、overflow:hidden；   
3、浮动父元素；   
4、在浮动元素的后面添加一个去除浮动的元素。  


### 22.CSS3有哪些新特性？

1. CSS3实现圆角（border-radius），阴影（box-shadow），
2. 对文字加特效（text-shadow、），线性渐变（gradient），旋转（transform）
3. transform:rotate(9deg) scale(0.85,0.90) translate(0px,-30px) skew(-9deg,0deg);// 旋转,缩放,定位,倾斜
4. 增加了更多的CSS选择器  多背景 rgba
5. 在CSS3中唯一引入的伪类是 ::selection.
6. 媒体查询，多栏布局
7. border-image

### 23.html5有哪些新特性、移除了那些元素？

新特性：   
HTML5 现在已经不是 SGML 的子集，主要是关于图像，位置，存储，多任务等功能的增加。

1. 拖拽释放(Drag and drop) API 
2. 语义化更好的内容标签（header,nav,footer,aside,article,section）
3. 音频、视频API(audio,video)
4. 画布(Canvas) API
5. 地理(Geolocation) API
6. 本地离线存储 localStorage 长期存储数据，浏览器关闭后数据不丢失；
7. sessionStorage 的数据在浏览器关闭后自动删除
8. 表单控件，calendar、date、time、email、url、search  
9. 新的技术webworker, websocket, Geolocation

移除的元素：   

1. 纯表现的元素：basefont，big，center，font, s，strike，tt，u；
2. 对可用性产生负面影响的元素：frame，frameset，noframes；

支持HTML5新标签：   
  
1. IE8/IE7/IE6支持通过 document.createElement 方法产生的标签，可以利用这一特性让这些浏览器支持 HTML5 新标签，浏览器支持新标签后，还需要添加标签默认的样式（当然最好的方式是直接使用成熟的框架、使用最多的是html5shiv框架）：  
	
		<!--[if lt IE 9]> 
		<script> src="http://html5shiv.googlecode.com/svn/trunk/html5.js"</script> 
		<![endif]--> 

如何区分： 
DOCTYPE声明新增的结构元素、功能元素


### 24.img标签上title和alt属性的区别是什么？
alt当图片不显示时是文字代表  
title为该属性提供信息
### 25.页面优化有哪些方法？
- 代码层面：避免使用css表达式，避免使用高级选择器，通配选择器。
- 缓存利用：缓存Ajax，使用CDN，使用外部js和css文件以便缓存，添加Expires头，服务端配置Etag，减少DNS查找等
- 请求数量：合并样式和脚本，使用css图片精灵，初始首屏之外的图片资源按需加载，静态资源延迟加载。
- 请求带宽：压缩文件，开启GZIP，
- 代码层面的优化  
   - 用hash-table来优化查找  
   - 少用全局变量
   - 用innerHTML代替DOM操作，减少DOM操作次数，优化javascript性能
   - 用setTimeout来避免页面失去响应
   - 缓存DOM节点查找的结果
	- 避免使用CSS Expression
	- 避免全局查询
	- 避免使用with(with会创建自己的作用域，会增加作用域链长度)
	- 多个变量声明合并
	- 避免图片和iFrame等的空Src。空Src会重新加载当前页面，影响速度和效率
	- 尽量避免写在HTML标签中写Style属性
