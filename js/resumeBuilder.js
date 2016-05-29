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
var welcome = "var problems == \"Motivation\"\;";
var selfie = "images/fry.jpg";

var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);
var formattedEmail = HTMLemail.replace("%data%" , email);
var formattedMobile = HTMLmobile.replace("%data%", mobile);
var formattedGithub = HTMLgithub.replace("%data%", github);
var welcomeMessage = HTMLwelcomeMsg.replace("%data%", welcome);
selfie = HTMLbioPic.replace("%data%", selfie);
var skills = ["HTML ", "CSS ", "javascript ", "Wordpress ", "Python ", "PHP ", ];

var bio = {
    "name":formattedName,
    "role": formattedRole,
    "github": formattedGithub,
    "email": formattedEmail,
    "photo": selfie, 
    "skills": skills,
    "welcome": welcomeMessage,
    "city" : "Arnold, MO",
    
};
var work = {
    "name" : HTMLworkEmployer.replace("%data%", "Drive Social Media"),
    "position" : HTMLworkTitle.replace("%data%","Web Developer"),
    "start" : HTMLworkStart.replace("%data%", "September 2015"),
    "location" : HTMLworkLocation.replace("%data%", "St. Louis, MO"),
    "time" : HTMLworkDates.replace("%data%", "September 2015 - Present"),
    "description" : HTMLworkDescription.replace("%data%", "Building wordpress sites from provided PSD, PNG, UXpin or other mockup format. Maintaining several different sites through multi-site plugin, keeping sites secure and up to date to maintain stability. Provide timely updates to customers on edit requests or new build updates. Maintain E-Commerce product lines as well as configure template files to streamline adding products down the line as well as training clients on how to make some updates on their own. Configure SEO meta tags for facebook, twitter, google, etc. integration. <br><br>Setup Multi-site woip phone system using cloud based web interface. Internal office networking and workstation setup and install. Office wide problem solver.   ")
};


$("#header").append(bio.welcome);
$("#header").prepend(bio.skills);
$("#header").prepend(bio.name + bio.role);
$("#header").prepend(bio.photo);

$("#footerContacts").append(bio.email);
$("#topContacts").prepend(bio.github);
$("#topContacts").append(bio.email);
$("#workExperience").append(HTMLworkStart);
$(".work-entry").append(work.name + work.position);
$(".work-entry").append(work.time);
$(".work-entry").append(work.location);
$(".work-entry").append(work.description);

