(function (global, factory) {
    factory();
    var init = {
        version: '1.0.0'
    };
    global.mojon = init;

    // let videodom = undefined
    // /*定时器循环ms*/
    // let time = 10
    // /*播放视频*/
    // let videoPlay = () => {
    //     let playDom = undefined
    //     //宽屏DOM
    //     playDom = videodom.onloadstart = document.querySelector('.bilibili-player-iconfont.bilibili-player-iconfont-widescreen-off.player-tooltips-trigger')
    //     /*尝试播放视频*/
    //     if (playDom) {
    //         setTimeout(() => {
    //             playDom.click()
    //             videodom.play()
    //             try {
    //                 document.querySelector("#playerWrap").scrollIntoView({
    //                     behavior: "smooth"
    //                 })
    //             } catch (e) {}
    //         }, time)
    //     } else {
    //         setTimeout(videoPlay, time)
    //     }
    // }
    // /*获取videoDom*/
    // let getVideoDom = () => {
    //     videodom = document.querySelector('video')
    //     if (videodom) {
    //         videoPlay()
    //     } else {
    //         setTimeout(getVideoDom, time)
    //     }
    // }
    // getVideoDom()
})(this, function () {
    console.log("I'am mojon, a chrome plug!");
})