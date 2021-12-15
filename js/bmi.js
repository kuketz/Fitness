jQuery(function($){

    // ИМТ мужской, ИМТ женский, Соответствие между массой человека и его ростом
    text = [
        ['16 и менее', '16 и менее', 'Дефицит массы'],
        ['16-18.5', '16-18.5', 'Недостаточный вес'],
        ['18.5-24.99', '18.5-24.99', 'Нормальный вес'],
        ['25-30', '25-30', 'Избыточный вес (начальная стадия ожирения)'],
        ['30-35', '30-35', '1 степень ожирения'],
        ['35-40', '35-40', '2 степень ожирения'],
        ['40 и более', '40 и более', '3 степень ожирения'],
    ];

// Инициализация

    var b = $('.imtcalc');
    var r = $('.imtcalc_result');

    b.find('form').on('submit', calculate);

// Функции

    function decimal_adjust(t,v,e){if(typeof e==='undefined'||+e===0){return Math[t](v)}v=+v;e=+e;if(isNaN(v)||!(typeof e==='number'&&e%1===0)){return NaN}v=v.toString().split('e');v=Math[t](+(v[0]+'e'+(v[1]?(+v[1]-e):-e)));v=v.toString().split('e');return +(v[0]+'e'+(v[1]?(+v[1]+e):e))}if(!Math.round10){Math.round10=function(v,e){return decimal_adjust('round',v,e)}}

    function calculate() {
        var e = event || window.event;
        e.preventDefault();

        var sex    = b.find('input[name="imtcalc_sex"]:checked').val();
        var weight = b.find('input[name="imtcalc_weight"]').val();
        var height = b.find('input[name="imtcalc_height"]').val();

        var imt = weight/(Math.pow((height/100), 2));

        if (sex == true) {

            if (imt < 16) index = 0;
            else if (imt >= 16 && imt < 18.5) index = 1;
            else if (imt >= 18.5 && imt < 25) index = 2;
            else if (imt >= 25 && imt < 30) index = 3;
            else if (imt >= 30 && imt < 35) index = 4;
            else if (imt >= 35 && imt < 40) index = 5;
            else if (imt > 40) index = 6;

        } else {

            if (imt < 16) index = 0;
            else if (imt >= 16 && imt < 18.5) index = 1;
            else if (imt >= 18.5 && imt < 25) index = 2;
            else if (imt >= 25 && imt < 30) index = 3;
            else if (imt >= 30 && imt < 35) index = 4;
            else if (imt >= 35 && imt < 40) index = 5;
            else if (imt > 40) index = 6;

        }

        var table = '<div class="imtcalc_result_text"><span>Ваш результат</span><span>'+Math.round10(imt, -2)+' кг/м² </span>  </div>';

        text.forEach(function(item, i){
            if (i == index) active = ' class="imtcalc_active"';
            else active = '';

            table += '<tr'+active+'><td>'+item[sex]+'</td><td>'+item[2]+'</td></tr>';
        });

        r.html('<table><thead><tr><th>Индекс массы тела</th><th>Соответствие между массой человека и его ростом</th></tr></thead><tbody>'+table+'</tbody></table>').show();
    }

});
