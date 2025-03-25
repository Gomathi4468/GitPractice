//map 
// reduce 
//filter

//syntax: variablename.map((value, index, acctualarray))
let a = [1,3,5,9];
// let b=a.map((val,ind, acc)=>val+5);
// console.log(b);
let b=a.map(mapfunc)
console.log(b);
function mapfunc(num){
    return num+5;
}
// filter
let c= a.filter((val, ind, acc)=>val>2)
console.log(c);

//reduce
let r=a.reduce((d,f)=>d+f);
console.log(r);