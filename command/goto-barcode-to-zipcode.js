let barcodeToZipcode = require('./barcode-to-zipcode');

function getBarToZip() {
    let response = barcodeToZipcode;
    return{
        text: 'please input barcode:',
        newMapping:{
            '@': response
        }
    }
}

module.exports = getBarToZip;