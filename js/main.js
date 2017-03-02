// function and event listener that will return data to user
function bookSearch() {
	var search = document.getElementById('search').value
	document.getElementById('results1').innerHTML = ""
	document.getElementById('results2').innerHTML = ""
	document.getElementById('results3').innerHTML = ""
	document.getElementById('results4').innerHTML = ""
	console.log(search);

	// AJAX call for the API data
	$.ajax({
		url: "https://www.googleapis.com/books/v1/volumes?q= " + search,
		dataType: "json",
		success: function(data) {
			var results = document.getElementById('results1');
			var results2 = document.getElementById('results2');
			var results3 = document.getElementById('results3');
			var results4 = document.getElementById('results4');
			// loop through JSON data and display 4 results to user
			for(var i = 0; i <= 0; i++) {
				results.innerHTML += "<h2>" + data.items[0].volumeInfo.title + "</h2>";
				results.innerHTML += "<h4>" + data.items[0].volumeInfo.authors + "</h4>";
				results.innerHTML += "<p>Average rating: " + data.items[0].volumeInfo.averageRating + "</p>";
				results.innerHTML += "<p>" + data.items[0].searchInfo.textSnippet + "</p>";
				results2.innerHTML += "<h2>" + data.items[1].volumeInfo.title + "</h2>";
				results2.innerHTML += "<h4>" + data.items[1].volumeInfo.authors + "</h4>";
				results2.innerHTML += "<p>Average rating: " + data.items[1].volumeInfo.averageRating + "</p>";
				results2.innerHTML += "<p>" + data.items[1].searchInfo.textSnippet + "</p>";
				results3.innerHTML += "<h2>" + data.items[2].volumeInfo.title + "</h2>";
				results3.innerHTML += "<h4>" + data.items[2].volumeInfo.authors + "</h4>";
				results3.innerHTML += "<p>Average rating: " + data.items[2].volumeInfo.averageRating + "</p>";
				results3.innerHTML += "<p>" + data.items[2].searchInfo.textSnippet + "</p>";
				results4.innerHTML += "<h2>" + data.items[3].volumeInfo.title + "</h2>";
				results4.innerHTML += "<h4>" + data.items[3].volumeInfo.authors + "</h4>";
				results4.innerHTML += "<p>Average rating: " + data.items[3].volumeInfo.averageRating + "</p>";
				results4.innerHTML += "<p>" + data.items[3].searchInfo.textSnippet + "</p>";

			} 
			
		},
		type: 'GET'
	});
}

// event listener for when button is clicked
document.getElementById('button').addEventListener('click', bookSearch, false);