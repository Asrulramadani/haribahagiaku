const audio = document.querySelector("#audio");
let isPlaying;
const iconMusik = document.querySelector("#icon-musik");
function musik() {
  isPlaying
    ? (audio.pause(),
      iconMusik.classList.replace("bi-pause-fill", "bi-play-fill"),
      (isPlaying = !1))
    : isPlaying ||
      (audio.play(),
      iconMusik.classList.replace("bi-play-fill", "bi-pause-fill"),
      (isPlaying = !0));
}
const tglTujuan = new Date("May 1 2022 09:00:00").getTime(),
  hitungMundur = setInterval(function () {
    const e = new Date().getTime(),
      t = tglTujuan - e,
      n = Math.floor(t / 864e5),
      o = Math.floor((t % 864e5) / 36e5),
      l = Math.floor((t % 36e5) / 6e4),
      c = Math.floor((t % 6e4) / 1e3);
    document.getElementById("hari").innerHTML = n;
    const i = document.getElementById("jam");
    i.innerHTML = o;
    const r = document.getElementById("menit");
    r.innerHTML = l;
    const s = document.getElementById("detik");
    if (
      ((s.innerHTML = c),
      o < 10 && (i.innerHTML = `0${o}`),
      l < 10 && (r.innerHTML = `0${l}`),
      c < 10 && (s.innerHTML = `0${c}`),
      t <= 0)
    ) {
      document.getElementById("countdown").style.display = "none";
    }
  }, 1e3),
  btnCopy = document.querySelectorAll("#copy");
btnCopy.forEach((e) => {
  e.addEventListener("click", () => {
    const t = navigator.clipboard,
      n = e.parentElement.dataset.akun;
    t.writeText(n).then(() => {
      e.classList.replace("bi-clipboard", "bi-check-all"),
        alert(`${n}   berhasil dicopy`);
    });
  });
});
const scriptURL =
    "https://script.google.com/macros/s/AKfycbydtI759XNMYoMNPeMlKu5pcnslQxjesQ6KOzxOkiL3PShOgcXtrWZG6uzZuMpI9PMM/exec",
  form = document.forms["my-form"],
  myForm = document.querySelector(".my-Form"),
  myAlert = document.querySelector(".my-alert"),
  btnKirim = document.querySelector(".btnKirim"),
  btnloading = document.querySelector(".btnLoading");
form.addEventListener("submit", (e) => {
  e.preventDefault(),
    btnKirim.classList.toggle("d-none"),
    btnloading.classList.toggle("d-none"),
    fetch(scriptURL, { method: "POST", body: new FormData(form) })
      .then((e) => {
        console.log("Success!", e),
          myAlert.classList.toggle("d-none"),
          btnKirim.classList.toggle("d-none"),
          btnloading.classList.toggle("d-none"),
          form.reset();
      })
      .catch((e) => console.error("Error!", e.message));
}),
  (document.onkeydown = function (e) {
    return (
      123 != e.keyCode &&
      (!e.ctrlKey || !e.shiftKey || e.keyCode != "I".charCodeAt(0)) &&
      (!e.ctrlKey || !e.shiftKey || e.keyCode != "J".charCodeAt(0)) &&
      (!e.ctrlKey || e.keyCode != "U".charCodeAt(0)) &&
      void 0
    );
  }),
  document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
  }),
  document.body.addEventListener("click", openFullscreen);
var elem = document.documentElement;
function openFullscreen() {
  elem.requestFullscreen
    ? elem.requestFullscreen()
    : elem.webkitRequestFullscreen
    ? elem.webkitRequestFullscreen()
    : elem.msRequestFullscreen && elem.msRequestFullscreen();
}
