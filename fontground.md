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
