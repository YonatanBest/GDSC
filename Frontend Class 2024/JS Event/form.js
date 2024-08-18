let Username = document.getElementById("username");
let Password = document.getElementById("password");
let Submit = document.getElementById("submit");
let Message = document.getElementById("message");
let Form = document.querySelector("form");
Submit.addEventListener("click", function(event) {
    event.preventDefault();
    Username.style.background = "";
    Password.style.background = "";
    if (Username.value != "" && Password.value != "") {
        Message.style.display = "block";
        Form.style.display = "none";
    } else {
        if (Username.value == "") {
            Username.style.background = "pink";
        }
        if (Password.value == "") {
            Password.style.background = "pink";
        }
    }
});
