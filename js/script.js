window.addEventListener('load', () => {
    let urlAudioMp3 = './audio/beep.mp3';
    let urlAudioOgg = './audio/beep.ogg';
    const audio = new Audio(urlAudioMp3) || new Audio(urlAudioOgg);

    if(typeof audio.loop === 'boolean'){
        audio.loop = true;
    }else{
        audio.addEventListener('ended', () => {
            audio.currentTime = 0;
            audio.play();
        }, false);
    }

    // START
    const start = async () =>{
        await audio.play();
    }
    window.addEventListener('keydown', start);

    // FINISH
    const finish = async () =>{
        await audio.pause();
        audio.currentTime = 0;
    }
    window.addEventListener('keyup', finish);

    if((('ontouchstart' in window) ||
    (navigator.maxTouchPoints > 0) ||
    (navigator.msMaxTouchPoints > 0))){
        // MOBILE DEVICE
        window.addEventListener('touchstart', start);
        window.addEventListener('touchend', finish);    
    }else{
        window.addEventListener('mousedown', start);
        window.addEventListener('mouseup', finish);    
    }
});