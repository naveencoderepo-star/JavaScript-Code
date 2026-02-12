/*

Feature,          indexOf()                            includes()
Returns      * The position (Number)       * Boolean (true/false)
Best Use     * When you need the location  * When you just need to check existence.
Standard     * From ES5                    * Newer (ES6).


*/


class StringContainAnotherString{

getStringUsignIndexOf(word, str){


if(word.toLowerCase().indexOf(str.toLowerCase()) !== -1){     
    return "String is found!!!!!"
}

else{

    return "Not found!!!!"
}



}


getStringUsingIncludes(word, str){

    return word.toLowerCase().includes(word.toLowerCase());
}


}

const object = new StringContainAnotherString();
const result1 =object.getStringUsingIncludes('Javascript', 'Script');
const result = object.getStringUsignIndexOf('Javascript', 'Script');
console.log(result);
console.log(result1);
