
// let amount = 100;
// let pin = 1234;

// let input = prompt("Enter your ATM pin");
// let input1 = parseInt(input);

// if (input1 === pin) {
//     while (true) {
//         let val = prompt("(1 for DEPOSITE)(2 for WITHDRAWL)(3 for BALANCE)( 4 for EXIT)");
//         let val2 = parseInt = (val);

//         if (val2 === 1) {
//             let amo = prompt(`Enter an amount`);
//             let chamo = parseInt(amo);
//             amount = amount + chamo;

//         } else if (val2 === 2) {
//             let wit = prompt(`Enter an amount`);
//             let chwit = parseInt(wit);
//             if (chwit > amount) {
//                 alert("INSUFFISENT BALANCE");
//             }
//             amount = amount - chwit
//         } else if (val2 === 3) {
//             alert(Balance ( amount ));
//         } else if (val2 === 4) {
//             break;
//         } else {
//             alert(`Please select an correct option`);
//         }

//     }
// }else {
//     alert(`You've entered an wrong pin`);
//     alert(`to try again refresh the page`);
// }


let amount = 0;

for (let i=1; i > 0;) {

let value = prompt("select an option, 1 FOR DEPOSITE, 2 FOR WITHDRAWL, 3 FOR BALANCE 4 FOR EXIT")

let val = parseInt(value);

if (val===1) {

let amm =prompt("ennter an amount");

let parse1 =parseInt(amm);

amount = amount+ parse1;

}

else if(val === 2){

let ammm =prompt("ennter an amount");

let parse2= parseInt(ammm);

amount =amount - parse2;

}

else if(val === 3) {

alert(`the balance is:${amount}`);

}

else if(val === 4) {

break;

}

else {

console.log("Select an correct option");

}

}






