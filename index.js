const images=document.getElementsByClassName('card-img');
const imagesArr=[...images];
const total=document.getElementById('total');

total.innerText=31;

function updateBinaryNumber(id){
    const binNum=document.getElementById(`binary-number-${id}`);
    binNum.innerText==='1' ? binNum.innerText='0' : binNum.innerText='1';
};

function updateTotal(){
    let cardTotal=0;
    imagesArr.forEach(img=>{
        if(!img.classList.contains('hidden')) cardTotal+=Number(img.getAttribute('data-value'));
    });
    console.log(cardTotal);
    total.innerText=cardTotal;
};

imagesArr.forEach(img=>img.addEventListener('click',function(){
    if(img.classList.contains('hidden')){
        img.classList.remove('hidden');
    }else{
        img.classList.add('hidden');
    };
    updateBinaryNumber(img.id);
    updateTotal();
}));