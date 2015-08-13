$(document).ready(function() {
	$("#login-submit").on("click" ,function(e){
		e.preventDefault();
		login();
	});
});

function login(){
	var username = $("#username").val(),
		password = $("#password").val(),
		data = {
			"username" : username,
			"password" : password
		};
	 $.ajax({
        url: 'http://10.1.4.87:3000/demo',
        type: 'GET',
        dataType:"json",
        data: data,
        error: function(response) {
            // callback.failure(XMLHttpRequest, textStatus);
        },
        success: function(response) {
            // callback.success(data, textStatus, flag);
            console.log(response);
        },
        complete: function(response) {
            // onEndAjaxRequest();
        }
    });
}
