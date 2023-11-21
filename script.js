//1 დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიღებს ერთ მთელ რიცხვს და დააბრუნებს true -ს თუ რიცხვი  არის 3ის ჯერადი , ხოლო თუ არაა მაშნ false-ს
function isMultipleOfThree(number) {
    return number % 3 === 0;
}
console.log(isMultipleOfThree(9));
console.log(isMultipleOfThree(7));
console.log(isMultipleOfThree(27));

//2 დაწერეთ ფუნქცია, getCurrencySymbolFromCode რომელიც პარამეტრად მიიღებს ვალუტის კოდს (USD ან EUR ან GEL) სტრინგის სახით და დააბრუნებს ამ კოდის შესაბამის სიმბოლოს ($, €, ლ) თუ ისეთი კოდს გადავცემ რომლის სიმბოლოც არ მაქვს დააბრუნოს კოდი.
function getCurrencySymbolFromCode(currencyCode) {
    switch (currencyCode) {
      case "USD":
        return "$";
      case "EUR":
        return "€";
      case "GEL":
        return "ლ";
      default:
        return "Unknown";
    }
}
console.log(getCurrencySymbolFromCode("USD"));
console.log(getCurrencySymbolFromCode("EUR"));
console.log(getCurrencySymbolFromCode("GEL"));
console.log(getCurrencySymbolFromCode("GBP"));
console.log(getCurrencySymbolFromCode("CZK"));

//3 დაწერეთ ფუნქცია, რომელიც მიიღებს lowerCase სტრინგს მაგ (my name is joe) და დააბრუნებს UpperCase (MY NAME IS JOE) სტრინგს.
function convertToUpperCase(lowerCaseString) {
    return lowerCaseString.toUpperCase();
}
let lowerCaseStr = "my name is joe";
let upperCaseStr = convertToUpperCase(lowerCaseStr);
console.log(upperCaseStr);

//4 დაწერეთ ფუნქცია, რომელიც არგუმენტად მიიღებს გასაყიდ და ასაღებ ფასს, დათვლის მოგებას  და დააბრუნებს გასაყიდი ფასის რა პროცენტს შეადგენს მოგება.
function calculateProfitPercentage(sellingPrice, buyingPrice) {
    let profit = buyingPrice - sellingPrice;
    let salePrice = buyingPrice;
    let profitPercentage = (profit / salePrice) * 100;
    return profitPercentage;
}
let sellingPrice = 170;
let buyingPrice = 250;
let profitPercentage = calculateProfitPercentage(170,250);
console.log("Profit Percentage:", profitPercentage + "%");

//5 დაწერეთ ფუნქცია, რომელიც მიიღებს რიცხვების მასივს და დააბრუნებს გაფილტრულ მასივს .filter სადაც მხოლოდ ლუწი რიცხვები იქნება.
function filterEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNumbersArray = filterEvenNumbers(numbersArray);
console.log(evenNumbersArray);

//6 დაწერეთ ფუნქცია, რომელიც მიიღებს ობიექტების მასივს (ობიექტს უნდა ქონდეს ველი name) და მეორე პარამეტრად მიიღებს სტრინგს და ამ მასივში .find ით მოვძებნოთ ობიექტის name === ფუნქციის მეორე პარამეტრს და დავაბრუნოთ ნაპოვნი ობიექტი.
function findObjectByName(arr, searchName) {
    return arr.find(obj => obj.name === searchName);
}
let persons = [
    { 
        name: "Jimmy", age: 20 
    },
    { 
        name: "Fred", age: 23
    },
    { 
        name: "Tommy", age: 28 
    }
];
let searchResult = findObjectByName(persons, "Fred");
console.log(searchResult);

// ძველი დავალებები
//7 მოცემულა მართკუთხედი სიგრძე ცვლადი = 7 და სიგანე = 5 (შექმენით 2 ცვლადი) გამოთვალეთ მართკუთხედის ფართობი ამ 2 ცვლადის გამოყენებით
let length = 7;
let width = 5;
let area = length * width
console.log(area)

//8 სტრინგების კონკატენაცია + ით და სტრინგების კონკატენაცია `ბექტიკებით`
let firstName = "Jimmy";
let lastName = "McGill";
let fullName = `${firstName} ${lastName}`;
console.log(fullName);

let userFirstName = "Walter";
let userLastName = "White";
console.log(userFirstName + " " + userLastName)

//9 არითმეტიკული ოპერაციები მიმატება, გამოკლება, გაყოფა, გამრავლება
let a = 4;
let b = 25;
let c=47;
let d=88;

let sum = a + b;
console.log(sum);

let deduction=d-c
console.log(deduction);

let multiplication=a*c
console.log(multiplication)

let division=d/a
console.log(division)

//10 შექმენით 5 ელემენტიანი მასივი, რომლის თითოეული ელემენტი არის რიცხვი, console.log გამოიტანეთ ამ მასივის ყველა ელემენტის ჯამი
let numberArray = [2, 16, 32, 39, 47];
let sumOfNumberArray = 0;
for (let i = 0; i < numberArray.length; i++) {
    sumOfNumberArray += numberArray[i];
}
console.log(sumOfNumberArray);

//11 შექმენით 3 ელემენტიანი მასივი, რომლის თითოეული ელემენტი არის ობიექტი რომელსაც აქვს შემდეგი ველები (properties): name, age, address.
let users = [
    { 
        name: "Will", 
        age: 47, 
        address: "Main Street"
    },
    { 
        name: "Daniel", 
        age: 63, 
        address: "Main Street"
    },
    { 
        name: "Kevin", 
        age: 80, 
        address: "Main Street"
    }
];

//12 console.log ში გამოიტანეთ 3 სტრინგი "My name is (#2 დავალების 0 ინდექსზე მყოფი ობიექტის ველი name ის მნიშვნელობა)", My age is (#2 დავალების 0 ინდექსზე მყოფი   ობიექტის ველი age ის მნიშვნელობა)", "My address is (#2 დავალების 0 ინდექსზე მყოფი  ობიექტის ველი address ის მნიშვნელობა)"
console.log(`My name is ${users[0].name}, my age is ${users[0].age}, my address is ${users[0].address}`)

//13 დაწერეთ if / else statement სადაც შეამოწმებთ #2 დავალებაში  1 ინდექსზე მყოფი ობიექტში არსებულ age ველის მნიშვნელობას თუ ნაკლებია 19 ზე console.log ში დაბეჭდეთ "I am a teenager" დანარჩენ შემთხვევაში დაბეჭდეთ "I am an adult"
if (users[1].age <19){
    console.log("I am a teenager");
} else {
    console.log("I am an adult");
}

//14 შექმენით 5 ელემენტიანი მასივი, რომლის თითოეული ელემენტი არის რიცხვი,და შეეცადეთ console.log-ში გამოიტანოთ ამ მასივის ყველა ელემენტი .
let numbersArray2 = [9,48,103,484,985]
for (let i = 0; i < 1; i++) {
    console.log(numbersArray2);
}

//15 const currentDay = new Date().getDay(); currentDay ცვლადი გვაძლევს კვირის დღეს რიცხვითი სახით 0 - არის კვირა 1 - არის ორშაბათი და ასე შემდეგ. 0 - 6 ამდე რიცხვს აბრუნებს სადაც 6 არის შაბათი. დავწეროთ switch სადაც შევამოწმებთ currentDay-ს და 0 ის შემთხვევაში console.log ში გამოვიტანთ სიტყვას კვირას 1 ის შემთხვევაში ორშაბათს და ასე შემდეგ 6მდე.
const currentDay = new Date().getDay();

switch (currentDay) {
  case 0:
    console.log("Sunday");
    break;
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  default:
    console.log("Invalid day");
}

//16 დაწერეთ for ციკლი 0 დან 100 - მდე console.log ში დაბეჭდეთ ინდექსი i
for (let i = 0; i <= 100; i++) {
    console.log(i);
}

//17 დაწერეთ while ციკლი 0 დან 50 - მდე console.log ში დაბეჭდეთ ინდექსი i
let i = 0;
while (i <= 50) {
    console.log(i);
    i++;
}

//18 .შექმენით 5 ელემენტიანი  მასივი, სადაც დაამატებთ სახელებს, გამოიყენეთ pop,shift,unshift,push მეთოდები და განახორციელეთ სხვადასხვა სახელების წაშლა/დამატება. დალოგეთ თითოეული ქმედების შემდგომ  მასივის მნიშვნელობა. ისე როგორც ლექციაზე გავაკეთეთ. 
let person = ['Andrew', 'Michael', 'Pamela', 'Dwight', 'Phillis'];


console.log(person);

person.pop()
console.log(person)

person.shift()
console.log(person)

person.unshift('Jimmy');
console.log(person);

person.push('Oscar');
console.log(person);

//19 შექმენით ცვლადი და მიანიჭეთ ცარიელი მასივი, შემდეგ დაწერეთ Loop ( for ან while ან do while ) 1 დან 10000 - მდე ამ ,მასივში ჩაწერეთ ინდექსი გამრავლებული ინდექსზე (i * i) მასივში ჩაწერა ხდება push მეთოდის საშუალებით. 
let emptyArray = [];
for (let i = 1; i <= 10000; i++) {
  emptyArray.push(i * i);
}
console.log(emptyArray)

//20 შექმენით 5 ელემენტიანი მასივი, რომლის თითოეული ელემენტი არის რიცხვი და for ცილის გამოყენებით დათვალეთ ჯამი. 
let numberArray2 = [1, 3, 11, 26, 33];
let sumOfNumberArray2 = 0;
for (let i = 0; i < numberArray2.length; i++) {
  sum += numberArray2[i];
}
console.log(sum);

//21 დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიღებს ერთ მთელ რიცხვს და დააბრუნებს true -ს თუ რიცხვი არის კენტი ან false -ს თუ რიცხვი არის ლუწი.
function isOdd(number) {
    return number % 2 !== 0;
}
console.log(isOdd(153));
console.log(isOdd(782));

//22 დაწერეთ ფუნქცია, რომელიც მიიღებს UpperCase სტრინგს მაგ (MY NAME IS JOHN) და დააბრუნებს LowerCase (my name is john) სტრინგს. 
function convertToLowerCase(upperCaseString) {
    return upperCaseString.toLowerCase();
}
let upperCaseString = "MY NAME IS JOHN";
let lowerCaseString = convertToLowerCase(upperCaseString);
console.log(lowerCaseString);

//23 დაწერეთ ფუნქცია, რომელიც მიიღებს რიცხვების მასივს და დააბრუნებს გაფილტრულ მასივს .filter სადაც მხოლოდ ლუწი რიცხვები იქნება. 
let number = [2, 5, 6, 21, 24];
let evenNumber = number.filter(num => num % 2 === 0);
console.log(evenNumber);