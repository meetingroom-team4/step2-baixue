let zipcodeToBarcode = require('./zipcode-to-barcode');

function getZipToBar(zipcode) {
    let response = zipcodeToBarcode;
    return{
        text: 'please input zipcode:',
        newMapping:{
            '@': response
        }
    }
}

module.exports = getZipToBar;