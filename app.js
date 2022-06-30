const bill = document.getElementById('bill-id');
const tip = document.querySelectorAll('.tip');
const pplNumber = document.getElementById('pplNumber-id');
const customTip = document.getElementById('custom-tip');

const tip_label = document.getElementById('tip-ammount-id');
const total_label = document.getElementById('total-price-id');
const reset_button = document.getElementById('reset-button');
let billPrice = 1;
let tip_percentage = 0.05;
let numberOfPeople = 1;
let tipAmmount = tip_percentage*billPrice;
Right_side_changes(tip_label,total_label,tipAmmount,numberOfPeople,billPrice)
bill.addEventListener('input',(event)=>{
    billPrice = bill.value;
    tipAmmount = tip_percentage*billPrice;
    Right_side_changes(tip_label,total_label,tipAmmount,numberOfPeople,billPrice);
});
function reset(){
    billPrice = 1;
    tip_percentage = 0.05;
    numberOfPeople = 1;
    tipAmmount = tip_percentage*billPrice;
    bill.value = billPrice;
    pplNumber.value = numberOfPeople;
    customTip.value = "";
    for(let i=0;i<=5;i++)
    {
        tip[i].setAttribute('toggle','inactive');
    }
    tip[0].setAttribute('toggle','active');
    Right_side_changes(tip_label,total_label,tipAmmount,numberOfPeople,billPrice);
};
tip.forEach(input => input.addEventListener('click', (event) =>{
    for(let i=0;i<=5;i++)
    {
        tip[i].setAttribute('toggle','inactive');
    }
    input.setAttribute('toggle','active');
    tip_percentage = input.value/100;
    tipAmmount = tip_percentage*billPrice;
    Right_side_changes(tip_label,total_label,tipAmmount,numberOfPeople,billPrice);
}));
customTip.addEventListener('input', (event)=>{
    if(customTip.value >= 0){
        tip_percentage = customTip.value/100;
        tipAmmount = tip_percentage*billPrice;
    }
    Right_side_changes(tip_label,total_label,tipAmmount,numberOfPeople,billPrice);
});

pplNumber.addEventListener('input', (event) => {
    if(pplNumber.value>0) numberOfPeople = pplNumber.value;
    Right_side_changes(tip_label,total_label,tipAmmount,numberOfPeople,billPrice);
});

reset_button.addEventListener('click',(event)=>{
    reset();
});

function Right_side_changes(label,label2,tip,peopleNumber,bill){
    var currentTip = (tip/peopleNumber);
    let temp = (bill/peopleNumber)+currentTip;
    label.innerHTML = '$'+currentTip.toFixed(2);
    label2.innerHTML = '$'+temp.toFixed(2);
};

