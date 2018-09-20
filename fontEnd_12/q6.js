/*将 rgb 颜色字符串转换为十六进制的形式，如 rgb(255, 255, 255) 转为 #ffffff
  1. rgb 中每个 , 后面的空格数量不固定
  2. 十六进制表达式使用六位小写字母
  3. 如果输入不符合 rgb 格式，返回原始输入
  示例1
  输入
  复制
  'rgb(255, 255, 255)'
  输出
  复制
  #ffffff*/
function rgb2hex(sRGB) {
        var regexp=/rgb\((\d+),\s*(\d+),\s*(\d+)\)/;
    var ret=sRGB.match(regexp);
    if(!ret){
        return sRGB;
    }else{
        var str='#';
        for(var i=1;i<=3;i++){
            var m=parseInt(ret[i]);
            if(m<=255&&m>=0){
                str+=(m<16?'0'+m.toString(16):m.toString(16));
            }else{
                return sRGB;
            }
        }
        return str;
    }
}