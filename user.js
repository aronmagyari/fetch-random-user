
var url = 'https://randomuser.me/api/';


var btn = document.querySelector('#btn');
btn.addEventListener('click', function() {
	fetch(url)
		.then(handleErrors)
		.then(parseJSON)
		.then(updateProfile)
		.catch(printError);
});


	function handleErrors(res) {
		if (!res.ok) {
			throw Error(res.status);
		}
		return res;
	}

	function parseJSON(res) {
		return res.json().then(function(data) {
			return data.results[0];	
		})
	}

	function updateProfile(user) {
		document.getElementById('avatar').src = user.picture.medium;
		document.getElementById('fullname').innerHTML = user.name.first + " " + user.name.last;
		document.getElementById('username').innerHTML = user.login.username;
		document.getElementById('email').innerHTML = user.email;
		document.getElementById('city').innerHTML = user.location.city;
	}

	function printError(err) {
		console.log("An error happened. Status code: " + err);
	}