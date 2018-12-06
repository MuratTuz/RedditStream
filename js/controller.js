


/**
 * Eventlistener for New User button on the header of index.html
 * This function ensures username and password info correctly 
 * to be entered. However it adds the info to the localStorage and
 * SelectionUser button on the header in the index.html
 */
$(function(){

    $('#new-user-button').on('click', () => {
        let user = $('#username').val();
        let password = $('#password').val();

        let uservalidation = userValidate(user, password);
        if (uservalidation === true) {
            addUser(user, password);
        }
        else {
            alert('Please enter username and password');
        }
    });

});