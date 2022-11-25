/**
 * @Author - João Fernandes
 * @Updated - 25/11/2022
 */


function clock() {

    var days = document.getElementById('days');
    var mounth = document.getElementById('mounth')
    var year = document.getElementById('year')
    var hours = document.getElementById('hours');
    var minutes = document.getElementById('minutes');
    var seconds = document.getElementById('seconds');

    /**
     * @Note We need to add +1 do to the fact that getMonth starts on 0 to 11
     * so to get the actual month we need to add 1 
     */

    var y = new Date().getUTCFullYear();
    var d = new Date().getDate();
    var mo = new Date().getMonth() + 1;
    var h = new Date().getHours();
    var m = new Date().getMinutes();
    var s = new Date().getSeconds();

    /* Formatar a data */
    d = (d < 10) ? `0${d}` : d;
    h = (h < 10) ? `0${h}` : h;
    m = (m < 10) ? `0${m}` : m;
    s = (s < 10) ? `0${s}` : s;

    /* Inserir a data no HTML */
    days.innerHTML = d;
    mounth.innerHTML = mo;
    year.innerHTML = y;
    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
}


var interval = setInterval(clock, 1000);