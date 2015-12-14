function search(){
	$("#effects").html('');
	var key = "7PcXD9iQU905xvCopWU8Nqkiy8GoiEnwpCQkcl5O"
	var searchTerm = document.getElementById("fdaSearch").value

	$.ajax({
	   	url: "https://api.fda.gov/drug/event.json?api_key="+ key + "&search=" + searchTerm+"&count=patient.reaction.reactionmeddrapt.exact",
	   	dataType: "json",
	   	success: function(data) {
	   		for(i=0;i<15;i++){
	    		var results = (data.results[i].term)
	    		$("#effects").append(results + " " + "<br>")
				console.log(data.results[i].term)
			}
	   	},
	   type: 'GET'
	});
}
