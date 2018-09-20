/*题目描述
  为 Array 对象添加一个去除重复项的方法
  示例1
  输入
  复制
  [false, true, undefined, null, NaN, 0, 1, {}, {}, 'a', 'a', NaN]
  输出
  复制
  [false, true, undefined, null, NaN, 0, 1, {}, {}, 'a']*/
Array.prototype.uniq = function () {
     var result = [];
    var flag = true;
    for(var i =0;i<this.length;i++)
        {
            if(result.indexOf(this[i])==-1)
                {
                    if(this[i]!=this[i])
                        {
                            if(flag)
                                {
                                    result.push(this[i]);
                                    flag = false;
                                }
                        }
                    else
                        {
                            result.push(this[i]);
                        }
                }
        }
    return result;
}