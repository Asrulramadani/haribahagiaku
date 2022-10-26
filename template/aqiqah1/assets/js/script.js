// Animate on scroll

let imgGallery = document.querySelectorAll(".gallery .img")
imgGallery.forEach((el, i) => {
  el.dataset.aos = "fade-down"
  el.dataset.aosDelay = i * 100
})

AOS.init();


// icon musik
const audio = document.querySelector("#audio");
let isPlaying;
const iconMusik = document.querySelector("#icon-musik")

iconMusik.addEventListener("click", musik())

function musik() {
  if (isPlaying) {
    audio.pause();
    iconMusik.classList.replace("bi-pause-fill", "bi-play-fill");
    isPlaying = false;
  } else if (!isPlaying) {
    audio.play();
    iconMusik.classList.replace("bi-play-fill", "bi-pause-fill");
    isPlaying = true;
  }
}



// Countdown
const tglTujuan = new Date("May 1 2022 09:00:00").getTime();

const hitungMundur = setInterval(function () {
  const tglSekarang = new Date().getTime();

  const selisih = tglTujuan - tglSekarang;
  const hari = Math.floor(selisih / (1000 * 60 * 60 * 24));
  const jam = Math.floor((selisih % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const menit = Math.floor((selisih % (1000 * 60 * 60)) / (1000 * 60));
  const detik = Math.floor((selisih % (1000 * 60)) / 1000);

  const txtHari = document.getElementById("hari");
  txtHari.innerHTML = hari;
  const txtJam = document.getElementById("jam");
  txtJam.innerHTML = jam;
  const txtMenit = document.getElementById("menit");
  txtMenit.innerHTML = menit;
  const txtDetik = document.getElementById("detik");
  txtDetik.innerHTML = detik;

  if (jam < 10) {
    txtJam.innerHTML = `0${jam}`;
  }
  if (menit < 10) {
    txtMenit.innerHTML = `0${menit}`;
  }
  if (detik < 10) {
    txtDetik.innerHTML = `0${detik}`;
  }

  if (selisih <= 0) {
    const countdown = document.getElementById("countdown");
    countdown.style.display = "none";
  }
}, 1000);



// copy text to cliboard
const btnCopy = document.querySelectorAll("#copy");

btnCopy.forEach((el) => {
  el.addEventListener("click", () => {
    const cb = navigator.clipboard;
    const text = el.parentElement.dataset.akun;
    cb.writeText(text).then(() => {
      el.classList.replace("bi-clipboard", "bi-check-all")
      alert(`${text}   berhasil dicopy`)
    });
  });
});


// Form submit to spreedsheets

const scriptURL =
  "https://script.google.com/macros/s/AKfycbwr5AeodfxM8YRHECeJOFmkQwrxumCSyLdq1CHIzDQm9wMxpQFdLZJIid9XUz8QLNH8/exec";
const form = document.forms["my-form"];

const myForm = document.querySelector(".my-Form");
const myAlert = document.querySelector(".my-alert");
const btnKirim = document.querySelector(".btnKirim");
const btnloading = document.querySelector(".btnLoading");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  btnKirim.classList.toggle("d-none");
  btnloading.classList.toggle("d-none");

  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      console.log("Success!", response);

      myAlert.classList.toggle("d-none");
      btnKirim.classList.toggle("d-none");
      btnloading.classList.toggle("d-none");
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});





// prevent inspect element
document.onkeydown = function(e) { 
  // if( e.keyCode == 123 ){ 
  //   return false; 
  // } 
  if(e.ctrlKey && e.shiftKey &&e.keyCode == 'I'.charCodeAt(0)){ 
    return false; 
  } 
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)){ 
    return false; 
  } 
  if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)){ 
    return false; 
  } 
} 

document.addEventListener("contextmenu", function(e){
  e.preventDefault();
});



// buka undangan
const bukaUndangan = document.querySelector(".buka-undangan");

bukaUndangan.addEventListener("click", function () {
  this.parentElement.classList.toggle("d-none");

  const lihatUndangan = document.querySelector(".lihat-undangan");
  lihatUndangan.classList.toggle("d-none");

  const audio = document.querySelector("#audio");
  let isPlaying;
  const iconMusik = document.querySelector("#icon-musik");


    if (isPlaying) {
      audio.pause();
      iconMusik.classList.replace("bi-pause-fill", "bi-play-fill");
      isPlaying = false;
    } else if (!isPlaying) {
      audio.play();
      iconMusik.classList.replace("bi-play-fill", "bi-pause-fill");
      isPlaying = true;
    }

  openFullscreen();
});



// fullsreen
var elem = document.documentElement;
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}
