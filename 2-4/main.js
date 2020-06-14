//コマンドライン引数で渡した月が季節で帰ってくるプログラムを書こう
const arg=process.argv[2]
if(arg>=2 && arg<=4){
  console.log('春')
}else if(arg>=5 && arg<=7){
  console.log('夏')
} else if(arg>=8 && arg<=10){
  console.log('秋')
} else{
  console.log('冬')
}