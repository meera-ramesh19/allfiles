// This is my solution for AlgoDaily problem Array Intersection
// Located at https://algodaily.com/challenges/array-intersection

function intersection(nums1, nums2){
  // fill this in
   let i=0;
   let j=0;
   let intersect=[];
   let k=0;
    for(i=0;i<nums1.length;i++){
       for(j=0;j<nums2.length;j++){
        if (nums1[i]==nums2[j]){
           intersect[k]=nums1[i];
           k=k+1;
            break;
          
          }
      
       }
     }
    
    return intersect;
}

let first=["red","green","blue","black"];
let second=["white","green","black","brown"];
let result=intersection(first,second);
console.log(result);

or 
let intersection = firstArray.filter((el) => {
  return secondArray.includes(el);
});
or using sets
function intersection(nums1, nums2) {
  const set = new Set(nums1);
  const fileredSet = new Set(nums2.filter((n) => set.has(n)));
	return [ ...fileredSet ];
}
pr using hash
function intersection(nums1, nums2) {
  const set = new Set(nums1);
  const fileredSet = new Set(nums2.filter((n) => set.has(n)));
	return [ ...fileredSet ];
}
pr

