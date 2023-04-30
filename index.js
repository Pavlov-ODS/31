/*Task#1 */

const age = prompt("Сколько Вам лет?");

switch (true) {
  case isNaN(age):
    console.log("Вы ввели неверные данные.");
    break;
  case age < 0:
    console.log("Вы ввели отрицательный возраст.");
    break;
  case age >= 0 && age <= 11:
    console.log("Вы - ребенок.");
    break;
  case age >= 12 && age <= 17:
    console.log("Вы - подросток.");
    break;
  case age >= 18 && age <= 59:
    console.log("Вы - взрослый.");
    break;
  default:
    console.log("Вы - пенсионер.");
    break;
}






// switch (rating) {
//   case 5:
//     console.log(`ratting = ${rating} Excellent`);
//     break;
//   case 4:
//     console.log(`ratting = ${rating} Good`);
//     break;
//     break;
//   case 3:
//     console.log(`ratting = ${rating} Satisfactory`);
//     break;
//   case 2:
//     console.log(`ratting = ${rating} Unsatisfactory`);
//     break;
//   case 1:
//     console.log(`ratting = ${rating} Failed`);
//     break;
//   default:
//     console.log("Invalid grade");
//     break;
// }
