$('document').ready(function(){
	$('#contactForm').submit(function(e){
		var name = document.getElementById('name')
		var email = document.getElementById('email')
		var phone = document.getElementById('phone')
		var message = document.getElementById('message')

		if (!name.value || !email.value || !phone.value || !message.value) {
			alertify.error("Please ensure all fields are filled.");
			return false;
		} else {
			$.ajax({
				method: 'POST',
				url: '//formspree.io/dangeral11@yahoo.co.uk',
				data: $('#contactForm').serialize(),
				dataType: 'json'
			});
			e.preventDefault();
			$(this).get(0).reset();
		}
	});
});