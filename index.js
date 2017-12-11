/*global $ APIKEY */
$(document).ready(function() {
	$("#source").submit(function(event) {
		event.preventDefault();
	$.ajax({
		method: "GET",
		url: "https://www.rijksmuseum.nl/api/en/collection",
		data: {
            format: 'json',
			key: APIKEY,
			ps: "5",
			imgonly: "True",
			type: "painting",
			q: document.getElementById("artist").value
		},
		success: function(data) {
				console.log(data);
				console.log('test');
				for (var i = 0; i < data.artObjects.length; i++) {
							var item = document.createElement("LI");
							var link = data.artObjects[i].links.web;
							item.innerHTML = '<a target="_blank" href= "' + link + '">' + data.artObjects[i].title + '</a>';
							document.getElementById("work").appendChild(item);
			}
		}
	});
});
});

