let result = document.getElementById('result');

function isString(value) {
	return typeof value === 'string' || value instanceof String;
}


function name_one_val(){
    let name_one = document.getElementById('name-one').value;

    //if No input or String input is given,
    if(name_one.length == 0)   
    {
        return false;
    }
    if(!name_one.match(/^[A-Za-z]/)){
        return false;
    }
    if(name_one.match(/^[A-Za-z]*\s*/)) //if input is a string
    {
        return true;
    } 
}
function name_two_val(){
    let name_two = document.getElementById('name-two').value;

    //if No input or String input is given,
    if(name_two.length == 0 || !name_two.match(/^[A-Za-z]/))   
    {
        return false;
    }
    if(name_two.match(/^[A-Za-z]*\s*/)) //if input is a string
    {
        return true;
    } 
}
function loveCalculate(){
    if(!name_one_val() || !name_two_val()){
        alert('Please enter valid names!!');
        return false;
    }
    var loveScore = Math.random() * 100;
    loveScore  = Math.floor(loveScore) + 1;
    if(loveScore <= 25){
        loveScore+=25;
    }
    result.innerHTML = "Love Score : " + loveScore + "%"; 
    return false;
}