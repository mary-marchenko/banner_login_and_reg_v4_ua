(function init100vh(){
    function setHeight() {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
    setHeight();
    window.addEventListener('resize', setHeight);
})();

document.addEventListener("DOMContentLoaded", function() {
    function isIOS() {
        return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    }
    let bannerTitleTop = document.querySelector('.banner__title-top');

    if (!isIOS() && bannerTitleTop) {
        bannerTitleTop.classList.add('mar-pad');
    }
});