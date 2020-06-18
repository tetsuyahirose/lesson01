//コマンドライン引数で指定された時刻を表す長さ 5 の文字列 S が “XX:XX” の形式で与えられます。入力された時刻を時と分に分け、45分後の時と分を表示してください。
const arg = process.argv[2]
const array = arg.split('')
const num1 = Number(array[0])
const num2 = Number(array[1])
const num3 = Number(array[3])
const num4 = Number(array[4])
const str1 = array[3] + array[4]
const str2 = array[0] + array[1]
let a = Number(str1) + 45
let b = Number(str2) + 1
let c = Number(str1) + 45 - 60

if (str1 < 15) {       //分しか変わらないパターン

  console.log(`${array[0]}${array[1]}:${a}`)
} else if (str1 >= 15) {
  if (str2 !== '23') {    //日をまたがないパターン

    if (c < 10) {
      console.log(`${b}:0${c}`)

    } else {
      console.log(`${b}:${c}`)
    }
  } else if (str2 === '23') {
    if (c < 10) {
      console.log('00:0${c}')
    } else {
      console.log(`00:${c}`)
    }
  }
}

