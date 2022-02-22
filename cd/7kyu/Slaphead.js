Slaphead

Being a bald man myself, I know the feeling of needing to keep it clean shaven. Nothing worse that a stray hair waving in the wind.

You will be given a string(x). Clean shaved head is shown as "-" and stray hairs are shown as "/". Your task is to check the head for stray hairs and get rid of them.

You should return the original string, but with any stray hairs removed. Keep count ot them though, as there is a second element you need to return:

0 hairs --> "Clean!"
1 hair --> "Unicorn!"
2 hairs --> "Homer!"
3-5 hairs --> "Careless!"
>5 hairs --> "Hobo!"

So for this head: "------/------" you shoud return:

["-------------", "Unicorn"]

FUNDAMENTALSSTRINGSARRAYS


function bald(x){

  let patterns=x
  let str='/'
  let strrep='-'
  let arr=[]
  let tot=0
for (let i=0;i<patterns.length;i++)
{ 
  let  res=patterns[i].includes(str)?patterns[i].indexOf(str):patterns[i]
  if (res===0) tot++
  arr.push(res)
}
 const slr=arr.join('').replace(/0/g, "-")

 return  tot===0?[slr,'Clean!']:tot===1?[slr,'Unicorn!']:tot==2?[slr,'Homer!']:(tot>2 && tot<6)?[slr,'Careless!']:[slr,'Hobo!']
 
