console.log('-------NAMU DARBAS----------');

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

function skaitmenuKiekisSkaiciuje(a) {
    return 0;
}
console.log(skaitmenuKiekisSkaiciuje(5));
console.log(skaitmenuKiekisSkaiciuje(781));
console.log(skaitmenuKiekisSkaiciuje(37060123456));
console.log(skaitmenuKiekisSkaiciuje(true));
console.log(skaitmenuKiekisSkaiciuje("asd"));
console.log(skaitmenuKiekisSkaiciuje());

console.log('----4----');

const metai = [21,35,46,11];
function didziausiasSkaiciusSarase(metai) {
    return 0;
}