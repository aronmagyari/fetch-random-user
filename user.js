
var url = 'https://randomuser.me/api/';

document.getElementById('btn').onclick = function() {
	fetch(url)
		.then(handleErrors)
		.then(parseJSON)
		.then(updateProfile)
		.catch(printError)	
}

	function handleErrors(res) {
		if (!res.ok) {
			throw Error("Oops! An error happened");
		}
		return res.json();
	}

	function parseJSON(data) {
		return data.results[0];
	}

	function updateProfile(user) {
		console.log(user);
		document.getElementById('avatar').src = user.picture.medium;
		document.getElementById('fullname').innerHTML = user.name.first + " " + user.name.last;
		document.getElementById('username').innerHTML = user.login.username;
		document.getElementById('email').innerHTML = user.email;
		document.getElementById('city').innerHTML = user.location.city;
		
		return user;
	}

	function printError(err) {
		console.log(err);
	}