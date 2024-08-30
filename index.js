
function watch(){
    const now = new Date();
    let hours = now.getHours();
    const miniderem = hours >= 12 ? "pm":"am";
    hours = hours % 12 || 12;
    hours =  hours.toString().padStart(2,"0")
    const min = now.getMinutes().toString().padStart(2,"0");
    const sec = now.getSeconds().toString().padStart(2,"0");
    const time = `${hours}:${min}:${sec} ${miniderem}`;

    document.getElementById("clock").textContent = time;

}
setInterval(watch,1000);

