const donutButtons = document.querySelectorAll('.donut');

for (let i = 0; i < donutButtons.length; i++) {
    const donutButton = donutButtons[i];

    donutButton.addEventListener('click', () => {
        console.log(donutButton);

    }); 
}