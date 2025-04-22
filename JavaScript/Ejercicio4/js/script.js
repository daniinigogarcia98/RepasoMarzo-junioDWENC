let vectorItem = document.querySelectorAll(".texto");
vectorItem.forEach((Item,indice)=>{
    if (indice==0) {
        Item.style.color="red"
    }
    if (indice==3) {
        Item.style.color="green"
    }
    if (indice==5) {
        Item.style.color="blue"
    }
})