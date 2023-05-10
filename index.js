/*Task#1 */

// const age = prompt("Сколько Вам лет?");

// switch (true) {
//   case isNaN(age):
//     console.log("Вы ввели неверные данные.");
//     break;
//   case age < 0:
//     console.log("Вы ввели отрицательный возраст.");
//     break;
//   case age >= 0 && age <= 11:
//     console.log("Вы - ребенок.");
//     break;
//   case age >= 12 && age <= 17:
//     console.log("Вы - подросток.");
//     break;
//   case age >= 18 && age <= 59:
//     console.log("Вы - взрослый.");
//     break;
//   default:
//     console.log("Вы - пенсионер.");
//     break;
// }

/* Task #2 */

// const number = prompt("Введите число от 0 до 9:");

// switch (number) {
//   case "1":
//     console.log("!");
//     break;
//   case "2":
//     console.log("@");
//     break;
//   case "3":
//     console.log("#");
//     break;
//   case "4":
//     console.log("$");
//     break;
//   case "5":
//     console.log("%");
//     break;
//   case "6":
//     console.log("^");
//     break;
//   case "7":
//     console.log("&");
//     break;
//   case "8":
//     console.log("*");
//     break;
//   case "9":
//     console.log("(");
//     break;
//   case "0":
//     console.log(")");
//     break;
//   default:
//     console.log("Вы ввели неверное число.");
//     break;
// }


/** Task #3 */

// const first = prompt("Введите начальное число");
// const seccond = prompt("Введите конечное число");

// let sum = 0;

// for (let index = first; index <= seccond; index++){
//   sum += i;
// }
// console.log(sum);


/** Task#4 */

// const num1 = parseInt(prompt("Введите первое число:"));
// const num2 = parseInt(prompt("Введите второе число:"));
// const minNum = Math.min(num1, num2);
// const maxN = 1;
// for (let i = 1; i <= minNum; i++) {
//   if (num1 % i === 0 && num2 % i === 0) {
//     maxN = i;
//   }
// }
// console.log(`Наибольший общий делитель: ${maxN}`);


/** Task #5 */
// const num = prompt("Введите число:");
// for (let index = 1; index <= num; index++) {
//   if (num % index === 0) {
//     console.log(index);
//   }
// }

function Numbers() {
  const num1 = + prompt("Введите первое число:");
  const num2 = + prompt("Введите второе число:");
  const sum = num1 + num2;
  return + sum;
}
  console.log('Сумма чисел: $ {Numser()}');
