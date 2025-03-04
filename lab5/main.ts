function getCurrentDate(): void {
    console.log(Date.now());
}

function logTime(): void{
    const interval = setInterval(getCurrentDate, 5000);
    setTimeout(() => {
        clearInterval(interval);
    }, 60000);
}

window.addEventListener("load", logTime);