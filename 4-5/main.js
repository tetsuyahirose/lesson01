//jsonデータを読み込んでメンバーの給与を計算し、給与の多い順に並び替えて表示しよう
const json=require('./users.json')
for(let user of json.users){
  if(user.rank==='A' && user.years<5){
    let sa=3000*user.years+100000
    user.salary=sa
  }else if(user.rank==='A'){
    let sa=3000*user.years+120000
    user.salary=sa
  }else if(user.rank==='B'){
    let sa=4000*user.years+140000
    user.salary=sa
  }else if(user.rank==='C'){
    let sa=5000*user.years+160000
    user.salary=sa
  }
}
json.users.sort(function(a, b) {
  return b.salary - a.salary;
});
for(let user of json.users){
  console.log(`${user.name}:${user.salary}`)
}