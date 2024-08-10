document.addEventListener('DOMContentLoaded', () => {
    const colorPicker = document.getElementById('colorPicker');
    const offButton = document.getElementById('offButton');
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');
    const onButton = document.getElementById('onButton');
    const bulbDisplay = document.getElementById('bulbDisplay');
    const rgbSlider = document.getElementById('rgbSlider');
    const whiteSlider = document.getElementById('whiteSlider');
    const saveThemeButton = document.getElementById('saveThemeButton');

    let currentBulb = 0;
    let bulbs = [];

    const updateBulbDisplay = () => {
        bulbDisplay.textContent = currentBulb;
        const bulb = bulbs[currentBulb];
        if (bulb && bulb.on) {
            bulbDisplay.style.backgroundColor = bulb.color;
        } else {
            bulbDisplay.style.backgroundColor = 'transparent';
        }
    };

    const setBulbState = (bulb, state) => {
        bulb.on = state;
        bulb.color = colorPicker.value;
        updateBulbDisplay();
    };

    colorPicker.addEventListener('input', () => {
        if (bulbs[currentBulb] && bulbs[currentBulb].on) {
            bulbs[currentBulb].color = colorPicker.value;
            updateBulbDisplay();
        }
    });

    offButton.addEventListener('click', () => {
        setBulbState(bulbs[currentBulb], false);
    });

    onButton.addEventListener('click', () => {
        setBulbState(bulbs[currentBulb], true);
    });

    prevButton.addEventListener('click', () => {
        if (currentBulb > 0) {
            currentBulb--;
            updateBulbDisplay();
        }
    });

    nextButton.addEventListener('click', () => {
        if (currentBulb < bulbs.length - 1) {
            currentBulb++;
            updateBulbDisplay();
        }
    });

    rgbSlider.addEventListener('input', () => {
        whiteSlider.value = 0;
        // Update RGB brightness logic here
    });

    whiteSlider.addEventListener('input', () => {
        rgbSlider.value = 0;
        // Update white brightness logic here
    });

    saveThemeButton.addEventListener('click', () => {
        // Save theme logic here
    });

    // Initialize bulbs array with default values
    for (let i = 0; i < 10; i++) {
        bulbs.push({ on: false, color: '#ffffff' });
    }

    updateBulbDisplay();
});
