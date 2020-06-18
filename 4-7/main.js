//コマンドライン引数で受け取った数字を、数字の大きい順に並べる。ただしsort()を使用せずに自分でアルゴリズムを実装することとする。
let array=[]
for(i=2;i<process.argv.length;i++){
  array.push(process.argv[i])
}
let num=Math.max.apply(null, array)   //59
let array1=[]
 for(i=num;i>0;i--){

  if(array.indexOf(String(i))!==-1){
    console.log(i)
  }
 }
 
