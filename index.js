
const starsEl = document.querySelectorAll(".fa-star")
const emojisEl = document.querySelectorAll(".far")
const colorsArray = ['red','orange', 'lightblue','lightgreen','green'];
index = 0;
updateRating(index)
starsEl.forEach((starsEl, index)=>{
    starsEl.addEventListener("click",() =>{
      updateRating(index)
    })

    
})

function updateRating(index){

    starsEl.forEach((starl,idx) => {
        if(idx < index + 1){
            starl.classList.add("active");
        }else{
            starl.classList.remove("active");
        }
    });

    emojisEl.forEach((emojiEl) => {
        emojiEl.style.transform =
        `translateX(-${index * 50}px)`;
        emojiEl.style.color = colorsArray[index]
    });
}