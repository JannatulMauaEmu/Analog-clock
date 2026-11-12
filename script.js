const minuteHand = document.getElementById("minute");
const secondHand = document.getElementById("second");

let minuteAngle = 0;
let secondAngle = 0;

function rotateClock() {
    minuteAngle += 6;
    secondAngle += 60;

    minuteHand.style.transform = "translateX(-50%) rotate(" + minuteAngle + "deg)";

    secondHand.style.transform = "translateX(-50%) rotate(" + secondAngle + "deg)";
}

rotateClock();
setInterval(rotateClock, 1000);