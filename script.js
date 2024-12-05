// get references to the form and display area
var form = document.getElementById('resume-form');
var resumedisplayElement = document.getElementById('resume-display');
//Handle form submission//
form.addEventListener('submit', function (event) {
    event.preventDefault(); //prevent page reload
    //collect input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    //generate the resume content dynamically
    var resumeHTML = "\n    <h2><b>Editable Resume</b></h2>\n\n    <h3>Personal Information</h3>\n\n    <p><b>Name:</b><span contenteditable=\"true\">".concat(name, "</span></p>\n    <p><b>email:</b><span contenteditable=\"true\">").concat(email, "</span></p>\n    <p><b>phone:</b><span contenteditable=\"true\">").concat(phone, "</span></p>\n    \n    <h3>Education</h3>\n    <p contenteditable=\"true\">").concat(education, "</p>\n\n    <h3>Experience</h3>\n    <p contenteditable=\"true\">").concat(experience, "</p>\n\n    <h3>skills</h3>\n    <p contenteditable=\"true\">").concat(skills, "</p>\n    ");
    //diplay the generted resume
    if (resumedisplayElement) {
        resumedisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('The Resume Display element is missing.');
    }
});
