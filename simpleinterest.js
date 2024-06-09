function subForm(e){
    let number1 = document.getElementById('n3').value;
    var number2 = document.querySelector('#n4').value;
    var number3 = document.querySelector('#n5').value;
    let result2 = "Simple Interest is " + (parseInt(number1)*parseInt(number2)*parseInt(number3))/100;
    alert(result2);
    //Now save this result in local storage so that we can access later
    localStorage.setItem('result2',result2);
    //A function may return something
    return false;
}
    
