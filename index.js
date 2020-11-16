function generateResultArr(inArr){
    return inArr.slice(0, Math.ceil(inArr.length / 2));
}

function foldArray(array, runs)
{
    var wholeArray = array;
    var firstHalf = array;
    for(let i=0; i<runs;i++){
         firstHalf = generateResultArr(firstHalf); 

        let startAddingInd = firstHalf.length;
        
        let finalStartInd = 0;
        
        for(let j = wholeArray.length-1; j >= startAddingInd; j--){
            firstHalf[finalStartInd] += wholeArray[j];
            finalStartInd++;
        }
        wholeArray = firstHalf;
    }

    return firstHalf;
}


{
    var input = [ 1, 2, 3, 4, 5 ];
    var expected = [ 6, 6, 3 ];
    console.log(foldArray(input, 1).toString());
}
{
    var input = [ 1, 2, 3, 4, 5 ];
    var expected = [ 9, 6 ];
    console.log(foldArray(input, 2).toString());
}
{
    var input = [ 1, 2, 3, 4, 5 ];
    var expected = [ 15 ];
    console.log(foldArray(input, 3).toString());
}
{
    input = [ -9, 9, -8, 8, 66, 23 ];
    expected = [ 14, 75, 0 ];
    console.log(foldArray(input, 1).toString());
}