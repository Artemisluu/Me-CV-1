!function(){let n=document.querySelector("#demo"),r=document.createElement("style");document.body.appendChild(r);let e="\n/* 你好，我是高璐\n* 接下来我要展示一下我的前端功底\n* 首先要加一个div\n**/\n#div1{\n   border:1px solid red; \n   width:200px;\n   height:200px;\n}\n/* 接下来我把div变成一个八卦图\n * 注意看好了\n * 首先，我们要把div变成一个圆\n **/\n #div1{\n     border-radius: 50%;\n     box-shadow: 0 0 3px rgba(0,0,0,0.5);\n     border: none;\n }\n /* 八卦是阴阳形成的\n  *一黑一白\n  **/\n #div1{\n    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 51%, rgba(0,0,0,1) 51%, rgba(0,0,0,1) 100%);\n }\n /*加上太极中的阴阳双鱼*/\n #div1::before{\n     width:100px;\n     height:100px;\n     top:0;\n     left:50%;\n     transform:translateX(-50%);\n     background:#fff;\n     border-radius:50%;\n     background: radial-gradient(circle, rgba(0,0,0,1) 26%, rgba(255,255,255,1) 0%);\n }\n #div1::after{\n    width:100px;\n    height:100px;\n    bottom:0;\n    left:50%;\n    transform:translateX(-50%);\n    background:#000;\n    border-radius:50%;\n    background: radial-gradient(circle, rgba(255,255,255,1) 24%, rgba(0,0,0,1) 24%, rgba(0,0,0,1) 100%);\n",d="";console.log(e.length);let t=0,a=()=>{setTimeout((()=>{"\n"===e[t]?d+="<br>":" "===e[t]?d+="&nbsp;":d+=e[t],n.innerHTML=d,r.innerHTML=e.substring(0,t),window.scrollTo(0,99999),n.scrollTo(0,99999),t<e.length-1&&(t+=1,a())}),50)};a()}();
//# sourceMappingURL=index.f859f624.js.map