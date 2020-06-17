//九九表を表示してみよう
for(i=1;i<10;i++){
  let array=[]
  for(a=1;a<10;a++){
    const num=i*a
    array.push(num)
  }
  console.log(array.join('\t'))
}
