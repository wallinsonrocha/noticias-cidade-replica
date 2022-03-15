//Menu mobile
const q = (e) => document.querySelector(e);

let menuMobileOpen = q('#menu-mobile').addEventListener('click', ()=>{
    q('#menu-mobile-area').style.display = 'flex';
    setTimeout((e)=>{
        q('#menu-mobile-area').style.right = '0%';
    }, 1);
});

let menuMobileClose = q('#menu-mobile-close').addEventListener('click', ()=>{
    q('#menu-mobile-area').style.right = '-100%';
    setTimeout(()=>{
        q('#menu-mobile-area').style.display = 'none';
    }, 200);
});

// Carousel
let time = 0;
let slide;

function checkSlider() {
        if(time == 75){
            time = 0;
        }else{
            time += 25;
        }
        q('#slider').style.transform = `translateX(-${time}%)`
} 

function startSlider(){
    slide = setInterval(checkSlider, 5000);
}

function stopSlider(){
    clearInterval(slide);
}

startSlider();

let btnAnt = q('#btn-ant').addEventListener('click', ()=>{
    if(time > 0){
        time -= 25;
    } else if(time == 0){
        time = 75;
    }

    stopSlider();
    q('#slider').style.transform = `translateX(-${time}%)`
    startSlider();
})

let btnProx = q('#btn-prox').addEventListener('click', ()=>{
    if(time < 75){
        time += 25;
    } else if(time == 75){
        time = 0;
    }

    stopSlider();
    q('#slider').style.transform = `translateX(-${time}%)`
    startSlider();
})