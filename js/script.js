const API_KEY = "25bdbdbfdf48a3bc392b1a4a36db9dd3";

$(function(){
  $('#btn').on('click', function() {
    $.ajax({
      url: "http://api.openweathermap.org/data/2.5/weather?q=" + $('#cityname').val() + "&units=metric&appd=" + API_KEY,
      dataType : 'jsonp',
    }).done(function (data){
      $('#place').text(data.name);
      $('#temp_max').text(data.main.temp_max);
      $('#temp_min').text(data.main.temp_min);
      $('#humidity').text(data.main.humidity);
      $('#speed').text(data.wind.speed);
      $('#weather').text(data.weather[0].main);
      $('img').attr("src","http://openweathermap.org/img/w/" + data/weather[0].icon + ".png");
      $('img').attr("alt",data.weather[0].main);
    }).fail(function (data) {
      alert('通信に失敗しました。');
    });
  });
});