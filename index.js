/*global $ APIKEY */
$(document).ready(function() {
	$("#source").submit(function(event) {
		event.preventDefault();
		document.getElementById("work").innerHTML = ""; //removes headlines from any previous selected sources
				if (document.getElementById("artist").value === "") {
			document.getElementById("work").innerHTML = "";
			alert("Please Choose an Artist");//alerts user to choose artist if none were selected
		} else {
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
							document.getElementById("chosenArtist").innerHTML = "by: " + document.getElementById("artist").value;
							document.getElementById("work").appendChild(item);
					
			}
		
				if (document.getElementById("artist").value == "Johannes Vermeer"){
								document.body.style.backgroundImage = "url('https://news.artnet.com/app/news-upload/2017/09/Vermeer-view-of-delft-1024x850.jpg')";
							}else if(document.getElementById("artist").value == "Rembrandt"){
								document.body.style.backgroundImage = "url('https://mosaicmagazine.com/wp-content/uploads/2016/06/Rembrandt-Main.jpg')";
							}
							else if(document.getElementById("artist").value == "Jan Havicksz Steen"){
									document.body.style.backgroundImage = "url('https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Jan_Havicksz._Steen_-_Het_vrolijke_huisgezin_-_Google_Art_Project.jpg/1540px-Jan_Havicksz._Steen_-_Het_vrolijke_huisgezin_-_Google_Art_Project.jpg')";
							}
							else if (document.getElementById("artist").value == "Peter Paul Rubens"){
								document.body.style.backgroundImage = "url('https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Peter_Paul_Rubens_-_The_Fall_of_Phaeton_%28National_Gallery_of_Art%29.jpg/1920px-Peter_Paul_Rubens_-_The_Fall_of_Phaeton_%28National_Gallery_of_Art%29.jpg')";
							}
		}
	
	});
		}
});
});