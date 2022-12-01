"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let rootEquationFirst;
  let rootEquationSecond;
  let d = Math.pow(b, 2) - 4*a*c;

  if (d < 0) {
    console.log('Корней нет');
  } else if (d === 0) {
    rootEquationFirst = -b / (2*a);
    arr.push(rootEquationFirst);
    console.log(arr);
  } else {
    rootEquationFirst = (-b + Math.sqrt(d)) / (2 * a);
    rootEquationSecond = (-b - Math.sqrt(d)) / (2 * a);
    arr.push(rootEquationFirst);
    arr.push(rootEquationSecond);
    console.log(`Первый корень = ${arr[0]} \nВторой корень = ${arr[1]}`);
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let bodyCredit;
  let monthPayment;
  let totalAmount;

 if (
    isNaN(percent) ||
    isNaN(contribution) ||
    isNaN(amount) ||
    isNaN(countMonths)
    ) {
       console.log('Один из параметров содержит неверное значение');
       return false;
    }

  percent = (percent / 100) / 12;
  bodyCredit = amount - contribution;
  monthPayment = bodyCredit * (percent + (percent / ((Math.pow((1 + percent), countMonths)) - 1)));
  totalAmount = parseFloat((monthPayment * countMonths).toFixed(2));

  return totalAmount;
}