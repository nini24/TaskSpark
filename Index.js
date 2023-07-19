var tasks = [{
    title: 'E-commerce Vendor Onboarding',
    description: 'Design an intuitive flow for vendors that want to create online stores on an E-commerce platform.'
}, {
    title:'New Payment Cards',
    description:'Design the process of adding new payment cards to a Fintech app.'
}, {
    title:'Spotify Merch Purchase',
    description:'Spotify adds a new update that lets users buy merch of their favourite artists. Design this integration. (Solving Product Design Exercises - Artiom Dashinsky)'
}, {
    title:'Digital Artist Portfolio',
    description:'An emerging digital artist reached out to you and would like a simple website to display their art. Design this website.'
},
{
    title:'Templates Design',
    description:'Design four different layouts for the newsletter section of a website homepage.'
},
{
    title:'HRM Dashboard',
    description:'Design an onboarding planner for 10 new members of staff.'
},
{
    title:'Two-Factor Authentication',
    description:'Design the process of enabling 2FA in a fintech application.'
},
{
    title:'Edu-tech Web-app',
    description:'Design the quiz section in an online learning website. This should include a view for listing the quiz questions, selecting answers and the quiz results.'
},
{
    title:'Twitter Cards',
    description:'Sharing your profile link on Twitter now displays as a card. Design this card that shows your profile picture, username, and bio.'
}


]

// (function(){
//     var taskButton = document.querySelector('#gettask')
//     var taskTitle = document.querySelector('.taskcard-title')
//     var taskDescription = document.querySelector('.taskcard-description')

//     newRandomTask(tasks, taskTitle, taskDescription)

//     taskButton.addEventListener('click',
//         function () {
//             newRandomTask(tasks, taskTitle, taskDescription)
//         })

//     function newRandomTask(taskArray, titleElement, descriptionElement) {
//         var newTask = taskArray[randomGen(0, taskArray.length - 1)]
//         titleElement.innerText = newTask.title
//         descriptionElement.innerText = newTask.description

//         function randomGen(min, max) {
//             return Math.floor(Math.random() * (max - min + 1)) + min
//         }
//     }
// })();

$(document).ready(function() {

    $(".taskcard-title").html(tasks[0].title);
    $(".taskcard-description").html(tasks[0].description);

    $("#gettask").on("click", function() {
        var taskID = Math.floor(Math.random() * (tasks.length))
        $(".taskcard-title").html(tasks[taskID].title);
        $(".taskcard-description").html(tasks[taskID].description)
    });
});


var modal = document.querySelector(".modal")

var modalbtn = document.querySelectorAll('.btn-open')

var modalclose = document.querySelector(".btn-close")

function toggleModal() {
    modal.classList.toggle("show-modal")
}

function windowOnclick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

for (var i = 0, len = modalbtn.length; i < len; i++) {
    modalbtn[i].addEventListener("click", toggleModal);
}

modalclose.addEventListener("click", toggleModal)
window.addEventListener("click", windowOnclick)


function sendEmail() {
    let name = document.getElementById("name").value;
    let description = document.getElementById("description").value;
    let finalmessage = `Name : ${name} <br>  Description : ${description} <br> `;
    Email.send({
        Host : "smtp.gmail.com",
        Username : "tamiloreakintelure@gmail.com",
        Password : "Ninilayowa24?",
        To : 'tamiloreakintelure@gmail.com',
        From : "you@isp.com",
        Subject : "New Design Task",
        Body : finalmessage
    }).then(
      description => alert(description)
    );
}