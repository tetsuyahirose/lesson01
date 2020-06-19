const json=require('./profiles.json')
for(let pro of json.profiles){
  console.log(`${pro.name}:${pro.age}`)
}