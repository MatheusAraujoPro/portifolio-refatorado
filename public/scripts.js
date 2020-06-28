const modalOverlay = document.querySelector('.modal__overlay');//pegando referencia do modal
const cards        = document.querySelectorAll('.card'); //pegando as referencias dos cards
const btnClose     = document.querySelector('.close_modal');

for(let card of cards){
    card.addEventListener("click", function(){
        let video_id = card.getAttribute('id'); 
        modalOverlay.classList.add('actived');    
        modalOverlay.querySelector('iframe').src=`http://www.youtube.com/embed/${video_id}`;       

    })
}


btnClose.addEventListener('click', function(){
    modalOverlay.classList.remove('actived');
    modalOverlay.querySelector('iframe').src= ''

})

console.log(iframe)