//.push()
let arr=[10,20,30,40]
arr.push(30);
console.log(arr);

//.pop()
arr.pop();
console.log(arr);

// shift
arr.shift();
console.log(arr);

//unshift
arr.unshift(10);
console.log(arr);

//sort

let arr1=[2,3,9,4];
arr1.sort();
console.log(arr1);

//reverse
console.log(arr1.reverse());


string1='trendologies';
res1=string1.split("").reverse().join("");
console.log(res1);

//splice
let day=['sun','mon','tue','wed'];
day.splice(1,1,'divya');
console.log(day)

day.splice(1,0,'viay');
console.log(day)

//task:
let string="chennai city center";
let res=string.split(" ");
console.log(res);
let result=""
for (let x of res) {
    x[0].toUpperCase()+x.substring(1);
    result+=x[0].toUpperCase()+x.substring(1)+" ";
  
}
console.log(result);

