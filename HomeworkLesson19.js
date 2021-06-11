const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Reduce

// 1. zwróć sumę wszystkich elementów znajdujących się w tablicy,
const sumAll = array.reduce((number, quantity) => {
  return number + quantity
})
console.log(sumAll)

// 2. zwróć sumę wszystkich parzystych elementów tablicy,
function sumEven(number, current) {
  if (current % 2 === 0) {
    number += current
    return number
  }
}
console.log(array.reduce(sumEven, 0))

// 3. zwróć sumę wszystkich elementów tablicy + 10(10 dodaj za pomocą initialValue)
const sumAllPlusTen = array.reduce((number, quantity) => {
  return number + quantity
}, 10)
console.log(sumAllPlusTen)

// 4. Napisz czym będzie accumulator jak nie podamy initialValue, a czym będzie jak podamy initialValue,
// Jeśli nie podamy initialValue, to przy wywołaniu funkcji, jako accumulator zostanie użyty element tablicy o indexie 0 (pierwszy), a w przeciwnym wypadku będzie to drugi element.

// 5. Jeśli podamy initialValue w tablicy to jaki index będzie miał prawdziwy pierwszy element naszej tablicy ?
//index 1

// 6. Napisz pętle for która będzie miała takie samo działanie jak pętla reduce(pokazane było na live)

// Some i every:
const someArray = [11, 3, 5, 31, 31, 54, 23, 14]

// 7. zwróć true jeśli tablica zawiera chociaż jeden element większy niż 50,
const isBigEnough = (element) => element >= 50
const BigEnough = someArray.some(isBigEnough)
console.log(BigEnough)

// 8. zwróć true jeśli w tablicy każdy element jest większy od 2,
const isGreaterThan = (element) => element > 2
const greaterThan = someArray.every(isGreaterThan)
console.log(greaterThan)

// 9. Jaka jest różnica między some i every?
//    - Metoda some sprawdza czy którykolwiek z elementów zawartych w tablicy spełnia warunek zdefiniowany w funkcji, 
//      natomiast w przypadku every żeby zwrócona została wartość true, warunki musi spełniać każdy element tablicy.

// 10. sprawdz czy tablica zawiera element podzielny przez 7 i jeśli tak to niech wyświetli w konsoli informacje, że
// w tablicy znajduje się element podzielny przez 7,
const DivBySeven = someArray.some(element => element % 7 === 0)
const IsDivBySeven = () => {
  DivBySeven === true ?
    console.log('W tablicy znajduje się element podzielny przez 7') :
    console.log('W tablicy nie ma elementu podzielnego przez 7')
}
IsDivBySeven()

// stwórz metodę some za pomocą pętli for,
function someMethod() {
  const array = [11, 3, 5, 31, 31, 54, 23, 14]
  const element = 11
  const result = []
  for (let i = 0; i < array.length; i++) {
    if (array[i] == element) {
      result.push(true)
    }
  }
  result.includes(true) ? console.log('Tablica zawiera wybrany element') : console.log('Tablica nie zawiera wybranego elementu')
}
someMethod()

// stwórz metodę every za pomocą pętli for,
function everyMethod() {
  const element = 11
  const array = [11, 3, 5, 31, 31, 54, 23, 14]
  const arr = []
  for (let i = 0; i < array.length; i++) {
    if (array[i] == element) {
      arr.push(true)
    } else {
      arr.push(false)
    }
  }
  arr.includes(false) ? console.log('Nie wszystkie elementy tablicy są równe wprowadzonej wartości') : console.log('Wszystkie elementy w tablicy są równe wprowadzonej wartości')
}
everyMethod()

// 11. Funkcje i metody reduce, some i every
// Stwórz funkcję, która:
// a) przyjmuje tablicę jako parametr i sumuje nam elementy typu number z tej tablicy(użyj typeof),
const randomData = ['ford', 450, 'red', true, 55000, 'mustang', false, 97927]
const sum = randomData.reduce((acc, nextValue) => {
  if (typeof nextValue === "number") {
    return acc + nextValue
  }
  return acc
}, 0)
console.log(sum)

// b) przyjmuje dwa parametry (tablicę oraz wartość initialValue), a następnie odejmuje nam każdy kolejny element
//    tablicy od następnego,
const randomData2 = [97927, 55000, 450, 123, 9, 76223]
const sub = randomData2.reduce((acc, nextValue) => {
  if (typeof nextValue === "number") {
    return acc - nextValue
  }
  return acc
}, 0)
console.log(sub)

// c) przyjmuje dwa parametry(tablicę i wartość, której szukamy w tej tablicy). Funkcja powinna nam zwrócić true
//    jeśli w tablicy znajdzie się ta wartość,
const isSoughtNumber = function(randomData, value) {
  value = 9
  if (randomData === value) {
    return value
  }
}
console.log(randomData.some(isSoughtNumber))

// 12. Prototypy:

// a) Stwórz funkcję konstruktora, która stworzy nam obiekt samochód z właściwościami:
//    (model, yearOfProduction, color, drive()) i stwórz dwa samochody tym konstruktorem,
const car = function(model, yearOfProduction, color, drive) {
  this.model = model
  this.yearOfProduction = yearOfProduction
  this.color = color
  this.drive = drive
}
const ford = new car('ford', '2005', 'red', 'rear')
const nissan = new car('nissan', '2011', 'silver', '4x4')
console.log(ford, nissan)

// b) Co robi słówko kluczowe New i kiedy możemy go użyć?
//    - Słowa kluczowego new używamy gdy chcemy strozyć nowy obiekt o podanych właściwościach na podstawie funkcji konstruktora.

// c) Za pomocą prototype dodaj dwie funkcje do konstruktora car, tankFuel i stop,
//    które będą wypisywać w konsoli dowolny napis.
car.prototype.tankFuel = function() {
  console.log('')
}
car.prototype.stop = function() {
  console.log('')
}
ford.tankFuel()
nissan.stop()
