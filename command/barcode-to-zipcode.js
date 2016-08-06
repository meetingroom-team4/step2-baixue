function barcodeToZipcode(barcode) {
    if(barcode === '||:::'){
        return {
            text: 'barcode-to-zipcode'
        }
    }else {
        return {
            error: 'Please give right input'
        }
    }
}

module.exports = barcodeToZipcode;