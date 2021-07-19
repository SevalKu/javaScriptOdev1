function askName(){
    let name=prompt("Adınız Nedir?");
    document.getElementById("myName").innerText=name;
}
askName();

function showTime(){
    let date= new Date();
    let hour= date.getHours();
    let min= date.getMinutes();
    let sec= date.getSeconds();
    let day= date.getDay();
    
    if (day==1){day="Pazartesi"}
    else if(day==2){day="Salı"}
    else if(day==3){day="Çarşamba"}
    else if (day==4){day="Perşembe"}
    else if (day==5){day="Cuma"}
    else if (day==6){day="Cumartesi"}
    else if (day==7){day="Pazar"}

    hour= hour<10 ? "0" + hour : hour;
    min= min<10 ? "0" + min : min;
    sec= sec<10 ? "0" + sec : sec;

    let time = `${hour}:${min}:${sec} ${day}`;
    document.getElementById("myClock").innerText=time;

    setTimeout(showTime, 1000);


}
showTime();
