// -------------------------------  LEVEL 1


/* Opdracht 1 */
// Schrijf een functie die een cijfer verwacht en teruggeeft of het cijfer groter is dan nul
// ---- Verwachte uitkomsten:
// -3 geeft false
// 0 geeft false
// 300 geeft true

const isGreaterThanZero = number => number > 0 ? true : false;

console.log(isGreaterThanZero(300));

/* Opdracht 2 */
// Schrijf een functie die twee getallen verwacht en teruggeeft of ze, opgetelt, gróter zijn dan 100.
// ---- Verwachte uitkomsten:
// 1 en 23 geeft false
// 8 en 92 geeft false
// 89 en 14 geeft true

const isSumGreaterThanZero = (number1, number2) => number1 + number2 > 100 ? true : false;

console.log(isSumGreaterThanZero(89, 14)); 

/* Opdracht 3 */
// Schrijf een functie die een zin verwacht en de eerste letter uit de zin omzet naar een hoofdletter.
// ---- Verwachte uitkomsten:
// "de kat krabt de krullen van de trap" geeft "De kat krabt de krullen van de trap"
// "programmeren is super leuk!" geeft "Programmeren is super leuk!"

function firstLetterToCapital(sentence) {
    return sentence[0].toUpperCase() + sentence.slice(1);
}

console.log(firstLetterToCapital('de kat krabt de krullen van de trap'));

/* Opdracht 4 */
// Schrijf een functie die een argument verwacht en het datatype teruggeeft (boolean, object, undefined, number, string,function)
// Tip: gebruik typeof (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)
// { name: 1 } geeft object
// undefined geeft undefined
// "Hallo" geeft string
// [1, 2, 3] geeft object (ja echt!)

function findDataType(input) {
    return typeof(input);
}

console.log(findDataType([1, 2, 3]));

/* Opdracht 5 */
// Schrijf een functie die een array van strings verwacht. Hoe lang die array is weet je niet van tevoren - het zouden zomaar 100 entries kunnen zijn.
// De functie geeft alle strings aan elkaar geplakt terug. Je mag hier géén array- of string methoden voor gebruiken zoals .concat()
// ---- Verwachte uitkomsten:
// ["abra", "cadabra"] geeft "abracadabra"
// ["a", "b", "c", "d", "e"] geeft "abcde"

const joinStrings = function(array) {
    let newString = '';
    for (let i = 0; i < array.length; i++) {
        newString += array[i];
    }
    return newString;
}

console.log(joinStrings(["a", "b", "c", "d", "e"]));

/* Opdracht 6 */
// Schrijf een functie die een zin verwacht en het langste woord uit die zin teruggeeft. Als er meerdere woorden het langst zijn, wordt het laatste langste woord terug gegeven.
// ---- Verwachte uitkomsten:
// "Frontend web development" geeft "development"
// "De eindopdracht telt voor 30 ECTS" geeft "eindopdracht"
// "Een API staat voor Application Programming Interface. Met deze technologie zul je vaak gaan werken." geeft "technologie"

const longestWord = function(sentence) {
    const arrayOfWords = sentence.split(' ');
    let longestWord = '';
    for (let i = 0; i < arrayOfWords.length; i++) {
        if (arrayOfWords[i].length >= longestWord.length) {
            longestWord = arrayOfWords[i];
        }
    }
    return longestWord;
}

console.log(longestWord('Een API staat voor Application Programming Interface. Met deze technologie zul je vaak gaan werken.'));

// -------------------------------  LEVEL 2

/* Opdracht 6 */
// 6a. Schrijf een functie die een woord verwacht en dit omgedraait teruggeeft. Je kunt dit zowel handmatig
// als met ingebouwde methoden doen, de keus is aan jou.
// ---- Verwachte uitkomsten:
// "koekje" geeft "ejkeok"
// "vrienden" geeft "nedneirv"

const reverseWord = word => word = (word.split('')).reverse().join('');

console.log(reverseWord('koekje'));

// 6b. Schrijf een functie die een woord verwacht checkt of dit woord een palindroom is. Een palindroom is een
// spiegelwoord: het is hetzelfde zowel vooruit als achterstevoren. Als dit zo is, geeft de functie true terug,
// zo niet, dan false.
// ---- Verwachte uitkomsten:
// "lepel" geeft true
// "madam" geeft true
// "vrienden" geeft false

const isPalindrome = word => word === reverseWord(word) ? true : false;

console.log(isPalindrome('vrienden'));

/* Opdracht 7 */
// Schrijf een functie die een string en een letter verwacht. De functie telt hoe vaak die letter voorkomt in
// de string en geeft dit terug. Je mag hiervoor géén string- of array-methoden gebruiken.
// ---- Verwachte uitkomsten:
// "Hans en marietje lopen naar de supermarkt" en "e" geeft 6
// "Hans is zijn mondkapje vergeten" en "a" geeft 2

function countOccurences(string, letter) {
    let numberOfOccurences = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === letter) {
            numberOfOccurences++;
        }
    }
    return numberOfOccurences;
}

console.log(countOccurences('Hans is zijn mondkapje vergeten', 'a'));

/* Opdracht 8 */
// Schrijf een functie die bij iedere aanroep een random string id genereert van 8 tekens. Er mag gebruik gemaakt worden van de volgende karakters:
// "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
// ---- Verwachte (mogelijke) uitkomsten:
// iizdX7Ax
// gajxBhGs

function createRandomString() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomString = '';
    for (let i = 0; i < 8; i ++) {
        const randomNumber = Math.floor(Math.random() * characters.length);
        const randomCharacter = characters[randomNumber];
        randomString += randomCharacter;
    }
    return randomString;
}

console.log(createRandomString());

// ------------------------------- LEVEL 3 (optionele bonusopdrachten)

/* Opdracht 9 */
// Schrijf een functie genaamd lastEntry die de laatste entry van een array teruggeeft.
// Let op: Als er een getal als tweede argument wordt meegegeven (de parameter n), worden de laatste n entries van de array teruggegeven.
// ---- Verwachte uitkomsten:
// lastEntry([3, 6, 9, 17, 4, 6, 25, 8]) geeft 8
// lastEntry([46, 65, 34, 204, 190, 89], 3) geeft [204, 190, 89]

function lastEntry(array, entries=1) {
    return array.slice(-(entries));
}

console.log(lastEntry([46, 65, 34, 204, 190, 89], 3));

/* Opdracht 10 */
// Schrijf een functie die geen parameters verwacht en de getallen 1 tot 100 print.
// Voor getallen die deelbaar zijn door 3 print je "Fizz" in plaats van het getal.
// Voor getallen die deelbaar zijn door 5 print je "Buzz" in plaats van het getal.
// Voor getallen die zowel deelbaar zijn door 3 als door 5, print je "FizzBuzz".
// ---- Verwachte uitkomst:
// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz
// 11
// Fizz
// 13
// 14
// FizzBuzz
// 16
// 17
// Fizz
// 19
// Buzz
// Fizz
// 22
// 23
// Fizz
// Buzz
// 26
// Fizz
// 28
// 29
// FizzBuzz
// etc.

const fizzBuzz = function() {
    for (i = 1; i < 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('FizzBuzz');
        }
        else if (i % 3 === 0) {
            console.log('Fizz');
        }
        else if (i % 5 === 0) {
            console.log('Buzz');
        }
        else {
            console.log(i);
        }
    }
}

fizzBuzz();

/* Opdracht 11 */
// Schrijf een functie die een array van strings verwacht en een gezamelijke groet teruggeeft, ongeacht hoeveel items er in de array staan.
// ---- Verwachte uitkomsten:
// ["Nick", "Nova", "Mitchel", "Arjen"] geeft "Hoi Nick, Nova, Mitchel en Arjen!"
// ["Piet", "Henk"] geeft "Hoi Piet en Henk!"
// ["A", "B", "C", "D", "E", "F"] geeft "Hoi A, B, C, D, E en F!"

const greetPeople = function(array) {
    let greeting = 'Hoi '
    for (let i = 0; i < array.length; i++) {
        if (i === array.length - 1) {
            greeting += ' en ' + array[i] + '!';
        }
        else if (i === array.length - 2) {
            greeting += array[i];
        }
        else {
            greeting += array[i] + ', ';
        }
    }
    console.log(greeting);
}

greetPeople(["A", "B", "C", "D", "E", "F"]);