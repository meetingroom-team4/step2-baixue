function zipcodeToBarcode(zipcode) {
    if(zipcode === '12345'){
        return {
            text: 'zipcode-to-barcode'
        }
    }else {
        return {
            error: 'Please give right input'
        }
    }
}

module.exports = zipcodeToBarcode;