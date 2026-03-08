


let input = prompt("enter pin")
let input1 = parseInt(input)
if (input1 === pin) {

   while (true) {

      let input = prompt("Selecet an option: 1.deposite, 2.withdraw, 3.balance, 4.exit");
      let inputch = parseInt(input);

      if (input===1) {
         let value = prompt("Enter Amount");
         let value1 = parseInt(value);
         amount = amount + value;

      } else if (input===2) {
         let w= prompt("Enter Amount");
         let wt = parseInt(w);
         if (amount = amount > w) {
            alert = ("INSUFFIENT BALANCE");
         }

      } else if (input===3) {
         let bal = (`Total Balance: ${amount}`)

      } else if (input===4) {
         break;
      }
   }

} else {
   alert(`You've entered an wrong pin`);
}









// if (enteredPin === corrcetPin) {
//    alert("pin Verfied Successfully!");
//    break;

// } else {
//    attemts++;
//    alert("Wrong PIN! Attempts left:" + (3 - attempts));
// }







// (attempts = Pin < 3);
// let input = prompt("enter Your ATM PIN:");

// if (input === Pin) {
//    alert("pin verified");










//       (attempts = Pin < 3);
// let input = prompt("enter Your ATM PIN:");

// if (input === Pin) {
//    alert("pin verified")}