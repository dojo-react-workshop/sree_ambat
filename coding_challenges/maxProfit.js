
// function maxProfit(arr) {
//     var buyIndex = 0;
//     var sellIndex = 1;
//     var maxProfit = arr[sellIndex] - arr[buyIndex];

//     for(let i=0; i<arr.length; i++) {
//         for(let x=i+1; x<arr.length; x++) {
           
//             if((arr[x]-arr[i]) > maxProfit) {
//                 buyIndex = i;
//                 sellIndex = x;
//                 maxProfit = arr[x]-arr[i];
//             }
//         }
//     }

//     return({buyIndex:buyIndex, sellIndex:sellIndex, maxProfit:maxProfit});

// }


// function maxProfit(arr) {
//     var buyIndex = 0
//     var buyPrice = arr[buyIndex]
//     var sellIndex = 1
//     var sellPrice = arr[sellIndex]

//     for (let i=1; i<arr.length; i++) {
//         //check if price is less than buyPrice
//         if(buyPrice > arr[i]) {
//             buyPrice = arr[i]
//             buyIndex = i
//         } else if((arr[i] > sellPrice) && (i>buyIndex)) {
//             sellPrice = arr[i]
//             sellIndex = i;
//         }
//     }
//     maxProfit = sellPrice - buyPrice
//     return({buyIndex:buyIndex, sellIndex:sellIndex, maxProfit:maxProfit})
// }


function maxProfit(arr) {
    if(arr.length <=1) return;

    var buyPrice = arr[0];
    var maxProfit = arr[1] - arr[0];

    for(let i=1; i<arr.length; i++) {
        if(buyPrice>arr[i]) {
            buyPrice = arr[i];
        }
        else if(maxProfit<(arr[i]-min))
            maxProfit = arr[i]-min
    }
    return maxProfit

}

console.log(maxProfit([10,9,8,7,6])); 



