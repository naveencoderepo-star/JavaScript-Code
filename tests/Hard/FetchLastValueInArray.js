class FetchLastValueInArray{


    fetchLastValueInArray(arr){

        return arr[arr.length -1];

    }
}

const obj = new FetchLastValueInArray();
const result = obj.fetchLastValueInArray([1,2,3,4,5,6,7]);
console.log(result);
