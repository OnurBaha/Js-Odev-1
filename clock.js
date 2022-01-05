let fullName = prompt("Adınızı Giriniz:")
let myName = document.querySelector("#myName")

if (fullName) {
    myName.innerHTML = `${fullName}`
} else if (!fullName) {
    myName.innerHTML = "Kullanici Adiniz Bulunmamaktadir"
}

function showTime() {
    let date = new Date();
    let days = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
    let time = document.querySelector('#myClock')
    
    time.innerHTML = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} ${days[date.getUTCDay()]}`
    setTimeout(showTime, 1000);
    }
    showTime();
