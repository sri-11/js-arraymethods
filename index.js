//-------Array methods-----------------------------------//

//foreach 
const numbers = [2, 4, 6, 8];
numbers.forEach(myFunction)
function myFunction(item,index,arr){
  return arr[index]=item*2;
}
console.log(numbers)
//returns the above mentioned operation result of an array

//map
arr = [1,2,3,4,5];
map2= arr.map((a, i, arr) => {
  return a * 2;
});
console.log(map2)
//operation of multiplying each element with 2

//filter
const rollno=[24,36,42,68];
function fil(rollno){
  return rollno<68;
}
console.log(rollno.filter(fil))
//filters the values in an array.

//includes
const aww=["taylor","Zayn","Kendall"];
const inc=aww.includes("Zayn");
console.log(inc)
//prints true because the value is present in the array

//indexOf
const zap=["taylor","Zayn","Kendall"];
const paz=zap.indexOf("Zayn");
console.log(paz)
//returns the index value of an element in an Array

//findIndex
const findind=[1,2,3,4,5];
function func(findind){
  return findind>=3;
}
console.log(findind.findIndex(func))
//returns the index value of an element

//find
const fin=[1,2,3,4,5];
function f(fin){
  return fin>4
}
console.log(fin.find(f))
//returns 5 which is greater than the condition given

//reduce
const red=[10,20,30,4,5];
function redi(total,num){
  return total*num;
}
console.log(red.reduce(redi))

//slice
const coot=["Panda","Koala Bear","Penguin"];
