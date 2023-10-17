let counter = document.querySelectorAll('.counter')
let sectionScrol = document.querySelector('.Vent-Cleaning-Service')
let started = false //function started ? No

window.onscroll = function (){
    if (window.scrollY >= sectionScrol.offsetTop) {
        if(!started){
            counter.forEach((num)=>{startCount(num)});
        }
        started = true
    }

};

function startCount(element){
    let goal = element.dataset.goal;
    let count = setInterval(()=>{
        element.textContent++;
        if (element.textContent == goal) {
            clearInterval(count)
        } else {
            
        }
    },2000/goal)
}


new Splide( '.splide' ).mount();
new WOW().init();


// $("body").css("background-color", "red");


