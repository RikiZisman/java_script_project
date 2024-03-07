
function saveMeetingDecision() {
    var day = document.getElementById('day').value;
    var time = document.getElementById('time').value;
    var date = document.getElementById('date').value;

    // Save the meeting decision to local storage
    localStorage.setItem('meetingDay', day);
    localStorage.setItem('meetingTime', time);
    localStorage.setItem('meetingDate', date);

    // Retrieve the saved data from local storage
    var firstName = localStorage.getItem('firstname');
    var lastName = localStorage.getItem('lastname');
    var email = localStorage.getItem('email');
    window.addEventListener('DOMContentLoaded', function() {
        document.getElementById('greeting').innerHTML = 'Hello ' + firstName + ' ' + lastName + '!';
    });
    // Create the alert message with the retrieved data
    var alertMessage = 'Meeting scheduled successfully!\n\n';
    alertMessage += 'Date: ' + date + '\n';
    alertMessage += 'Time: ' + time + '\n';
    alertMessage += 'Day: ' + day;

    alert(alertMessage);
}


  

