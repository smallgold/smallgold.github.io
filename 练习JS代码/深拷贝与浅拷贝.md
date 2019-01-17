##深拷贝与浅拷贝

涉及内容有栈堆，基本数据类型与引用数据类型

基本数据类型：number,string,boolean,null,undefined五类。
基本类型--名值存储在栈内存中
基本数据类型赋值 栈内存都会新开辟一个内存
例如：

```javascript
var a = 1, b = a; 
    a = 2; 
// b值不会改变.
```

引用数据类型：(Object类)有常规名值对的无序对象{a:1}，数组[1,2,3]，以及函数等。
引用数据类型--名值存在栈内存中，值存在于堆内存中，但是栈内存会提供一个引用的地址指向堆内存中的值
例如：

```javascript
var a = [1, 2, 3], b = a;
    a[0] = 2;
// a = [2, 2, 3];
// b = [2, 2, 3];
```

当我们 a[0] = 2 时进行数组修改时，由于a与b指向的是同一个地址，所以自然b也受了影响，这就是所谓的浅拷贝了。
要是在堆内存中也开辟一个新的内存专门为b存放值，就像基本类型那样，起步就达到深拷贝的效果了

实现浅拷贝

1.简单地复制语句
```javascript
function simpleClone(obj) {    
    var o = {};    
    for ( var i in obj) {
        o[i] = obj[i];
    }    
    return o;
}

var obj = {
    a: "hello",
    b:{
        a: "world",
        b: 21,
        c: {
            a: 1,
            b: {
                a: 1
            }
        }
    },
    c:["Bob", "Tom", "Jenny"],
    d:function() {
        console.log("hello world");
    }
}
var cloneObj = simpleClone(obj); 
console.log(cloneObj.b); 
console.log(cloneObj.c);
console.log(cloneObj.d);

cloneObj.b.a = "changed";
cloneObj.b.c.a = 2;
cloneObj.b.c.b.a = 2;
cloneObj.c = [1, 2, 3, 4, 5];
cloneObj.d = function() { console.log("changed"); };
console.log(obj.b);
console.log(obj.c); // 浅拷贝对象修改值不受影响
console.log(obj.d); // 浅拷贝对象修改值不受影响

```

2.使用Object.assign()

```javascript
var obj = { 
    a: "hello",
    b:{
        a: "world",
        b: 21,
        c: {
            a: 1,
            b: {
                a: 1
            }
        }
    },
    c:["Bob", "Tom", "Jenny"],
    d:function() {
        console.log("hello world");
    }
};
var cloneObj = Object.assign({}, obj);

cloneObj.a = "changed";
cloneObj.b.a= "changed";
cloneObj.b.c.b.a = 2;
cloneObj.c = [1, 2, 3, 4, 5];
console.log(obj.a);     // world   <-- 沒被改到
console.log(obj.b.a);   // changed
console.log(obj.c);     // 浅拷贝对象修改值不受影响

// Object.assign()可以处理一层的深度拷贝

```

**浅拷贝内对象类型的栈内存地址指向同一地址，数组，函数类型的栈内存地址指向不同地址**

实现深拷贝

```javascript
// 递归去复制所有层级属性
function deepClone(obj) {
    var objClone = Array.isArray(obj) ? [] : {};
    if (obj && typeof obj === "object") {
        for (key in obj) {
            if (obj.hasOwnProperty(key)) {
                //判断obj子元素是否为对象，如果是，递归复制
                if (obj[key] && typeof obj[key] === "object") {
                    objClone[key] = deepClone(obj[key]);
                } else {
                    //如果不是，简单复制
                    objClone[key] = obj[key];
                }
            }
        }
    }
    return objClone;
}

// JSON对象的parse和stringify
function deepClone2(obj){
    let _obj = JSON.stringify(obj),
        objClone = JSON.parse(_obj);
    return objClone
}

// 使用Object.create()方法
function deepClone3(initialObj, finalObj) {    
    var obj = finalObj || {};    
    for (var i in initialObj) {        
        var prop = initialObj[i];  // 避免相互引用对象导致死循环，如initialObj.a = initialObj的情况
        if(prop === obj) {            
            continue;
        }        
        if (typeof prop === 'object') {
            obj[i] = (prop.constructor === Array) ? [] : Object.create(prop);
        } else {
            obj[i] = prop;
        }
    }    
    return obj;
}

// var a = [1, 2, 3, 4];
// var b = deepClone(a);
// a[0] = 2;
// console.log(a, b);

```