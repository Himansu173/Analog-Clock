var audio = new Audio('/Analog Clock/Studio_Project_V11.mp3');

audio.addEventListener("canplaythrough", () => {
    audio.play().catch(e => {
        window.addEventListener('click', () => {
            audio.play()
        })
    })
});

setInterval(display => {
    var date = new Date();

    var hr = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();

    var hour = hr % 12;
    if (hour < 10) {
        hour = '0' + hour;
    }
    
    document.getElementById("hr").innerHTML = (hour == '00' ? 12 : hour);
    
    document.getElementById("min").style.cssText = `transform: translate(-50%, -50%) rotateZ(${-min * 6}deg);`
    let MINchildren = document.getElementById("min").children;
    for (i = 0; i < 12; i++) {
        MINchildren[i].style.cssText = `transform: rotateZ(${min * 6}deg);`;
    }

    document.getElementById("sec").style.cssText = `transform: translate(-50%, -50%) rotateZ(${-sec * 6}deg);`
    let SECchildren = document.getElementById("sec").children;
    for (i = 0; i < 12; i++) {
        SECchildren[i].style.cssText = `transform: rotateZ(${sec * 6}deg);`;
    }

    if (min < 10) {
        min = '0' + min;
    }
    document.querySelector('#min_val').innerHTML = min;

    if (sec < 10) {
        sec = '0' + sec;
    }
    document.querySelector('#sec_val').innerHTML = sec;

    var x = min % 5;
    var min_hide = ((min - x) / 5) + 1 == 13 ? 1 : ((min - x) / 5) + 1;

    if (x < 3) {
        const a = document.querySelector(`#min h3:nth-child(${min_hide})`);
        a.style.cssText = `visibility: hidden;`
    }
    else {
        const b = document.querySelector(`#min h3:nth-child(${(min_hide + 1) == 13 ? 1 : (min_hide + 1)})`);
        b.style.cssText = `visibility: hidden;`
    }
    
    audio.play();
    var x = sec % 5;
    var sec_hide = ((sec - x) / 5) + 1 == 13 ? 1 : ((sec - x) / 5) + 1;
    if (x < 3) {
        const a = document.querySelector(`#sec h3:nth-child(${sec_hide})`);
        a.style.cssText = `visibility: hidden;`
    }
    else {
        const b = document.querySelector(`#sec h3:nth-child(${(sec_hide + 1) == 13 ? 1 : (sec_hide + 1)})`);
        b.style.cssText = `visibility: hidden;`
    }
}, 1000);