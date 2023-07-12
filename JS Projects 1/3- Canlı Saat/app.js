const clock = document.querySelector(".clock");

const tick = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    if(hours < 12){
        const html = 
    `
    <span>0${hours}</span> : 
    <span>${minutes}</span> :
    <span>${seconds}</span> 
    `
    clock.innerHTML = html;
    }
    else {
        const html = 
    `
    <span>${hours}</span> : 
    <span>${minutes}</span> :
    <span>${seconds}</span> 
    `
    clock.innerHTML = html;
    }

    

    
};

setInterval(tick, 1000);