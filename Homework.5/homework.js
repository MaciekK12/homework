// 1. Napisz funkcje (typy proste):
// a) zwracającą sumę trzech liczb podanych w parametrach funkcji,
function sum(a, b, c) {
    return a + b + c
}
sum(1, 2, 3)

//b) zwracającą pole trójkąta ze wzoru podstawa * wysokość / 2, która zwróci
//   'Pole trójkąta to x (zmienna tu powinna być), czyli ma on x długości podstawy i x
//   wysokości'
function triArea(a, h) {
    let area = h * 0.5 * a
    return 'Pole trójkąta to x = ' + area +
        ' czyli ma on ' + a + ' długości podstawy, oraz ' +
        h + ' wysokości.'
}
console.log(triArea(4, 5))

//c) zwracającą ile aktualnie ktoś ma lat prawo jazdy na podstawie dwóch argumentów,
//   wieku danej osoby i wieku w którym to prawo jazdy zdał,
function driversLicense(age, year) {
    return age - year
}
console.log(driversLicense(30, 24))

//d) zwracającą ile zapłacimy za jazdę autem jeśli jako jeden parametr podamy spalanie
//   na 100km, a jako drugi przejechaną trasę,
function tripCost(distance, fuelConsumption) {
    const fuelPrice = 5.5
    return fuelConsumption / 100 * distance * fuelPrice
}
console.log(tripCost(670, 9))

//e) zwracającą stringa 'Ala ma 23 lata i 2 dzieci', gdzie imię, wiek i ilość dzieci
//   podajemy w parametrach funkcji,
function person(name, age, kidsCounter) {
    return name + ' ma ' + age + ' lata i ' + kidsCounter + ' dzieci'
}
console.log(person('Ala', 23, 2))

//2. Napisz funkcje (typy złożone):
//a) zwracającą przekazaną do parametru tablicę,
function array2a() {
        let tab = [1,2,3,4]
		return tab;
}
console.log(array2a())
    
//b) zwracającą drugą wartość przekazanej do funkcji tablicy 3 elementowej,
function array2b() {
        let tab = [5,7,3]
		return tab[1];
}
console.log(array2b())
    
//c) zwracającą stringa 'Przekazana tablica ma x elementów, a elementem nr 3 jest x'
function array2c() {
    let tab = ['a', 'b', 'c', 'd', 'e']
    let x = tab.length
    return 'Przekazana tablica ma ' + x + ' elementów, a elementem nr 3 jest ' + tab[2];  
}
console.log(array2c())
    
//d) dodaje elementy do stworzonej na zewnątrz funkcji pustej tablicy i zwraca już
//   zmienioną tablicę z dodatkowym elementem,
let arr2d = []
function array2d() {
    arr2d.push('Wojtek')
    return arr2d
}
console.log(array2d())
    
//e) zwracającą imię osoby przekazanej w obiekcie(powinien zawierać imię, nazwisko i wiek)
//   do funkcji,
let person2e = {
    pName: 'Marcin',
    pSurname: 'Kowalski',
    pAge: 27
}
function showName() {
    return person2e.pAge
}
console.log(showName())

//f) zwracającą stringa 'imię(tu zmienna) i nazwisko(tu zmienna) ma x(tu zmienna) lat
//   i x (tu zmienna) cm wzrostu'
function presonDesc() {
    let name = 'Wojtek'
    let surname = 'Kowalski'
    let age = 25
    let height = 185
    return 'Imię: ' + name + ' Nazwisko: ' + surname + ' ma ' + age + ' lat i ' + height + ' wzrostu.'
}
console.log(presonDesc())

//g) przyjmującą dwa parametry jeden do obiekt a drugi to wiek, i zwracającą zmieniony
//   wiek, czyli wiek który przekazujemy w parametry zamieniamy z wiekiem w obiekcie,
let age2g = {
    age1: 69
}
function swapAge() {
    age2g = {}
    age2g.age2 = 28
    return age2g
}
console.log(swapAge())

//3. Napisz funkcje (warunki if, else - typy proste):
//a) która przyjmuje wiek osoby i informację czy ma prawo jazdy, jeśli dana osoba
//   ma poniżej 18 lat to powinno wyświetlić, że 'Nie ma prawa jazdy'. Jak ma powyżej
//   18stu lat i nie ma prawka to też ma wyświetlić, ze 'Nie ma prawa jazdy'. A jak
//   ma powyżej 18stu lat i prawo jazdy to niech wyświetli, że "Możesz śmiało jeździć"
function canDrive(age, driversLicense) {
    if (age < 18 || driversLicense == false) {
        return 'Nie ma prawa jazdy'
    }
    return 'Możesz śmiało jeździć'
}
console.log(canDrive(12, true))

//b) przyjmuje jako parametr string, jeśli string jest równy 'Kup', niech wyświetli
//   'Widzę, że możesz zrobić zakupy', a jak string jest równy 'Sprzedaj' niech wyświetli
//   'Możesz tutaj swobodnie sprzedawać', a jeśli nie będzie ani tym ani tym to niech
//   pokaże 'Nie wybrałeś żadnej z dostępnych opcji - wpisz Kup lub Sprzedaj'
function canBuy(action) {
    if (action = 'Kup') {
        return 'Widzę, że możesz robić zakupy'
    }
    else if (action = 'Sprzedaj') {
        return 'Możesz tutaj swobodnie sprzedawać'
    }
    return 'Nie wybrałeś żadniej z dostępnych opcji'
}
console.log(canBuy())

//c) przyjmuje liczbę jak argument i zwraca string z informacja 'Liczba jest dodatnia',
//   'Liczba jest ujemna' lub 'Liczba jest równa 0'
function number3c(num) {
    if (num < 0) {
        return 'Liczba jest ujemna'
    }
    else if (num > 0) {
        return 'Liczba jest dodatnia'
    }
    else if (num == 0) {
        return 'Liczba jest równa 0'
    }
}
console.log(number3c(5))

//d) przyjmującą liczbę jako argument i jeśli liczba jest podzielna przez 3 to niech
//   pokaże 'Fizz', jak podzielna jest przez 5 to 'Buzz', a jak przez 3 i 5 to 'FizzBuzz',
function number3d(num) {
    if (num % 3 == 0 && num % 5 == 0) {
        return 'FizzBuzz'
    }
    else if (num % 5 == 0) {
        return 'Buzz'
    }
    else if (num % 3 == 0) {
        return 'Fizz'
    }
}
console.log(number3d(30))

//e) napisz funkcję, która wyświetla czy osoba może obejrzeć film dla osób 15+, funkcja
//   powinna przyjąć dwa argumenty, wiek danej osoby i to czy ma zgodę rodziców, jeśli
//   ma powyżej 15 lat to może oglądać, jak ma poniżej ale ma zgodę rodziców też może
//   oglądać, a jak ma poniżej i nie ma zgody to nie może, wyświetli odpowiednie komunikaty,
//   W tych funkcjach napisz warunki używając ternary operatora!!
function canWatch(age, parentConsent) {
  let consent = age > 15 || parentConsent == true ? 'Możesz obejrzeć film' : 'Nie możesz obejrzeć filmu'
  console.log(consent)
}
canWatch(18, false)

//f) zwracającą 'Tak' jeśli jak argument podamy true i 'Nie' jeśli podamy false,
function question(bool) {
    if (bool == true) {
        return 'Tak'
    }
    else if (bool == false) {
        return 'Nie'
    }
}
console.log(question(true))

//g) zwracającą informację czy podana jako argument liczba jest parzysta czy nie,
function number3g(num) {
  let even = num % 3 == 0 ? 'Podana liczba jest parzysta' : 'Podana liczba jest nieparzysta'
  console.log(even)
}
number3g(13)

//4. Napisz funkcje (warunki if, else - typy złożone):
//a) która przyjmuje obiekt car(model, marka, rok produkcji, isCabrio) i jeśli rok
//   produkcji jest większy niż aktualny rok to informacja, że auta jeszcze nie wyprodukowano,
//   jak będzie rok poniżej aktualnego to wyświetlamy w zdaniu ładnie informacje o
//   aucie + informacje czy jest Cabrio czy nie jest,
const car = {
  model: 'Panda',
  marka: 'Fiat',
  rokProdukcji: 2021,
  isCabrio: false
}
function isProduced() {
    let presentYear = new Date();
    let yr = presentYear.getFullYear();   
    let carP = yr > car.rokProdukcji ? console.log(car) : 'Auta jeszcze nie wyprodukowano' 
    console.log(carP)
}
isProduced(car)

//b) która przyjmuje tablicę jako parametr z dowolna liczbą elementów, jeśli tablica
//   jest pusta to zwracamy string pusta tablica, a jak nie to mamy zwrócić stringa
//   'tablica ma x elementów',
let arr4d = ['Ciastko', 'Szarlotka', 'Makowiec', 'Sernik']
function countArrElements() {
  let arrLength = arr4d.length
  let isEmpty = arr4d.length == 0 ? 'Tablica jest pusta' : `Tablica ma ${arrLength} elementów`
  console.log(isEmpty)
}
countArrElements()

//c) przyjmuje dwa parametry, oba sa obiektami, jeden to osoba (imię, nazwisko, wiek, czyLubiOgladacFilmy, maTV)
//   a drugi to książka (tytuł, rodzaj, ilość stron) i funkcja ta powinna zwrócić stringa
//   odpowiednio, jeśli osoba lubi czytać książkę to niech jej zaproponuje książkę z
//   obiektu: 'Cześć x(imie), polecam Ci przeczytać x(nazwa książki) książkę, ma tylko
//   (strony książki) stron', a jeśli nie lubi czytać, ale ma tv to niech zwróci
//   żeby 'Poszedł oglądać tv' lub po prostu jak nie ma 'Nie wiem co Ci zaproponować'
const personD = {
    name: 'Paweł',
    surname: 'Kowalski',
    age: 37,
    czyLubiOgladacFilmy: true,
    czyLubiCztacKsiazki: true,
    maTV: true
}
const book = {
    name: 'Krzyżacy',
    type: 'proza',
    pages: 600
}
function whatToDo() {
    // if (personD.czyLubiCztacKsiazki == true) {
    //     console.log(`Cześć ${personD.name}, polecam Ci przeczytać ${book.name}, ma tylko ${book.pages} stron`)
    // }
    // else if (personD.czyLubiCztacKsiazki == false) {
    //     console.log(`Nie wiem co CI zaprponować, idź oglądać telewizor`)
    // }
    const action = personD.czyLubiCztacKsiazki == true
        ? console.log(`Cześć ${personD.name}, polecam Ci przeczytać ${book.name}, ma tylko ${book.pages} stron`)
        : console.log(`Nie wiem co Ci zaprponować, idź oglądać telewizor`)
    console.log(action)
}
whatToDo()