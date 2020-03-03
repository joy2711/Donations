$(document).ready(function() {
    $('#submit').click(function() {
        var Name = $('#Name').val();
        var Email = $('#Email').val();
        var Message = $('#Message');
        if (Name == '' || Email == '' || Message == '') {
            alert('fill in the form in the correct format!');
        } else {
            alert(' Hi ' + Name + ' We have received your message. Thank you for offering your help to the less fortunate.');
        }

    });
});