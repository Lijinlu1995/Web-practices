
### 手写AJAX：
var xhr = new XMLHttpRequest();
   xhr.open("GET","api",false);
   xhr.onreadyStateChange = function(){
      if(xhr.readyState == 4){
         if(xhr.status == 200){
            alart(xhr.responseText);
         }
      }
   }
   xhr.send(null);
   

### 创建对象有哪些方式？
(工 构 原 混 动 寄 稳）
1. 工厂模式
2. 构造函数模式
3. 原型模式
4. 混合构造函数和原型模式
5. 动态原型模式
6. 寄生构造函数模式
7. 稳妥构造函数模式

## 闭包不能滥用，否则会导致内存泄露，影响网页的性能。闭包使用完了后，要立即释放资源，将引用变量指向null。


### Ajax 是什么? 如何创建一个Ajax？
我理解Ajax 是一种异步请求数据的一种技术，对于改善用户的体验和程序的性能很有帮助。

### 谈谈你对this的理解？
this是js的一个关键字，随着函数使用场合不同，this的值会发生变化。
但是有一个总原则，那就是this指的是调用函数的那个对象。
this一般情况下：是全局对象Global。 作为方法调用，那么this就是指这个对象

### call() 和 apply() 的区别？
- 相同点：两个方法产生的作用是完全一样的，动态改变某个类的某个方法的运行环境。
- 不同点：调用的参数不同，比较精辟的总结：
>foo.call(this,arg1,arg2,arg3) == foo.apply(this, arguments)==this.foo(arg1, arg2, arg3)

参考：http://blog.csdn.net/myhahaxiao/article/details/6952321
