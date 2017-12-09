/*global $ APIKEY */
$(document).ready(function() {
	$.ajax({
		method: "GET",
		url: "https://www.rijksmuseum.nl/api/en/collection",
		data: {
            format: 'json',
			key: APIKEY,
			//p: "100",
			ps: "100",
			imgonly: "True",
			type: "painting",
			q: "Johannes vermeer"
		},
		success: function(data) {
				console.log(data);
				console.log('test');
				for (var i = 0; i < data.artObjects.length; i++) {
							var item = document.createElement("LI");
							var link = data.artObjects[i].links.web;
							item.innerHTML = '<a target="_blank" href= "' + link + '">' + data.artObjects[i].title + '</a>';
						//	var br = document.createElement("BR");
							document.getElementById("work").appendChild(item);
						//	document.getElementById("work").appendChild(br);
			}
		}
	});
});


