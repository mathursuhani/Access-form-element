function mitForm(e){
    var num1 = document.querySelector('#n6').value;
    var result3 = "The Area Of Circle is " + 3.14*parseInt(num1)*parseInt(num1);
    alert(result3);
    //Now save this result in local storage so that we can access later
    localStorage.setItem('result3',result3);
    //A function may return something
    return false;
}