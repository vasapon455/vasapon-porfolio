function loadCarousel() {
    document.getElementById("prev").classList.add('inactive');
}


var container = document.getElementById('carousel-container');
var slider = document.getElementById('carousel');
var slides = document.getElementsByClassName('carousel-card').length;
var buttons = document.getElementsByClassName('btn');
var currentPosition = 0;
var currentMargin = 0;
var sliderPerPage = 0;


function slideRight() {

    if  (currentPosition === 0) {
         document.getElementById("prev").classList.add('inactive');
         document.getElementById("next").classList.remove('inactive');
        }


    else {
        document.getElementById("prev").classList.remove('inactive');
        document.getElementById("next").classList.remove('inactive');
        currentMargin = "-" + (50 * (currentPosition - 1))+ '%';
        slider.style.marginLeft = currentMargin;
        currentPosition--;
     }
}

function slideLeft() {

    if (currentPosition === 6) {
        document.getElementById("prev").classList.remove('inactive');
        document.getElementById("next").classList.add('inactive');
    }

    else {
            document.getElementById("prev").classList.remove('inactive');
            document.getElementById("next").classList.remove('inactive');
            currentMargin = "-" + (50 * (1 + currentPosition))+ '%';
            slider.style.marginLeft = currentMargin;
            currentPosition++;
    }
}

