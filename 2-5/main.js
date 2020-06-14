//コマンドライン引数で指定した金額を100円玉と10円玉と1円玉だけで、できるだけ少ない枚数で支払いたい。金額を入力するとそれぞれの枚数を計算して表示するプログラムを作成せよ。
const arg=process.argv[2]
const num1=Math.floor(arg/100)
const num2=Math.floor(arg%100/10)
const num3=Math.floor(arg%10)
console.log(`100円玉${num1}枚,10円玉${num2}枚,1円玉${num3}枚`)
