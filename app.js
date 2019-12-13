var basla = document.getElementById('basla');
var sifreniUnutdum = document.getElementById('sifreniUnutdum');

// basla.addEventListener('click', function() {
//     var netice = document.getElementById('netice');
//     var input = prompt('Zəhmət olmasa, Adınızı və Soyadınızı qeyd edin', 'Agshin Rajabov');
//     netice.innerHTML = 'Xoş Gəlmisiniz, ' + input;
// });

sifreniUnutdum.addEventListener('click', function() {
    var email = document.getElementById('email').value;
    var netice = document.getElementById('netice');
    if(email == '') {
        alert('Email bosdur!')
    } else {
        let input = prompt('Emailinizi təsdiqləyirsinizmi?', email);
        if(input != null) {
            netice.innerHTML = "Yeni Şifrəniz: 81294789jahsfhty17";
        }
    }

});