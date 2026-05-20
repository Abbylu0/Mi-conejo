// =========================
//        script.js
// =========================

const sky = document.getElementById('sky');


// ✨ ESTRELLAS

for(let i = 0; i < 350; i++){

    let star = document.createElement('div');

    star.className = 'star';

    star.style.left = Math.random() * 100 + '%';

    star.style.top = Math.random() * 100 + '%';

    star.style.animationDelay = Math.random() * 3 + 's';

    sky.appendChild(star);

}


// 🌙 ENTRAR A CARTA

document.getElementById('btn-start').addEventListener('click', () => {

    const music = document.getElementById('bg-music');

    if(music.paused){

        music.volume = 0;

        music.play();

        let volume = 0;

        const fade = setInterval(() => {

            if(volume < 1){

                volume += 0.05;

                music.volume = volume;

            }else{

                clearInterval(fade);

            }

        }, 200);

    }

    document.getElementById('s1').classList.remove('active');

    setTimeout(() => {

        document.getElementById('s2').classList.add('active');

    }, 700);

});


// ⬅ VOLVER LUNA

document.getElementById('back-home').addEventListener('click', () => {

    document.getElementById('s2').classList.remove('active');

    setTimeout(() => {

        document.getElementById('s1').classList.add('active');

    }, 500);

});


// 🌙 NUESTRA LUNA

document.getElementById('back-btn').addEventListener('click', () => {

    document.getElementById('s2').classList.remove('active');

    setTimeout(() => {

        document.getElementById('s3').classList.add('active');

    }, 500);

});


// ⬅ VOLVER CARTA

document.getElementById('back-letter').addEventListener('click', () => {

    document.getElementById('s3').classList.remove('active');

    setTimeout(() => {

        document.getElementById('s2').classList.add('active');

    }, 500);

});


// 🐇 CONEJOS ABAJO

const row = document.getElementById('bunny-row');

setInterval(() => {

    row.classList.add('kissing');

    const kiss = document.getElementById('kiss-sound');

    kiss.currentTime = 0;

    kiss.play();

    setTimeout(() => {

        row.classList.remove('kissing');

    }, 1600);

}, 3500);


// ☄️ LLUVIA DE COMETAS

function createMeteor(){

    const meteor = document.createElement('div');

    meteor.classList.add('shooting-star');

    meteor.style.top = Math.random() * 40 + '%';

    meteor.style.right = '-20%';

    document.body.appendChild(meteor);

    setTimeout(() => {

        meteor.remove();

    }, 6000);

}

setInterval(createMeteor, 2500);


// 💗 LLUVIA ESPECIAL

function createSpecialRain(){

    const item = document.createElement('div');

    item.classList.add('rain-item');

    const emojis = ['💗','🐰'];

    item.innerHTML =
    emojis[Math.floor(Math.random() * emojis.length)];

    item.style.left = Math.random() * 100 + 'vw';

    item.style.fontSize =
    (Math.random() * 15 + 18) + 'px';

    document.body.appendChild(item);

    setTimeout(() => {

        item.remove();

    }, 5000);

}

setInterval(createSpecialRain, 800);


// 📳 VIBRACION BESITO

setInterval(() => {

    navigator.vibrate([
        120,
        80,
        120
    ]);

}, 6000);