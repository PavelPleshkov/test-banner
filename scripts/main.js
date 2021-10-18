const prices = document.getElementsByClassName('purchase-prices')[0];
// let activePrice = document.getElementsByClassName('price-active')[0];
let activePrice;

prices.addEventListener('click', activatePrice);

function activatePrice(e) {
    if (e.target.parentElement.classList.contains('purchase-prices-item')) {
        if (activePrice) {
            activePrice.classList.remove('price-active');
        }

        if (activePrice != prices.children[1]) {
            prices.children[1].classList.remove('price-active');
        }

        activePrice = e.target.parentElement;
        activePrice.classList.add('price-active');
    }

    if (e.target.classList == '') {
        if (activePrice) {
            activePrice.classList.remove('price-active');
        }

        if (activePrice != prices.children[1]) {
            prices.children[1].classList.remove('price-active');
        }

        activePrice = e.target.parentElement.parentElement;
        activePrice.classList.add('price-active');
    }
}

const btnContinue = document.getElementsByClassName('purchase-btn')[0];

btnContinue.addEventListener('click', redirectToPrice);

function redirectToPrice() {
    if (activePrice) {
        if (activePrice == prices.children[0]) {
            window.open('https://www.google.com/search?q=1');
            // location.href = 'https://www.google.com/search?q=1';
        }
        if (activePrice == prices.children[1]) {
            window.open('https://www.google.com/search?q=2');
            // location.href = 'https://www.google.com/search?q=2';
        } else {
            window.open('https://www.google.com/search?q=3');
            // location.href = 'https://www.google.com/search?q=3';
        }
    } else {
        console.log('need to chose price')
    }
    
}