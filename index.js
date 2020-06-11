let request = require('request');
let apikey = 'e07fc2268692b7324b565c652e20723f';
let city = 'San Ramon';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;
console.log("URL: ", url);


request(url, function (err, response, body){
	if(err){
		console.log('error: ', error);
	}
	else{
		console.log('body: ', body);
		let weather_data = JSON.parse(body);
		console.log("Weather Data: ", weather_data);
		let message = `It's ${weather_data.main.temp} degrees Celcius in ${weather_data.name}!`;
		console.log(message);
	}
});
