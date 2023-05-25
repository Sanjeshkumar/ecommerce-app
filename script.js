//click nav bar menu to show the navbar for mobile
const bar =document.getElementById('bar');
const close = document.getElementById('close');
const nav =document.getElementById('navbar');
if(bar){    //check for that if bar is visible or not
bar.addEventListener('click',() => {   ///if anyone click bar event listener name click will happen
    nav.classList.add('active');                 // if click happens show navbar then active will be the id
})                     
}
if(close){
    close.addEventListener('click',() =>{  //if click on close then nav will be closed
        nav.classList.remove('active');
    })
}