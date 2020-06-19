//name.txtファイルから、"はるこ"の数と"こはる"の数を取得する。ただしStringクラスのメソッドを使わずに実装すること。
const fs = require('fs');
const readline = require('readline');
const rs = fs.createReadStream('./name.txt');
const rl = readline.createInterface({ input: rs });

function counter(text, num, name) {
  let word = text[num]
  for (a = 1; a < name.length; a++) {
    word = word + text[num + a]
  }
  if (name === word) {
    return true
  }
}
rl.on('line', (line) => {
  let str = line
  let key1 = ["こはる", "はるこ"]
  for (let j = 0; j < 2; j++) {
    let cnt = 0
    for (i = 0; i < str.length; i++) {
      if (counter(str, i, key1[j])) {
        cnt++
      }
    };
    console.log(`${key1[j]}:${cnt}`)
  }
}
)
