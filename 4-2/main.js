//15人の生徒のテストの点数の分布表を作って下さい
// 下記の配列を使って下さい
let students = [17,38,100,95,23,62,77,45,69,81,83,51,42,36,60]
let num=[]
let array = [0,0,0,0,0,0,0,0,0,0,0]
for(i=0;i<students.length;i++){
   num=Math.floor(students[i]/10)
   array[num]++
}
const max=Math.max.apply(null, array )
for(i=0;i<max;i++){
  let array1=[]
  for(let a of array){
    if(a>=max-i){
      array1.push('*')
    }else{
      array1.push(' ')
    }
  }
console.log(array1.join('  '))
}
console.log('--------------------------------')
console.log('0 10 20 30 40 50 60 70 80 90 100')
