/*题目描述
css 中经常有类似 background-image 这种通过 - 连接的字符，通过 javascript 设置样式的时候需要将这种样式转换成 backgroundImage 驼峰格式，请完成此转换功能
1. 以 - 为分隔符，将第二个起的非空单词首字母转为大写
2. -webkit-border-image 转换后的结果为 webkitBorderImage
示例1
输入
复制
'font-size'
输出
复制*/
fontSize
function cssStyle2DomStyle(sName) {
    var result=sName.replace(/^-/,'').split('-');
    for(var i=1;i<result.length;i++){
       result[i]= result[i].replace(/^\w/,function(e){
            return e.toUpperCase();
        })
    }
    return result.join('');
}