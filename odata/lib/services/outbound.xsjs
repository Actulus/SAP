var searchTerm = $.request.parameters.get("searchTerm");

function getRecord() {
	var dest = $.net.http.readDestination("CONGRESS_LIB");
	var client = new $.net.http.Client();
	var req = new $.web.WebRequest($.net.http.GET,
		"/pictures/search/?fo=json&q=" + searchTerm);
	client.request(req, dest);
	var response = client.getResponse();
	var body = response.body.asString();
	return JSON.parse(body).results;
}
$.response.contentType = "application/json";
var output = getRecord();
$.response.setBody(output);