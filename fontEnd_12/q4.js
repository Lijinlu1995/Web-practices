/*题目描述
  根据包名，在指定空间中创建对象
  输入描述:
  namespace({a: {test: 1, b: 2}}, 'a.b.c.d')
  输出描述:
  {a: {test: 1, b: {c: {d: {}}}}}*/
function namespace(oNamespace, sPackage) {
    var name = sPackage.split('.');//使用指针遍历各级属性
   var curr = oNamespace;
   for(var i in name)
    {
        if(name[i] in oNamespace)
            {
                if(typeof oNamespace[name[i]]!="object")
                    {
                        oNamespace[name[i]]={};
                    }
            }
        else
            {
                oNamespace[name[i]] = {};
            }
        oNamespace = oNamespace[name[i]];
    }
    return curr;
}