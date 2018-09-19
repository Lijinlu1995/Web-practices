/*
获取 url 中的参数
1. 指定参数名称，返回该参数的值 或者 空字符串
2. 不指定参数名称，返回全部的参数对象 或者 {}
3. 如果存在多个同名参数，则返回数组
*/
function getUrlParam(sUrl, sKey) {
        var obj = {};
    var index = sUrl.indexOf('?');
    //url没有带参数
    if(index==-1) {
        if(sKey==undefined){
            return obj;
        }else{
            return "";
        }
    }

    var queryString = (sUrl.split("?")[1]).split("#")[0];
    var query = queryString.split('&');//分离出了所有参数

    for(var i=0;i<query.length;i++){
        var keyValue = query[i].split("=");
        var key = keyValue[0];
        var value = keyValue[1];
        //console.log('key: '+key+" value: "+value);
        if(value ==""){
            continue;//value值为空，进行下一次循环？为空就不进行统计了？
        }
        if(obj.hasOwnProperty(key)){//hasOwnProperty()函数用于指示一个对象自身(不包括原型链)是否具有指定名称的属性。如果有，返回true，否则返回false。
            if(Array.isArray(obj[key])){//判断是不是数组
                obj[key].push(value);
            }else{//不是数组
                var val = obj[key];
                obj[key] = [];
                obj[key].push(val);//?????有点蒙，这是为什么呀
                obj[key].push(value);//这一段else里面的是真的不懂
            }

        }else{//有新参数，直接添加
            obj[key]=value;
        }

    }
    //console.log(obj)
    //1.指定参数名的，返回该参数的值或空
    if(sKey){
        return obj[sKey]?obj[sKey]:"";
    }else{
        return obj;

    }
}