const arr = [1,6,23,8,4,98,3,7,3,98,4,98];

// let as = 0;

// arr.forEach(function(num){
//     if(num%2 ==0){
//         as+=num;
//     }else{
//         as-=num;
//     }
// });
// console.log("Value of add even items and subtract odd items: "+as);

// function as(arr,cb){
//     let as = 0;
//     arr.forEach((num)=>{
//        as  = num%2==0?as+=num : as-=num; 
//        console.log(as);
//     });
//     cb(as);
// }

// as(arr,(a_s)=>{
//     console.log("Value of addeven items and subtract odd items: ",a_s);
// })

function as(arr){
    return new Promise((resolve,reject)=>{
        let as = 0;
        if(arr instanceof Array){
        arr.forEach((num)=>{
            as = num%2==0?as+=num:as-=num;
            console.log(as);
        });
        resolve(as);
    }else{
        reject("Error: Nieprawidłowa tablica...");
    }
    });
};

as(arr).then(result=>console.log(result)).catch(err=>console.log(err));