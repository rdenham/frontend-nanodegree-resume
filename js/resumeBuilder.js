/*
This is empty on purpose! Your code to build the resume will go here.
 */
$("#main").append("Robert Denham");


var email = "rjadenham@work.com"
var newEmail = email.replace("work", "gmail");
var name = "Robert Denham";
var role = "Data Scientist";
var awesomeThoughts = "I am Robert and I am AWESOME";
var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");

var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var name1 = "audacity";

// or could be like

var udacityizer = function(s) {
	s = "U" + s.slice(2);
	return s;
}

console.log(udacityizer(name1));


var skills = ["awesomeness", "programming", "teching", "JS"];
$("#main").append(skills.length);
