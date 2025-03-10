const getTime = () => {
    let d = new Date();
    let h = d.getHours();
    let amPm = h >= 12 ? "PM" : "AM";

    h = h % 12;
    let m = d.getMinutes();
    m = m > 9 ? m : "0" + m ;
    let s = d.getSeconds();
    s = s > 9 ? s : "0" + s;

    return `${h} : ${m} : ${s}  ${amPm}`
}

setInterval(() => {
    let clockOb = document.querySelector('.clock');
    clockOb.innerHTML = getTime();
}, 1000);