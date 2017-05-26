var arr = process.argv.slice(2, process.argv.length)

var sum = 0;
for (let i=0; i<arr.length; i++) {
    sum +=Number(arr[i])
}
console.log(sum);