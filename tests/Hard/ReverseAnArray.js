class ReverseAnArray{




reverseAnArray(arr){


    let newArray =[];

    for (let i = arr.length -1; i>=0; i-- ){


        newArray.push(arr[i])




    }

    return newArray;


}




}

const obj = new ReverseAnArray();
const result = obj.reverseAnArray([1,2,3,4,5,6,7]);

console.log(result);