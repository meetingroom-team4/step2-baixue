let mainPage = require('./command/goto-main-page');

let defultMapping = {
    '@': mainPage
};

let mapping = defultMapping;
function route(input) {
    let command = mapping['@'] || mapping[input];
    let response = command(input);
    if(response.error){
        return {
            text: response.error
        }
    }

    if (response.newMapping) {
        mapping = response.newMapping;
        return {
            text: response.text
        };
    }

    return{
        text: response.text
    }
}

module.exports = route;
