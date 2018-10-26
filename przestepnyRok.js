let years = [1974,1900,1985,2000];
// let year;
// for (let i=0;i<years.length;i++){
//     year = years[i];
//     if((years[i]%4===0 || years[i]%100===0) && years[i] %400 !=0){
//         console.log(year);
//     }
// }
//wersja callback

// function przestepnyRok(years,cb){
//     let lataPrzestepne = [];
//     years.forEach((year)=>{
//         year = ((year%4===0 || year%100===0) && year%400 !=0)? lataPrzestepne.push(year):false;
//     });
//     if(lataPrzestepne){
//         cb(lataPrzestepne);
//     }else{
//         cb("Error: Brak danych w tablicy...");
//     }
// };

// przestepnyRok(years,(lata)=>{
//     console.log(`Lata przestępne to: ${lata}`);
// })

//Wersaj Promise
function przestepnyRok(years){
    let lataPrzestepne = [];
    return new Promise((resolve,reject)=>{
        years.forEach((year)=>{
            year = ((year%4===0 || year%100===0) && year%400 !=0) ? lataPrzestepne.push(year) : false;
        });
        if(lataPrzestepne) resolve(lataPrzestepne);
        reject("Error: Brak lat przestępnychw tablicy...");
    })
};

przestepnyRok(years).then(lata=>console.log(`Lata przestępne to: ${lata}`)).catch(err=>console.log(err));

