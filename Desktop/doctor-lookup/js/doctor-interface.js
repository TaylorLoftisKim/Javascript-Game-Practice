var apiKey = require('./../.env').apiKey;

$(document).ready(function() {
  $('#user-illness').click(function() {
    var city = $('#illness').val();
    $('#illness').val("");
    $('.showDoctor').text("The city you have chosen is " + city + ".");
    $.get('https://api.betterdoctor.com/2016-03-01/doctors?location=37.773%2C-122.413%2C100&user_location=' + city + '&appid=' + apiKey, function(response) {
      console.log(response);
    });
  });
});
