const INTERVAL = 1000;
let hideAdsCompleted = false;
let extendErdWrapCompleted = false;

const hideAdsTask = setInterval(hideAds, INTERVAL);
const extendErdWrapTask = setInterval(extendErdWrap, INTERVAL);

function hideAds() {
    if(hideAdsCompleted) return;
    const adsArea = document.querySelector('.erd-ads-area');
    const adsByGoogle = document.querySelectorAll('.adsbygoogle');
    if (adsByGoogle.length) {
        adsByGoogle.forEach(el => {
            el.style.display = 'none';
        })
    }
    if (adsArea) {
        adsArea.style.display = 'none';
        hideAdsCompleted = true;
    }
}

function extendErdWrap() {
    if(extendErdWrapCompleted) return;
    const erdWrap = document.querySelector('.erdWrap');
    const erdCanvas = document.querySelector('#erdCanvas');
    if (erdWrap) {
        erdWrap.style.width = '100%';
        extendErdWrapCompleted = true;
        erdCanvas.width = window.innerWidth - 80;
    }   
}
window.addEventListener('popstate', () => {
    hideAdsCompleted = false;
    extendErdWrapCompleted = false;
})