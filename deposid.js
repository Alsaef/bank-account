// step 1 btn event 
document.getElementById("btn-deposit").addEventListener("click",function () {
    // step 2 amount input fild 
   const depositFild= document.getElementById("deposit-fild");
   const newDepositAmmountStr=depositFild.value;
   const newDepositAmmount= parseFloat(newDepositAmmountStr);
     depositFild.value="";
   // step 3---> get the deposid total ammount 
    // non input
    const depositTotalAmmount=document.getElementById("deposid-total");
    const depositTotalPreviusStr=depositTotalAmmount.innerText;
   const depositTotalPrevius=parseFloat(depositTotalPreviusStr);
   const current=depositTotalPrevius+newDepositAmmount;
   depositTotalAmmount.innerText=current;
//    total balance
   const totalBalanceAmmount=document.getElementById("total-balance");
   const totalbalanceStr=totalBalanceAmmount.innerText;
   const totalbalance=parseFloat(totalbalanceStr);
   const total=totalbalance+newDepositAmmount;
   totalBalanceAmmount.innerText=total;
})