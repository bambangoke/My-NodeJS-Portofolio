var $contactForm = $('#contact-form');
$contactForm.submit(function(e) {
	e.preventDefault();
	$.ajax({
		url: '//formspree.io/louis.iaeger@yahoo.com',
		method: 'POST',
		data: $(this).serialize(),
		dataType: 'json',
		beforeSend: function() {
			$contactForm.append('<div class="emailStatus status-loading"><p>Sending message…</p></div>');
		},
		success: function(data) {
			$contactForm.find('.status-loading').hide();
			$contactForm.append('<div class="emailStatus status-success"><p>Message sent!</p></div>');
            $("#name").val('');
            $("#email").val('');
            $("#message").val('');
		},
		error: function(err) {
			$contactForm.find('.status-loading').hide();
			$contactForm.append('<div class="emailStatus status-error"><p>Woops, there was an error.</p></div>');
		}
	});
});