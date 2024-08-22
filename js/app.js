document.addEventListener('DOMContentLoaded', () => {
    const splashScreen = document.getElementById('splashScreen');
    const splashDuration = 3000;

    if (!localStorage.getItem('splashShown')) {
        splashScreen.classList.remove('hidden');
        localStorage.setItem('splashShown', 'true');

        setTimeout(() => {
            splashScreen.classList.add('hidden');
        }, splashDuration);
    } else {
        splashScreen.classList.add('hidden');
    }

    splashScreen.addEventListener('transitionend', () => {
        if (splashScreen.classList.contains('hidden')) {
            splashScreen.remove();
        }
    });

    
    loadState();
    updateCoinImage(currentBalance); 
});

const coinImage = document.getElementById('coinImage');
const balance = document.getElementById("balance"); 
const coinDisplay = document.getElementById("coin"); 
let currentBalance = parseInt(localStorage.getItem('coinBalance')) || 0; 
let currentCoin = parseInt(localStorage.getItem('coin')) || 100000; 

balance.textContent = currentBalance;
coinDisplay.textContent = currentCoin;

function saveState(currentBalance, imageSrc, currentCoin) {
    localStorage.setItem('coinBalance', currentBalance);
    localStorage.setItem('coinImage', imageSrc);
    localStorage.setItem('coin', currentCoin);
}

function loadState() {
    const savedBalance = localStorage.getItem('coinBalance');
    const savedImage = localStorage.getItem('coinImage');
    const savedCoin = localStorage.getItem('coin');

    if (savedBalance !== null) {
        currentBalance = parseInt(savedBalance);
        balance.textContent = currentBalance;
       
    }

    if (savedImage) {
        coinImage.src = savedImage;
    }

    if (savedCoin !== null) {
        currentCoin = parseInt(savedCoin);
        coinDisplay.textContent = currentCoin;
    }
}

coinImage.addEventListener('click', () => {
    currentBalance++;
    currentCoin--;
    balance.textContent = currentBalance;
    coinDisplay.textContent = currentCoin;
    updateCoinImage(currentBalance); 
    animateCoin();
    saveState(currentBalance, coinImage.src, currentCoin); 
});

function updateCoinImage(currentBalance) {
    let newImage;

    if (currentBalance >= 300) {
        newImage = './assets/images/level4.png';
    } else if (currentBalance >= 200) {
        newImage = './assets/images/level3.png';
    } else if (currentBalance >= 100) {
        newImage = './assets/images/level2.png';
    } else {
        newImage = './assets/images/level1.png';
    }


    console.log('Updating coin image to:', newImage, 'for balance:', currentBalance);


    coinImage.src = newImage;
}

function animateCoin() {
    coinImage.classList.add("shake");
    setTimeout(() => {
        coinImage.classList.remove("shake");
    }, 200);
}