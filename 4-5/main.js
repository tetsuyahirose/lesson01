//kobe.jsonを読み込みkeyが"kobe"のものだけを表示する
const json=require(`./kobe.json`)
function counter(a){
let key=Object.keys(a) //毎回変化する
for(let ke of key){
  if(ke==='kobe'){
    console.log(a[ke])
  }else{
    counter(a[ke])  //めくっていくイメージ
  }
}
}
counter(json)  