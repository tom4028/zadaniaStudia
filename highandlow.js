const arr = [1,6,23,8,4,98,3,7,3,98,4,98];

// let minN =arr[0],maxN=arr[0];

// arr.forEach(function(num){
//     if(num<=minN){
//         minN = num;
//     }
//     if(maxN<=num){
//         maxN = num;
//     }
// });

// console.log("najmniejsza wartość: ",minN);
// console.log('największa wartość; ',maxN);

// function hl(arr,cb){
//     let minN = arr[0],maxN = arr[0];
//     let mh = [];
//     arr.forEach(function(num){
//         if(num<=minN){
//             minN = num;
//         }
//         if(maxN<=num){
//             maxN = num;
//         }
//         });
//     mh.push(minN,maxN);
//     cb(mh);
// };

// hl(arr,function(mh){
//     console.log("Min number of arr: ",mh[0]);
//     console.log("Max number of arr: ",mh[1]);
// });
function hl(arr){
    let arrhl = [arr[0],0];
    return new Promise((resolve,reject)=>{
        if(arr instanceof Array){
            arr.forEach(function(ar){
                if(ar<=arrhl[0]){
                    arrhl[0] = ar;
                }
                if(ar>=arrhl[1]){
                    arrhl[1] = ar;
                }
            });
            resolve(arrhl);
        }else{
            reject("Error: nieprawidłowa tablica...");
        }
    });
};

hl(arr).then(result=>{
    console.log(result);
}).catch(err=>console.log(err));