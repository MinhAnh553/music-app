const boxPlayer = document.getElementById('aplayer');
if (boxPlayer) {
    let dataSong = document
        .querySelector('[data-song]')
        .getAttribute('data-song');
    dataSong = JSON.parse(dataSong);

    let datSinger = document
        .querySelector('[data-singer]')
        .getAttribute('data-singer');
    datSinger = JSON.parse(datSinger);

    const ap = new APlayer({
        container: boxPlayer,
        autoplay: true,
        audio: [
            {
                name: dataSong.title,
                artist: datSinger.fullName,
                url: dataSong.audio,
                cover: dataSong.avatar,
            },
        ],
    });

    const avatarSong = document.querySelector('.inner-avatar');

    ap.on('play', function () {
        avatarSong.style.animationPlayState = 'running';
    });

    ap.on('pause', function () {
        avatarSong.style.animationPlayState = 'paused';
    });
}
