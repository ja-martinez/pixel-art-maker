document.addEventListener('DOMContentLoaded', function () {
    var gridContainer = document.querySelector('.grid-container');
    var colors = document.querySelector('.colors');
    var color = "white";
    var colorIndicator = document.querySelector("#color-indicator");

    colors.addEventListener('click', function (event) {
        const paletteColor = getComputedStyle(event.target).backgroundColor;
        color = paletteColor;
        colorIndicator.style.backgroundColor = color;
    })

    gridContainer.addEventListener('click', function (event) {
        if (event.target.className === 'grid-unit') {
          event.target.style.backgroundColor = color;
        }
        
    });

})

