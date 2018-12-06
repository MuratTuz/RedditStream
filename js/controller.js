



$(function(){

    getReadyTopic();

    getReadyUser();

    /**
 * Eventlistener for New User button on the header of index.html
 * This function ensures username and password info correctly 
 * to be entered. However it adds the info to the localStorage and
 * SelectionUser button on the header in the index.html
 */
    $('#new-user-button').on('click', () => {
        let user = $('#username').val();
        let password = $('#password').val();

        let userValidation = emptyValidate(user, password);
        if (userValidation) {
            addUser(user, password);
        }
        else {
            alert('Please enter username and password');
        }

        $('#username').val("");
        $('#password').val("") 
    });


    $('#add-topic-button').on('click', () => {
        let newTopic = $('#add-topic-input').val();

        let topicValidation = emptyValidate(newTopic);
        if (topicValidation) {
            addTopic(newTopic);
        }
        else {
            alert('Please enter a topic name');
        }

        $('#add-topic-input').val("");

    });

});