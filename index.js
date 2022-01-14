function showTime (){
    let d = new Date ();
    let h = d.getHours ();
    let m = d.getMinutes ();
    let s = d.getSeconds ();
    let session = "AM";

    if (h >= 12){
        h = h - 12;
        session = "PM";
    }

    if (h == 0){
        h = 12
    }

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m:m;
    s = s < 10 ? "0" + s:s;


    let time = h + " : " + m + " : " + s + " " + session;
    document.getElementsByTagName('h1')[0].innerText = time;
    setTimeout (showTime,1000)
}