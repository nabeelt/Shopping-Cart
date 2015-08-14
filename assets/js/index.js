$(document).ready(function() {
	$("#login-submit").on("click" ,function(e){
		e.preventDefault();
		login();
	});
	$(".close").on("click",function(){
		$(".popup,.bk-overlay").fadeOut();
	});
	$("#sign-up").on("click",function(){
		$(".sign-up-popup,.bk-overlay").fadeIn();
	});	

	$("#signup-submit").on("click" ,function(e){
		e.preventDefault();
		signup();
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
        url: 'http://10.1.4.87:3000/login',
        type: 'POST',
        dataType:"json",
        data: data,
        error: function(response) {
            // $(".popup,.bk-overlay").fadeIn();
            // $("span.message").text(response.success);
            // callback.failure(XMLHttpRequest, textStatus);
        },
        success: function(response) {
            // $(".popup,.bk-overlay").fadeIn();
            // $("span.message").text(response.success);
        },
        complete: function(response) {
            // onEndAjaxRequest();
        }
    });
}

function signup(){
	var username = $("#username-signup").val(),
		password = $("#password-signup").val(),
		name = $("#name").val(),
		phone = $("#phone").val(),
		data = {
			"name" : name,
			"phone" : phone, 
			"username" : username,
			"password" : password
		};
	 $.ajax({
        url: 'http://10.1.4.87:3000/signup',
        type: 'POST',
        dataType:"json",
        data: data,
        error: function(response) {
            // callback.failure(XMLHttpRequest, textStatus);
            alert("error");
        },
        success: function(response) {
            // $(".popup,.bk-overlay").fadeIn();
            // $("span.message").text(response.success);
            alert(response);
        },
        complete: function(response) {
            // onEndAjaxRequest();
        }
    });
}