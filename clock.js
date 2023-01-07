
    const secondsHand = document.querySelector('.seconds');
    const minuteHand = document.querySelector(".minute");
    const hourHand = document.querySelector(".hour");
    
    function setDate(){
        const now = new Date();
        const seconds = now.getSeconds();
        const secondsDegree = ((seconds / 60) * 360) + 90;
        secondsHand.style.transform = `rotate(${secondsDegree}deg)`;

        const min = now.getMinutes();
        const minutesDegree = ((min / 60) * 360) + ((seconds / 60) * 6) + 90;
        minuteHand.style.transform = `rotate (${minutesDegree}deg)`;

        const hour = now.getHours();
        const hoursDegree = ((hour / 12) * 360) + ((min / 60) * 30) + 90;
        hourHand.style.transform = `rotate(${hoursDegree}deg)`;

    }
    setInterval(setDate, 1000);
setDate();




