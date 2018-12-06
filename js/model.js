
/**
 *  In order to validate user and password are not to be empty
 * @param {*} user 
 * @param {*} password 
 */
function userValidate(user, password) {
    if (user.length == 0 || password.length == 0)
        return false;

    return true;
}

/**
 * Adds user selection list button on the header in index.html and
 * at the same time this function saves user and password
 * information to localStorage
 * @param {*} user 
 * @param {*} password 
 */
function addUser(user, password) {
    let option = document.createElement('option');
    option.value = user;
    option.text = user;

    $('#selection-user').append('<option value=${user}>${user}</option>');

    saveUser(user, password);
}