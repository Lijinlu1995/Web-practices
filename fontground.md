## html js css实现九九乘法表
    <!DOCTYPE html>  
    <head>  
    <meta http-equiv="Content-Type" content="text/html; charset=gb2312" />  
    <title>JavaScript九九乘法表</title>  

    <style type="text/css">  
    table{  
        width:600px;         //表格height属性可设置可不设置,建议不设置
        border-collapse:separate;
        } 
    table td{  
        border:#000000 1px solid;
        text-align: center;    //使<td>标签中的内容居中显示，若是<th>标签，没有此行代码亦可自动居中
        }  
    </style>

    </head>  
    <body>  

    <script type="text/javascript">  
    //下面部分是核心代码

    document.write("<table>");      //<table></table>添加一个表格样式来显示乘法表 
    for (var x = 1; x <= 9; x++)  
    {  
        document.write("<tr>");     //<tr></tr>标签
        for (var y = 1; y <= x; y++)
        {  
            document.write("<td>"+y+"x"+x+"="+y*x+"</td>");//亦可用<th>标签来起到居中加粗内容的作用
        }                                                    
        document.write("</tr>");  
    }  
    document.write("</table>");    
    </script> 

    </body>  
    </html>

### 移动端h5页面不同尺寸屏幕适配兼容方法

#### 1. viewport属性及html页面结构

<meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no" />
// width    设置viewport宽度，为一个正整数，或字符串‘device-width’
// height   设置viewport高度，一般设置了宽度，会自动解析出高度，可以不用设置
// initial-scale    默认缩放比例，为一个数字，可以带小数
// minimum-scale    允许用户最小缩放比例，为一个数字，可以带小数
// maximum-scale    允许用户最大缩放比例，为一个数字，可以带小数
// user-scalable    是否允许手动缩放
需要在每一个页面头都加上这句话。这里面关于maximun-scale的取值网上有几种不同说法。有人建议用1.3，公司这边用的1.5。可能是我没有理解什么是允许用户最大缩放比例吧，博主放到真机上测试发现1.0，1.3，1.5没有什么区别。下面po一个网上建议用1.3的理由吧：

为什么是1.3？

目前大部分页面都是以320px为基准的布局，而iphone6的宽度比是375/320 = 1.171875，iphone6+则是 414/320 = 1.29375那么以1.29倍也就约等于1.3了。



#### 2. 屏幕自适应（贼好用的绝招）

        <script>
            (function (doc, win) {
                var docEl = doc.documentElement;
                resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
                recalc = function () {
                    var clientWidth = docEl.clientWidth;
                    if (!clientWidth) return;
                    docEl.style.fontSize = 50 * (clientWidth / 375) + 'px';
                };
                if (!doc.addEventListener) return;
                win.addEventListener(resizeEvt, recalc, false);
                doc.addEventListener('DOMContentLoaded', recalc, false);
            }(document,window));

        </script>


#### 3. iphone4/iphone5/iphone6/iphone6p 的css media query

        @media (device-height:480px) and (-webkit-min-device-pixel-ratio:2){/* 兼容iphone4/4s */

            .class{}

        }

        @media (device-height:568px) and (-webkit-min-device-pixel-ratio:2){/* 兼容iphone5 */

            .class{}

        }

        @media(min-device-width:375px)and(max-device-width:667px)and(-webkit-min-device-pixel-ratio:2){


        /*iphone6*/


        }


        @media(min-device-width:414px)and(max-device-width:736px)and(-webkit-min-device-pixel-ratio:3){


        /*iphone6plus*/


        }
