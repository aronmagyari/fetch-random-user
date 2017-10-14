
var url = 'https://randomuser.me/api/';
fetch(url)
	.then(handleErrors)
	.then(parseJSON)
	.then(updateProfile)
	.catch(printError)

	function handleErrors(req) {
		if (!req.ok) {
			throw Error("Error fetching request");
		}
		return req;
	}

	function parseJSON() {

	}

	function updateProfile() {

	}

	function printError(err) {
		console.log(err);
	}