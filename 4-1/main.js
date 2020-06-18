//コマンドライン引数で受け取った2つの数字を反転させて足し算する
const arg1=process.argv[2]
const arg2=process.argv[3]

const str1a=String(arg1).split('')
const str1b=Number(str1a.reverse().join(''))
const str2a=String(arg2).split('')
const str2b=Number(str2a.reverse().join(''))

console.log(str1b+str2b)
