import feedCataDog from '../src/feed-catadog.js';

const donutButtons = document.querySelectorAll('.donut');

const caterpillarDog = document.getElementById('caterpillar-dog');

for(let i = 0; i < donutButtons.length; i++) {
    const donutButton = donutButtons[i];

    donutButton.addEventListener('click', () => {
        feedCataDog(caterpillarDog, donutButton.value);

    }); 
}

