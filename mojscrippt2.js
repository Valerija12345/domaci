const proizvodi=[
    {
        naziv: 'franci',
        cena: 108,
        slika:"slike/unnamed.jpg"},
    {
        naziv: 'dolari',
        cena: 97,
        slika:"slike/350px-USDnotes.png"},
    {
        naziv: 'evri',
        cena: 117,
        slika:"slike/166550_brnabic01-alo-dejan-briza-1000x0_f.jpg"},
];
var text = '';
for (let ind=0; ind<proizvodi.length;ind++){
    const proizvod= proizvodi[ind];
    let rb=ind+1
    text +="<div>" + rb + "." + proizvod.naziv + " <span>" + proizvod.cena + " </span>" +  
    "<img width='250px'  src=" + proizvod.slika + ">" + "</img><hr></div>";
}
document.getElementById("ucenici").innerHTML =text; 
const pro={
    naziv: 'franci',
    cena: 108,
    slika:"slike/unnamed.jpg"};
for (const key in pro) {
    if (Object.hasOwnProperty.call(pro, key)) {
        const element = pro[key];
        //console.log(element)
        
    }
}