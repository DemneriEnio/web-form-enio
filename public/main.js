$("document").ready(function() {

	$(".btn-success").on("click", function() {
		$.ajax({
			url: "/",
			type: "POST",
			dataType: "json",
			data: {
				name: $("#name").val(),
				lastname: $("#lastname").val(),
				email: $("#email").val(),
				age: $("#age").val(),
				gender: $("#gender").val()
			},
			success: function(data) {
					console.log("Success");
					var msg = JSON.stringify(data.message).split("");
					msg.pop();
					msg.shift();
					$("#message").html(msg.join(""));
			}
		});
	});
	
	$(".btn-primary").on('click', function() {
		$.ajax({
			url: '/find',
			type: 'POST',
			dataType: 'json',
			data: {
				name: $('#find_name').val()
			},
			success: function(data) {
				$('#person').html('Name: ' + data.name + 
								  '<br>LastName: ' + data.lastname +
								  '<br>Email: ' + data.email +
								  '<br>Age: ' + data.age + 
								  '<br>Gender: ' + data.gender);
			}
			
		});
	});
	});