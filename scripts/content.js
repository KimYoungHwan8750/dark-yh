const INTERVAL = 100;
let hideAdsCompleted = false;
let extendErdWrapCompleted = false;

const hideAdsTask = setInterval(hideAds, INTERVAL);
const extendErdWrapTask = setInterval(extendErdWrap, INTERVAL);

function hideAds() {
    const adsArea = document.querySelector('.erd-ads-area');
    if (adsArea) {
        adsArea.style.display = 'none';
        hideAdsCompleted = true;
        clearInterval(hideAdsTask);
    }
}

function extendErdWrap() {
    const erdWrap = document.querySelector('.erdWrap');
    const erdCanvas = document.querySelector('#erdCanvas');
    if (erdWrap) {
        erdWrap.style.width = '100%';
        extendErdWrapCompleted = true;
        erdCanvas.width = window.innerWidth - 80;
        clearInterval(extendErdWrapTask);
    }   
}