            // var x = [3,5,"Dojo", "rocks", "Michael", "Sensei"]
            // for (var key in x) {
            //     console.log(x[key])
            // }
            // x.push(100);
            // x = ["hello", "world", "JavaScript is Fun"];
            // for (var key in x) {
            //     console.log(x[key])
            // } 
            // var sum=0;
            // for(let i=1; i<=500; i++){
            //     sum+= i;
            // }
            // console.log(sum)

            var arr = [1, 5, 90, 25, -3, 0];
            var min;
            var avg=0;
            for(let x=0; x<arr.length; x++) {
                if(x==0 || min>arr[x]) {
                    min = arr[x]
                }
                avg+= arr[x];
            }
            console.log(min, avg/arr.length)

            var newNinja = {
                name: 'Jessica',
                profession: 'coder',
                favorite_language: 'JavaScript', //like that's even a question!
                dojo: 'Dallas'
            }
            
            for (var key in newNinja) {
                console.log("key: "+key, "value:"+newNinja[key]);
            }