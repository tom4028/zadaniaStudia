const arr =['Karol','Adam','Rogowski','Politechnika','Super','Weekend'];

// let longS = arr[0];
// arr.forEach(function(s){
//     if(s.length >= longS.length){
//         longS = s;
//     }
// });
// console.log(longS);

// function longString(arr,cb){
//     let longS = arr[0];
// arr.forEach(function(s){
//     if(s.length >= longS.length){
//         longS = s;
//     }
// });
// cb(longS);
// };
// longString(arr,function(longS){
//     console.log("Najdłuższa nazwa: ",longS);
// })

function longString(arr){
    return new Promise((resolve,reject)=>{
        if(arr instanceof Array){
            let longS = arr[0]
            arr.forEach((s)=>{
                if(s.length>=longS.length){
                    longS = s;
                }
            });
            resolve(longS);
        }else{
            reject("Error: nieprawidłowa tablica...");
        }
    });
};

longString(arr)
    .then(result=>{
        console.log(result);
    })
    .catch(err=>console.log(err));