const images=document.getElementsByClassName('card-img');
const imagesArr=[...images];
const total=document.getElementById('total');

total.innerText=31;

function updateTotal(){
    let cardTotal=0;
    imagesArr.forEach(img=>{
        if(!img.classList.contains('hidden')) cardTotal+=Number(img.getAttribute('value'));
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
    updateTotal();
}));