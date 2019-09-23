const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {

    return decodeMorzeWords(seperateWords(expr));

}

function seperateWords(expr) {
    let words = [];

    for (let i = 0; i < expr.length / 10; i++) {
        words.push(expr.slice(i * 10, (i + 1) * 10));
    }

    return words;
}

function numToMorze(word) {
    let encoded = '';
    let index = 2;

    while (index <= word.length) {
        if (word.slice(index - 2, index) == 10) {
            encoded += '.';
        } else if (word.slice(index - 2, index) == 11) {
            encoded += '-';
        }
        index += 2;
    }

    return encoded;
}

function decodeMorzeWords(words) {
    let decoded = '';

    words.forEach(elem => {
        if (elem == '**********') {
            decoded += ' ';
        } else {
            decoded += MORSE_TABLE[numToMorze(elem)];
        }
    });

    return decoded;
}

module.exports = {
    decode
}