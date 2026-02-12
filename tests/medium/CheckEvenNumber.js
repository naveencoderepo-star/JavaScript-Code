/*
29. Check if a Number is Even or Odd in JavaScript?
The function isEven(num) checks if a number is even by dividing it by 2. 
If the remainder (num % 2) is 0, the function returns true, means the number is even. 
Otherwise, it returns false. console.log(isEven(10)) prints true because 10 is even number.


*/


class CheckEvenNumber {


    checkEvenNumber(num){


        if(num % 2 !==0){
            return "odd";
        }
        else{
            return "even";
        }

            // return num % 2 === 0;   // It will return true or false 




    }
}


const object = new CheckEvenNumber();
const result = object.checkEvenNumber(30);
console.log(result);