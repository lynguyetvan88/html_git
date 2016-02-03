$(document).ready(function() {
   
	$("#Send").click(function() {
		var full_name = $("#full_name").val();
                var address = $("#address").val();
                var title = $("#title").val();
                var content = $("#content").val();
		var email = $("#email").val();
                var re_email = $("#re_email").val();
		var phone = $("#phone").val();
		var captcha = $("#captcha").val();
		var email_regex = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
                var phone_regex = /^[0-9]+$/;
                var birth_regex = /^\d{1,2}\/\d{1,2}\/\d{4}$/;
		var data_string = 'full_name=' + full_name + '&address=' + address +'&title=' + title +'&content=' + content +'&email=' + email +'&re_email=' + re_email + '&phone=' + phone +   '&captcha=' + captcha; 
		$("#defaultForm").find('*').removeClass("warring");
       
       if(full_name == "") {
           $("#full_name").addClass("warring");
           $("#full_name").focus();
           return false;
        } 
         if(!email_regex.test(email) || email == "") {
          $("#email").addClass("warring");
           $("#email").focus();
           return false;
        }
        
         if(!phone_regex.test(phone)|| phone == "") {
              $("#phone").addClass("warring");
           $("#phone").focus();
           return false;
        }
        if(address == "") {
           $("#address").addClass("warring");
           $("#address").focus();
           return false;
        }
        
        if(content == "") {
           $("#content").addClass("warring");
           $("#content").focus();
           return false;
        }
       
       

        

       
       if(captcha == "") {
          $("#captcha").addClass("warring");
           $("#captcha").focus()
           return false;
        }

        

       

	});

	function clear_form() {
        $("#name").val('');
		 $("#phone").val('');
        $("#email").val('');
        
        $("#subject").val('');
        $("#content").val('');
        $("#captcha").val('');
    }

    $("#load_captcha").click(function() {
        change_captcha();
    });

    function change_captcha() {
        document.getElementById('img_captcha').src="captcha.php?rnd=" + Math.random();
    }
});