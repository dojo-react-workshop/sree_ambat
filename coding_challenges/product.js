// function product(arr){
//     var length = arr.length-1;
//     var curr = 1;
//     var times = 0
//     var result = [];
//     for(let i=length; i>=0; i--) {
//         temp = arr.pop();
//         times+=arr.length;

//         if(i==0){
//             result[i] = curr;

//         } else {
//             result[i] = curr*arr.reduce(function(acc, val){
//                 return acc*val;
//             })
//         }
//         curr*=temp;
//         times++
//     }
//     console.log(times);
//     console.log(result)
// }

// product([3,2,4,1,5, 3, 4, 5,6, 6])


function getProduct(arr){
    const afterProds = [];
    const beforeProds = [];
    let rollingProd = 1;

    for(let i = 0; i<arr.length; i+=1){
        beforeProds[i] = rollingProd;
        rollingProd *= arr[i];
    }
    

    rollingProd = 1;

    for(let i = arr.length-1; i>=0; i-=1){
        afterProds[i] = rollingProd;
        rollingProd *= arr[i];
    }

    const finalProds = [];
    for(let i = 0; i < arr.length; i+=1){
        finalProds[i] = beforeProds[i]*afterProds[i];
    }

    console.log(beforeProds, afterProds, finalProds)
}

getProduct([1,2,3,4])
