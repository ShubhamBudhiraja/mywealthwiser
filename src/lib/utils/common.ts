export const formatPrice = (number: number | string | any, canBeDecimal = true) => {
    if (isNaN(number)) return number;
    const updatedPrice = new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        minimumFractionDigits: canBeDecimal ? 1 : 0,
        maximumFractionDigits: 2,
    }).format(number);
    return updatedPrice;
};
