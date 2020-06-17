//コマンドライン引数で受け取った、段数のピラミッドを形成する
const arg=process.argv[2]
let array=[]
//空白入れる関数作る
function makespace(c){
  let array1=[]
  for(a=0;a<arg-c;a++){
   array1.push(' ')
  }
  return array1
}
//console.log(makespace(1))

for(i=0;i<arg;i++){
  const num=makespace(i)  //関数を変数に置いてあげる
  if(i===0){
    array.push('*')
  }else{
    array.push('**')
  }

console.log(num.join('')+array.join(''))//つなげてあげる
}



