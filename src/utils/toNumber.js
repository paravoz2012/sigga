export const toNumber = (value) => {
    if (isNaN(value)) {
        return value;
    }
    return +value;
};