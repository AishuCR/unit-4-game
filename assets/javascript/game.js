

$(document).ready(function(){
    var RandomNumber1 = Math.floor(Math.random() * 100 +1)
    $('.computer_score').html(RandomNumber1);

    var number1=Math.floor(Math.random() * 25 + 1)
    var number2=Math.floor(Math.random() * 25 + 1)
    var number3=Math.floor(Math.random() * 25 + 1)
    var number4=Math.floor(Math.random() * 25 + 1)

var winning = 0;
var lossing = 0;
var total = 0;

$('.win').html(winning);
$('.loses').html(lossing);

});
