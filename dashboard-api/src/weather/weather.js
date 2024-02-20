// import { getWeather } from './weatherService';
const getWeather = require('./weatherService');

exports.handler = async(event) => {

	var response = {
		headers: {
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
			"Access-Control-Allow-Methods": "GET",
			'Content-Type': 'application/json',
		},
		statusCode: 500,
		body: JSON.stringify({
			message: "something went wrong",
			sucess: false,
		})
	};
	
	const weather = await getWeather();
	if(weather && !weather.error || !weather.Code){
		response.statusCode = 200;
		response.body= JSON.stringify({
			data: weather,
			message: "sucess",
			sucess: true,
		})
	}
	else{
		response.statusCode = weather.Code || 500;
		response.body = JSON.stringify({
			message: weather.Message || "something went wrong",
			sucess: false,
		});
	}
	
	return (response);
};
