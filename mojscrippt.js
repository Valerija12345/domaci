/* const niz=['milos','gaga','pera']
const proizvodi=[
    {
        naziv: 'jelen',
        cena: 55,
        slika:"slike/jelen.png"},
    {
        naziv: 'milka',
        cena: 155,
        slika:"slike/milka.jpg"},
];
var text = '';
for (let ind=0; ind<proizvodi.length;ind++){
    const proizvod= proizvodi[ind];
    let rb=ind+1
    text +="<div>" + rb + "." + proizvod.naziv + " <span>" + proizvod.cena + " </span>" + 
    "<img width='50px'  src=" + proizvod.slika + ">" + "</img><hr></div>";
} */
//document.getElementById("ucenici").innerHTML =text; 
//const dugleLink=document.getElementById("link-ka-banci").addEventListener("click",window.location.href="https://nbs.rs/sr_RS/finansijsko_trziste/medjubankarsko-devizno-trziste/kursna-lista/prosecni-kursevi/index.html")

/* const pro={
    naziv: 'jelen',
    cena: 55,
    slika:"slike/jelen.png"};
for (const key in pro) {
    if (Object.hasOwnProperty.call(pro, key)) {
        const element = pro[key];
        //console.log(element)
        
    }
} */
const inserted = document.getElementById('myInput')
inserted.addEventListener('input', function(event){
    let converted = event.target.value
    let francValue = document.getElementById('francId')
    francValue.innerHTML = (converted / 108).toFixed(2)
    let poundsValue = document.getElementById('poundsId')
    poundsValue.innerHTML = (converted / 97).toFixed(2)
    let euroValue = document.getElementById('eurosId')
    euroValue.innerHTML = (converted / 117).toFixed(2)
    
})