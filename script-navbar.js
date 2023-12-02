const hztl1 = document.querySelector('.hztl-icon1');
const hztl2 = document.querySelector('.hztl-icon2');
const hztl3 = document.querySelector('.hztl-icon3');
const btn1 = document.querySelector('.btn-rd1');
const btn2 = document.querySelector('.btn-rd2');
const btn3 = document.querySelector('.btn-rd3');
const txt1 = document.querySelector('.text-lorem1');
const txt2 = document.querySelector('.text-lorem2');
const txt3 = document.querySelector('.text-lorem3');

 btn1.addEventListener('click', () => {

    hztl1.classList.toggle('active')
    txt1.classList.toggle('active')

})


btn2.addEventListener('click', () => {

    hztl2.classList.toggle('active')
    txt2.classList.toggle('active')

})


btn3.addEventListener('click', () => {

    hztl3.classList.toggle('active')
    txt3.classList.toggle('active')

})


const btn0 = document.querySelector('.blabla');
const span = document.querySelector('.bck-grnd');

     btn0.addEventListener('click',() => {

        span.classList.toggle('active')
     })


     
     let navigation2 = document.querySelector('.navigation2');
     document.querySelector('.menuToggle2').onclick = function(){
         this.classList.toggle('active');
         navigation2.classList.toggle('active')
     }

     let line1 = document.querySelector('.line1');
     let line2 = document.querySelector('.line2');
     let line3 = document.querySelector('.line3');
     let liste = document.querySelector('.liste');
     document.querySelector('.menuToggle1').onclick = function(){
         line1.classList.toggle('active')
         line2.classList.toggle('active')
         line3.classList.toggle('active')
         liste.classList.toggle('active')
     }

     document.addEventListener('DOMContentLoaded', function(){
        let cursor =document.querySelector (".cursor")
        
        document.addEventListener('mousemove' , function(e) {
            cursor.style.left = e.clientX+ 'px'
            cursor.style.top = e.clientY+ 'px'
        })
     })
