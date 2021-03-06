export const createLineEndAllInputsValidation = (charsToAdd) => {
    // Exact string is: )" "(
    const seperatorString = ")\" \"(";

    const charsToAddHasSep = charsToAdd.indexOf(seperatorString) !== -1;

    if (charsToAddHasSep === true) {
        // charsToAdd uses the seperator string in its parameter
        return { valid: false, error: "The use of the exact characters )\" \"( as an input is forbidden.\nAs a workaround, use more modules to get your intended result." };
    } else {
        return { valid: true, error: undefined };
    }

}