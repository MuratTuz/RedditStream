
/**
 *  In order to validate user and password are not to be empty
 * @param {*} user 
 * @param {*} password 
 */
function emptyValidate(...theArgs) {

    let result = theArgs.find ( (element) => element.length === 0);
    if (result == undefined)
        return true;

    return false;
}

/**
 * Adds user selection list button on the header in index.html and
 * at the same time this function saves user and password
 * information to localStorage
 * @param {*} user 
 * @param {*} password 
 */
function addUser(user, password) {

    $('#selection-user').append(`<option value=${user}>${user}</option>`);

    saveAndGetUser(user, password);
}

function getReadyUser() {
    let userArray = saveAndGetUser(null,null);

        userArray.forEach(user => {
            $('#selection-user').append(`<option value=${user}>${user}</option>`);
        });
}

function addTopic(newTopic) {
    $('.navigation').prepend (`<i>${newTopic}</i>`);
    $('#selectionCategory').append(`<option value=${newTopic}>${newTopic}</option>`);

    saveAndGetTopic(newTopic);
}

function getReadyTopic() {
    let topicArray = saveAndGetTopic(null);

        topicArray.forEach(newTopic => {
            $('.navigation').prepend(`<i>${newTopic}</i>`);
            $('#selectionCategory').append(`<option value=${newTopic}>${newTopic}</option>`);
        });
}