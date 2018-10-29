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
	
### 26.常见的兼容性问题
- png24位的图片在iE6浏览器上出现背景，解决方案是做成PNG8.
- 浏览器默认的margin和padding不同。解决方案是加一个全局的*{margin:0;padding:0;}来统一。  
- IE6双边距bug:块属性标签float后，又有横行的margin情况下，在ie6显示margin比设置的大。
浮动ie产生的双倍距离 #box{ float:left; width:10px; margin:0 0 0 100px;}
这种情况之下IE会产生20px的距离，解决方案是在float的标签样式控制中加入 ——_display:inline;将其转化为行内属性。(_这个符号只有ie6会识别)
渐进识别的方式，从总体中逐渐排除局部。  
首先，巧妙的使用“\9”这一标记，将IE游览器从所有情况中分离出来。 接着，再次使用“+”将IE8和IE7、IE6分离开来，这样IE8已经独立识别。  
css        
 >     .bb{
       background-color:#f1ee18;/*所有识别*/   
      .background-color:#00deff\9; /*IE6、7、8识别*/   
      +background-color:#a200ff;/*IE6、7识别*/   
      _background-color:#1e0bd1;/*IE6识别*/
      }

- IE下,可以使用获取常规属性的方法来获取自定义属性,
也可以使用getAttribute()获取自定义属性;
Firefox下,只能使用getAttribute()获取自定义属性.
解决方法:统一通过getAttribute()获取自定义属性.
- IE下,even对象有x,y属性,但是没有pageX,pageY属性; Firefox下,event对象有pageX,pageY属性,但是没有x,y属性.
- 解决方法：（条件注释）缺点是在IE浏览器下可能会增加额外的HTTP请求数。
- Chrome 中文界面下默认会将小于 12px 的文本强制按照 12px 显示, 可通过加入 CSS 属性 -webkit-text-size-adjust: none; 解决.
超链接访问过后hover样式就不出现了 被点击访问过的超链接样式不在具有hover和active了解决方法是改变CSS属性的排列顺序:L-V-H-A : a:link {} a:visited {} a:hover {} a:active {}

### 27.你知道什么是CSS reset么？
reset重置浏览器的CSS默认属性，浏览器的品种不同、样式不同，然后重置，让他们统一。

### 28.圣杯布局、双飞翼布局
- 圣杯布局和双飞翼布局是一回事，都是实现三栏布局，左右两栏宽度固定，中间盒子自适应。它们实现的效果是一样的，差别在于其实现的效果。       
- 圣杯布局起源于一篇文章，双飞翼布局源于淘宝的UED。

### 29.CSS选择符有哪些？哪些属性可以继承？优先级算法如何计算？CSS3新增伪类有哪些？
1.id选择器（ # myid）  
2.类选择器（.myclassname）  
3.标签选择器（div, h1, p）  
4.相邻选择器（h1 + p）  
5.子选择器（ul > li）  
6.后代选择器（li a）  
7.通配符选择器（ * ）  
8.属性选择器（a[rel = "external"]）  
9.伪类选择器（a: hover, li: nth - child）   
可继承的样式： font-size font-family color, UL LI DL DD DT;
不可继承的样式：border padding margin width height;  
优先级就近原则，同权重情况下样式定义最近者为准;
载入样式以最后载入的定位为准;
优先级为:
      !important >  id > class > tag

      important 比 内联优先级高
CSS3新增伪类举例：

    p:first-of-type    选择属于其父元素的首个 <p> 元素的每个 <p> 元素。
    p:last-of-type    选择属于其父元素的最后 <p> 元素的每个 <p> 元素。
    p:only-of-type    选择属于其父元素唯一的 <p> 元素的每个 <p> 元素。
    p:only-child    选择属于其父元素的唯一子元素的每个 <p> 元素。
    p:nth-child(2)    选择属于其父元素的第二个子元素的每个 <p> 元素。
    :enabled  :disabled 控制表单控件的禁用状态。
    :checked        单选框或复选框被选中
    
### 30.前端要注意的SEO有哪些？
- 合理的title、description、keywords：搜索对着三项的权重逐个减小，title值强调重点即可，重要关键词出现不要超过2次，而且要靠前，不同页面title要有所不同；
- description把页面内容高度概括，长度合适，不可过分堆砌关键词，不同页面description有所不同；
- keywords列举出重要关键词即可
- 语义化的HTML代码，符合W3C规范：语义化代码让搜索引擎容易理解网页
- 重要内容HTML代码放在最前：搜索引擎抓取HTML顺序是从上到下，有的搜索引擎对抓取长度有限制，保证重要内容一定会被抓取
- 重要内容不要用js输出：爬虫不会执行js获取内容
- 少用iframe：搜索引擎不会抓取iframe中的内容
- 非装饰性图片必须加alt
- 提高网站速度：网站速度是搜索引擎排序的一个重要指标
### 31.什么是WEB语义化？
用正确的标签做正确的事情！
   html语义化就是让页面的内容结构化，便于对浏览器、搜索引擎解析；
   在没有样式CCS情况下也以一种文档格式显示，并且是容易阅读的。
   搜索引擎的爬虫依赖于标记来确定上下文和各个关键字的权重，利于 SEO。
   使阅读源代码的人对网站更容易将网站分块，便于阅读维护理解。

- web语义化是指通过HTML标记表示页面包含的信息，包含了HTML标签的语义化和css命名的语义化。
- HTML标签的语义化是指：通过使用包含语义的标签（如h1-h6）恰当地表示文档结构 

- css命名的语义化是指：为html标签添加有意义的class，id补充未表达的语义，如Microformat通过添加符合规则的class描述信息 
- 为什么需要语义化：  
去掉样式后页面呈现清晰的结构
盲人使用读屏器更好地阅读
搜索引擎更好地理解页面，有利于收录
便团队项目的可持续运作及维护
### 32.doctype是什么,HTML5为什么只需要写<!DOCTYPE html>
<!DOCTYPE>声明位于位于HTML文档中的第一行，处于 <html> 标签之前。告知浏览器的解析器用什么文档标准解析这个文档。DOCTYPE不存在或格式不正确会导致文档以兼容模式呈现。

HTML5 不基于 SGML，因此不需要对DTD进行引用，但是需要doctype来规范浏览器的行为（让浏览器按照它们应该的方式来运行）；
而HTML4.01基于SGML,所以需要对DTD进行引用，才能告知浏览器文档所使用的文档类型。


### 33.css hack原理及常用hack
由于不同的浏览器和浏览器各版本对CSS的支持及解析结果不一样，以及CSS优先级对浏览器展现效果的影响，我们可以据此针对不同的浏览器情景来应用不同的CSS。
### 34.css sprite是什么,有什么优缺点
概念：将多个小图片拼接到一个图片中。通过background-position和元素尺寸调节需要显示的背景图案。减少服务器对图片的请求数量。      
优点：

- 减少HTTP请求数，极大地提高页面加载速度
- 增加图片信息重复度，提高压缩比，减少图片大小
- 更换风格方便，只需在一张或几张图片上修改颜色或样式即可实现   

缺点：
 
- 图片合并麻烦
- 维护麻烦，修改一个图片可能需要从新布局整个图片，样式
### 35.渐进增强和平稳退化
渐进增强 progressive enhancement：针对低版本浏览器进行构建页面，保证最基本的功能，然后再针对高级浏览器进行效果、交互等改进和追加功能达到更好的用户体验。

优雅降级 graceful degradation：一开始就构建完整的功能，然后再针对低版本浏览器进行兼容。    
    
区别：优雅降级是从复杂的现状开始，并试图减少用户体验的供给，而渐进增强则是从一个非常基础的，能够起作用的版本开始，并不断扩充，以适应未来环境的需要。降级（功能衰减）意味着往回看；而渐进增强则意味着朝前看，同时保证其根基处于安全地带。.
### 36.display: none;与visibility: hidden;的区别
区别：
     
1. display:none;会让元素完全从渲染树中消失，渲染的时候不占据任何空间；visibility: hidden;不会让元素从渲染树消失，渲染师元素继续占据空间，只是内容不可见   
1. display: none;是非继承属性，子孙节点消失由于元素从渲染树消失造成，通过修改子孙节点属性无法显示；visibility: hidden;是继承属性，子孙节点消失由于继承了hidden，通过设置visibility: visible;可以让子孙节点显式  
1. 修改常规流中元素的display通常会造成文档重排。修改visibility属性只会造成本元素的重绘。   
1. 读屏器不会读取display: none;元素内容；会读取visibility: hidden;元素内容
### 37.什么是BFC?如何实现？

(1)、什么是BFC与IFC   

a、BFC（Block Formatting Context）即“块级格式化上下文”， IFC（Inline Formatting Context）即行内格式化上下文。常规流（也称标准流、普通流）是一个文档在被显示时最常见的布局形态。一个框在常规流中必须属于一个格式化上下文，你可以把BFC想象成一个大箱子，箱子外边的元素将不与箱子内的元素产生作用。  

b、BFC是W3C CSS 2.1 规范中的一个概念，它决定了元素如何对其内容进行定位，以及与其他元素的关系和相互作用。当涉及到可视化布局的时候，Block Formatting Context提供了一个环境，HTML元素在这个环境中按照一定规则进行布局。一个环境中的元素不会影响到其它环境中的布局。比如浮动元素会形成BFC，浮动元素内部子元素的主要受该浮动元素影响，两个浮动元素之间是互不影响的。也可以说BFC就是一个作用范围。   

c、在普通流中的 Box(框) 属于一种 formatting context(格式化上下文) ，类型可以是 block ，或者是 inline ，但不能同时属于这两者。并且， Block boxes(块框) 在 block formatting context(块格式化上下文) 里格式化， Inline boxes(块内框) 则在 Inline Formatting Context(行内格式化上下文) 里格式化。   

(2)、如何产生BFC   
     
当一个HTML元素满足下面条件的任何一点，都可以产生Block Formatting Context： 
  
	a、float的值不为none    
	b、overflow的值不为visible   
	c、display的值为table-cell, table-caption, inline-block中的任何一个    
	d、position的值不为relative和static

CSS3触发BFC方式则可以简单描述为：在元素定位非static，relative的情况下触发，float也是一种定位方式。

(3)、BFC的作用与特点     
a、不和浮动元素重叠，清除外部浮动，阻止浮动元素覆盖

如果一个浮动元素后面跟着一个非浮动的元素，那么就会产生一个重叠的现象。常规流（也称标准流、普通流）是一个文档在被显示时最常见的布局形态，当float不为none时，position为absolute、fixed时元素将脱离标准流。



### 38.行内元素有哪些？块级元素有哪些？空元素有哪些？
首先：CSS规范规定，每个元素都有display属性，确定该元素的类型，每个元素都有默认的display值，如div的display默认值为“block”，则为“块级”元素；span默认display属性值为“inline”，是“行内”元素。

    （1）行内元素有：a b span img input select strong（强调的语气）
    （2）块级元素有：div ul ol li dl dt dd h1 h2 h3 h4…p
    （3）常见的空元素：
        <br> <hr> <img> <input> <link> <meta>
        鲜为人知的是：
        <area> <base> <col> <command> <embed> <keygen> <param> <source> <track> <wbr>

### 39.documen.write和 innerHTML的区别
document.write只能重绘整个页面，innerHTML可以重绘页面的一部分

### 40.XHTMl与HTMl的区别
HTML是一种基本的WEB网页设计语言，XHTML是一个基于XML的置标语言
最主要的不同： 
 
- XHTML 元素必须被正确地嵌套。  
- XHTML 元素必须被关闭。  
- 标签名必须用小写字母。  
- XHTML 文档必须拥有根元素。  
### 41. 前端页面有哪三层构
	- 发送包含未知字符的用户输入时，POST 比 GET 更稳定也更成，分别是什么?作用是什么?
- 结构层 Html   
- 表示层 CSS   
- 行为层 js

### 42.用什么管理代码？
git,svn
### 43.CSS和JS的压缩办法？
用前端构建工具gulpjs压缩。
### 44.解释下 CSS sprites，以及你要如何在页面或网站中使用它。
CSS Sprites 其实就是把网页中一些背景图片整合到一张图片文件中，再利用 CSS 的"background-image"，"background-repeat"，"background-position" 的组合进行背景定位，background-position 可以用数字能精确的定位出背景图片的位置。这样可以减少很多图片请求的开销，因为请求耗时比较长；请求虽然可以并发，但是也有限制，一般浏览器都是6个。对于未来而言，就不需要这样做了，因为有了 http2。

### 44.Media Queries是否通过设备类型、设备宽度来过滤设备
CSS3的MediaQueries可以帮助设计师获取以下数据：

1. 浏览器的窗口的宽度和高度，
2. 设备的宽和高；
3. 设备的手持方面，横向还是竖向；
4. 分辨率；

### 45.了解过flex布局吗？说说它和传统布局的有何不同？
flexbox是position的一个属性，

## 46.title与h1的区别、b与strong的区别、i与em的区别？
- title和h1的区别
	- title在网站的标签上显示，告诉搜索引擎网站的主题，h1一般用于文章的标题。
	- h1强调文章，突出视觉效果，title用于突出网页主体信息。
- b与strong的区别
	- b和strong的视觉效果是一样的
	- b仅仅强调样式，强调视觉，而strong是为了加强语气，提醒读者注意。
- i与em的区别
	- i和em的视觉效果也是一样的
	- i是强调视觉，em是强调主题。
### 47.网页验证码是干嘛的，是为了解决什么安全问题？
防止恶意脚本的执行，网页验证码有不容易被计算机识别的图像。
### 48.浏览器的标准模式、怪异模式。
标准模式：依照W3C标准模式，content不包含padding值和border值。   
怪异模式：如果忽略文档声明Doctype,IE浏览器就会按照IE盒子模型来渲染页面，就是说，如果设置width，height属性，那么在ie浏览器上面，会把padding、border算在上面。

### 49.box-sizing的属性？
设置或检索对象的盒模型组成模式

- box-sizing:content-box： padding和border不被包含在定义的width和height之内。对象的实际宽度等于设置的width值和border、padding之和，即 ( Element width = width + border + padding，但占有页面位置还要加上margin ) 此属性表现为标准模式下的盒模型。   
- box-sizing:border-box： padding和border被包含在定义的width和height之内。对象的实际宽度就等于设置的width值，即使定义有border和padding也不会改变对象的实际宽度，即 ( Element width = width ) 此属性表现为怪异模式下的盒模型。

### 50.html常见兼容性问题？ 
用构造函数和原型链的混合模式去实现继承，避免对象共享可以参考经典的extend()函数，很多前端框架都有封装的，就是用一个空函数当做中间变量
 
1. png24位的图片在iE6浏览器上出现背景
解决方案：做成PNG8，也可以引用一段脚本处理.

2. 浏览器默认的margin和padding不同
解决方案：加一个全局的 *{margin:0;padding:0;} 来统一。

3. IE6双边距bug：在IE6下，如果对元素设置了浮动，同时又设置了margin-left或margin-right，margin值会加倍。
	
	 	#box{float:left; width:10px; margin:0 0 0 10px;} 

这种情况之下IE会产生20px的距离
解决方案：在float的标签样式控制中加入 _display:inline; 将其转化为行内属性。( _ 这个符号只有ie6会识别)

4. 渐进识别的方式，从总体中逐渐排除局部。 
首先，巧妙的使用“\9”这一标记，将IE游览器从所有情况中分离出来。 
接着，再次使用 "+" 将IE8和IE7、IE6分离开来，这样IE8已经独立识别。
		
		.bb{
		    background-color:#f1ee18; /*所有识别*/
		    .background-color:#00deff\9; /*IE6、7、8识别*/
		    +background-color:#a200ff; /*IE6、7识别*/
		    _background-color:#1e0bd1; /*IE6识别*/ 
		} 

5.IE下，可以使用获取常规属性的方法来获取自定义属性，也可以使用 getAttribute() 获取自定义属性；Firefox下,只能使用getAttribute()获取自定义属性
解决方法：统一通过getAttribute()获取自定义属性

6. IE下，event对象有 x、y 属性，但是没有 pageX、pageY属性; Firefox下，event对象有 pageX、pageY 属性，但是没有 x、y 属性
解决方法：（条件注释）缺点是在IE浏览器下可能会增加额外的HTTP请求数。

7. Chrome 中文界面下默认会将小于 12px 的文本强制按照 12px 显示
解决方法：可通过加入 CSS 属性 -webkit-text-size-adjust: none; 解决

8. 超链接访问过后 hover 样式就不出现了，被点击访问过的超链接样式不在具有 hover 和 active 了
解决方法：改变CSS属性的排列顺序 L-V-H-A	

		a:link {}
		a:visited {}
		a:hover {}
		a:active {}

9. 怪异模式问题：漏写 DTD 声明，Firefox 仍然会按照标准模式来解析网页，但在 IE 中会触发怪异模式。为避免怪异模式给我们带来不必要的麻烦，最好养成书写 DTD 声明的好习惯。现在可以使用[html5](http://www.w3.org/TR/html5/single-page.html) 推荐的写法：<!DOCTYPE html>

10. 上下margin重合问题：ie和ff都存在，相邻的两个div的margin-left和margin-right不会重合，但是margin-top和margin-bottom却会发生重合。
解决方法：养成良好的代码编写习惯，同时采用margin-top或者同时采用margin-bottom。

11. ie6对png图片格式支持不好
解决方案：引用一段脚本处理

### 51.清楚浮动的作用是什么？怎样清除？
### 作用：

浮动元素引起的问题：
   
1. 父元素的高度无法被撑开，影响与父元素同级的元素  
2. 与浮动元素同级的非浮动元素会跟随其后  
3. 若非第一个元素浮动，则该元素之前的元素也需要浮动，否则会影响页面显示的结构

### 清除浮动的几种方法：
1. 额外标签法，<div style="clear:both;"></div>（缺点：不过这个办法会增加额外的标签使HTML结构看起来不够简洁。）
2. 使用after伪元素
	
		#parent:after{
		    content:".";
		    height:0;
		    visibility:hidden;
		    display:block;
		    clear:both;
		}
3. 浮动外部元素
4. 设置 overflow 为 hidden 或者 auto

 1. 使用空标签清除浮动。
这种方法是在所有浮动标签后面添加一个空标签 定义css clear:both. 弊端就是增加了无意义标签。

2. 使用overflow。
给包含浮动元素的父标签添加css属性 overflow:auto; zoom:1; zoom:1用于兼容IE6。

3. 使用after伪对象清除浮动。
该方法只适用于非IE浏览器。具体写法可参照以下示例。使用中需注意以下几点。一、该方法中必须为需要清除浮动元素的伪对象中设置 height:0，否则该元素会比实际高出若干像素；

可以给父元素设置overflow：auto或者hidden 

### 52.什么是 FOUC（无样式内容闪烁）？你如何来避免 FOUC？

FOUC - Flash Of Unstyled Content 文档样式闪烁 
    
	<style type="text/css" media="all">@import "../fouc.css";</style>   
而引用CSS文件的@import就是造成这个问题的罪魁祸首。IE会先加载整个HTML文档的DOM，然后再去导 入外部的CSS文件，因此，在页面DOM加载完成到CSS导入完成中间会有一段时间页面上的内容是没有样式的，这段时间的长短跟网速，电脑速度都有关系。    
解决方法简单的出奇，只要在<head>之间加入一个<link>或者`<script>元素`就可以了。  

### 53.===和==的区别    
===不进行强制类型转换，==会强制类型转换
## 139.变量提升的理解。

### 54.三栏布局
实现三栏布局的方式：     
1.左右div用float来浮动。缺点：容易被清除浮动给清除掉。     
2.圣杯布局、双飞翼布局。   
3.绝对定位。

### 55.`data-`属性的作用是什么？

`data-`为H5新增的为前端开发者提供自定义的属性，这些属性集可以通过对象的 `dataset` 属性获取，不支持该属性的浏览器可以通过 `getAttribute` 方法获取 :


需要注意的是：`data-`之后的以连字符分割的多个单词组成的属性，获取的时候使用驼峰风格。 所有主流浏览器都支持 data-* 属性。

即：当没有合适的属性和元素时，自定义的 data 属性是能够存储页面或 App 的私有的自定义数据。

### 56.Label的作用是什么，是怎么用的？ 


label标签来定义表单控制间的关系 , 当用户选择该标签时，浏览器会自动将焦点转到和标签相关的表单控件上。
	
	<label for='Name'>Number:</label>
	
	<input type=“ text “ name='Name' id='Name'/>
	<label>Date:<input type='text' name='B'/></label>
	
注意:label的for属性值要与后面对应的input标签id属性值相同

	<label for='Name'>Number:</label>
	
	<input type=“ text “ name='Name' id='Name'/>

  

### 57.谈谈你对canvas的理解？
canvas是HTML5中新增一个HTML5标签与操作canvas的javascript API，它可以实现在网页中完成动态的2D与3D图像技术。标记和 SVG以及 VML 之间的一个重要的不同是，有一个基于 JavaScript 的绘图 API，而 SVG 和 VML 使用一个 XML 文档来描述绘图。SVG 绘图很容易编辑与生成，但功能明显要弱一些。 canvas可以完成动画、游戏、图表、图像处理等原来需要Flash完成的一些功能。

### 58.HTML5 有哪些新增的表单元素？

HTML5 新增了很多表单元素让开发者构建更优秀的 Web 应用程序，主要有：

	datalist
	keygen
	output

### 59.说说你对页面中使用定位(position)的理解？ 
使用css布局position非常重要，语法如下：   

position：static | relative | absolute | fixed | center | page | sticky    
默认值：static，center、page、sticky是CSS3中新增加的值。 
    
(1)、static
可以认为静态的，默认元素都是静态的定位，对象遵循常规流。此时4个定位偏移属性不会被应用，也就是使用left，right，bottom，top将不会生效。

(2)、relative
相对定位，对象遵循常规流，并且参照自身在常规流中的位置通过top，right，bottom，left这4个定位偏移属性进行偏移时不会影响常规流中的任何元素。

(3)、absolute
a、绝对定位，对象脱离常规流，此时偏移属性参照的是离自身最近的定位祖先元素，如果没有定位的祖先元素，则一直回溯到body元素。盒子的偏移位置不影响常规流中的任何元素，其margin不与其他任何margin折叠。
b、元素定位参考的是离自身最近的定位祖先元素，要满足两个条件，第一个是自己的祖先元素，可以是父元素也可以是父元素的父元素，一直找，如果没有则选择body为对照对象。第二个条件是要求祖先元素必须定位，通俗说就是position的属性值为非static都行。

(4)、fixed
固定定位，与absolute一致，但偏移定位是以窗口为参考。当出现滚动条时，对象不会随着滚动。

(5)、center
与absolute一致，但偏移定位是以定位祖先元素的中心点为参考。盒子在其包含容器垂直水平居中。（CSS3）

(6)、page
与absolute一致。元素在分页媒体或者区域块内，元素的包含块始终是初始包含块，否则取决于每个absolute模式。（CSS3）

(7)、sticky
对象在常态时遵循常规流。它就像是relative和fixed的合体，当在屏幕中时按常规流排版，当卷动到屏幕外时则表现如fixed。该属性的表现是现实中你见到的吸附效果。（CSS3）

### 60. 页面布局的方式有哪些？  

方式：双飞翼、多栏、弹性、流式、瀑布流、响应式布局 （1）、双飞翼布局 经典三列布局，也叫做圣杯布局【Holy Grail of Layouts】是Kevin Cornell在2006年提出的一个布局模型概念，在国内最早是由淘宝UED的工程师传播开来，在中国也有叫法是双飞翼布局，它的布局要求有几点： a、三列布局，中间宽度自适应，两边定宽；  b、中间栏要在浏览器中优先展示渲染；  c、允许任意列的高度最高； d、要求只用一个额外的DIV标签；  e、要求用最简单的CSS、最少的HACK语句； 在不增加额外标签的情况下，圣

方式：双飞翼、多栏、弹性、流式、瀑布流、响应式布局

#### 双飞翼布局
经典三列布局，也叫做圣杯布局【Holy Grail of Layouts】是Kevin Cornell在2006年提出的一个布局模型概念，在国内最早是由淘宝UED的工程师传播开来，在中国也有叫法是双飞翼布局，它的布局要求有几点：   
a、三列布局，中间宽度自适应，两边定宽；     
b、中间栏要在浏览器中优先展示渲染；     
c、允许任意列的高度最高；     
d、要求只用一个额外的DIV标签；     
e、要求用最简单的CSS、最少的HACK语句；    
在不增加额外标签的情况下，圣杯布局已经非常完美，圣杯布局使用了相对定位，以后布局是有局限性的，而且宽度控制要改的地方也多。在淘宝UED（User Experience Design）探讨下，增加多一个div就可以不用相对布局了，只用到了浮动和负边距，这就是我们所说的双飞翼布局。

#### 多栏布局     
a、栏栅格系统：就是利用浮动实现的多栏布局，在bootstrap中用的非常多。    
b、多列布局：栅格系统并没有真正实现分栏效果（如word中的分栏），CSS3为了满足这个要求增加了多列布局模块    

#### 弹性布局（Flexbox）    
CSS3引入了一种新的布局模式——Flexbox布局，即伸缩布局盒模型（Flexible Box），用来提供一个更加有效的方式制定、调整和分布一个容器里项目布局，即使它们的大小是未知或者动态的，这里简称为Flex。    
Flexbox布局常用于设计比较复杂的页面，可以轻松的实现屏幕和浏览器窗口大小发生变化时保持元素的相对位置和大小不变，同时减少了依赖于浮动布局实现元素位置的定义以及重置元素的大小。   

Flexbox布局在定义伸缩项目大小时伸缩容器会预留一些可用空间，让你可以调节伸缩项目的相对大小和位置。例如，你可以确保伸缩容器中的多余空间平均分配多个伸缩项目，当然，如果你的伸缩容器没有足够大的空间放置伸缩项目时，浏览器会根据一定的比例减少伸缩项目的大小，使其不溢出伸缩容器。     

综合而言，Flexbox布局功能主要具有以下几点：   
a、屏幕和浏览器窗口大小发生改变也可以灵活调整布局；    
b、可以指定伸缩项目沿着主轴或侧轴按比例分配额外空间（伸缩容器额外空间），从而调整伸缩项目的大小；    
c、可以指定伸缩项目沿着主轴或侧轴将伸缩容器额外空间，分配到伸缩项目之前、之后或之间；
d、可以指定如何将垂直于元素布局轴的额外空间分布到该元素的周围；    
e、可以控制元素在页面上的布局方向；    
f、可以按照不同于文档对象模型（DOM）所指定排序方式对屏幕上的元素重新排序。也就是说可以在浏览器渲染中不按照文档流先后顺序重排伸缩项目顺序。    

#### 瀑布流布局    
瀑布流布局是流式布局的一种。是当下比较流行的一种网站页面布局，视觉表现为参差不齐的多栏布局，随着页面滚动条向下滚动，这种布局还会不断加载数据块并附加至当前尾部。最早采用此布局的网站是Pinterest，逐渐在国内流行开来。     
优点   
a、有效的降低了界面复杂度，节省了空间：我们不再需要臃肿复杂的页码导航链接或按钮了。   
b、对触屏设备来说，交互方式更符合直觉：在移动应用的交互环境当中，通过向上滑动进行滚屏的操作已经成为最基本的用户习惯，而且所需要的操作精准程度远远低于点击链接或按钮。   
c、更高的参与度：以上两点所带来的交互便捷性可以使用户将注意力更多的集中在内容而不是操作上，从而让他们更乐于沉浸在探索与浏览当中。    
缺点   
a、有限的用例：     
无限滚动的方式只适用于某些特定类型产品当中一部分特定类型的内容。      
例如，在电商网站当中，用户时常需要在商品列表与详情页面之间切换，这种情况下，传统的、带有页码导航的方式可以帮助用户更稳妥和准确的回到某个特定的列表页面当中。    
b、额外的复杂度：      
那些用来打造无限滚动的JS库虽然都自称很容易使用，但你总会需要在自己的产品中进行不同程度的定制化处理，以满足你们自己的需求;另外这些JS库在浏览器和设备兼容性等方面的表现也参差不齐，你必须做好充分的测试与调整工作。    
c、再见了，页脚：    
如果使用了比较典型的无限滚动加载模式，这就意味着你可以和页脚说拜拜了。    
最好考虑一下页脚对于你的网站，特别是用户的重要性;如果其中确实有比较重要的内容或链接，那么最好换一种更传统和稳妥的方式。    
千万不要耍弄你的用户，当他们一次次的浏览到页面底部，看到页脚，却因为自动加载的内容突然出现而无论如何都无法点击页脚中的链接时，他们会变的越发愤怒。     
d、集中在一页当中动态加载数据，与一页一页的输出相比，究竟那种方式更利于SEO，这是你必须考虑的问题。对于某些以类型网站来说，在这方面进行冒险是很不划算的。    
e、关于页面数量的印象：     
其实站在用户的角度来看，这一点并非负面;不过，如果对于你的网站来说，通过更多的内容页面展示更多的相关信息(包括广告)是很重要的策略，那么单页无限滚动的方式对你并不适用。    

#### 流式布局（Fluid）       
固定布局和流式布局在网页设计中最常用的两种布局方式。固定布局能呈现网页的原始设计效果，流式布局则不受窗口宽度影响，流式布局使用百分比宽度来限定布局元素，这样可以根据客户端分辨率的大小来进行合理的显示。       

#### 响应式布局          
响应式布局是Ethan Marcotte在2010年5月份提出的一个概念，简而言之，就是一个网站能够兼容多个终端——而不是为每个终端做一个特定的版本。这个概念是为解决移动互联网浏览而诞生的。
响应式布局可以为不同终端的用户提供更加舒适的界面和更好的用户体验，而且随着目前大屏幕移动设备的普及，用“大势所趋”来形容也不为过。随着越来越多的设计师采用这个技术，我们不仅看到很多的创新，还看到了一些成形的模式。   
优点   
a、面对不同分辨率设备灵活性强   
b、能够快捷解决多设备显示适应问题   
缺点   
a、兼容各种设备工作量大，效率低下      
b、代码累赘，会出现隐藏无用的元素，加载时间加长       
c、其实这是一种折中性质的设计解决方案，多方面因素影响而达不到最佳效果       
d、一定程度上改变了网站原有的布局结构，会出现用户混淆的情况            
   
### 61.Canvas和SVG的区别

- SVG是一种使用XML来描述2D图形的**语言**，Canvas通过JS来绘制2D图形。
- SVG绘制的是矢量图，矢量图的特点是不随图形的放大缩小改变清晰度，不会出现锯齿形，而Canvas是逐像素渲染的，放大后可能出现锯齿形。
- SVG的每个图形都被视为对象，如果对象的属性变化，那么浏览器能够自动重现图形。Canvas一旦图形绘制完成，就不会受到关注。如果其位置发生变化，那么整个场景也需要重新绘制。
- Canvas能够以.png和.jpg格式保存结果图像。
- Canvas适合图像密集型的游戏，其中很多对象会被频繁重绘，SVG适合带有大型渲染区域的应用程序（比如谷歌地图）。

##### css3 亲属性
css3被划分为模块，最重要的几个模块包括：选择器、框模型、背景和边框、文本效果、2D/3D 转换、动画、多列布局、用户界面

选择器

框模型

背景和边框 
border-radius、box-shadow、border-image、 
background-size：规定背景图片的尺寸 
background-origin：规定背景图片的定位区域 
background-clip：规定背景的绘制区域
文本效果（常用） 
text-shadow：设置文字阴影 
word-wrap：强制换行 
word-break 
css3提出@font-face规则，规则中定义了font-family、font-weight、font-style、font-stretch、src、unicode-range
2/3D转换 
transform：向元素应用2/3D转换 
transition：过渡
动画
@keyframes规则： 
animation、animation-name、animation-duration等
用户界面（常用） 
box-sizing、resize 
css3新增伪类 
：nth-child() 
：nth-last-child() 
：only-child 
：last-child 
：nth-of-type() 
：only-of-type() 
：empty 
：target 这个伪类允许我们选择基于URL的元素，如果这个元素有一个识别器（比如跟着一个#），那么:target会对使用这个ID识别器的元素增加样式。 
：enabled 
：disabled 
：checked 
：not

