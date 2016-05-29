/*
This code was mostly written in order to fill the resume page 
much of the code was written ver batim or very close from the 
instructional videos. Some minor edits were made to replace 
my specific information and styling.
 */

var name = "Bret Wagner ";
var role = "Web Developer ";
var email = "bretwagner@bwagner-webdev.com ";
var mobile = "314-783-6696 ";
var github = "https://github.com/bmwags182 ";
var myLocation = "Greater St. Louis Area ";

var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);
var formattedEmail = HTMLemail.replace("%data%" , email);
var formattedMobile = HTMLmobile.replace("%data%", mobile);
var formattedGithub = HTMLgithub.replace("%data%", github);
var skills = ["HTML ", "CSS ", "javascript ", "Wordpress ", "Python ", "PHP ", ];

$("#header").prepend(formattedName);
$("#header").append(formattedRole);
$("#lets-connect").append(formattedEmail);
$("#header").append(skills);
$("#header").append(myLocation);
