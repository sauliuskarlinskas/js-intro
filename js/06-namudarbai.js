console.clear();

console.log('-------NAMU DARBAI----------');

console.log('--------Kintamųjų inicijavimas--------');

console.log('-----1----');
const penki = 5;
console.log(penki);

const septyni = 7;
console.log(septyni);

const q = 96;
console.log(q);

console.log('-----2----');

const miestas = 'Palanga';
console.log(miestas);

const maistas = 'pica';
console.log(maistas);

const g1 = 'katinas';
console.log(g1);

console.log('-----3----');

const klaidos = [10,9,7,2,3];
console.log(klaidos);
const kilogramai = [2,6,35,99,1];
console.log(kilogramai);
const ilgis = [10,20,50,4,3];
console.log(ilgis);

console.log('-----4----');

const vaisiai = ['obuolys', 'kivis', 'apelsinas', 'kriause', 'greifrutas'];
console.log(vaisiai);
const darzoves =['morka', 'bulve', 'kopustas', 'rope', 'pomidoras']
console.log(darzoves);
const automobiliai =['audi', 'bmw', 'opel', 'ford', 'toyota']
console.log(automobiliai);


console.log('---------Veiksmai su kintamaisiais--------');


console.log('-----1----');

console.log(penki + septyni + q);

console.log('-----2----');

console.log(miestas +' ' + maistas +' ' + g1);


console.log('-----3----');

const klaidu_sprendimas = klaidos[0]-klaidos[1]+klaidos[2]-klaidos[3]+klaidos[4];
console.log(klaidu_sprendimas);
const kilogramu_sprendimas = kilogramai[0]-kilogramai[1]+kilogramai[2]-kilogramai[3]+kilogramai[4];
console.log(kilogramu_sprendimas);
const ilgio_sprendimas = ilgis[0]-ilgis[1]+ilgis[2]-ilgis[3]+ilgis[4];
console.log(ilgio_sprendimas);

console.log('-----4----');
const vaisiu_mix = vaisiai[4]+', '+vaisiai[3]+', '+vaisiai[2]+', '+vaisiai[1]+', '+vaisiai[0];
console.log(vaisiu_mix);
const darzoviu_mix = darzoves[4]+', '+darzoves[3]+', '+darzoves[2]+', '+darzoves[1]+', '+darzoves[0];
console.log(darzoviu_mix);
const auto = automobiliai[4]+', '+automobiliai[3]+', '+automobiliai[2]+', '+automobiliai[1]+', '+automobiliai[0];
console.log(auto);



console.log('-----------Kintamuju palyginimas-------------');



console.log('-----1----');
const a = 33;
const b = 354;

if (a > b){
    console.log('a)Pomidoras');
}
else {
    console.log('a)Bandykite kitą kartą.');
}

if (a < b){
    console.log('b)Pomidoras');
}
else {
    console.log('b)Bandykite kitą kartą.');
}
if (a == b){
    console.log('c)Pomidoras');
}
else {
    console.log('c)Bandykite kitą kartą.');
}
if (a != b){
    console.log('d)Pomidoras');
}
else {
    console.log('d)Bandykite kitą kartą.');
}
if (a >= b){
    console.log('e)Pomidoras');
}
else {
    console.log('e)Bandykite kitą kartą.');
}
if (a <= b){
    console.log('f)Pomidoras');
}
else {
    console.log('f)Bandykite kitą kartą.');
}

console.log('-----2----');
const c = 'pavasaris'.length;
const d = 'vasara'.length;
console.log('c=', c,'d=',d);


console.log('-----3----');
if (c > d){
    console.log('a)Pomidoras');
}
else {
    console.log('a)Bandykite kitą kartą.');
}

if (c < d){
    console.log('b)Pomidoras');
}
else {
    console.log('b)Bandykite kitą kartą.');
}
if (c == d){
    console.log('c)Pomidoras');
}
else {
    console.log('c)Bandykite kitą kartą.');
}
if (c != d){
    console.log('d)Pomidoras');
}
else {
    console.log('d)Bandykite kitą kartą.');
}
if (c >= d){
    console.log('e)Pomidoras');
}
else {
    console.log('e)Bandykite kitą kartą.');
}
if (c <= d){
    console.log('f)Pomidoras');
}
else {
    console.log('f)Bandykite kitą kartą.');
}

console.log('-----4----');
const gerimai = ['alus', 'gira'];
const count = (gerimai.length);
console.log('Gerimai=',count);

console.log('-----5----');



console.log('-----------Ciklo for panaudojimas-----------');

console.log('-----1----');

let suma_a = 0;
for (let i = 0; i <= 0; i++) {
    suma_a += i; 
}
console.log("a)"+suma_a);

let suma_b = 0;
for (let i = 0; i <= 4; i++) {
    suma_b += i; 
}
console.log("b)"+suma_b);

let suma_c = 0;
for (let i = 0; i <= 100; i++) {
    suma_c += i; 
}
console.log("c)"+suma_c);

let suma_d = 0;
for (let i = 574; i <= 815; i++) {
    suma_d += i; 
}
console.log("d)"+suma_d);

let suma_e = 0;
for (let i = -50; i <= 50; i++) {
    suma_e += i; 
}
console.log("e)"+suma_e);

let suma_f = 0;
for (let i = -70; i <= 30; i++) {
    suma_f += i; 
}
console.log("f)"+suma_f);

console.log('-----2----');

const raides = 'abcdef';

for (let i = raides.length; i >= 0; i--) {
    console.log(raides[i])
}

console.log('-----3----');

let dal_is3a = 0;
let dal_is5a = 0;
let dal_is7a = 0;

for (let i = 0; i <= 11; i++) {
    if (i % 3 == 0) {
        dal_is3a++;
    }
    if (i % 5 == 0) {
        dal_is5a++;
    }
    if (i % 7 == 0) {
        dal_is7a++;
    }
}
console.log(`Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 3 yra ${dal_is3a} vienetai.`);
console.log(`Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 5 yra ${dal_is5a} vienetai.`);
console.log(`Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 7 yra ${dal_is7a} vienetai.`);
console.log('---------');
let dal_is3b = 0;
let dal_is5b = 0;
let dal_is7b = 0;

for (let i = 8; i <= 31; i++) {
    if (i % 3 == 0) {
        dal_is3b++;
    }
    if (i % 5 == 0) {
        dal_is5b++;
    }
    if (i % 7 == 0) {
        dal_is7b++;
    }
}
console.log(`Skaičių intervale tarp 8 ir 31, besidalijančių be liekanos iš 3 yra ${dal_is3b} vienetai.`);
console.log(`Skaičių intervale tarp 8 ir 31, besidalijančių be liekanos iš 5 yra ${dal_is5b} vienetai.`);
console.log(`Skaičių intervale tarp 8 ir 31, besidalijančių be liekanos iš 7 yra ${dal_is7b} vienetai.`);
console.log('---------');
let dal_is3c = 0;
let dal_is5c = 0;
let dal_is7c = 0;

for (let i = -18; i <= -18; i++) {
    if (i % 3 == 0) {
        dal_is3c++;
    }
    if (i % 5 == 0) {
        dal_is5c++;
    }
    if (i % 7 == 0) {
        dal_is7c++;
    }
}
console.log(`Skaičių intervale tarp -18 ir -18, besidalijančių be liekanos iš 3 yra ${dal_is3c} vienetai.`);
console.log(`Skaičių intervale tarp -18 ir -18, besidalijančių be liekanos iš 5 yra ${dal_is5c} vienetai.`);
console.log(`Skaičių intervale tarp -18 ir -18, besidalijančių be liekanos iš 7 yra ${dal_is7c} vienetai.`);
console.log('---------');

console.log('-----------Funkcijos-------------');
console.log('----1----');
function tusciaFunkcija() {
    return false;
}
console.log(tusciaFunkcija());

console.log('----2----');
function daugyba(a, b) {
    return a * b;
}
console.log(daugyba(8, 8));
console.log(daugyba(63, 97));
console.log(daugyba(197,2));

console.log('----3----');

function skaitmenuKiekisSkaiciuje (a) {
    let result = '';
    if ( isNaN(a) ) {
        result = ('Pateikta netinkamo tipo reikšmė.');
    } else {
        result = a.toString().length;
    }
    return result;
}
console.log(skaitmenuKiekisSkaiciuje(5));
console.log(skaitmenuKiekisSkaiciuje(781));
console.log(skaitmenuKiekisSkaiciuje(37060123456));
console.log(skaitmenuKiekisSkaiciuje(true));
console.log(skaitmenuKiekisSkaiciuje("asd"));
console.log(skaitmenuKiekisSkaiciuje(NaN));

console.log('----4----');

function didziausiasSkaiciusSarase (sarasas) {
    if (Array.isArray(sarasas) && sarasas.length !== 0) {
        const max = Math.max(...sarasas); 
        return max;
    } else if (sarasas.length === 0) { 
            return 'Pateiktas sąrašas negali būti tuščias.';
        } else {
            return 'Pateikta netinkamo tipo reikšmė.';
        }
    }
    console.log(didziausiasSkaiciusSarase([1]));
    console.log(didziausiasSkaiciusSarase([1, 2, 3]));
    console.log(didziausiasSkaiciusSarase([-5, 78, 14, 0, 18]));
    console.log(didziausiasSkaiciusSarase([69, 69, 69, 69, 66]));
    console.log(didziausiasSkaiciusSarase([-1, -2, -3, -4, -5, -6, -7, -8]));
    console.log(didziausiasSkaiciusSarase('pomidoras'));
    console.log(didziausiasSkaiciusSarase([]));

    console.log('----5----');

    function isrinktiRaides (a, b) {
        let result = '';
        if (typeof a !== 'string') {
            result = 'Pirmasis kintamasis yra netinkamo tipo'
        } else if (a.length == 0 && a.length < 100) {
            result = 'Pirmojo kintamojo reikšmė yra netinkamo dydžio.'
        } else if (isNaN(b) == true) {
            result = 'Antrasis kintamasis yra netinkamo tipo.'
        } else if (b <= 0) {
            result = 'Antrasis kintamasis turi būti didesnis už nulį.'
        } else if (b > a.length) {
            result = 'Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.'
        } else {
            for (i = 0; i < a.length; i=i+b) {
                result += (a[i]);}
    }
        return result
    }
 console.log(isrinktiRaides("abcdefg", 2 ));    
