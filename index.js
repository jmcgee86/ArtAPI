/*global $ APIKEY */
$(document).ready(function() {
	$.ajax({
		method: "GET",
		url: "https://www.rijksmuseum.nl/api/en/collection",
		data: {
            format: 'jsonp',
			key: APIKEY,
			p: "10"
		},
		success: function(data) {
		 {
				console.log(data);
				console.log('test');
			}
		}
	});
});


