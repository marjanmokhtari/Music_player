
let PlaymusicIcon = document.querySelectorAll('.iconsPlay')
let sourcMusic = document.getElementById('musicsours')
let icons = ['icon-play', 'icon-pause']
let showcover = document.getElementsByClassName('showcover')[0]
const _audios = ['1.mp3', '2.mp3', '3.mp3', '4.mp3', '5.mp3', '6.mp3']
let covermusic = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg']
let play2 = document.querySelector('.play2')
const nameartist = ['حسین منتظری', 'امین بانی', 'حجت اشرف زاده', 'سینا درخشانی', 'هوروش بند', 'پازل بند']
const musicName = ['بچه نشو', 'حرف آخر', 'کمان ابرو', 'تو تکی', 'یادم نرفته', 'دلم میخواد']
let ShowNameartist = document.getElementsByClassName('nameartist')[0]
let nameMusic = document.getElementsByClassName('nameMusic')[0]
let line = document.getElementById('line')
let time = document.getElementById('time')
let min = 0
let sec = 0
let nextMusic = document.querySelectorAll('.nextmusic')
const timeLine = ['202', '171', '190', '178', '216', '210']
let __songstime = document.getElementById('songstime')
let _clone = 0
let timer = document.getElementById('timer')
let _cloneWidth = 0
let _nextPlay = 0
let w
let t
// play music

let flag = 0


play2.addEventListener('click', () => {

    if (flag % 2 == 0) {

        sourcMusic.play();
        play2.classList.add(icons[1])
        play2.classList.remove(icons[0])
       
    
    } else {
        sourcMusic.pause()
        play2.classList.add(icons[0])
        play2.classList.remove(icons[1])
        PlaymusicIcon.forEach((val)=>{
            val.classList.replace(icons[1], icons[0])
        })
    }
    flag++
})



PlaymusicIcon.forEach((val, i) => {
    sourcMusic.pause()
    val.addEventListener('click', () => {

        if (val.classList.contains('icon-play')) {
            sourcMusic.play()
            sourcMusic.src = 'assets/music/' + _audios[i]
            val.classList.replace(icons[0], icons[1])
            play2.classList.replace(icons[0], icons[1])
            showcover.src = 'assets/img/' + covermusic[i]
            ShowNameartist.innerHTML = nameartist[i]
            nameMusic.innerHTML = musicName[i]
            i5 = 1




        } else {
            sourcMusic.pause()
            play2.classList.replace(icons[1], icons[0])
            val.classList.replace(icons[1], icons[0])



        }
        for (let k = 0; k < PlaymusicIcon.length; k++) {
            if (i != k) {
                PlaymusicIcon[k].classList.replace(icons[1], icons[0])
            }
        }
        _clone = i

    })

})


// ***** next and previous music *******

let i5 = 1

nextMusic.forEach((val, one) => {
    val.addEventListener('click', () => {
        let i = _clone + i5
        if (one == 0) {
            if (i < (PlaymusicIcon.length)) {
                sourcMusic.src = 'assets/music/' + _audios[i]
                PlaymusicIcon[i - 1].classList.replace(icons[1], icons[0])
                PlaymusicIcon[i].classList.replace(icons[0], icons[1])
                play2.classList.replace(icons[0], icons[1])
                showcover.src = 'assets/img/' + covermusic[i]
                ShowNameartist.innerHTML = nameartist[i]
                nameMusic.innerHTML = musicName[i]
                i5++
            }



        } else {
            i = i - 1
            if (i > 0) {
                sourcMusic.src = 'assets/music/' + _audios[i - 1]
                PlaymusicIcon[i].classList.replace(icons[1], icons[0])
                PlaymusicIcon[i - 1].classList.replace(icons[0], icons[1])
                play2.classList.replace(icons[0], icons[1])
                showcover.src = 'assets/img/' + covermusic[i - 1]
                ShowNameartist.innerHTML = nameartist[i - 1]
                nameMusic.innerHTML = musicName[i - 1]


                for (let k = 0; k < PlaymusicIcon.length; k++) {
                    if ((i - 1) != k) {
                        PlaymusicIcon[k].classList.add('icon-play')

                    }
                }
                i5--
            }
        }


    })
})


// ***** end next and previous music *******




// ***** currentTime ****
setInterval(function () {
    min = Math.floor(sourcMusic.currentTime / 60);
    sec = Math.floor(sourcMusic.currentTime % 60);
    if (sec < 10) {
        sec = '0' + String(sec);
    }
    time.innerHTML = min + ':' + sec;



    //******/ Display total time
    _songtime()

}, 10);




function _songtime(s) {
    let totalTime = Math.floor(sourcMusic.duration / 60);
    let totalSecnd = Math.floor(sourcMusic.duration % 60);
    __songstime.innerHTML = totalTime + ':' + totalSecnd;
}




line.addEventListener('mousedown', (e) => {
    let totalTime = sourcMusic.duration;
    let widthClicked = e.offsetX;
    let totalWidth = line.offsetWidth;
    let clickedPercentage = (widthClicked / totalWidth) * 100;
    let timeClicked = (totalTime * clickedPercentage) / 100;
    sourcMusic.currentTime = timeClicked;
});


setInterval(() => {
    let time = Number(sourcMusic.duration)
    let timeMusic = Number(sourcMusic.currentTime)
    let x = (100 / time)
    timer.style.width = (timeMusic * x) + '%'
    _nextPlay = timeMusic
}, 1);