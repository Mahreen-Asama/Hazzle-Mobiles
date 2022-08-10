
$(document).ready(function(){
    alert('helo');
    $('#fname').onblur(function(){
        document.getElementById('name-error-msg').style.color="blue";
        document.getElementById('name-error-msg').innerHTML="Seem Correct";
    })
    $('#country').onchange(function(){
        alert('cntry change')
    })
})