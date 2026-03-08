let balance=0
while (true) {
    const input=prompt(' Enter an option 1: balance, 2: witdhaw, 3: depost, 4 exit')

if (input==1) {
    alert(Your available balance: ${balance})
}else if(input==2){
   let withdrawAmount=parseInt( prompt('enter the amount to withdraw'))
   if (balance<withdrawAmount) {
    alert('Insufficcient balance')
   }else{
   balance=balance-withdrawAmount
alert(your new balance is ${balance})
}}
else if(input==3){
let depostAmount=parseInt(prompt('enter the amount to depost'))
balance=balance+depostAmount
alert(your new balance is ${balance})

}else if(input==4)
{
    break
}else{
    alert(' you have input some wrong option')
}

}