const seachinput = document.querySelector('input');
const seachBot = document.querySelector('button');
const endEleman = document.querySelectorAll('.hide');
const loading = document.querySelector('p');

const WeatherData = {
    tehran: {neme: 'Tehran', tem: 43 +' C', typeW: 'sunny', Hum: 'Humidity: '+26+' %', WindSpead: 'Wind speed: '+32+' km/h'},
    shiraz: {neme: 'Shiraz', tem: 20+' C', typeW: 'windy', Hum: 'Humidity: '+50+' %', WindSpead: 'Wind speed: '+40+' km/h'},
    mazandaran: {neme: 'Mazandaran', tem: 12 +' C', typeW: 'cloudy', Hum: 'Humidity '+60+' %', WindSpead: 'Wind speed: '+28+' km/h'},
    esfehan: {neme: 'Esfehan', tem: 8+' C', typeW: 'rainy', Hum:'Humidity: '+ 40+' %', WindSpead:'Wind speed: '+ 20+' km/h'}

}


seachBot.addEventListener('click', function () {

    let rez = WeatherData[seachinput.value]

    if (rez) {
        let array = Object.values(rez);
        for (let i = 0; i < array.length; i++) {
            endEleman[i].classList.remove('hide')
            endEleman[i].innerHTML= array[i];
        }

    loading.classList.add('hide')
    } else {
        alert("اسم شهر اشتباه میباشد ")
    }
});
