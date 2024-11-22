const url = 'https://weather-api167.p.rapidapi.com/api/weather/forecast?lon=-0.1278&lat=51.5074&place=London&zip=94040%2CUS&cnt=3&units=K&type=three_hour&mode=json&lang=en';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'Sign Up for Key',
		'x-rapidapi-host': 'weather-api167.p.rapidapi.com',
		Accept: 'application/json'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}