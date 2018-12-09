


$(function () {

    getReadyTopic();

    getReadyUser();
    
    function getReadyTopic() {
        let topicArray = saveAndGetTopic(null);
    
            topicArray.forEach(newTopic => {
                $('.navigation').prepend(`<i>${newTopic}</i>`);
                $('#selectionCategory').append(`<option value=${newTopic}>${newTopic}</option>`);
            });
    }


function getReadyUser() {
    let userArray = saveAndGetUser(null,null);

        userArray.forEach(user => {
            $('#selection-user').append(`<option value=${user}>${user}</option>`);
        });
}
});