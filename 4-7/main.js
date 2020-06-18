//4を含む数字を抜いた九九の表を完成させて下さい
for(i=1;i<10;i++){
  let array=[]
  for(a=1;a<10;a++){
    let num=i*a
    array.push(num)
  }
  var result = array.filter(function( item ) {
    return String(item).match(/4/)===null
    return item
    
  });
  console.log(result.join(' '))

}