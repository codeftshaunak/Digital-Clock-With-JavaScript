const hour = document.getElementById('hr');
const min = document.getElementById('mn');
const sec = document.getElementById('sc');
const progress = document.getElementById('progress');

function digitalClock() {
        let date = new Date();
        let hr = date.getHours();
        let mn = date.getMinutes();
        let sc = date.getSeconds();

        hour.textContent = (hr < 10 ? "0" + hr : hr);
        min.textContent = (mn < 10 ? "0" + mn : mn);
        sec.textContent = (sc < 10 ? "0" + sc : sc);

        progress.style.width = (sc / 60) * 100 + "%";

}

setInterval(digitalClock, 1000)