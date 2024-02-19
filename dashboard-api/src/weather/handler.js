

exports.handler = async(event) => {

	var response = {
		headers: {
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
			"Access-Control-Allow-Methods": "GET"
		},
		statusCode: 500,
		body: "something went wrong",
	};
	
	response = {
		statusCode: 200,
		body: "this was successful"
	}

	return (response);
};