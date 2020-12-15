

function ispassword(){
    var password = document.getElementById('password').value;
    if (password == 'Enter'){
        window.open(home.html);
    }else{
        alert('Incorrect');
    }
}