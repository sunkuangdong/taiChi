let demo = document.querySelector('#demo')
let style = document.querySelector("#style")
let str = `
/*
    * 你好, 我是一名前端新人
    * 接下来我会写一个太极图
*/
#div1{
    border: 1px solid red;
    width: 300px;
    height: 300px;
}
/*
    * 接下来我要把他编程八卦图
    * 首先变成圆
*/
#div1{
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    border: none;
}
/*
    * 太极生两仪
    * 阴阳
*/
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/*
    * 两仪生四象
    * 阴阳相融合, 阴中有阳, 阳中有阴
*/
#div1::before {
    width: 150px;
    height:150px;
    position: absolute;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    border-radius: 50%;
    background-color: #000000;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after {
    width: 150px;
    height:150px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%);
    border-radius: 50%;
    background-color: #ffffff;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}
`
let str2 = '';
let n = 0;
let fn = function () {
    setTimeout(() => {
        if (str[n] === `\n`) {
            str2 += '<br>'
        } else if (str[n] === ' ') {
            str2 += '&nbsp;'
        } else {
            str2 += str[n]
        }
        demo.innerHTML = str2
        style.innerHTML = str.substring(0, n)
        window.scrollTo(0, 99999)
        demo.scrollTo(0, 99999)
        if (n < str.length - 1) {
            n += 1
            fn()
        }
    }, 0);
}
fn()