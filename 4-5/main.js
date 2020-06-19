//曲リストの中からavailabledがtrueのもののtitleを表示してください
const songs=require('./songs.json')
for(let song of songs.songs){
  if(song.availabled===true){
    console.log(song.title)
  }
}
