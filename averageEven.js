const arr= [1,6,23,8,4,98,3,7,3,98,4,98];

// let avN =0;
// arr.forEach(function(num){
//     if(num%2 ==0){
//         avN+=num;
//     }
// });

// console.log("Average number of arr even number is: ",avN);

// function averageEven(arr,cb){
//     let avN = 0
//     let count =0;
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]%2 == 0){
//             avN+=arr[i];
//             count++;
//         }
//     }
//     cb(avN,count);
// };

// averageEven(arr,(avN,count)=>{
//     console.log("Average number of arr even number is: ",(avN/count).toFixed(2));
// });

function averageEven(arr){
    return new Promise((resolve,reject)=>{
        let avN = 0;
        let count = 0;
        if(arr instanceof Array){
        arr.forEach((num)=>{
            if(num%2==0){
                avN+=num;
                count++;
            }
        });
        const result = [avN,count];
        resolve(result);
    }else{
        reject("Error: Nieprawidłowa tablica...");
    }
    });
};

averageEven(arr)
    .then(result=>{
        return (result[0]/result[1]).toFixed(2);
    }).then(wynik=>console.log("To jest wynik: ",wynik))
    .catch(err=>console.log(err));
