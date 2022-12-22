"use strict"

// ============================================================================================================
// Змінні

// Привласнення значення під час об'яви змінної
let myName = `Dmytro`;
console.log(myName);

// Привласнення значення після об'яви змінної
let Age ;
Age = 20;
console.log(Age);


// Копіювання значення змінної
let userAge;
userAge = Age ;
console.log(userAge);



// Область видимості

// Приклад області видимості . Якщо змінна знаходиться всередині JS блоку , то браузер не буде бачити цю змінну за межами цього блоку , тільки всередині нього і його дочірніх елементів.
/*
	let userCity = `Kyiv`;
	if ( 1 > 0 ) {
		console.log(userCity)
		let userAdress = `Street 1`;
	}
	console.log(userAdress)
*/
// Приклад як працювати із змінною ззовні JS блоку.
let userCity
if ( 1 > 0 ) { 
	userCity = " Kyiv" ; 
}
console.log(userCity)



// ============================================================================================================
// Константи - працюють майже так само як і змінні . Їхня відмінність в тому , що значення константи не можна змінювати .
const userMail = `template@gmail.com`;
console.log(userMail);
// userMail = `template1@gmail.com`;

// Якщо значення константи заздалегідь нам відомо - робимо такай запис : 
const COLOR_GREY = '#424551'
// ============================================================================================================
// Існують такі типи данних : 
/*
undefined
null
number
string
boolean
object
*/
// Оператор typeof показує тип даних

// Тип даних undenified
let userPhone; 
console.log(typeof(userPhone));

// Тип даних null
let typeNull = null; 
console.log(typeof(typeNull));
console.log(typeNull);

// Тип даних number
console.log(typeof(userAge+Age));
console.log(userAge+Age);
// Значення даних number - infinity ( також може бути від'ємним)
let infinity = 5/0 ;
console.log(typeof(infinity));
console.log(infinity);
// Значення даних number - Nan ( неможливо провести обчислення )
let nan = `Dmytro` * 10 ;
console.log(typeof(nan));
console.log(nan);

// Тип данних string
console.log(typeof(userMail));

// Краще використоувати зворотні лапки . Приклад чому : 
const info = `Ім'я: ${myName}, Вік: ${Age}, Місто: ${userCity}`;
console.log(typeof(info));
console.log(info);

// Тип даних boolean
// false повернуть: пустий рядок, цифра нуль, undefined, NaN
console.log(Boolean(nan));
console.log(Boolean(userPhone));
let zero = 0; 
console.log(typeof(zero)); 
console.log(Boolean(zero));
let emptyRow = ``;
console.log(typeof(emptyRow)); 
console.log(Boolean(emptyRow));
// Можна вручну змінити тип даних : 
console.log(Boolean(userMail));

// =========================================================================================
// Домашнє завдання
let userName = `Вася`;
let user;
user = userName;
console.log(user);
