// Write a function that takes in a string and returns it when reversed
let food = "eating";
let food2= food.split().reverse().join();
console.log(food2);

//Write a function that takes in the following
// array and consoles the target if it is found else null


function division(num){
    if(num.length<=1){
        return num;
    }
    let middle = Math.floor(num.length / 2);
    let left = num.slice(0,middle);
    let right = num.slice(middle);
    console.log((left));
    console.log((right));
    return sortedArray(division(left), division(right))
}
function sorts(left,right){
    let emptyArray = [];
    console.log
    while(left.length && right.length){
        if(right[0]<left[0]){
            emptyArray.push(right.shift());
        }
        else{
            emptyArray.push(left.shift());
        }
    }
    console.log(emptyArray);
    return [...emptyArray,...left,...right]

}
function binary (num, target){
    let leftIndex = 0;
    let rightIndex = num.length-1;
    console.log(leftIndex);
    console.log( rightIndex);
    while(leftIndex <= rightIndex){
        console.log( leftIndex);
        console.log( rightIndex);
    let middle = Math.floor((leftIndex + rightIndex)/2);
if(num[middle] === target){
            return middle;
    }
else if(arr[middle] > target) {
        rightIndex = middle -1;
    }
    else{
        leftIndex = middle +1;
   
 }
    }
return null;
}

let num = [2,8,0,23,5,45,76]
Target = 23
console.log(binary(num, Target));


//Given years between 2000 and 2023, console all 
//the leap years in the following
//sentence, i.e “2020 is a leap year” if not console log i.e
// “2001 is not a leap year”
let years=[2000 ,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,
2014,2015,2016,2017,2018,2019,2020,2021,2022,2023];
for (let i=0;i<=0;years.length=1,i++)



// Given a range of numbers from 0 to 100, console”Fizz” 
//if the numbers are divisible by 3,
// “Buzz” if the numbers are divisible by 5,
// and “FizzBuzz” if divisible by both 3 and 5.

while (num==100)
    for(n in num){
   if(n%3==0){
    console.log("Fizz");
   }
   else if(n%5 == 0){
    console.log("Buzz");
   }
   else if(n%5==0  && n%3==0){
    console.log("Fizzbuzz");
   }
}


// Write a function that takes in an array of numbers and returns an array that has all
// elements multiplied by 4.

 numArray = [12,87,45,75,23,64,73];
 arr=[];
numArray.forEach(element => {
   arr.push( element*4)
});
console.log(arr);

// Write a function that takes in an array of strings 
//and returns an array with every element
// turned into a number
function numbers(nums) {
let digits = ["10","24","45","56","67"];
let d=[];
let strings=digits.forEach(n => {
    let v= Number(n);

    console.log(v);
});

}
numbers();






