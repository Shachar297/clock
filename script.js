setInterval(setClock, 1000);

const hourHand = document.querySelector("[data-hour-hand]");
const minutesHand = document.querySelector("[data-minutes-hand]");
const secondsHand = document.querySelector("[data-seconds-hand]");

const digitalHour = document.getElementById("hour");
const digitalMinute = document.getElementById("minute");
const digitalSecond = document.getElementById("second");


function setClock() {
    const currentDate = new Date();
    const secondsRatio = currentDate.getSeconds() / 60;
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;

    setDigitalClock()

    setRotation(secondsHand, secondsRatio);
    setRotation(minutesHand, minutesRatio);
    setRotation(hourHand, hoursRatio);
}

function setRotation(element, rotationRatio) {
    element.style.setProperty("--rotation", rotationRatio * 360);
}

function setDigitalClock() {
    const date = new Date();
    // digitalHour.innerHTML = Math.ceil(date.getHours())
    // digitalMinute.innerHTML = Math.ceil(date.getMinutes());
    digitalSecond.innerHTML = Math.ceil(date.getSeconds());

    setValidTimeOnDigital(date , digitalHour , digitalMinute , digitalSecond);
}

function setValidTimeOnDigital(dateString , hourText , minutesText , secondsTexxt){
    if(dateString.getHours() < 10){
        hourText.innerHTML = ' 0 ' + Math.ceil(dateString.getHours());
    }else{
        hourText.innerHTML = Math.ceil(dateString.getHours());
    }

    if(dateString.getMinutes() < 10){
        minutesText.innerHTML = ' 0 ' + Math.ceil(dateString.getMinutes());
    }else{
        minutesText.innerHTML = Math.ceil(dateString.getMinutes());
    }

    if(dateString.getSeconds() < 10){
        secondsTexxt.innerHTML = ' 0 ' + Math.ceil(dateString.getSeconds());
    }else{
        secondsTexxt.innerHTML = Math.ceil(dateString.getSeconds());
    }
}


setClock();