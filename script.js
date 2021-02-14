let digitalClock = () => {
    let date = new Date();

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    let amorpm = hours >= 12 ? 'pm' : 'am';

    if (hours > 12) {
        hours -= 12;
    } else if (hours === 0) {
        hours = 12;
    }


    document.getElementById("Hours").innerHTML = hours;
    document.getElementById("Minutes").innerHTML = minutes;
    document.getElementById("Seconds").innerHTML = seconds + 1;
    document.getElementById("AmorPm").innerHTML = amorpm;


    setTimeout(digitalClock, 500);

}

digitalClock();