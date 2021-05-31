//1. Napisz pętle, która:
// a) wyświetli wartości od 1 do 9,
    for (let i = 1; i < 10; i++) {
        console.log(i)
    }
// b) wyświetli wartości od 9 do 1,
    for (let i = 9; i > 0; i--) {
        console.log(i)
    }
// c) wyświetli wartości od 5 do 15,
    for (let i = 5; i < 16; i++) {
        console.log(i)
    }
// d) wyświetli wartości od 0 do -10,
    for (let i = 0; i > -11; i--) {
        console.log(i)
    }
// e) wyświetli wartości od 1 do 20 zwiększając się co 2 w każdej iteracji,
    for (let i = 1; i <= 20; i+=2) {
        console.log(i)
    }
// f) wyświetli wartości od 10 do -10 zmniejszając się o 4 w każdej iteracji,
    for (let i = 10; i >= -10; i-=4) {
        console.log(i)
    }
// g) wyświetli wartości od 0 do 100 zwiększając liczbę co iterację mnożąc ją razy 2,
    for (let i = 0; i < 100; i*=2) {
        if (i == 0){
         i++
        }
        console.log(i)
    }

//2. Pętle z warunkami
// Napisz pętle, która:
// a) wyświetli wartości od 0 do 20, ale tylko liczby parzyste,
    for (let i = 2; i <= 20; i++) {
        if (i % 2 === 0){
         console.log(i)
        }
    }
// b) wyświetli wartości od 0 do 20, ale tylko liczby nieparzyste,
    for (let i = 2; i < 20; i++) {
        if (i % 2) {
         console.log(i)
        }
    }
// c) wyświetli wartości od 0 do 10, ale tam gdzie jest liczba parzystą pokaże napis liczba parzysta, a tam gdzie nie
// niech wyświetli napis liczba nieparzysta,
    for (let i = 1; i <= 10; i++) {
        i % 2 === 0 ? console.log(`${i} jest liczbą parzystą`): console.log(`${i} jest liczbą nieparzystą`)
    }
// d) wyświetli liczby od 1 do 30 i tam gdzie liczba jest podzielna tylko przez 3 niech pokaze Fizz, tam gdzie przez 5 niech
// pokaże Buzz, a tam gdzie przez 3 i 5 niech wyświetli FizzBuzz, w reszcie przypadków niech pokaże po prostu cyfry,
    for (let i = 1; i <= 30; i++) {
        let f = 'Fizz'
        let b = 'Buzz'
            if (i % 3 === 0 && i% 5 === 0) {
                console.log(f + b)
            } else if(i % 3 === 0) {
                console.log(f)
            } else if(i % 5 === 0) {
                console.log(b)
            } else {
            console.log(i)
            }
        }
// e) wyświetli liczby od 100 do 0, ale zmniejszając się o 5 co iteracje i jak liczba jest podzielna przez 10 to niech doda
// obok niech napis "- podzielna przez 10",
for (let i = 100; i >= 1; i-=5) {
        i % 10 === 0 ? console.log(`${i} - podzielna przez 10`) : console.log(i)
}

// 3. Pętle w funkcjach

// Napisz funkcję, która:
// a) przyjmuje jako parametr liczbe do której wykona się pętla od 0,
function createLoopA(LastNumber) {
   for(let x = 0; x <= LastNumber; x++) {
      console.log(x)
   }
}
createLoopA(27)
// b) przyjmuje jako parametr liczbe od której pętla się wykona do 15,
function createLoopB(firstNumber) {
   for(let x = firstNumber; x <= 15; x++) {
      console.log(x)
   }
}
createLoopB(5)
// c) przyjmuje jako parametr liczbę wskazującą o ile ma się zwiększać pętla co iteracje i wyświetla taką pętle od 0 do 15,
function createLoopB(Number) {
   for(let x = 0; x <= 15; x += Number) {
        console.log(x)
   }
}
createLoopB(5)
// d) przyjmuje dwa parametry, liczbę od której ma się pętla rozpocząć i do jakiej ma trwać,
function createLoopD(startingNumber, lastNumber ) {
   for(let x = startingNumber; x <= lastNumber ; x++) {
        console.log(x)
   }
}
createLoopD(7, 28)
// e) przyjmuje trzy argumenty, pierwszy - liczba od której zaczynamy pętle, drugi - liczbę do której pętla ma trwać, trzeci -
// liczbę co ile ma się pętla zwiększać,
function createLoopE(startingNumber, lastNumber, multiplyer) {
   for(let x = startingNumber; x <= lastNumber ; x += multiplyer) {
        console.log(x)
   }
}
createLoopE(21, 38, 2)

// 4. Pętle z tablicami

// Napisz funkcje, która:
// a) stwórz tablice 5 elementową i za pomocą pętli wypisz wszystkie jej elementy,
const arrA = [12, 54, 1, 123, 67]
function listItemsA() {
    for (let i = 0; arrA.length > i; i++) {
        console.log(arrA[i])
    }
}
listItemsA()
// b) stwórz tablice z kilkoma imionami i wyświetl "Cześć {imie}" za pomocą pętli dla każdego imienia,
const arrB = ['Marcin', 'Marian', 'Maciek', 'Mikołaj', 'Miłosz']
function listNames() {
    for (let i = 0; arrB.length > i; i++) {
        console.log('Cześć '+ arrB[i])
    }
}
listNames()

// c) stwórz tablicę z obiektami, w każdym obiekcie niech będzie model auta i kolor, i wyświetl w stringu "Przed Wami stoi {kolor} {model}",
const arrC = [
    {model: 'audi',color: 'srebrny'},
    {model: 'ford',color: 'czerwony'},
    {model: 'fiat',color: 'czarny'},
    { model: 'opel', color: 'biały' },
]
function listCars(arrC) {
    for (let i = 0; arrC.length > i; i++) {
        console.log(`Przed Wami stoi ${arrC[i].color} ${arrC[i]. model}`)
    }
}
listCars(arrC)

// d) stwórz tablicę z 10 elementami, czyli cyframi od 1 do 10 i niech wyświetli ona tylko liczby parzyste z tej tablicy
const arrD = [12, 51, 75, 123, 78, 1872, 72, 3, 42, 63]
function isEven(arrD) {
    for (let i = 0; i < arrD.length; i++) {
        if (arrD[i] % 2 === 0) {
            console.log(arrD[i])
        }
    }
}
isEven(arrD)

// e) ** stwórz tablice kilku elementową o różnych typach i wyświetl z tablicy tylko te elementy które są stringami,
const arrE = ['ford', 450, 'red', true, 55000, 'mustang']
function listString(arrE) {
      for (let i = 0; i < arrE.length; i++) {
        if (typeof arrE[i] === 'string') {
            console.log(arrE[i])
        }
    }
}
listString(arrE)

// f) ** stwórz tablice kilku elementową o różnych typach i wrzuć wszystkie elementy które w tej tablicy są numberami do nowej tablicy,
const arr4F = ['ford', 450, 'red', true, 55000, 'mustang']
const arr4F2 = []
function listString(arr4F) {	
      for (let i = 0; i < arr4F.length; i++) {
        if (typeof arr4F[i] === 'number') {
            arr4F2.push(arr4F[i])
        }
    }
    console.log(arr4F2)
}
listString(arr4F)

// Pętle z funkcjami i warunkami:

// 5. Napisz funkcję, która:
// a) przyjmuje tablicę liczb jako parametr i liczy sume elementów tej tablicy,
const arr5A = [12, 51, 75, 123, 78, 1872, 72, 3, 42, 63]
function addNum (arr5A){
  let sum = 0
  for (let i = 0; i < arr5A.length; i++) {
    sum += arr5A[i]
  }
    console.log(sum)
}
addNum(arr5A)

// b) przyjmuje tablicę z numberami i z tego tworzy dwie nowe tablice z liczbami parzystymi i nieparzystymi,
const arr5B = [12, 51, 75, 123, 78, 1872, 72, 3, 42, 63]
function splitArr (arr5B){
const arrUneven = []
const arrEven = []
  for (let i = 0; i < arr5B.length; i++) {
        if (arr5B[i] % 2 === 0) {
            arrEven.push(arr5B[i])
        } else if(!arr5B[i] % 2 === 0){
           arrUneven.push(arr5B[i]) 
           }
    }  
console.log(arrEven, arrUneven)
}
splitArr(arr5B)

// c) przyjmuje string jako parametr i jeśli string zawiera w sobie "y" niech wyświetli Jest!, a w inny przypadku Nie ma!
function containLetter(x) {
let string5C = x
    if (string5C.indexOf('y') > -1){
        console.log('Jest!');
    } else {
        console.log('Nie ma!')
    }
}
containLetter('Wyrażenie')

// d) przyjmuje liczbę jako parametr i wyświetla wynik mnożenia jej razy cyfry pomniejszone 
//    o 1 aż do 1ego, np. countResult(4) // 4 * 3 * 2 * 1 = 24 Przykładowy wynik 24
function countResult(number){
    let counter = 0;
    for (let i = number; i > 0; i--){
        if (i < number){
            counter += i * number
        }
    }
    console.log(counter);
}
countResult(14)

// function countResult(number){
//     let counter = ''
//     let result = 0
//      if(number == null || number <= 1){
//         		console.log('Podaj poprawną wartość')
//         } else {
//     	for (let i = number; i > 0; i--){
//        	if (i < number){           
//             counter += `${i+1} * `	
//             result += (i * number)
//         }          
//     	}
//       console.log(counter + '1 = ' + result)
//    	}  
// }
// countResult(13)

// e) Przyjmuje tablicę jako jeden parametr i string "number" lub "string" jako drugi parametr, w zależności od drugiego parametru niech funkcja
// dodaje do siebie element number lub string do siebie tworząc sumę lub jeden długi string, jeśli drugi parametr nie będzie sie zgadzał z "number"
// lub "string" to niech pokaże odpowiedni komunikat "Drugi parametr jest nieprawidłowy!", dodaj jeszcze zabezpieczenie jeśli tablica będzie pusta
const array5E = [1,2,3,4,324]

function test(array5E, string) {
   if (array5E.length === 0){
        console.log('Tablica jest pusta!')
    } else if (string == null){
        console.log('Drugi parametr jest nieprawidłowy!')
    } else if (typeof string === 'string'){ 
        let sum = '' + string
        for (let i = 0; i < array5E.length; i++ ){
          sum += array[i]
          }
        console.log(sum)       
    } else if (typeof string === 'number'){ 
        let sum = 0 + string
        for (let i = 0; i < array5E.length; i++ ){
          sum += array5E[i]
          }
        console.log(sum)       
    }
}
test(array, 12)

// f) przyjmuje jako parametr tablicę obiektów. W każdym obiekcie powinno znajdować się: name, lastName, hasCar, hasDrivingLicence. Niech będzie
// to tablica z 4 osobami. Stwórz funkcję które przyjmie taką tablicę jako parametr i sprawdzi nam kto ma prawo jazdy i samochód i kto może Cię
// zabrać do domu z imprezy, niech również wyświetli odpowiedni komunikat jeśli ktoś ma prawko ale nie ma auta lub nie ma ani jednego ani drugiego,
const array5F = [{
    name: 'Dmitri',
    hasDrivingLicence: true,
    hasCar: false,
  },
  {
    name: 'Aleksandr',
    hasDrivingLicence: true,
    hasCar: true,
  },
  {
    name: 'Boris',
    hasDrivingLicence: false,
    hasCar: true,
  },
  {
    name: 'Fjodor',
    hasDrivingLicence: false,
    hasCar: false,
  },
  {
    name: 'Ivan',
    hasDrivingLicence: true,
    hasCar: true,
  },
]

function canDrive(array5F, nameKey) {
  let driver = ''
  for (let i = 0; i < array5F.length; i++) {
    if (array5F[i].name === nameKey) {
      if (array5F[i].hasDrivingLicence === true && array5F[i].hasCar === true) {
        driver = array5F[i].name + ' może odwieźć Cię do domu'
      } else if (array5F[i].hasDrivingLicence === false || array5F[i].hasCar === false) {
        driver = 'Przykro mi, ten kierowca nie może Cię odwieźć!'
      }
    }
  }
  console.log(driver)
}
canDrive(array5F, 'Dmitri')

// g) przyjmuje jako parametr tablice i nowy element do tablicy. Funkcja ta powinna przeiterować tablice sprawdzając czy już taki element w niej jest
// jeśli go nie ma to dodać do tablicy, a jak jest to wyświetlić odpowiedni komunikat,

const array5G = [1, 2, 3, 4, 45, 456, 776, 3, 2234]

function searchArray(array5G, value) {
  if (array5G.includes(value) === false) {
    array5G.push(value)
    console.log(`Liczba ${value} została dodana do talicy: ` + array5G)
  } else if (array5G.includes(value) === true) {
    console.log('Taka wartość już znajduje się w tablicy')
  }
}
searchArray(array5G, 1451)