function performConversion() {
    const conversionType = document.getElementById('conversionType').value;
    const inputValue = parseFloat(document.getElementById('inputValue').value);
    let result;

    switch (conversionType) {
        case 'usdToEuro':
            result = inputValue * 1.41544; // USD to Euro conversion rate
            break;
        case 'euroToUsd':
            result = inputValue * 0.70641; // Euro to USD conversion rate
            break;
        case 'usdToMYR':
            result = inputValue * 4.2; // Example conversion rate for USD to MYR
            break;
        case 'myrToUsd':
            result = inputValue / 4.2; // Example conversion rate for MYR to USD
            break;
        case 'usdToSGD':
            result = inputValue * 1.36; // Example conversion rate for USD to SGD
            break;
        case 'sgdToUsd':
            result = inputValue / 1.36; // Example conversion rate for SGD to USD
            break;
        case 'idrToMYR':
            result = inputValue * 0.00027; // Example conversion rate for IDR to MYR
            break;
        case 'myrToIDR':
            result = inputValue / 0.00027; // Example conversion rate for MYR to IDR
            break;
        case 'thbToMYR':
            result = inputValue * 0.12; // Example conversion rate for THB to MYR
            break;
        case 'myrToTHB':
            result = inputValue / 0.12; // Example conversion rate for MYR to THB
            break;
    }

    document.getElementById('result').innerHTML = `Result: ${result.toFixed(2)}`;
}
