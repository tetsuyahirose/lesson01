//コマンドライン引数で指定された秒数が、何日何時間何分何秒か表示してください
const arg = process.argv[2]
const day = Math.floor(arg / 60 / 60 / 24)
const hour = Math.floor(arg / 60 / 60 % 24)
const minute = Math.floor(arg / 60 % 60)
const second = Math.floor(arg % 60)
console.log(`${day}日${hour}時間${minute}分${second}秒`)
