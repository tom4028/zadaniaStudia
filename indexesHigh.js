const arr = [1,6,23,8,4,98,3,7,3,98,4,98];

// let maxN = arr[0];
// let arrIndex = [];

// arr.forEach(function(num){
//     if(num>maxN){
//         maxN = num;
//     }
// });
// for(let i=0;i<arr.length;i++){
//     if(arr[i]===maxN){
//         arrIndex.push(i);
//     }
// }
// console.log(maxN);
// console.log("Numery pod którymi wystepuje max liczba: ",arrIndex);

// function indexesH(arr,cb){
//     let maxN = arr[0];
//     let arrIndex = [];

//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>maxN);
//         maxN = arr[i];
//     }

//     for(let i=0;i<arr.length;i++){
//         if(arr[i]===maxN){
//         arrIndex.push(i);
//         }
//     }
//     cb(arrIndex);
// };

// indexesH(arr,function(arrIndex){
//     console.log("Indexy tablicy z anjwiększymi wartościami to : ",arrIndex);
// })

function indexesH(arr){
    return new Promise((resolve,reject)=>{
        if(arr instanceof Array){
            let maxN = arr[0];
            let arrIndex = [];
            for(let i=0;i<arr.length;i++){
                maxN = arr[i]>maxN?arr[i]:maxN;
            }
            for(let i=0;i<arr.length;i++){
                if(arr[i]===maxN){
                    arrIndex.push(i);
                }
            }
            resolve(arrIndex);
        }else{
            reject("Error: Nieprawidłowa tablica...");
        }
    });
}

indexesH(arr).then(result=>console.log(result)).catch(err=>console.log(err));