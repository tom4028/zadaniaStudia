let years = [1974,1900,1985,2000];
let year;
for (let i=0;i<years.length;i++){
    year = years[i];
    if((years[i]%4===0 || years[i]%100===0) && years[i] %400 !=0){
        console.log(year);
    }
}