//コマンドライン引数で5つの整数値を入力させ、5つの値のうち3番目に大きい値を表示するプログラムを作成せよ
let array=[]
for(i=2;i<7;i++){
  let num=process.argv[i]
  array.push(num)
}
array.sort(function(a, b) {
  return a - b;
});
console.log(array[2])

