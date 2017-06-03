function inOrderSubSets(str, result=['']){
    
    if(str='') return result
    let arr=[]
    let tempStr;

    for(let i=str.length-1; i>=0; i--){
        arr.push[str[i]];
    }

    result.concat([arr]);

    for (let x=1; x<=arr.length; x++) {
        result.push(arr[arr.length]+arr[x])
        tempStr+=arr[x]
    }

    inOrderSubSets(tempStr, result);
}

console.log(inOrderSubSets('a'));