// 1. Stwórz zmienną:
// a) typu string o nazwie name i wartości 'Karol',
let name = "Karol"
// b) typu number o nazwie age i wartości 40,
let age = 40
// c) typu boolean o nazwie isOpen i wartości true,
let isOpen = true
// d) typu string o nazwie stringBoolean o wartości true,
let stringBoolean = true
// e) typu string o nazwie stringNumber o wartości 100,
let stringNumber = 100

// 2. Zrób console.log dla wartości:
// a) 'Michał'
console.log('Michał')
// b) 'Hello Ania'
console.log('Hello Ania')
// c) 4
console.log(4)
// d) false
console.log(false)

// 3. Zrób console.log dla każdej zmiennej z zadania pierwszego,
console.log(name)
console.log(age)
console.log(isOpen)
console.log(stringNumber)

// 4. Napisz console.log, w którym wyświetlisz w konsoli:
// a) wynik dodawania 2 + 2,
console.log(2 + 2)

// b) wynik dodania dwóch stringów 'Michał ' + 'Kowalski',
console.log('Michał ' + 'Kowalski')

// c) wynik równania 2 + 2 * 2,
console.log((2 + 2) * 2)

// 5.Dodawanie dwóch cyfr(dowolnie wybranych) do zmiennej, później zrób console.log tej zmiennej,
// aby wyświetliło się w następujący sposób: 'wynik', 4 <--- (4 to przykładowa wartość zmiennej)
function addNum() {
  let a = 50
  let b = 'Wynik: '
  return b + (a + 9 + 17)
}
console.log(addNum())

// // 6. Stwórz zmienną typu let i zmień jej wartość dwa razy, a następnie zrób console.log ostatecznej
// // wartości tej zmiennej,
let change = 12
change = 563
change = 76532
console.log(change)

// 7. Napisz funkcję, która:
// a) zwraca wynik dodawania 2 + 2 (bez parametrów)
function addNum2() {
    return 2 + 2
}
// b) zwraca string 'Hello World!' (bez parametrów)
function hello() {
    return let ('Hello World!')
}
// c) zwraca wartość true (bez parametrów)
function varTrue() {
    return true
}
// d) zwraca reszte z dzielenia 6 przez 4,
function divi() {
    return 6 / 7
}
// e) zwraca wynik równania 3 do potęgi 4tej,
function pow() {
    return 3 ** 4
}
// f) zwraca 'Hello, ' + 'how are you?'
function helloHow() {
    return 'Hello, ' + 'how are you?'
}
// g) zwraca wynik mnożenia 5 przez 60
function multi1() {
    return 5 * 60
}
// h) zwraca wynik mnożenia 3 przez 3600,
function multi2() {
    return 3 * 3600
}
// i) zwraca wynik działania 10 * 9 / 2
function diviMult() {
    return 10 * 9 / 2
}
// j) zwraca wynik odejmowania 10 od 200stu,
function minus() {
    return 200-10
}

// 8. Stwórz tablicę:
// a) 3 elementową z cyframi od 1 do 3
let tableA = [1,2,3]
// b) 5 elementową z markami aut,
let tableB = ['opel','bmw','toyota','fiat','jeep']
// c) 3 elementową składającą się z wartości true, false i true
let tableC = [true,false,true||false]
// d) pustą tablicę,
let tableD = []
// e) składającą się z 5 dowolonych wartości z pomieszanymi typami,
let tableE = [56,'Marcin',false,'none',9]
// f) zrób console.loga w którym z powyższej tablicy wyświetlasz wartość która jest w drugiej
// kolejności od początku,
console.log(tableE[1])
// g) *** Jaka właściwość i jak użyta słuzy do wyświetlenia długości tablicy? Stwórz własną tablicę
// z 3 elementami i wyświetl za pomocą consol.log jej długość,
let tableG = [1, 2, 3]
console.log(tableG.length)
// h) *** Czy wiesz jak stworzyć pustę tablicę ? dodać do niej losową wartość i wyświetlić za pomocą
// console.loga już zmienioną tablicę?
let tableH = []
tableH.push(Math.random())
console.log(tableH)

// 9. Stwórz obiekt:
// a) pusty obiekt,
const blank = {}
// b) obiekt o nazwe person zawierający klucz name i jego wartość 'Iza',
const person = {
    name: "Iza",
}
// c) obiekt o nazwe personDetails zawierający dane o osobie jak name, lastName, age, drivingLicence
// gdzie ten ostatni powinien być booleanem, w zależności od tego czy osoba ma prawo jazdy czy nie
const personDetails = {
    name: 'Michał',
    lastName: 'Kowalski',
    age: 30,
    drivingfLicense: true,
}
// d) z obiektu personDetails zrób consol.log samego wieku,
console.log(personDetails.age)

// e) zrób console.log całego obiektu,
console.log(personDetails.name, personDetails.lastName, personDetails.age, personDetails.drivingfLicense)

// 10. Napisz te same funkcje co wyżej ale dodając wartości jako argumenty podczas wywołania funkcji, czyli:
// a) dodającą dwie liczby,
function addNum2(a, b) {
    a = 0
    b = 0
    return a + b
}

// b) wyświetlającą podany podczas wywołania napis,
function displayText(a) {
    a = ''
    return a
}

// c) zwracającą true lub false w zależności od podania tej wartości jako argument,
function boolean(isTrue) {
    if (isTrue === true) {
        return 'This value is true'
    }
    else {
        return 'This value is false'
    }
}

// d) zwracającą resztę z dzielenie dwóch liczb,
function sub10d(a, b) {
    return a / b
}
// e) zwracającą liczbę dobraną do potęgi podanej jako drugi argument,

// f) zwracającej dwa złączone stringi podane w dwóch argumentach,
function add10f(a, b) {
    return a + b
}

// g) taką która jako argument przyjmuje ilość minut i zamienia je na sekundy,
function minute(a) {
    return a * 60
}

// h) taką która jako argument przyjmuje ilość godzin i zamienia je na sekundy,
function hour(a) {
    return a * 3600
}

// i) taką która liczy pole trójkatą czyli jako argumenty podajemy wysokość i szerokość trójkąta
// i w ciele funkcji korzystamy ze wzoru a * b * 0.5,
function triangle(a, b) {
    return a * b *0,5
}

// j) która zamienia lata na dni(przyjmując, że rok ma 365 dni)
function year(a) {
    return a * 365
}

// k) która liczbę podaną w argumencie bierze do potęgi tej samej co liczba podana jako argument,
function pow(a) {
    return a ** a
}
console.log(pow(0))

// l) która obliczy dłuższy bok trójkąta posługując się tym wzorem (side1 + side2) - 1
// Pamiętaj aby można było podmienić cyfry podczas wywołania na dowolne,
function triangleSideC(a, b) {
  return (a + b) - 2
}
console.log(triangleSideC(0, 0))

// m) która po wpisaniu imienia jako argument podczas wywołania, wyświetli przywitanie,
// czyli, np. hello('Iza') -> 'Cześć, Iza!'
function helloName(name){
return 'Cześć ' + name
}
console.log(helloName('Iza'))

// n) która poda nam wiek osoby na podstawie podanego roku urodzenia w argumencie
// podczas wywołania,
function dateOfBirth(year){
b = new Date().getFullYear()
return b - year
}
console.log(dateOfBirth(1986))

// o) która przyjmuje dwa parametry, pierwszy to liczba rzutów za 2 punkty, a drugi to liczba rzutów
// za trzy punkty i na podstawie podanych parametrów obliczy ilość punktów zdobytych przez gracza.
function throwCount(x, y) {
    twoPoint = 2 * x
    threePoint = 3 * y
    return twoPoint + threePoint
}
console.log(throwCount(0,0))