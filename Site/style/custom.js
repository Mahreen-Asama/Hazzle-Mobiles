//-------------Careers page js----------------------- 

//first,last name


//
$(document).ready(function(){
    $('country').onchange(function(){
        alert('cntry change')
    })
})



function SubmitForm() {
    //alert('hkl')
    //show form data on page, when form is submitted.

    //display profile picture
    var file = document.getElementById('picture').files[0];
    var reader  = new FileReader();
    // it's onload event
    reader.onload = function(e)  {
        var src = document.createAttribute("src");
        // the result image data
        src.value = e.target.result;
        //set attribute
        var image=document.getElementById('dp');
        image.setAttributeNode(src);
     }
     // you have to declare the file loading
     reader.readAsDataURL(file);



    //rest data
    document.getElementById('career-table').style.display="block";

    var fname=document.getElementById('fname').value;
    document.getElementById('th-fname').innerHTML=fname;

    var lname=document.getElementById('lname').value;
    document.getElementById('th-lname').innerHTML=lname;

    var email=document.getElementById('email').value;
    document.getElementById('td-email').innerHTML=email;

    var pass=document.getElementById('pass').value;
    document.getElementById('td-pass').innerHTML=pass;

    var country=document.getElementById('country').value;
    document.getElementById('td-country').innerHTML=country;

    var code=document.getElementById('code').value;
    var phone=document.getElementById('phone').value;
    document.getElementById('td-phone').innerHTML=code +" "+phone;

    //get radio btn elements by name
    var gender=document.getElementsByName('gender');
    for(let g of gender){
        if(g.checked){
            document.getElementById('td-gender').innerHTML = g.value;
        }
    }

    var dob=document.getElementById('date').value;
    document.getElementById('td-dob').innerHTML=dob;

    //subjects list
    var subjects=document.getElementsByName('subject');
    let str='';
    for(let s of subjects){
        if(s.checked){
            str += s.id + ", ";
        }
    }
    document.getElementById('td-subjects').innerHTML=str;

    var message=document.getElementById('message').value;
    document.getElementById('td-message').innerHTML=message;

    
}