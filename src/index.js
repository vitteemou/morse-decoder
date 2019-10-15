const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0'
};

const MORSE_MAPPING = {
    '10': '.',
    '11': '-'
};

function decode(expr) {
    let n = expr.length;
    let result = '';
    
    //for each letter
    for(let i = 0; i < n; i += 10) {

        let curLetterEncoded = expr.substr(i, 10);
        if(curLetterEncoded.startsWith('*')) {
            result += ' ';
            continue;
        }

        let startIndex = curLetterEncoded.indexOf('1');
        let shortLetterEncoded = curLetterEncoded.substr(startIndex);
        let letterMorseEncoded = '';

        //for each pair of digits (10 or 11)
        for(let j = 0; j < shortLetterEncoded.length; j += 2) {
            let curSymbolMorseEncoded = MORSE_MAPPING[shortLetterEncoded.substr(j, 2)];
            letterMorseEncoded += curSymbolMorseEncoded;
        }
        result += MORSE_TABLE[letterMorseEncoded];
    }
    
    return result;
}

module.exports = {
    decode
}