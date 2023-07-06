const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
  
const bills = [2, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i=0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}

console.log(bills, tips, totals)

const calcAverage = function (arr) {
  let sum = 0;
  for (let i=0; i < arr.length; i++) {
      sum += arr[i];
  }
  return sum / arr.length;
};

console.log(calcAverage(totals));

const promise = new Promise((resolve) => resolve("promise"))

console.log(typeof promise)

const numeros = [10, 15, 20, 25, 30]

const resultado = numeros.reduce((acumulador, num) => {
  if(num % 2 == 0){
    return acumulador += num
  } else {
    return acumulador
  }
})

console.log(resultado)