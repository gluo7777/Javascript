// comma separated numbers
function addCommas(number) {
    // \B prevents comma being added to beginning
    return String(number).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

let number = '123456789';
log(`${number} with commas = ${addCommas(number)}`);