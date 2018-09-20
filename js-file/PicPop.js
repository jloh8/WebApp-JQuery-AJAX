// AJAX weather



$(document).ready(function(){
$('#submitCity').on('focus', function(){

const $minTemp = $('#weather-info #min-temperature');
const $forecast = $('#forecast');
const city = $('#city').val();

if(city != ''){
    $.ajax({
    url:"https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=metric" + "&APPID=7e97ca944b6826492b669fe353f1ba73",
    type: "GET",
    dataType: "jsonp",
    success: function(data){
      const weather = show(data);
      $('#forecast').html(weather);
      }
    });
  }
});//submitcity button
});// ready function



function show(data){
  const x = data.list[1].weather[0].main;
  const y = data.city.name;
  const z = "Today's weather in ";

  if (x == 'Clouds'){
    $('#forecast').html("<img src='image/cloudy.png'>");
    $('#weather-condition #city-title').html(y);
    $('#weather-condition #date').html(z);


       }
  else if(x == 'Clear'){
       $('#forecast').html("<img src='image/clear.png'>");
       $('#weather-condition #city-title').html(y);
       $('#weather-condition #date').html(z);

       }
  else if(x == 'Rain'){
       $('#forecast').html("<img src='image/weatherRain.png'>");
       $('#weather-condition #city-title').html(y);
       $('#weather-condition #date').html(z);

       }
 else if (x == 'Snow'){
            $('#forecast').html("<img src='image/snow.png'>");
            $('#weather-condition #city-title').html(y);
            $('#weather-condition #date').html(z);
            }else{
                $("#error").html('Field cannot be empty');
              }
};



// opening new tab
$('li .pack1').click(function(){
  window.open( 'https://www.amazon.com/Poncho-Family-Lightweight-Durable-EVA-Material-Clear/dp/B07D7DTMJ1/ref=sr_1_1?ie=UTF8&qid=1534195079&sr=8-1&keywords=acutech&th=1&psc=1',
  '_blank');
                              });

$('li .pack2').click(function(){
    window.open( 'https://www.amazon.com/Poncho-Family-Lightweight-Durable-EVA-Material-Clear/dp/B073YFP3XV/ref=sr_1_1?ie=UTF8&qid=1534195079&sr=8-1&keywords=acutech&th=1&psc=1',
    '_blank');
                              });

$('li .pack4').click(function(){
    window.open( 'https://www.amazon.com/Poncho-Family-Lightweight-Durable-EVA-Material-Clear/dp/B074LW489R/ref=sr_1_1?ie=UTF8&qid=1534195079&sr=8-1&keywords=acutech&th=1&psc=1',
    '_blank');
                              });
$('li .pack8').click(function(){
    window.open( 'https://www.amazon.com/Poncho-Family-Lightweight-Durable-EVA-Material-Clear/dp/B07DLCXWP9/ref=sr_1_1?ie=UTF8&qid=1534195079&sr=8-1&keywords=acutech&th=1&psc=1',
    '_blank');
                              });

$('li .pack-kids').click(function(){
    window.open( 'https://www.amazon.com/Poncho-Family-Lightweight-Durable-EVA-Material-Clear/dp/B07D8KG9XC/ref=sr_1_1?ie=UTF8&qid=1534195079&sr=8-1&keywords=acutech&th=1&psc=1',
    '_blank');
                                });
