function myForm(e){
    var num1 = document.querySelector('#n7').value;
    var result4 = "The Volume Of Sphere is " + 4/3*3.14*parseInt(num1)*parseInt(num1)*parseInt(num1);
    alert(result4);
    //Now save this result in local storage so that we can access later
    localStorage.setItem('result4',result4);
    //A function may return something
    return false;
}