// const orderSupplies = (item, callback) => {
//   // The orderSupplies function first finds the item you requested
//   const warehouse = [
//     { item: 'paint', action(){ return 'start mixing!' } },
//     { item: 'brush', action(){ return 'start painting!' } }
//   ];

//   const deliveryTime = Math.random()*3000  1000
//   setTimeout( () => {
//     const foundItem = warehouse.find((obj) => obj.item === item);

//     if (foundItem) {
//       callback(foundItem);
//     }

//   }, deliveryTime )
// }

// function printItem (order) {
//     console.log(order.item  " delivered. Time to "  order.action());
// }

// var paintDelivered = false;
// var brush = null;

// orderSupplies("paint", (paint) => {
//     printItem(paint);
//     paintDelivered = true;
//     if(brush) printItem(brush)
// })

// orderSupplies("brush", (brush) => {
//     if(paintDelivered) {
//         printItem(brush)
//     }
//     else {
//         brush = brush
//     }
// })

// const receipt = new Promise((resolve, reject) => {
//     resolve();
//     setTimeout(function() {
//     }, 2000);
//     reject();
// });

// receipt.then(function(){
//     console.log("Promise resolved")
// }, function() {
//     console.log("Rejected")
// })

// const receiptA = new Promise((resolve, reject) => {
//     const rand = Math.random() * 1000;
//     setTimeout(function(){
//         resolve("BOOM!");
//     }, rand);
// });

// receiptA
//     .then(function(item){
//         console.log('ITEM: ', item);
//     });
const orderSupplies = (item) => {
  // The orderSupplies function first finds the item you requested
  const warehouse = [
    { item: 'paint', action(){ return 'start mixing!' } },
    { item: 'brush', action(){ return 'start painting!' } }
  ];

  const deliveryTime = Math.random() * 3000 + 1000;


  return new Promise((resolve, reject) => {
    setTimeout( () => {
        const foundItem = warehouse.find((obj) => obj.item === item);

        if (foundItem) {
            resolve(foundItem);
        }
        else {
            reject()
        }

    }, deliveryTime );
  })
}

const printItem = (delivery) => console.log(`${delivery.item} delivered! Time to ${delivery.action()}`)
let brushPromise = orderSupplies('brush');
orderSupplies('paint')
    .then(function(item){
        printItem(item);
        return brushPromise
    })
    .then(function(item){
        printItem(item);
    }).catch(()=>{console.log("error")})
