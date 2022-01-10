"use strict";

// Popup card music
window.onload = function () {
    // popup card
    const popupCard = document.querySelector(".popup-card");

    popupCard.classList.add("active")

        
    const audio = document.querySelector("#audio")
    
    const btnTidak = document.querySelector(".tidak");
    btnTidak.addEventListener("click", ()=>{
        popupCard.classList.remove("active")
    })

    const btnYa = document.querySelector(".ya");
    btnYa.addEventListener("click", ()=>{
        popupCard.classList.remove("active");
        audio.play();
    })


    // Animation on load
    const box = document.querySelectorAll(".box");

    box.forEach(e => {
            e.classList.add("active");
    })
}

// Countdown
const tglTujuan = new Date('august 08 2022 3:59:00').getTime();

const hitungMundur = setInterval(function() {
    const tglSekarang =  new Date().getTime();

    const selisih = tglTujuan - tglSekarang;
    const hari = Math.floor(selisih / (1000 * 60 * 60 * 24));
    const jam = Math.floor(selisih % (1000 * 60 * 60 * 24) / (1000 * 60 *60));
    const menit = Math.floor(selisih % (1000 * 60 * 60 )/ (1000 * 60));
    const detik = Math.floor(selisih % (1000* 60) / 1000);
    
    
    const txtHari = document.getElementById('hari');
    txtHari.innerHTML = hari;
    const txtJam = document.getElementById('jam');
    txtJam.innerHTML = jam;
    const txtMenit = document.getElementById('menit');
    txtMenit.innerHTML = menit;
    const txtDetik = document.getElementById('detik');
    txtDetik.innerHTML = detik;
    
    if(jam < 10) {
        txtJam.innerHTML = `0${jam}`;
    }
    if(menit < 10) {
        txtMenit.innerHTML = `0${menit}`;
    }
    if(detik < 10) {
        txtDetik.innerHTML = `0${detik}`;
    }

    if( selisih <= 0) {
        const countdown = document.getElementById("countdown");
        countdown.style.display = 'none';
        // clearInterval(hitungMundur);
    }

}, 1000)

// onscroll animation
window.addEventListener("scroll", function(){
    const box = document.querySelectorAll(".animate");
    const screenPosition = window.innerHeight/.9;

    box.forEach(e => {
        let contentPosition = e.getBoundingClientRect().top;

        if(contentPosition <= screenPosition) {
            e.classList.add("active");
        }else {
            e.classList.remove("active");
        }
    })
})


// Form submit to spreedsheets

const scriptURL = 'https://script.google.com/macros/s/AKfycbydtI759XNMYoMNPeMlKu5pcnslQxjesQ6KOzxOkiL3PShOgcXtrWZG6uzZuMpI9PMM/exec';
const form = document.forms['my-form'];

const myForm = document.querySelector(".myForm");
const myAlert = document.querySelector(".alert");
const btnKirim = document.querySelector(".btnKirim");
const btnloading = document.querySelector(".btnLoading");


form.addEventListener('submit', e => {
  e.preventDefault()

  btnKirim.classList.toggle("d-none");
  btnloading.classList.toggle("d-none");

  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        console.log('Success!', response);

        myAlert.classList.toggle("d-none");
        btnKirim.classList.toggle("d-none");
        btnloading.classList.toggle("d-none");
        form.reset();
    })
    .catch(error => console.error('Error!', error.message))
})


// Close alert
const closeBtn = document.querySelector('.close');

closeBtn.addEventListener('click', ()=>{
    myAlert.classList.toggle('d-none')
})