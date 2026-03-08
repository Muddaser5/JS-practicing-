let balance = 1000;
let corrcetPin = 6415;
let enterPin;
let attempts = 0;
let choicce = 0;


while (attempts < 3) {
    enterPin = parseInt(prompt("enter Your ATM PIN:"));
    break;
    if (enteredPin === corrcetPin) {
        alert("pin Verfied Successfully!");
        break;

    } else {
        attemts++;
        alert("Wrong PIN! Attempts left:" + (3 - attempts));


    }
}
if (attempts === 3) {
    alert("Alert Blocked! Too many wrong attempts.");
} else {

    do {
        console.log("ATM MENU");
        console.log("1.Deposite");
        console.log("2.WithDraw");
        console.log("3.Check Balance");
        console.log("4.Exit");

        choice = parseInt(prompt
            ("ATM Menu:\n" +
                "1.Deposite\n" +
                "2.WithDraw\n" +
                "3.Check Balance\n" +
                "4.Exit\n" +
                "Enter your choice(1-4):"

            ));
        while (isNaN( choice) || choice < 1 || choice > 4) {
            choice = parseInt(prompt("invaild choice! Enter between 1 to 4:"));

        }

        if (choice === 1) {
            let amount = parseFloat(promt("Enter Deposite amount:"));

            while (amount <= 0 || isNaN(amount)) {
                amount = parseFloat(promt("Invaild amount! Enter vaild deposit amount:"));

            }
            balance += amount;
            alert("Deposite Succeeful!\ncurrent Balance: 1000 + balance");

        }
        else if (choice === 2) {
            let amount = parseFloat(promt("EnterwithDraw amount:"));
            while (amount <= 0 || amount > balance || isNaN(amount)) {
                amount = parseFloat(promt("invaild amount! Enter amount<= 1000 +balance"));

            }
            balance -= amount;
            alert("withdraw successful!\nCurrent Balance: 1000+balance");
        }
        else if (choice === 3) {
            alert("Your Current Balance is 1000+balance");

        }
        else if (choice === 4) {
            alert("Thank you for using ATM");
        }

    } while (choice !== 4);
}