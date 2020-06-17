//コマンドライン引数の1つ目を縦、2つ目を横の数とし"*-"が連続した四角形を作る。
//ルール：奇数行は、"*"から始まるが、偶数行は"-"から始める。
const arg1 = process.argv[2]
const arg2 = process.argv[3]
const num = arg2 / 2
for (i = 1; i <= arg1; i++) {
  let array = []
  if (i % 2 !== 0) {
    for (a = 1; a <= num; a++) {
      array.push('*-')
    }
    if(arg2%2!==0){
      array.push('*')
    }
    //console.log(array)
    console.log(array.join(''))
  }
  if (i % 2 === 0) {
    for (a = 1; a <= num; a++) {
      array.push('-*')
    }
    if(arg2%2!==0){
      array.push('-')
    }
    console.log(array.join(''))
  }
}

