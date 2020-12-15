var percentage = 0; 

function tell_percentage(value,len) {
    if(len<6) {
        percentage = 0;
        $(".progress-bar").css("background","#ff6666");
    }
    else if(len<8) {
        percentage = 20;
        $(".progress-bar").css("background","#ffff1a");
    }
    else if(len<10) {
        percentage = 40;
        $(".progress-bar").css("background","#ffad33");
    }
    else {
        percentage = 60;
        $(".progress-bar").css("background","#00cc00");
    }

    if( ( value.match(/[a-z]/) != null ) ) {
        percentage += 10;
    }
    if( ( value.match(/[A-Z]/) != null ) ) {
        percentage += 10;
    }
    if( ( value.match(/[0-9]/) != null ) ) {
        percentage += 10;
    }
    if( ( value.match(/\W/) != null ) && ( value.match(/\D/) != null ) ) {
        percentage += 10;
    }

    $(".progress-bar").css("width", percentage + "%");
}

$(document).ready(function() {
    $("#password").keyup(function() {
        var value = $(this).val();
        var len = value.length;
        tell_percentage(value,len);
    });
});