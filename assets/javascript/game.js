

$(document).ready(function(){
    var RandomNumber = Math.floor(Math.random() * 100 +1);
    $('#computer_score').text(RandomNumber);

    var number1=Math.floor(Math.random() * 10 + 1);
    var number2=Math.floor(Math.random() * 10 + 1);
    var number3=Math.floor(Math.random() * 10 + 1);
    var number4=Math.floor(Math.random() * 10 + 1);

var winning = 0;
var lossing = 0;
var total = 0;

$('#wins').text(winning);
$('#loses').text(lossing);



function reset(){
    RandomNumber = Math.floor(Math.random() * 100 +1);
    console.log(RandomNumber);
    $('#computer_score').html(RandomNumber);

    var number1=Math.floor(Math.random() * 10 + 1);
    var number2=Math.floor(Math.random() * 10 + 1);
    var number3=Math.floor(Math.random() * 10 + 1);
    var number4=Math.floor(Math.random() * 10 + 1);
    total =0;
    $('#your_score').text(total);
}

function wincount(){
    winning++;
    $('#wins').text(winning);
    reset();
}
function losescount(){
    lossing++;
    $('#loses').text(lossing);
    reset();
}
$('#image1').on('click', function(){
    total = total + number1;
    console.log("New total= " + total);
    $('#your_score').text(total);

    if(total == RandomNumber){
        wincount();
    }
    else if(total > RandomNumber){
        losescount();
    }

});
   

$('#image2').on('click', function(){
    total = total + number2;
    console.log("New total= " + total);
    $('#your_score').text(total);

    if(total == RandomNumber){
        wincount();
    }
    else if(total > RandomNumber){
        losescount();
    }
});   
    $('#image3').on('click', function(){
        total = total + number3;
        console.log("New total= " + total);
        $('#your_score').text(total);
    
        if(total == RandomNumber){
            wincount();
        }
        else if(total > RandomNumber){
            losescount();
        }
    });
    $('#image4').on('click', function(){
        total = total + number4;
        console.log("New total= " + total);
        $('#your_score').text(total);
    
        if(total == RandomNumber){
            wincount();
        }
        else if(total > RandomNumber){
            losescount();
        }
    });


});
