$(document).ready(function(){
$('#submitCity').on('focus', function(){



    $.ajax({
    url:"https://api.openweathermap.org/data/2.5/forecast?q=" + 'olympia' + "&units=metric" + "&APPID=7e97ca944b6826492b669fe353f1ba73",
    type: "GET",
    dataType: "jsonp",
    success: function(data){
      const weather = show(data);
      $('#forecast').html(weather);
      }
    });

});//submitcity button
});// ready function



function show(data){
  const x = data.list[1].weather[0].main;

  if (x == 'Clouds'){
    $('#forecast').html("<img src='image/hiking.jfif'>");
    }
  else if(x == 'Clear'){
       $('#forecast').html("<img src='image/hiking.jfif'>");
       }
  else if(x == 'Rain'){
       $('#forecast').html("<img src='image/FlyingFishing.jpg'>");
        }
 else if (x == 'Snow'){
            $('#forecast').html("<img src='imageSnowHiking.jpg'>");
            }
};
