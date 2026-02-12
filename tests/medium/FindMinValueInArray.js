class FindMinValueInArray{

findMinValueInArray(arr){

    let result = arr[0];

    for(let i =1; i<arr.length; i++){
        if(arr[i] < result){
            result = arr[i]
        }
    }
    return result;

}

}

const object = new FindMinValueInArray();
const minValue =object.findMinValueInArray([5, -10.5, 464, 5, 9, 0, -9, 54,-1]);
console.log(minValue)