// document.querySelector(".city").style.color = "red";
// document.querySelector(".dropdown").style.color = "black";
// document.querySelector(".dropdown").style.backgroundColor = "orange";

//header

// AJAX weather

const $weather = $('#rain');

$(document).ready(function(){
$('#submitCity').on('focus', function(){

const $minTemp = $('#weather-info #min-temperature');

  var city = $('#city').val();
  if(city != ''){
    $.ajax({
    url:"https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=metric" + "&APPID=7e97ca944b6826492b669fe353f1ba73",
    type: "GET",
    dataType: "jsonp",
    success: function(data){
// console.log(data);

     var x = data.list[1].weather[0].main;
     var y = data.city.name;
     var z = "Today's weather in ";


     $weather.each(function(){
       if (x == 'Clouds'){
         $(this).html("<img src='image/cloudy.png'>");
         $('#weather-condition #city-title').html(y);
         $('#weather-condition #date').html(z);


            }
       else if(x == 'Clear'){
            $(this).html("<img src='image/clear.png'>");
            $('#weather-condition #city-title').html(y);
            $('#weather-condition #date').html(z);

            }
       else if(x == 'Rain'){
            $(this).html("<img src='image/weatherRain.png'>");
            $('#weather-condition #city-title').html(y);
            $('#weather-condition #date').html(z);

            }
      else if (x == 'Snow'){
                 $(this).html("<img src='image/snow.png'>");
                 $('#weather-condition #city-title').html(y);
                 $('#weather-condition #date').html(z);
                 }

     })

     $('input:text').click(
               function(){
                   $(this).val('');
               });



    }
  }); //ajax
} else{
    $("#error").html('Field cannot be empty');
}

});//submitcity button

});

// AJAX weather


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


// picture hover

//  $('header h3').hover(function() {
//     $(this).css("font-size","50px");
//   }, function(){
//       $(this).css("font-size", "40px");
// });
//
//  $('.outdoor section img').hover(function() {
//     $(this).css("width","500px");
//   }, function(){
//       $(this).css("width", "400px");
// });
//
//  $('.travel section img').hover(function() {
//     $(this).css("width","500px");
//   }, function(){
//       $(this).css("width", "400px");
// });
// picture hover
