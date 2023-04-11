console.clear();

/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
*/

const str = 'Pomidoras';

console.log(str.charAt(0), '; ', str[0]);
console.log(str.charAt(1), '; ', str[1]);
console.log(str.charAt(2), '; ', str[2]);
console.log(str.charAt(20), '; ', str[20]);         // "", ''

console.log(str.charCodeAt(0));
console.log(str.charCodeAt(1));
console.log(str.charCodeAt(2));

console.log('a' > 'b', '->', 'a'.charCodeAt(0), 'b'.charCodeAt(0));

console.log('---------------');

const w1 = 'Labas';
const w2 = 'rytas';

const w12 = w1.concat(w2);
console.log(w12, w1 + w2);

const w123 = w1.concat(' ', w2);
console.log(w123, w1 + ' ' + w2);

const w1234 = w1.concat(' ', w2, '!');
console.log(w1234, w1 + ' ' + w2 + '!');
console.log(w1234, `${w1} ${w2}!`);

console.log('---------------');

const kaTu = 'Ka tu?';

const arSaukiamasis = kaTu.endsWith('!');
console.log('saukiamasis:', arSaukiamasis);

const arPaprastas = kaTu.endsWith('.');
console.log('paprastas:', arPaprastas);

const arKlausiamasis = kaTu.endsWith('?');
console.log('klausiamasis:', arKlausiamasis);

console.log('---------------');

console.log('Pomidoras'.includes('p'));
console.log('Pomidoras'.includes('P'));

const kurIeskau = 'Pomidoras';
const koIeskau = 'p';

console.log(kurIeskau.includes(koIeskau));

function arYraTekste(tekstas, raide) {
    for (let i = 0; i < tekstas.length; i++) {
        console.log('>>', tekstas[i], tekstas[i] === raide ? true : false);
        if (tekstas[i] === raide) {
            return true;
        }
    }
    return false;
}

function arYraTekste2(tekstas, raide) {
    let arRadau = false;

    for (let i = 0; i < tekstas.length; i++) {
        if (tekstas[i] === raide) {
            arRadau = true;
            break;
        }
        console.log('>>', tekstas[i], arRadau);
    }

    return arRadau;
}

// console.log('>>', arYraTekste(kurIeskau, 'p'));
console.log('>>', arYraTekste2(kurIeskau, 'm'));