let principalAmount = 1000;
let interestRate = 0.038;
let timePeriod = 7;
let compound = 12;
let compoundInterest = principalAmount *( Math.pow((1 + interestRate/compound), (compound * timePeriod)));
let totalAmount = principalAmount + compoundInterest;


console.log(`Compound Interest: ${compoundInterest.toFixed(2)}`);

interestRate = interestRate-=0.01;
newCompoundInterest = principalAmount *( Math.pow((1 + interestRate/compound), (compound * timePeriod)));
compoundInterest = compoundInterest.toFixed(2)
console.log(`New Compound interest: ${newCompoundInterest.toFixed(2)}`);


let difference = compoundInterest - newCompoundInterest;
console.log(`Difference between compound interests is: ${difference.toFixed(2)}`)

compoundInterest = compoundInterest.toString();
console.log(`Number of cents in compound interest: ${compoundInterest.slice(5)}`);


console.log(`Total amount: ${totalAmount.toLocaleString("fr", {style: "currency", currency: "EUR",})}`)
