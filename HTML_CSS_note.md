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
