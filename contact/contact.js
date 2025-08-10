//add event listener to target button to give specific functionality
document.querySelector("button").addEventListener("click", function(event) {
    event.preventDefault();

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const nameRegex = /^[a-zA-Z]{2,12}$/;
    
    const subject = document.getElementById("subject").value;
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const comment = document.getElementById("comment").value;
    const checkbox = document.querySelector(".checkbox").checked;

    if (!subject) {
        alert("Please provide a subject for your inquiry.");
        return; 
        //return must be present for all, otherwise it will run through each alert, even the alert for submission completion
    }

    if (!name || !nameRegex.test(name)) {
        alert("Please provide your name (Must be more than 2 characters).");
        return;
    }

    if (!email || !emailRegex.test(email)) {
        alert("Please provide a valid email.");
        return;
    }

    if (!comment) {
        alert("Please leave a message.");
        return;
    }

    if (!checkbox) {
        alert("Please agree to the terms and services.");
        return;
    }

    //will display once all fields are inputted
    alert("Thank you! Someone from our team will reach out regarding your inquiry.");

    //autoclears input fields after last alert (submission completion) displays
    document.getElementById("subject").value = "";
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("comment").value = "";
    document.querySelector(".checkbox").checked = false; 
});