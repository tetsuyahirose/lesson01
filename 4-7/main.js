//playdataのcountが大きい順にソートして、曲のtitleとplaydataのcountを[順位:${title}\t${count}]のフォーマットで表示してください
const songs=require('./songs.json')
const data=require('./playdata.json')
data.data.sort(function(a, b) {
  return b.count - a.count;
});
for(i=0;i<data.data.length;i++){
  let num=i+1
  let result=songs.songs.find((element)=>{
    return Number(element.id)===Number(data.data[i].id)
  }
  )
  console.log(`${num}位 ${result.title}\t${data.data[i].count}回`)
}