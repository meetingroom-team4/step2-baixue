let zipcodeToBarcode = require('./goto-zipcode-to-barcode');

function mainPage() {
    return {
        text: `1.请将zipcode转换为barcode
2.请将barcode转换为zipcode
3.退出
请选择1～3：`,
        newMapping:{
            "1": zipcodeToBarcode
        }
    }
}

module.exports = mainPage;