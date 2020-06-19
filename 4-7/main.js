const fs = require('fs')
let text = fs.readFileSync("./name.txt", 'utf8') //(ファイルのパス,文字コード)
const num1=(text.match(/こはる/g).length); 
const num2=(text.match(/はるこ/g).length); 

console.log(`こはる ${num1}`)
console.log(`はるこ ${num2}`)
