//並びはランダムで(0~9)までの数字が入った要素が10個の配列を作成して下さい。
let num=Math.random()*10
let num1=Math.floor(num)
let array=[]
for(i=1;i>0;i++){
  let num=Math.random()*10
  let num1=Math.floor(num)
  if(array.indexOf(num1)===-1){
    array.push(num1)
  }
  if(array.length===10){
    break
  }
}
console.log(array.join(' '))