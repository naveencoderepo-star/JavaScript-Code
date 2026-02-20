function remvoveFalsy(arr){

    let output = [];

    for (let i = 0; i<=arr.length -1; i++){

        if(arr[i]){

            output.push(arr[i])

        }
    }

    return output;
}

console.log(remvoveFalsy([1,0, "", undefined, null, NaN,false,9,8]))


