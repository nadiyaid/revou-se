/////////////// Welcoming speech ///////////////  
// var nama = prompt("What's your name?");
// document.getElementById("nama").innerText = nama;

////////////// Get today date and time //////////////
var dt = new Date();
document.getElementById('dt').innerHTML=dt;

////////////// Form //////////////
function validateForm() {
    var name = document.forms["message-form"]["name"].value;
    var date = document.forms["message-form"]["date"].value;
    var gender = document.forms["message-form"]["gender"].value;
    var messages = document.forms["message-form"]["message"].value; 

    if (name == "" || date == "" || gender == "" || messages ==""){
        alert("Field cannot be empty!");
        return false;
    }
    document.getElementById("output-name").innerText = name;
    document.getElementById("output-date").innerText = date;
    document.getElementById("output-gender").innerText = gender;
    document.getElementById("output-message").innerText = messages;
    
    return false;
}
