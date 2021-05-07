let html = document.querySelector("#demo");
let style = document.querySelector("#style");

let string = `
/* 你好，我是高璐
* 接下来我要展示一下我的前端功底
* 首先要加一个div
**/
#div1{
   border:1px solid red; 
   width:200px;
   height:200px;
}
/* 接下来我把div变成一个八卦图
 * 注意看好了
 * 首先，我们要把div变成一个圆
 **/
 #div1{
     border-radius: 50%;
     box-shadow: 0 0 3px rgba(0,0,0,0.5);
     border: none;
 }
 /* 八卦是阴阳形成的
  *一黑一白
  **/
 #div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 51%, rgba(0,0,0,1) 51%, rgba(0,0,0,1) 100%);
 }
 /*加上太极中的阴阳双鱼*/
 #div1::before{
     width:100px;
     height:100px;
     top:0;
     left:50%;
     transform:translateX(-50%);
     background:#fff;
     border-radius:50%;
     background: radial-gradient(circle, rgba(0,0,0,1) 26%, rgba(255,255,255,1) 0%);
 }
 #div1::after{
    width:100px;
    height:100px;
    bottom:0;
    left:50%;
    transform:translateX(-50%);
    background:#000;
    border-radius:50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 24%, rgba(0,0,0,1) 24%, rgba(0,0,0,1) 100%);
`;
let string2 = "";
console.log(string.length);
let n = 0;

let step = () => {
  setTimeout(() => {
    //如果是回车，就加上回车标签
    //如果不是回车就直接照抄
    if (string[n] === "\n") {
      string2 += "<br>";
    } else if (string[n] === " ") {
      string2 += "&nbsp;";
    } else {
      string2 += string[n];
    }
    html.innerHTML = string2;
    style.innerHTML = string.substring(0, n);
    window.scrollTo(0,99999);
    html.scrollTo(0,99999);
    if (n < string.length - 1) {
      //N不是最后一个
      n += 1;
      step();
    }
    //N是最后一个
  }, 50);
};

step();
