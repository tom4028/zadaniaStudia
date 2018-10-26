const arr = [1,6,23,8,4,98,3,7,3,98,4,98];

// let oddSum = 0;
// arr.forEach(function(num){
//     if(num%2 !=0){
//         oddSum+=num;
//     }
// });
// console.log('Suma liczb nieparzystych z tablicy: ',oddSum);

// function oddSum(arr,cb){
//     let odd_Sum = 0;
//     arr.forEach(function(num){
//         if(num%2 !=0){
//             odd_Sum+=num;
//         }
//     });
//     cb(odd_Sum);
// }


// let sum;
// oddSum(arr,function(odd_Sum){
//     sum = odd_Sum;
//     console.log(sum);
//     console.log("Suma liczb nieparzystych z tablicy: " ,odd_Sum);
// });

function sumOddPromise(arr){
    return new Promise((resolve,reject)=>{
        if(arr instanceof Array){
            let odd_sum = 0;
            arr.forEach((num)=>{
                if(num%2 !=0){
                    odd_sum+=num;
                }
            });
            resolve(odd_sum);
        }else{
            reject({"Error":"Nieprawidłowa tablica."});
        }
    });
};

sumOddPromise(arr)
    .then(response=>console.log(response))
    .catch(err=>console.log(err));