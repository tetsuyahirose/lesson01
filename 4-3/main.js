//ログファイルの中からエラーの内容だけを抜き出して表示する
const fs = require('fs');
const readline = require('readline');
const rs = fs.createReadStream('./error.log');
const rl = readline.createInterface({ input: rs });
const start=':'
const end='-'
rl.on('line', (line) => {
  const startpoint=line.indexOf(start)+start.length
  const endpoint=line.indexOf(end)
  console.log(line.substr(startpoint,endpoint-startpoint))
});