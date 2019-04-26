import feedCataDog from '../src/feed-catadog.js';

const donutButtons = document.querySelectorAll('.donut');
const caterpillarDog = document.getElementById('caterpillar-dog');
const danceButtons = document.querySelectorAll('.dancing');

for(let i = 0; i < donutButtons.length; i++) {
    const donutButton = donutButtons[i];

    donutButton.addEventListener('click', () => {
        feedCataDog(caterpillarDog, donutButton.value);

    }); 
}

// dancing



for(let i = 0; i < danceButtons.length; i++) {
    const danceButton = danceButtons[i];
    
    danceButton.addEventListener('click', () => {
        //remove all previous class
        
        //add class to corresponding fruit

    });
}

