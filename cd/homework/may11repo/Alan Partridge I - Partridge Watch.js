
Alan Partridge I - Partridge Watch



To celebrate today's launch of my Hero's new book: Alan Partridge: Nomad, We have a new series of kata arranged around the great man himself.

Given an array of terms, if any of those terms relate to Alan Partridge, return Mine's a Pint!

The number of ! after the t should be determined by the number of Alan related terms you find in the provided array (x). The related terms are:

Partridge
PearTree
Chat
Dan
Toblerone
Lynn
AlphaPapa
Nomad

If you don't find any related terms, return 'Lynn, I've pierced my foot on a spike!!'

All Hail King Partridge

Other katas in this series:

Alan Partridge II - Apple Turnover
Alan Partridge III - London

FUNDAMENTALSARRAYSSTRINGS

function part(arr){
  let alan=['Partridge',
'PearTree',
'Chat',
'Dan',
'Toblerone',
'Lynn',
'AlphaPapa',
'Nomad']


 const sum=arr.filter((item)=>alan.includes(item)).length
 return sum>0? "Mine's a Pint"+'!'.repeat(sum):  "Lynn, I've pierced my foot on a spike!!";


}
