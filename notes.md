
手写AJAX：
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

### try
