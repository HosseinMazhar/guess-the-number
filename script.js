function giverandom()
{
var randomones = Math.random()*10;
randomones = Math.round(randomones);
while(randomones>9)
{
    var randomones = Math.random()*10;
    randomones = Math.round(randomones);
}
console.log(randomones);

var randomtens = Math.random()*10;
randomtens = Math.round(randomtens);
while(randomtens>9)
{
    var randomtens = Math.random()*10;
    randomtens = Math.round(randomtens);
}
console.log(randomtens);

var randomhundreds = Math.random()*10;
randomhundreds = Math.round(randomhundreds);
while(randomhundreds>9)
{
    var randomhundreds = Math.random()*10;
    randomhundreds = Math.round(randomhundreds);
}
console.log(randomhundreds);

var randomthousands = Math.random()*10;
randomthousands = Math.round(randomthousands);
while(randomthousands>9)
{
    var randomthousands = Math.random()*10;
    randomthousands = Math.round(randomthousands);
}
console.log(randomthousands);
return [randomones,randomtens,randomhundreds,randomthousands];
}
var randomnumbers = giverandom();

var permission = false;
var ones = 0;
var onesscreen = document.getElementById('ones');
function increaseones()
{
    if(!permission)
    {
    ones++;
    if (ones>=10){
        ones = 0;
    }
    onesscreen.innerHTML = ones;
    return ones;
    }
}
function decreaseones()
{
    if(!permission)
    {
    ones--;
    if (ones<0)
    {
        ones = 9;
    }
    onesscreen.innerHTML = ones;
    return ones;
    }
}


var tens = 0;
var tensscreen = document.getElementById('tens');
function increasetens()
{
    if(!permission)
    {
    tens++;
    if (tens>=10){
        tens = 0;
    }
    tensscreen.innerHTML = tens;
    return tens;
    }
}
function decreasetens()
{
    if(!permission)
    {
    tens--;
    if (tens<0)
    {
        tens = 9;
    }
    tensscreen.innerHTML = tens;
    return tens;
    }
}


var hundreds = 0;
var hundredsscreen = document.getElementById('hundreds');
function increasehundreds()
{
    if(!permission)
    {
    hundreds++;
    if (hundreds>=10){
        hundreds = 0;
    }
    hundredsscreen.innerHTML = hundreds;
    return hundreds;
    }
}
function decreasehundreds()
{
    if(!permission)
    {
    hundreds--;
    if (hundreds<0)
    {
        hundreds = 9;
    }
    hundredsscreen.innerHTML = hundreds;
    return hundreds;
    }
}

var thousands = 0;
var thousandsscreen = document.getElementById('thousands');
function increasethousands()
{
    if(!permission)
    {
    thousands++;
    if (thousands>=10){
        thousands = 0;
    }
    thousandsscreen.innerHTML = thousands;
    return thousands;
    }
}
function decreasethousands()
{
    if(!permission)
    {
    thousands--;
    if (thousands<0)
    {
        thousands = 9;
    }
    thousandsscreen.innerHTML = thousands;
    return thousands;
    }
}


var guesscounter = 0;
var scoreboard = document.getElementById('scoreboard');
scoreboard.innerHTML = "guess the number";
var checkbutton = document.getElementById('check-button');
checkbutton.innerHTML= "check it out";

function checknumbers()
{
    guesscounter++;
    if(guesscounter==0){
    scoreboard.innerHTML = "guess the number";
    }else if(guesscounter==1){
    scoreboard.innerHTML = "you guess once";
    }else
    {
    scoreboard.innerHTML = "you guess" + " " + guesscounter + " " + "times";
    }

    if(ones==randomnumbers[0])
    {
        onesscreen.style.backgroundColor = "#019267";
    }
    if(ones>randomnumbers[0])
    {
        onesscreen.style.backgroundColor = "#5D8BF4";
        var downones = document.getElementById('decrease-ones');
        downones.style.animation ="";
        setTimeout(function(){
            downones.style.animation = 'flickeranimation 1s';
        },10)

    }
    if(ones<randomnumbers[0])
    {
        onesscreen.style.backgroundColor = "#FF1818";
        var upones = document.getElementById('increase-ones');
        upones.style.animation ="";
        setTimeout(function(){
            upones.style.animation = 'flickeranimation 1s';
        },10)
    }


    if(tens==randomnumbers[1])
    {
        tensscreen.style.backgroundColor = "#019267";
    }
    if(tens>randomnumbers[1])
    {
        tensscreen.style.backgroundColor = "#5D8BF4";
        var downtens = document.getElementById('decrease-tens');
        downtens.style.animation ="";
        setTimeout(function(){
            downtens.style.animation = 'flickeranimation 1s';
        },10)
    }
    if(tens<randomnumbers[1])
    {
        tensscreen.style.backgroundColor = "#FF1818";
        var uptens = document.getElementById('increase-tens');
        uptens.style.animation ="";
        setTimeout(function(){
            uptens.style.animation = 'flickeranimation 1s';
        },10)
    }


    if(hundreds==randomnumbers[2])
    {
        hundredsscreen.style.backgroundColor = "#019267";
    }
    if(hundreds>randomnumbers[2])
    {
        hundredsscreen.style.backgroundColor = "#5D8BF4";
        var downhundreds = document.getElementById('decrease-hundreds');
        downhundreds.style.animation ="";
        setTimeout(function(){
            downhundreds.style.animation = 'flickeranimation 1s';
        },10)
    }
    if(hundreds<randomnumbers[2])
    {
        hundredsscreen.style.backgroundColor = "#FF1818";
        var uphundreds = document.getElementById('increase-hundreds');
        uphundreds.style.animation ="";
        setTimeout(function(){
            uphundreds.style.animation = 'flickeranimation 1s';
        },10)
    }


    if(thousands==randomnumbers[3])
    {
        thousandsscreen.style.backgroundColor = "#019267";
    }
    if(thousands>randomnumbers[3])
    {
        thousandsscreen.style.backgroundColor = "#5D8BF4";
        var downthousands = document.getElementById('decrease-thousands');
        downthousands.style.animation ="";
        setTimeout(function(){
            downthousands.style.animation = 'flickeranimation 1s';
        },10)
    }
    if(thousands<randomnumbers[3])
    {
        thousandsscreen.style.backgroundColor = "#FF1818";
        var upthousands = document.getElementById('increase-thousands');
        upthousands.style.animation ="";
        setTimeout(function(){
            upthousands.style.animation = 'flickeranimation 1s';
        },10)
    }

    if(ones==randomnumbers[0] && tens==randomnumbers[1] && hundreds==randomnumbers[2] && thousands==randomnumbers[3])
    {
        permission = true;
        ones = 0;
        tens = 0;
        hundreds = 0;
        thousands = 0;

        if(guesscounter==1)
        {
        scoreboard.innerHTML = "you win with"+" "+guesscounter+" "+"try";
        }
        else
        {
        scoreboard.innerHTML = "you win with"+" "+guesscounter+" "+"tries";
        }
        var gameplay = false;
        checkbutton.innerHTML= "reset";
        checkbutton.addEventListener('click',function(){
            if (!gameplay){
            guesscounter=0;
            scoreboard.innerHTML = "guess the number";
            onesscreen.innerHTML = ones;
            onesscreen.style.backgroundColor = "#ECECEC";
            tensscreen.innerHTML = tens;
            tensscreen.style.backgroundColor = "#ECECEC";
            hundredsscreen.innerHTML = hundreds;
            hundredsscreen.style.backgroundColor = "#ECECEC";
            thousandsscreen.innerHTML = thousands;
            thousandsscreen.style.backgroundColor = "#ECECEC";
            checkbutton.innerHTML= "check it out";
            randomnumbers = null;
            randomnumbers = giverandom();
            gameplay = true;
            permission = false;
            }
        })
    }

}
