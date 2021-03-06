// for(var i = 0;i<5;i++){
//     setTimeout(function(){
//         console.log(i)
//     },1000);
// }
//=>定时器是异步编程，等待循环结束后，才会执行定时器中设定的方法，方法执行遇到的I已经是循环结束后的全局I(5)

//=>基于ES6中的LET解决：LET在每一次循环的时候都会形成一个块级作用域，在这个作用域中把当前本次循环的I的值保存下来了，后期用到的I就找自己保存的值
// for(let i = 0;i<5;i++){
//     setTimeout(function(){
//         console.log(i)
//     },1000);
// }

//=>不用LET我们可以自己搞一个闭包，然后实现I的保存
// for (var i = 0; i < 5; i++) {
//     ~function (i) {
//         //=>i:私有变量，每一次循环都形成一个闭包，私有变量I的值存储的就是当前循环时候I的值
//         setTimeout(function(){
//             console.log(i)
//         },1000);
//     }(i);
// }

//=>或者基于BIND预先处理一下函数中的THIS和参数值也可以
// for (var i = 0; i < 5; i++) {
//     setTimeout(function (i) {
//         console.log(i)
//     }.bind(null, i), 1000);
// }


// var a = {n:4};
// var b = a;
// b.x = a = {n: 10};
// //=>新创建一个对象 AAAFFF000 ，然后让
// // b.x=AAAFFF00   {n:4,x:AAAFFF000}
// // a=AAAFFF000
// console.log(a.x);//=>UNDEFINED
// console.log(b.x);//=>{n: 10}

//=>谈谈你对闭包的理解
// 闭包是JS中一个非常重要的机制，我们很多编程思想、业务逻辑、设计模式都是基于闭包完成的，先说一下我对闭包的理解：闭包就是函数执行产生一个私有的作用域（不销毁），在这个作用域中的私有变量和外界互不干扰，而且作用域（栈）不销毁，这些私有变量存储的值也都保存下来了，所有整体来说闭包就是为了保护和保存变量的
// 实际项目开发中，很多地方使用到了闭包，例如：
// 1.循环事件绑定，由于事件绑定是异步编程的，我们此时在循环的时候把索引存储起来（可以基于自定义属性存储，也可以基于闭包存储），后期需要使用的时候，向上级作用域查找使用即可
// 2.平时做业务逻辑的时候，我一般都是基于单例模式来管理代码的，这种单例的构建就应用到了闭包
// let xxxRender=(function(){
//     return {
//         init:function(){
//
//         }
//     }
// })();
// 3.我之前在学习资料上了解了柯理化函数思想，它其实也是基于闭包完成的
// Function.prototype.bind = function bind(context, ...arg) {
//     return () => {
//         fn.call(context, ...arg);
//     }
// };
// document.onclick=fn.bind(obj, 10, 20);
//
// 还有很多地方也应用了闭包，但是闭包比较占内存，我会尽量减少对它的使用，但是有些需求必须要用













