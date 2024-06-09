function submitForm(e){
    let number1 = document.getElementById('n1').value;
    var number2 = document.querySelector('#n2').value;
    let result = "The Area Of Triangle is " + 1/2 * parseInt(number1) * parseInt(number2);
    alert(result);
    //Now save this result in local storage so that we can access later
    localStorage.setItem('result',result);
    //A function may return something
    return false;
}