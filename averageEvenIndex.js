const arr = [1,6,23,8,4,98,3,7,3,98,4,98];

// let sumEvenIndex = 0;
// let count = 0;
// for(let i=1;i<arr.length;i++){
//     if(i%2 ==0){
//         count++;
//         sumEvenIndex+=arr[i];
//     }
// }
// let averEvenIndex = sumEvenIndex/count;
// console.log("To jest średnia wartość liczb przy parzystych indexach tablicy: ",averEvenIndex.toFixed(2));

// function sumEvenIndex(arr,cb){
//     let sumEvenIndex = 0;
//     let count =0;
//     for(let i=1;i<arr.length;i++){
//         if(i%2 ==0){
//             count++
//             sumEvenIndex+=arr[i];
//         }
//     }
//     cb(sumEvenIndex,count);
// }

// sumEvenIndex(arr,function(sum,count){
//     console.log("To jest srednia wartość liczb parzystych indexów: ",(sum/count).toFixed(2));
// });