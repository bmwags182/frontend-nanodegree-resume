/*
This code was mostly written in order to fill the resume page 
much of the code was written ver batim or very close from the 
instructional videos. Some minor edits were made to replace 
my specific information and styling.
 */

var bio = {
    "name" : "Bret Wagner",
    "title" : "Web Developer",
    "contacts" : {
        "email" : "bretwagner@bwagner-webdev.com",
        "mobile" : "314-783-6696",
        "github" : "bmwags182",
        "location" : "St. Louis",
    },
    "welcomeMessage" : "Constantly Solving Problems",
    "skills" : ["HTML","CSS","Python","PHP","Javascript","Wordpress","Ubuntu"],
    "bioPic" : "images/fry.jpg"
};
var education = {
    "schools" : [
        {
            "name" : "Rockwood Summit High School",
            "location" : "Fenton, MO",
            "time" : "4 Years - Graduated 2007",
            "degree" : "Diploma"
        },
        {
            "name" : "University of Missouri Rolla",
            "location" : "Rolla, MO",
            "time" : "1 Semester",
            "degree" : "",
        },
        {
            "name" : "ComputerTraining.com",
            "location" : "St .Louis, MO",
            "time" : "6 Months - Graduated 2010",
            "degree" : "MCTS - Vista",
        }
    ],
    "online" : [
        {
            "title" : "Udacity",
            "time" : "September 2015 to Present",
            "url" : "http://udacity.com",
            "course" : "Fullstack Nanodegree",
        },
    ],
};
var workHist = {
    "jobs" : [
        {
            "name" : "Drive Social Media",
            "position" : "Web Developer",
            "location" : "St. Louis, MO",
            "time" : "September 2015 to Present",
            "description" : "Building wordpress sites from provided PSD, PNG, UXpin or other mockup format. Maintaining several different sites through multi-site plugin, keeping sites secure and up to date to maintain stability. Provide timely updates to customers on edit requests or new build updates. Maintain E-Commerce product lines as well as configure template files to streamline adding products down the line as well as training clients on how to make some updates on their own. Configure SEO meta tags for facebook, twitter, google, etc. integration. <br><br>Setup Multi-site voip phone system using cloud based web interface. Internal office networking and workstation setup and install as well as user management for the online web portal. This has included installing and configuring new phones for new employees, setting up a forwarding system for holidays or other out of office days, setting up call forwarding on a per user basis as well as voicemail. Office wide problem solver."
        },
        {
            "name" : "Walgreen's",
            "position" : "Shift Lead",
            "location" : "Arnold, MO",
            "time" : "September 2013 to August 2015",
            "description" : "Wide range of duties everything in the store from running the cash register, counting money, closing out the drawer at the end of the shift, counting the safe. To floor duties like stocking shelves, inventory management, backstock management, price checking/changing. And even some pharmacy duties like filling prescriptions, and ensuring that customers got their prescriptions correctly and on time. And other management duties like handling customer complaints, running price checks for cashiers, and providing customer service on the sales floor."
        },
        {
            "name" : "T-Mobile",
            "position" : "Seasonal Retail Sales Associate",
            "time" : "October 2010 to December 2010",
            "location" : "Manchester, MO",
            "description" : "My main role here was to sell sell sell. I worked in a mall location so there were constantly customers in the store, my job was to turn every one of them into a sale. I went into the job knowing a good deal about phones and knew that I would have no problem earning some extra holiday cash. It was an excellent position for me as I got to work on translating the technical jargon that I know about the devices into unsable benefits to the customer. I learned a great deal about what the average end user really knows and how they thing from being in this position and it has led me down my carreer path."
        },
        {
            "name" : "Burger King",
            "position" : "Assistant Manager",
            "time" : "October 2006 to May 2013",
            "location" : ["Fenton", "Rolla", "St. Louis", "Arnold"],
            "description" : "My position at Burger King started with me in the drive through. I quickly proved that I was able to handle the fast paced atmosphere and accomplish multiple tasks at the same time and was soon trained on each position in the restaurant though my favorite remained the drive through for a while. After a few months I was promoted to Assistant manager where my duties escalated to managing the money at the end of the night, making sure the store was clean and ready for the crew in the morning, and handling customer complaints. My favorite spot in the store as a manager was the expeditor, I was able to keep track of the orders mostly mentally and and it made it extremely easy for me to remember where each meal went."
        },
        {
            "name" : "Jeff Computers",
            "location" : "Manchester, MO",
            "position" : "Hardware Computer Technician",
            "time" : "May 2010 to October 2010",
            "description" : "I spent a summer working in a computer shop where I specialized in hardware diagnostics and replacement though my skills overlapped into a lot of the software side. I spent a good deal of time finding and removing viruses, to the point that sometimes I was able to remove some that the anti-virus programs weren't able to get. My favorite thing to do when we had down time was to setup andbox systems and infect them with some of the viruses customers brought in, it was intersting to see what each one tried to do, and it was one of the things that got me interested in programming. If people are able to take their genious and write this malicious code that does some of the amazing things I have seen viruses do, imagine the world we would live in if they, instead, used that genious towards writing something good."
        },
    ]
};
var projects = {
    "current" : [
        {
            "name" : "Python Scripts",
            "time" : "July 2015 to Present",
            "image" : "images/fry.jpg",
            "description" : "Sometimes the simplest most mundae things can be solved with a few lines of python, or you can automate some of your daily tasks. Within my python files repo on github you'll find a few of my scripts I've written to solve some of my daily tasks, and even one which runs in the background to alert me if my external IP changes. Some of my python projects were written simply for fun, and others were written to solve a particular problem. My motivation in everything I do has been solving problems."
        },
        {
            "name" : "Portfolio",
            "time" : "April 2016 to Present",
            "image" : "images/fry.jpg",
            "description" : "You're actually in this project now. This whole site is my project. The home page at <a href=\"http://bwagner-webdev.com\">bwagner-webdev.com</a> was built at first as a project for my Udacity Fullstack Web Developer course, but quickly evolved as a way to show off all my work.",
        },
    ]
}

$("#header").prepend(HTMLheaderRole.replace("%data%",bio.title));
$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
$("#header").prepend(HTMLbioPic.replace("%data%", bio.bioPic));
/* if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    var skill = HTMLskills.replace("%data%", bio.skills[0]);
    $("#header").append(skill);
    skill = HTMLskills.replace("%data%", bio.skills[1]);
    $("#header").append(skill);
    skill = HTMLskills.replace("%data%", bio.skills[2]);
    $("#header").append(skill);
    skill = HTMLskills.replace("%data%", bio.skills[3]);
    $("#header").append(skill);
    skill = HTMLskills.replace("%data%", bio.skills[4]);
    $("#header").append(skill);
    skill = HTMLskills.replace("%data%", bio.skills[5]);
    $("#header").append(skill);
    skill = HTMLskills.replace("%data%", bio.skills[6]);
    $("#header").append(skill);
}
else {
    console.log("false");
}; */
var skills = 0;
if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    /*
    while (skills < bio.skills.length) {
        // console.log("enter loop");
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[skills]);
        $("#header").append(formattedSkill);
        skills = skills + 1;
    };
    */
    var formattedSkills = HTMLskills.replace("%data%" , bio.skills);
    $("#header").append(formattedSkills);
    
    // console.log("exit loop");
    
};
for (job in workHist.jobs) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", workHist.jobs[job].name);
        var formattedTitle = HTMLworkTitle.replace("%data%",workHist.jobs[job].position);
        var formattedPosition = formattedEmployer + formattedTitle;
        var formattedDates = HTMLworkDates.replace("%data%", workHist.jobs[job].time);
        var formattedLocation = HTMLworkLocation.replace("%data%", workHist.jobs[job].location);
        var formattedDescription = HTMLworkDescription.replace("%data%", workHist.jobs[job].description);
        $(".work-entry:last").append(formattedPosition);
        $(".work-entry:last").append(formattedDates);
        $(".work-entry:last").append(formattedLocation);
        $(".work-entry:last").append(formattedDescription);
        
    };
var project;
for (project in projects.current) {
    $("#projects").append(HTMLprojectStart);
    var projectName = HTMLprojectTitle.replace("%data%", projects.current[project].name);
    var projectTime = HTMLprojectDates.replace("%data%", projects.current[project].time);
    var projectDescription = HTMLprojectDescription.replace("%data%", projects.current[project].description);
    var projectImage = HTMLprojectImage.replace("%data%", projects.current[project].image);
    $(".project-entry:last").append(projectName);
    $(".project-entry:last").append(projectTime);
    $(".project-entry:last").append(projectDescription);
    $(".project-entry:last").prepend(projectImage);
};

var school;
var course;
for (school in education.schools) {
    $("#education").append(HTMLschoolStart);
    var schoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
    var schoolDates = HTMLschoolDates.replace("%data%", education.schools[school].time);
    var schoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
    var schoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
    $(".education-entry:last").append(schoolName);
    $(".education-entry:last").append(schoolDates);
    $(".education-entry:last").append(schoolLocation);
    $(".education-entry:last").append(schoolDegree);
};
if (education.online.length > 0) {
    $("#education").append(HTMLonlineClasses);
    for (course in education.online) {
        $("#education").append(HTMLschoolStart);
        var onlineName = HTMLonlineTitle.replace("%data%", education.online[course].course);
        var onlineSchool = HTMLonlineSchool.replace("%data%", education.online[course].title);
        var onlineTime = HTMLonlineDates.replace("%data%", education.online[course].time);
        var onlineURL = HTMLonlineURL.replace("%data%", education.online[course].url);
        var schoolName = onlineName + onlineSchool;
        $(".education-entry:last").append(schoolName);
        $(".education-entry:last").append(onlineTime);
        $(".education-entry:last").append(onlineURL);
    };
}