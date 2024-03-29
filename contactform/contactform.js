$(function () {

    // init the validator
    // validator files are included in the download package
    // otherwise download from http://1000hz.github.io/bootstrap-validator

    // $('#contact-form').validator();

    window.addEventListener('load', (event) => {
        grecaptcha.ready(function () {
            grecaptcha.execute('6Lfv97AZAAAAADPEzmlwpehcmERSSwnrB-PNpuTn', { action: 'contact' }).then(function (token) {
                var recaptchaResponse = document.getElementById('recaptchaResponse');
                recaptchaResponse.value = token;
            });
        });
    });



    // when the form is submitted
    $('#contact-form').on('submit', function (e) {
        console.log('form submited');

        $( "#submit" ).addClass( "onclick", 1000);
     
        e.preventDefault();


        var url = "contactform/contactform.php";

        // POST values in the background the the script URL
        $.ajax({
            type: "POST",
            url: url,
            data: $(this).serialize(),
            success: function (data)
            {
                // data = JSON object that contact.php returns

                // we recieve the type of the message: success x danger and apply it to the 
                var messageAlert = 'alert-' + data.type;
                var messageText = data.message;

                // let's compose Bootstrap alert box HTML
                var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
                
                // If we have messageAlert and messageText
                if (messageAlert && messageText) {
                    // inject the alert to .messages div in our form
                    // $('#contact-form').find('.messages').html(alertBox);
                    document.getElementById("messages").innerHTML = alertBox;
                    // alert(alertBox);

                    // empty the form
                    if(data.type == 'success'){
                        console.log('it was a success');
                        $('#contact-form')[0].reset();

                        $( "#submit" ).removeClass( "onclick" );
                        $( "#submit" ).addClass( "done", 450, callbacksubmit() );
                    }
                    else{
                        $( "#submit" ).removeClass( "onclick" );
                        $( "#submit" ).addClass( "fail", 450, callbacksubmit() );   
                    }
                }
            },
            error: function (jqXHR, exception) {
                var errorText = '';
                if (jqXHR.status === 0) {
                    errorText = 'Failed to Connect.\n Please verify your network connection and try again.';
                } else if (jqXHR.status == 404) {
                    errorText = 'Requested page not found. [404]';
                } else if (jqXHR.status == 500) {
                    errorText = 'Internal Server Error [500].';
                } else if (exception === 'parsererror') {
                    errorText = 'Requested JSON parse failed.';
                } else if (exception === 'timeout') {
                    errorText = 'Time out error.';
                } else if (exception === 'abort') {
                    errorText = 'Ajax request aborted.';
                } else {
                    errorText = 'Uncaught Error. \n' + jqXHR.responseText;
                }
                // let's compose Bootstrap alert box HTML
                var alertBox = '<div class="alert alert-danger alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + errorText + '</div>';
                $( "#submit" ).removeClass( "onclick" );
                $( "#submit" ).addClass( "fail", 450, callbacksubmit() ); 
                document.getElementById("messages").innerHTML = alertBox;
                
            },
        });
        return false;
    
    })
});


function callbacksubmit() {
    setTimeout(function() {
        $( "#submit" ).removeClass( "done" );
        $( "#submit" ).removeClass( "fail" );
    }, 1500 );
}
