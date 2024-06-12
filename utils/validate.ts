import { ALLOWED_ACTIONS } from ".";


const validateMyInput = (newInput: string, prevInput: string): boolean => {

    // console.log(newInput);

    const noAlphabetsRE = /^[0-9+\-x÷*\/.]*$/;
    if (!noAlphabetsRE.test(newInput)) {
        console.log('cant enter alphabets');

        return false;
    }


    const lastChar = prevInput.slice(-1);
    // console.log('hi', lastChar);


    // Check for consecutive operators
    if (ALLOWED_ACTIONS.includes(lastChar) && ALLOWED_ACTIONS.includes(newInput.slice(-1))) {
        console.log('cant enter consicutive operators');

        return false;
    }


    //the decimal point logic

    let splitBy = ALLOWED_ACTIONS.filter((str: string) => str != '.');
    // console.log(splitBy);

    let prefixArr: string[] = [];

    let prevIndex = -1;
    console.log('new input', newInput);

    for (let i = 0; i < newInput.length; i++) {

        let currChar = newInput[i];

        if (splitBy.includes(currChar)) {
            let temp = newInput.slice(prevIndex + 1, i);
            prevIndex = i;
            console.log(temp);
            prefixArr.push(temp);
        }
        // 1.2 + 12 * 13 / 1.4
        // [1.2, 12, 13 , 1.4]
    }

    prefixArr.push(newInput.slice(prevIndex + 1));

    /*
        10 + 12
    */
    console.log(prefixArr);

    for (let i = 0; i < prefixArr.length; i++) {
        let dotCount = 0;
        let element = prefixArr[i];

        for (let j = 0; j < element.length; j++) {
            if (element[j] == '.') { dotCount++; }
        }

        if (dotCount >= 2) { return false; }

    }


    return true;


}

export {
    validateMyInput
}