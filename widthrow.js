document.getElementById("btn-widthdrw").addEventListener("click",function () {
    //    widthrow

const widthroFild= document.getElementById("widthdrw-fild");
const newWidthroAmmountStr=widthroFild.value;
const newWidthroAmmoun= parseFloat(newWidthroAmmountStr); 
 widthroFild.value=""
// total widthrow
const widthdrwAmmount=document.getElementById("widthdrw-total");
const newWidthdrwAmmountPriveusStr=widthdrwAmmount.innerText;
const newWidthdrwAmmountPriveus=parseFloat(newWidthdrwAmmountPriveusStr);
const widthdrwCurrent=newWidthdrwAmmountPriveus+newWidthroAmmoun;
widthdrwAmmount.innerText=widthdrwCurrent;
// total balance widthro
const totalBalanceAmmountWidthro=document.getElementById("total-balance");
const totalbalanceStr=totalBalanceAmmountWidthro.innerText;
const totalbalance=parseFloat(totalbalanceStr);
if (newWidthroAmmoun >  totalbalance) {
    widthdrwAmmount.innerText="No Have Monye"
    alert("Not Available");
    return;
  }
 const totalBalanceWidthro=totalbalance-newWidthroAmmoun;
 totalBalanceAmmountWidthro.innerText=totalBalanceWidthro;

//  limited


})