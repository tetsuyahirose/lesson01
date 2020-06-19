//コマンドライン引数で受け取ったjsonファイルを読み込み、名前：年齢を表示する。
const json=require('./profiles.json')
for(let pro of json.profiles){
  console.log(`${pro.name}:${pro.age}`)
}