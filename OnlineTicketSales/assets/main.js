const shahr=document.querySelector(".shar");
const ostan=document.querySelector('.city')

const ostanname={
    maz:['ساری','بابل','نکا','قائمشهر','پل سفید','جویبار'],
    teh:['شهریار','قدس','دماوند','فیروزکوه',''],
    mash:['قوچان','تربت‌جام','نیشابور','خواف ','گناباد'],
    esf:['گلپایگان','خمینی‌شهر']
}
function removefuntion() {
shahr.innerHTML='';
}

function selectHandler() {

    removefuntion()

   let nameshar=undefined;
   ostanname[ostan.value].forEach((value)=>{
       nameshar=document.createElement('option');
       nameshar.innerHTML=value;
       shahr.insertAdjacentElement("afterbegin", nameshar)
   });
}
ostan.addEventListener("change",selectHandler);